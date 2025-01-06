import AppCta from "@/widgets/app/cta";
import { ProcedureSteps } from "../otc/procedure-section";
import Paragraph from "@/components/typography/Paragraph";

const ITOtcSection = () => {
  return (
    <section className="bg-[#E9E9E9]/30">
      <div className="content-container py-16 md:py-32">
        <div className="flex flex-col md:backdrop:items-center gap-3 max-w-[635px] mx-auto md:text-center">
          <h3 className="page-section-header xl:leading-[58.09px]">
            Pay out money Over the Counter with ease
          </h3>
          <Paragraph size="small" className="font-medium opacity-70">
            Add large amounts securely and seamlessly
          </Paragraph>
          <div className="mt-3">
            <AppCta variant="white_bg" text="Try now" />
          </div>
        </div>

        <div className="xl:w-10/12 mx-auto mt-10 md:mt-20">
          <ProcedureSteps />
        </div>
      </div>
    </section>
  );
};

export default ITOtcSection;
