import Paragraph from "@/components/typography/Paragraph";
import { imageBlur } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const HomeTuitionSection = () => {
  return (
    <section id="tuition-section" className="py-24">
      <div className="content-container">
        <AppTextBody
          containerId="tuition-section"
          title={
            <>
              TUITION PAYMENT <br /> MADE EASY{" "}
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Pay your tuition fee, accommodation and other bills in any
                country with no extra fees.
              </Paragraph>

              <div>
                <AppCta text="Pay your tuition" link="/tuition" />
              </div>
            </div>
          }
        />

        <div className="aspect-video mt-20 relative max-h-[350px] lg:max-h-[450px] xl:max-h-[538px] w-full p-fade">
          <Image
            src="/students.png"
            alt="students"
            fill
            sizes="(max-width: 640px) 60vw, 30vw"
            {...imageBlur}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTuitionSection;
