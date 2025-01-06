import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";
import Image from "next/image";

const BusinessConvert = () => {
  return (
    <>
      <section className="w-full relative bg-pink_section_gradient flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-0 px-4 xl:px-[3.5rem] py-[3.5rem] lg:py-[9rem]">
        <div className="z-[2] flex-1 order-2 xl:order-1 max-w-[35rem] xl:w-auto flex flex-col md:items-center xl:items-start ">
          <Heading
            as="h2"
            className="uppercase md:text-center xl:text-start xl:w-[600px]"
          >
            GET PAID IN YOUR PREFERRED CURRENCY WITH EASE
          </Heading>
          <Paragraph
            size="small"
            className="mb-8 mt-[1.5rem] md:text-center xl:text-start xl:mb-[2.5rem] xl:w-[400px] w-[250px] leading-6 "
          >
            Supercharge your business with the best financial resource.
          </Paragraph>

          <GetStartedOutlineBtn toWaitList />
        </div>
        <div className="z-[2] w-full md:w-[60vw] lg:mr-10 lg:w-[36.875rem] lg:h-[37.5rem] max-w-[36.875rem] flex justify-center items-center bg-white p-6 rounded-3xl shadow-lg">
          <SuspenseImage
            src="/business/currencies.png"
            alt="convert"
            width={462}
            height={476}
            sizes="100%"
          />
        </div>
        <div className="absolute z-[0] -top-52 -left-52 -right-52 h-full rounded-b-full bg-[#F0F0F0] blur-[120px]"></div>
      </section>
      <Image
        src="/business/business-convert-svg.svg"
        alt="convert"
        width={1440}
        height={185}
        sizes="100%"
        className="w-full max-w-full lg:w-screen lg:max-w-screen"
      />
    </>
  );
};

export default BusinessConvert;
