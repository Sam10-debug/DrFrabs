import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import Image from "next/image";

const LifestyleHeroSection = () => {
  return (
    <section>
      <div className="content-container pt-10 lg:pt-24">
        <h1 className="md:text-center page-title">
          EXPERIENCE A NEW
          <br className="hidden md:block" /> WAY OF LIFE
        </h1>

        <div className="flex md:flex-row flex-col gap-8 justify-between mt-5 md:mt-16 flex-[max-content_1fr]">
          <div className="md:max-w-[284px] space-y-7 md:pt-10 ">
            <Paragraph size="small">
              Enjoy the lifestyle you deserve. From booking flights in minutes,
              to booking amazing stays, getting affordable restaurants, and
              exploring other things to do, you can start living your best life
              with Platnova.
            </Paragraph>

            <AppCta text="Try now" />
          </div>

          <div className="lg:pr-20 w-full">
            <div className="aspect-square relative w-full md:w-9/12 xl:w-9/12   ml-auto">
              <Image src="/lifestyle.png" alt="Platnova vault" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleHeroSection;
