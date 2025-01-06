import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const TuitionInstituitionSection = () => {
  return (
    <section>
      <div className="content-container py-24">
        <AppTextBody
          title={
            <>
              available to over <br /> 160+ institutions
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Platnova app has direct integration to major schools across the
                world. It&apos;s as easy as selecting the country of choice and
                searching for your university.
              </Paragraph>

              <AppCta text="Try now" />
            </div>
          }
        />

        <div className="grid md:grid-cols-2 gap-6 md:h-[350px] lg:h-[420px] xl:h-[502px] mt-16">
          <div className="relative md:h-full h-[287px]">
            <Image src="/tuition-payment.png" alt="College" layout="fill" />
          </div>
          <div className="relative md:h-full h-[287px]">
            <Image src="/student-bills.png" alt="College" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionInstituitionSection;
