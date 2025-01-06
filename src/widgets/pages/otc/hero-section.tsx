/* eslint-disable @next/next/no-img-element */

import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import Image from "next/image";

const points = ["Hassle Free", "Secured", "100% Reliable "];

const OtcHeroSection = () => {
  return (
    <main className="w-full">
      <section id="otc-hero" className="bg-white">
        <div className="content-container pt-10 lg:pt-24">
          <div>
            <h1 className="md:text-center page-title">Quick Deposits OTC</h1>
            <div className="relative flex flex-col mt-4 md:mt-10 ">
              <div className="md:absolute md:flex justify-between md:top-24 h-[60%] w-full">
                <div>
                  <Paragraph size="small" className="max-w-[226px]">
                    Conveniently carry out huge transactions at your
                    convenience.
                  </Paragraph>
                </div>

                <div className="self-end text-right ml-auto max-w-[227px] space-y-8 mt-3 md:mt-0">
                  <div className="space-y-3">
                    <h2 className="text-lg lg:text-2xl font-medium uppercase">
                      Designed to make your life easier
                    </h2>
                    <ul className="lg:text-base text-sm space-y-2">
                      {points.map((point) => (
                        <li
                          key={point}
                          className="grid grid-cols-[max-content_auto] items-center justify-end gap-2 ml-auto"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.3738 1.05469L7.12617 11.9285L2.25 7.05586L0 9.30586L7.49883 16.8047L18 3.30469L15.3738 1.05469Z"
                              fill="#109E07"
                            />
                          </svg>
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <AppCta text="Try Now" />
                  </div>
                </div>
              </div>
              <div className="md:w-7/12 xl:w-1/2 mx-auto mt-12 lg:mt-0">
                <img
                  src="/businessman-looking-smartphone.png"
                  alt="Platnova OTC"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OtcHeroSection;
