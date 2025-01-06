import Paragraph from "@/components/typography/Paragraph";
import AppRateCalculator from "@/widgets/app/rate-calculator";

const SwapHeroSection = () => {
  return (
    <section>
      <div
        id="swap-hero"
        className="w-11/12 mx-auto xl:content-container bg-white py-16 md:py-32 grid gap-6 lg:grid-cols-2"
      >
        <div className="md:mt-24 space-y-8">
          <h1 className="page-title">
            Currency
            <br className="lg:block hidden" /> Swaps
            <br /> made Easy
          </h1>
          <Paragraph
            size="small"
            className="mt-5 opacity-80 md:text-base text-sm"
          >
            Seamlessly exchange your money from one currency to another.
            It&apos;s easy, fast and convenient.
          </Paragraph>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute aspect-square top-1/4 rounded-full w-9/12 lg:w-11/12 bg-[#F9F9F9]/80"></div>
          <div className="relative z-10">
            <AppRateCalculator isConversion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapHeroSection;
