"use client";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRates } from "@/context/conversion-rates";
import { cn } from "@/lib/utils";
import AppSpinner from "./spinner";
import Link from "next/link";

interface IAmountInputProps {
  label: string;
  rates: Record<string, any>;
  currency: string;
  resetVal: () => void;
  selectCurrency: (val: string) => void;
  value: string;
  setValue: (val: string) => void;
  currencies: string[];
}

const formatNumber = (number: string) => {
  const splittedValue = number.split(".");

  return `${splittedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${
    typeof splittedValue[1] === "string" ? "." : ""
  }${splittedValue[1] ? `${splittedValue[1]}` : ""}`;
};

const AmountInput: React.FC<IAmountInputProps> = ({
  currency,
  selectCurrency,
  resetVal,
  label,
  rates,
  value,
  setValue,
  currencies,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const cleanedValue = value.replace(/,/g, "");

      if (!/^\d*\.?\d*$/.test(cleanedValue)) return;

      // Format the cleaned value with commas
      const formattedValue = formatNumber(cleanedValue);
      setValue(formattedValue);
    },
    [setValue]
  );

  // Reset values for both "From" and "To" if one of them becomes ""
  if (value === "") resetVal();

  return (
    <div className="space-y-1.5">
      <label className="text-sm text-[#1E1E1E">{label}</label>

      <div
        className={`flex items-center justify-between flex-[1_1_max-content] ${
          value.length > 0 ? "font-bold" : "font-normal"
        } h-14 rounded-[10px] border-[1.5px] border-[#B9B9B9] px-3 md:px-5`}
      >
        <div className="flex items-center">
          {value.length > 0 && (
            <span className="mr-1">{rates[currency].symbol}</span>
          )}
          <Input
            placeholder="0.00"
            className="border-0 focus-visible:ring-0 shadow-none pl-0 text-base md:text-lg outline-none"
            value={value}
            onChange={handleChange}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="flex items-center justify-between gap-1.5 md:gap-3">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-6 h-6 relative">
                  <Image
                    src={`/country-images/${currency.toUpperCase()}.png`}
                    alt={currency}
                    fill
                  />
                </div>
                <p className="md:text-base text-sm font-bold">
                  {currency.toUpperCase()}
                </p>
              </div>

              <div>
                <CaretDownIcon className="w-6 h-6" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-[200px] overflow-auto">
            {/* <DropdownMenuLabel>Select Curr  */}
            <DropdownMenuRadioGroup
              value={currency}
              onValueChange={selectCurrency}
            >
              {currencies
                .filter((c) => c !== currency)
                .map((item) => (
                  <DropdownMenuRadioItem
                    key={item}
                    className="flex justify-evenly"
                    value={item}
                  >
                    <Image
                      src={`/country-images/${item.toUpperCase()}.png`}
                      alt={currency}
                      width={201}
                      height={201}
                      className="w-5"
                    />
                    {item.toUpperCase()}
                  </DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const ConversionDescriptor: React.FC<{
  figure: string;
  desc: string | React.ReactNode;
  symbol: string | React.ReactNode;
}> = ({ figure, desc, symbol }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="h-4 w-4 flex items-center justify-center bg-[#E9E9E9] rounded-full">
          <p className="text-xs">{symbol}</p>
        </div>

        <p className="text-sm font-semibold text-[#1E1E1E] uppercase">
          {figure}
        </p>
      </div>

      <div className="text-sm font-mediumtext-[#4B4B4B]">{desc}</div>
    </div>
  );
};

const AppRateCalculator = ({ isConversion }: { isConversion?: boolean }) => {
  const { rates, loadingRates, error } = useRates();
  const [fromVal, setFromVal] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toVal, setToVal] = useState<string>("");
  const [toCurrency, setToCurrency] = useState("eur");

  const availableCurrencies = useMemo(() => Object.keys(rates || {}), [rates]);

  const formatVal = useCallback((val: string) => {
    return parseFloat(val.replace(/,(?=\d)/g, "") || "0");
  }, []);

  const FLAT_FEE = useMemo(() => (fromVal ? 2 : 0), [fromVal]);

  // from currency
  const buyRate = useMemo(() => {
    if (!rates?.[fromCurrency] || !rates?.[toCurrency]) return 0;

    if (rates?.[fromCurrency] == rates?.[toCurrency]) {
      return rates[toCurrency].buy / rates[fromCurrency].buy;
    }

    return parseFloat(
      (rates[toCurrency].buy / rates[fromCurrency].sell).toFixed(5)
    );
  }, [fromCurrency, toCurrency, rates]);

  // to currency
  const sellRate = useMemo(() => {
    if (!rates?.[fromCurrency] || !rates?.[toCurrency]) return 0;

    if (rates?.[fromCurrency] == rates?.[toCurrency]) {
      return rates[toCurrency].buy / rates[fromCurrency].buy;
    }

    return parseFloat(
      (rates[fromCurrency].sell / rates[toCurrency].buy).toFixed(5)
    );
  }, [fromCurrency, toCurrency, rates]);

  const resolvedRate = parseFloat(
    (buyRate > sellRate ? 1 / sellRate : 1 / buyRate).toFixed(5)
  );
  const resolvedLowerCurr = buyRate > sellRate ? toCurrency : fromCurrency;

  const transactionDetails = useMemo(
    () => [
      {
        symbol: (
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.91536 0.670996L5.32787 0.0834961L2.9987 2.41266L0.669531 0.0834961L0.0820312 0.670996L2.4112 3.00016L0.0820312 5.32933L0.669531 5.91683L2.9987 3.58766L5.32787 5.91683L5.91536 5.32933L3.5862 3.00016L5.91536 0.670996Z"
              fill="#4B4B4B"
            />
          </svg>
        ),
        figure: `${resolvedLowerCurr} ${resolvedRate}`,
        desc: "Exchange rate",
      },
    ],
    [buyRate, toCurrency]
  );

  const handleFromUpdate = useCallback(
    (val: string) => {
      const amount = formatVal(val);

      setToVal(formatNumber((buyRate * amount).toFixed(2)));
      setFromVal(val);
    },
    [buyRate, formatVal]
  );

  const handleToUpdate = useCallback(
    (val: string) => {
      const amount = formatVal(val);

      setFromVal(formatNumber((sellRate * amount).toFixed(2)));
      setToVal(val);
    },
    [sellRate, formatVal]
  );
  const handleResetVal = () => {
    setFromVal("");
    setToVal("");
  };

  useEffect(() => {
    handleResetVal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency, toCurrency]);

  return (
    <div
      className={cn([
        "bg-white w-full md:w-[439px] max-h-[28.9rem] px-5 py-8 md:p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.05)] rounded-[20px] relative",
      ])}
    >
      {loadingRates ? (
        <div className="absolute h-full w-full top-0 left-0 flex flex-col gap-3 items-center justify-center bg-white/90 rounded-[20px]">
          <div className="w-10">
            <AppSpinner stroke="var(--brand)" />
          </div>
          <p className="font-medium">Loading Rates</p>
        </div>
      ) : null}
      <AmountInput
        label="You send"
        resetVal={handleResetVal}
        rates={rates}
        value={fromVal}
        setValue={handleFromUpdate}
        currency={fromCurrency}
        selectCurrency={setFromCurrency}
        currencies={availableCurrencies}
      />

      <div className="my-5 space-y-2">
        {!!error ? (
          <p className="text-red-600">{error || "An error occurred"}</p>
        ) : (
          transactionDetails.map((details, index) => (
            <ConversionDescriptor key={`descriptor-${index}`} {...details} />
          ))
        )}

        <div>
          <hr className="w-full mt-4" />
        </div>
      </div>

      <AmountInput
        label="You receive"
        rates={rates}
        resetVal={handleResetVal}
        value={toVal}
        setValue={handleToUpdate}
        currency={toCurrency}
        selectCurrency={setToCurrency}
        currencies={availableCurrencies}
      />

      <div className="my-6 space-y-5 w-full">
        <p className="text-sm font-medium text-[#4B4B4B] leading-[16.94px]">
          {isConversion
            ? "Kindly note that conversion rate varies base on exchange range."
            : " Heads up, intermediary banks may charge additional fees to the recipient for this transfer."}
        </p>
        <div className="flex w-full">
          <Link className="block flex-1" href="/download">
            <Button
              disabled={!buyRate || !!error}
              variant="brand"
              size="lg"
              customWidth
              className="w-full h-14 text-base font-bold rounded-[10px]"
              elevated
            >
              {isConversion ? "Convert now" : "Send money"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppRateCalculator;
