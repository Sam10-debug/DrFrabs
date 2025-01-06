import { isObjectEmpty } from "@/lib/utils";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

enum STORAGE_KEY {
  CONVERSION_RATES = "conversion-rates",
  LAST_UPDATED_AT = "last-updated-at",
}

interface RateResponse {
  currency: string;
  rates: {
    buy: number;
    sell: number;
  };
}

interface IFormatedRate {
  [key: string]: { buy: number; sell: number };
}

const RatesContext = createContext<{
  rates: IFormatedRate;
  loadingRates: boolean;
  error?: string;
  lastUpdatedAt?: string;
}>({
  rates: {},
  loadingRates: false,
  error: "",
  lastUpdatedAt: "",
});

const AddCurrRateSymbols = (rates: Record<string, any>) => {
  var addedRateSymbols: Record<string, any> = {};
  const currSymbols: Record<any, string> = {
    aed: "د.إ",
    aud: "A$",
    cad: "C$",
    eur: "€",
    gbp: "£",
    ghs: "GH₵",
    kes: "KSh",
    ngn: "₦",
    rwf: "FRw",
    tzs: "TSh",
    ugx: "USh",
    usd: "$",
    zar: "R",
  };
  const addCurrSymbol = (curr: any) => {
    addedRateSymbols = {
      ...addedRateSymbols,
      [curr]: {
        ...rates[curr],
        symbol: currSymbols[curr],
      },
    };
  };
  Object.keys(rates).forEach((curr) => {
    addCurrSymbol(curr);
  });
  return addedRateSymbols;
};

export const RatesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [rates, setRates] = useState<IFormatedRate>({});
  const [loadingRates, setLoadingRates] = useState(false);
  const [lastUpdatedAt, setLastUpdatedAt] = useState("");
  const [error, setError] = useState("");

  const handleFetchRates = useCallback(async () => {
    setLoadingRates(true);
    try {
      const response = await fetch(
        "https://engine.platnova.com/v1/configurations?name=exchange_rates",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      if (data?.data?.length < 1) {
        setError(
          "Unable to fetch rates at this moment, please try again later"
        );
        return;
      }

      const formattedRates = data.data?.[0]?.value.reduce(
        (acc: IFormatedRate, curr: RateResponse) => {
          acc[curr.currency] = curr.rates;

          return acc;
        },
        {}
      );
      setRates(AddCurrRateSymbols(formattedRates));
      localStorage.setItem(
        STORAGE_KEY.CONVERSION_RATES,
        JSON.stringify(formattedRates)
      );
      localStorage.setItem(
        STORAGE_KEY.LAST_UPDATED_AT,
        new Date().toISOString()
      );
    } catch (e) {
      setError("Unable to fetch rates at this moment, please try again later");
    }
    setLoadingRates(false);
  }, []);

  useEffect(() => {
    // Manual method to prevent rate calls on pages that dont need them
    if (!["/international-transfer", "/swap"].includes(pathname)) return;

    const rates = JSON.parse(
      localStorage.getItem(STORAGE_KEY.CONVERSION_RATES) || "{}"
    );

    // check when to revalidate rates -> current time is 30mins; UPDATE THIS if adjusted
    const lastUpdatedAt = dayjs(
      localStorage.getItem(STORAGE_KEY.LAST_UPDATED_AT) || new Date()
    );

    if (isObjectEmpty(rates) || dayjs().diff(lastUpdatedAt, "minutes") > 30) {
      handleFetchRates();
    } else {
      setRates(AddCurrRateSymbols(rates));
    }

    setLastUpdatedAt(lastUpdatedAt.format("D MMMM, YYYY"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <RatesContext.Provider
      value={{ rates, loadingRates, error, lastUpdatedAt }}
    >
      {children}
    </RatesContext.Provider>
  );
};

export const useRates = () => useContext(RatesContext);
