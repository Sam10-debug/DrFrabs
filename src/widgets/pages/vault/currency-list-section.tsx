import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import WorldMapSvg from "@/widgets/app/svg/world-map";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const supportedCurrencies = [
  "AED",
  "RWF",
  "TZS",
  "KES",
  "GBP",
  "USD",
  "EUR",
  "ZAR",
  "UGX",
  "CAD",
  "GHS",
  "AUD",
  "NGN",
];

export const SupportedCurrencies = () => {
  return (
    <div className="overflow-auto w-full">
      <div className="flex flex-wrap gap-4 md:max-w-[460px]">
        {supportedCurrencies.map((country) => (
          <div key={country} className="space-y-1">
            <div className="relative h-10 w-10 xl:h-14 xl:w-14">
              <Image
                src={`/country-images/${country}.png`}
                alt={country}
                layout="fill"
              />
            </div>
            <p className="text-center xl:text-base text-sm">{country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const VaultCurrencyList = () => {
  return (
    <section className="bg-[#E9E9E9]/30 py-10 md:py-24">
      <div className="content-container">
        <AppTextBody
          title="Save in your favorite currency"
          description={
            <div className="space-y-8">
              <Paragraph size="small">
                With our Vault system, you can save in different currencies and
                duration of choice - short, medium or long term.
              </Paragraph>

              <div>
                <AppCta text="Start now" />
              </div>
            </div>
          }
        />

        <div className="bg-white rounded-[40px] px-6 py-9 md:p-16 mt-20">
          <div className="grid md:grid-cols-2">
            <div className="space-y-6 xl:space-y-10">
              <p className="font-medium text-2xl md:text-3xl text-[#1E1E1E] md:leading-[41.6px]">
                Deposit across <br /> 20+ currencies.
              </p>
              <SupportedCurrencies />
            </div>

            <div>
              <WorldMapSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultCurrencyList;
