/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";

const checklist = [
  "Seamless card linking",
  "Quick processing",
  "Card control (funding and spending)",
];

const CardFeaturesSection = () => {
  return (
    <section className="bg-[#E9E9E9]/30 py-10 md:py-24">
      <div className="content-container">
        <AppTextBody
          inverted
          title={
            <>
              You are in <br /> control
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Anywhere you are, anywhere you go, enjoy the best experience
                with Platnova virtual card
              </Paragraph>

              <ul className="grid gap-4">
                {checklist.map((item, index) => (
                  <li
                    key={`checklist-${index}`}
                    className="flex items-center gap-3"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="24"
                        height="24"
                        fill="url(#pattern0_2244_2674)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_2244_2674"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_2244_2674"
                            transform="scale(0.0078125)"
                          />
                        </pattern>
                        <image
                          id="image0_2244_2674"
                          width="128"
                          height="128"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <AppCta text="Get started" />
              </div>
            </div>
          }
        />

        <div className="md:-mt-40 md:max-w-[50%] lg:max-w-[650px] ml-auto">
          <img
            src="/pay-for-subscriptions-with-platnova-card.png"
            alt="Pay for netflix, spotify or shop on amazon with platnova card"
          />
        </div>
      </div>
    </section>
  );
};

export default CardFeaturesSection;
