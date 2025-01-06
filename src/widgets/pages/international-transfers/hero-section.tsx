import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppRateCalculator from "@/widgets/app/rate-calculator";
import WorldMapSvg from "@/widgets/app/svg/world-map";

const ITHomeSection = () => {
  return (
    <section
      id="int-transfer-hero"
      className="bg-white relative py-14 md:py-24 md:overflow-hidden"
    >
      <div className="absolute h-full flex items-center lg:-right-[29%] -bottom-[42%] md:bottom-auto md:top-24 w-full lg:w-9/12 ml-auto justify-end z-10">
        <WorldMapSvg bgFill="lg:fill-[#E8E8E8]/40" />
      </div>

      <div className="w-11/12 mx-auto xl:content-container grid lg:grid-cols-[1fr_max-content] gap-8 relative z-20">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-lg text-gray-500">International Transfers</p>
            <h1 className="text-3xl md:text-7xl font-extrabold xl:text-7xl uppercase">
              Send to <br />
              anyone,
              <br /> anywhere,
              <br /> anytime
            </h1>
            <Paragraph size="small">
              Join 50+ thousand customers across the globe and save on global
              transfers. Send money quickly in 25+ currencies to 80+ countries.{" "}
            </Paragraph>
          </div>

          <AppCta text="Get started now" />
        </div>

        <div className="flex justify-center">
          <AppRateCalculator />
        </div>
      </div>
    </section>
  );
};

export default ITHomeSection;
