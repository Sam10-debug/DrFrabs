import Paragraph from "@/components/typography/Paragraph";
import { cn } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const currencies = [
  [
    {
      name: "Canadian Dollar",
      currency: "CAD",
    },
    {
      name: "US Dollar",
      currency: "USD",
    },
    {
      name: "Kenyan Shilling",
      currency: "KES",
    },
    {
      name: "Rwandan Franc",
      currency: "RWF",
    },
  ],
  [
    {
      name: "Tanzanian Shilling",
      currency: "TZS",
    },
    {
      name: "Ugandan Shilling",
      currency: "UGX",
    },
    {
      name: "British Pound",
      currency: "GBP",
    },
    {
      name: "Euro",
      currency: "EUR",
    },
  ],
  [
    {
      name: "Nigerian Naira",
      currency: "NGN",
    },
    {
      name: "South African Rand",
      currency: "ZAR",
    },
    {
      name: "Ghanian Cedi",
      currency: "GHS",
    },
    {
      name: "UAE Dirham",
      currency: "AED",
    },
  ],
  [
    {
      name: "Australian Dollar",
      currency: "AUD",
    },
  ],
];

const ITCurrencySection = () => {
  return (
    <section className="bg-white_f9">
      <div className="content-container py-16 md:py-32">
        <AppTextBody
          containerId="bills-section"
          title={
            <>
              160+ countries
              <br /> 13+ currencies
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small" className="font-medium max-w-[35rem]">
                From America to England, and anywhere in the world, send and
                receive money where, when, and how you like. With our rates, you
                have no issues with international transactions.
              </Paragraph>

              <div>
                <AppCta text="Send now" />
              </div>
            </div>
          }
        />

        <div className="md:space-y-8 mt-10">
          {currencies.map((c, index) => (
            <div
              key={`currency-group-${index}`}
              className={cn([
                "grid grid-cols-2 md:grid-cols-4 items-center justify-between md:h-[130px] px-6 md:px-10 xl:px-16 md:pt-0 pt-5 bg-white md:rounded-[40px] gap-5",
                index === 0 && "rounded-t-[40px] pt-10 md:pt-0",
                index === currencies.length - 1 &&
                  "rounded-b-[40px] pb-10 md:pb-0",
              ])}
            >
              {c.map(({ currency, name }) => (
                <>
                  <div
                    key={currency}
                    className="flex md:flex-row flex-col items-center justify-center md:justify-start md:gap-7 flex-1"
                  >
                    <div className="flex md:flex-row flex-col items-center gap-3 md:max-w-[165px] ">
                      <div className="flex">
                        <div className="relative w-9 h-9 rounded-full">
                          <Image
                            src={`/country-images/${currency}.png`}
                            alt={name}
                            fill
                          />
                        </div>
                      </div>

                      <div>
                        <p className="lg:text-base text-sm">{name}</p>
                      </div>
                    </div>
                  </div>
                  {index === currencies.length - 1 && (
                    <p className="text-sm opacity-70 md:text-left text-center">
                      and more
                    </p>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITCurrencySection;
