import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import Image from "next/image";

const TutionHomeSection = () => {
  return (
    <section>
      <div className="py-10 md:py-24 content-container">
        <h1 className="md:text-center page-title">tuition payment</h1>
        <div className="md:flex justify-between mt-5 md:mt-20 space-y-10 md:space-y-0">
          <div className="max-w-[229px] space-y-3 md:pt-10">
            <Paragraph size="small">
              Pay tuition fees effortlessly, anytime, anywhere securely and
              without extra fees.
            </Paragraph>

            <AppCta text="Try now" />
          </div>

          <div className="relative max-w-[590px] w-full md:w-1/2 aspect-[1.2/1]">
            <Image
              src="/man-making-tuition-payments.png"
              alt="tuition payments with platnova"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutionHomeSection;
