"use client";

import Paragraph from "@/components/typography/Paragraph";
import { useRates } from "@/context/conversion-rates";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const currencyNameMap = {
  aud: "Australian Dollar",
  rwf: "Rwandan Franc",
  aed: "United Arab Emirates Dirham",
  usd: "United States Dollar",
  tzs: "Tanzanian Shilling",
  kes: "Kenyan Shilling",
  gbp: "British Pound",
  eur: "Euro",
  zar: "South African Rand",
  ugx: "Ugandan Shilling",
  cad: "Canadian Dollar",
  ghs: "Ghanian Cedis",
  ngn: "Nigerian Naira",
};

const SwapRatesSection = () => {
  const { rates, lastUpdatedAt } = useRates();

  return (
    <section className="py-24">
      <div className="content-container">
        <AppTextBody
          inverted
          title={<>We offer the best conversion rates for any currency swap</>}
          description={
            <div className="space-y-8">
              <Paragraph size="small">
                Get the most value for your money with our competitive and low
                exchange rates, for a seamless conversion experience!
              </Paragraph>

              <AppCta text="Convert now" />
            </div>
          }
        />

        <div className="bg-[#E9E9E9]/30 mt-10 md:mt-20 rounded-[40px] px-7 md:px-14 py-10 md:py-20">
          <p className="md:text-xl">
            <span className="font-semibold">Currency rates as at:</span>{" "}
            <br className="md:hidden" />
            <span className="text-[#4B4B4B]">{lastUpdatedAt}</span>
          </p>

          <div className="bg-white rounded-[20px] pt-5 md:pt-16 px-5 md:px-14 mt-5 md:mt-16 max-h-[400px] md:max-h-[628px] overflow-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr>
                  <th colSpan={3} className="font-bold md:text-xl">
                    Currency name
                  </th>
                  <th colSpan={2} className="font-bold md:text-xl">
                    Currency
                  </th>
                  <th colSpan={1} className="font-bold md:text-xl text-right">
                    Rate
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(rates).map(([symbol, rate]) => (
                  <tr key={symbol} className="h-16 md:h-14">
                    <td colSpan={3}>
                      <div className="flex items-center gap-4">
                        <div className="flex">
                          <div className="h-8 w-8 relative">
                            <Image
                              src={`/country-images/${symbol.toUpperCase()}.png`}
                              alt={symbol}
                              fill
                            />
                          </div>
                        </div>
                        <p className="text-[#4B4B4B] md:text-xl">
                          {
                            currencyNameMap[
                              symbol as keyof typeof currencyNameMap
                            ]
                          }
                        </p>
                      </div>
                    </td>

                    <td colSpan={2}>
                      <p className=" text-left md:text-xl uppercase text-[#4B4B4B]">
                        1 {symbol}
                      </p>
                    </td>
                    <td colSpan={1} className="text-right">
                      {rate.buy.toFixed(2)} USD
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapRatesSection;
