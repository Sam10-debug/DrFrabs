/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const TuitionAllowancesSection = () => {
  return (
    <section>
      <div className="content-container py-24">
        <AppTextBody
          title={
            <>
              send allowances
              <br /> to anyone
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Sending money across to your family and friends without hassles
                wherever they may be in the world. It is easy with Platnova app.
              </Paragraph>

              <AppCta text="Try now" />
            </div>
          }
        />

        <div className="aspect-square max-w-[558px] relative md:w-1/2 md:-mt-10 mt-10">
          <Image
            src="/woman-reading.png"
            alt="woman reading a book"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default TuitionAllowancesSection;
