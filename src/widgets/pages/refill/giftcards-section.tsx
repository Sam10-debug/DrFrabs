/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";

const RefillGiftcardsSection = () => {
  return (
    <>
      <div className="bg-[#E9E9E9]/30">
        <svg
          width="100%"
          viewBox="0 0 1440 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M215.47 59.6613H0V0H1440V185L417.703 185C403.905 185 390.528 180.244 379.827 171.534L325.113 127L244.688 69.0862C236.178 62.9584 225.956 59.6613 215.47 59.6613Z"
            className="fill-white"
          />
        </svg>
      </div>
      <section className="bg-[#E9E9E9]/30 py-14">
        <div className="content-container">
          <AppTextBody
            inverted
            title={
              <>
                Buy and send <br /> Giftcards to <br /> friends and family
              </>
            }
            description={
              <div className="space-y-10">
                <Paragraph size="small">
                  Get the perfect gift for your loved ones. Select from our wide
                  range of giftcards at the best rates only.
                </Paragraph>

                <div>
                  <AppCta text="Get started" />
                </div>
              </div>
            }
          />

          <div className="mt-14 bg-[#F0F0F0] rounded-[40px]">
            <div className="md:h-24 h-10" />
            <div className="grid md:grid-cols-2 w-10/12 mx-auto gap-5 md:gap-16">
              <div data-scroll data-scroll-speed="2">
                <img
                  src="/giftcards.png"
                  alt="playstation giftcard, apple giftcard"
                />
                <div className="h-12"></div>
              </div>
              <div>
                <img
                  src="/giftcard.png"
                  alt="playstation giftcard, apple giftcard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefillGiftcardsSection;
