import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import AppCta from "@/widgets/app/cta";
/* eslint-disable @next/next/no-img-element */

const RefillHeroSection = () => {
  return (
    <section>
      <div className="pt-5 md:pt-16 content-container">
        <h1 className="md:text-center text-5xl md:text-[64px] lg:text-[84px] text-[#030303] uppercase font-bold md:font-extrabold">
          Refill & Top-ups
        </h1>

        <div className="flex justify-between md:flex-row flex-col-reverse mt-7 md:mt-16 gap-10">
          <div className="space-y-5 md:w-auto w-9/12 max-w-[340px] md:mt-20">
            <Paragraph size="small" data-scroll data-scroll-speed="2">
              Enjoy seamless and secured transactions anywhere, anytime.
            </Paragraph>
            <AppCta text="Get started" />
          </div>

          <div
            className="max-w-[400px] xl:max-w-[627px]"
            data-scroll
            data-scroll-speed="1"
          >
            <div className="bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.085)] w-full rounded-[34px] py-5 md:py-10">
              <img
                src="/giftcard-screen.png"
                alt=""
                className="w-8/12 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefillHeroSection;
