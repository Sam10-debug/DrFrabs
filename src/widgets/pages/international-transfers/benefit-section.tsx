import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const ITBenefitSection = () => {
  return (
    <section className="bg-white">
      <div className="content-container py-16 md:py-32">
        <AppTextBody
          inverted
          containerId="bills-section"
          title={
            <>
              DISTANCE IS NOT A<br /> BARRIER
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small" className="font-medium max-w-[32.5rem]">
                College kid travelling or living abroad? When they inevitably
                ask for money, get some peace of mind that you can send it their
                way quickly and securely.
              </Paragraph>

              <div>
                <AppCta text="Get started" />
              </div>
            </div>
          }
        />

        <div className="aspect-[1.2/1] relative max-w-[590px] ml-auto mt-10">
          <Image src="/man-texting.png" alt="platnova" fill />
        </div>
      </div>
    </section>
  );
};

export default ITBenefitSection;
