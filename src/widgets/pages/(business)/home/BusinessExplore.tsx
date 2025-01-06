import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";
import Image from "next/image";

const BusinessExplore = () => {
  return (
    <section className="flex flex-col md:items-center gap-10 xl:gap-0 container-max-width px-4 xl:px-0 py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
      <div className="flex-1 order-2 xl:order-1 w-10/12 xl:w-full flex flex-col items-center">
        <Heading as="h2" className="uppercase lg:text-center">
          explore multiple payment options
        </Heading>
        <Paragraph
          size="small"
          className="mb-8 mt-[1.5rem] leading-snug xl:mb-[2.5rem] lg:text-center"
        >
          Discover different way to send and receive money{" "}
          <LineBreak showIn="xl" /> seamlessly
        </Paragraph>

        <GetStartedOutlineBtn
          className="self-start lg:self-center"
          toWaitList
        />
      </div>
      <div className="lg:mt-12 mb-6 xl:order-2 bg-black_gradient p-5 rounded-xl w-full h-max flex flex-col items-center gap-8 lg:flex-row lg:w-max xl:w-[62.75rem]">
        <SuspenseImage
          src="/business/multiple-payments.png"
          alt="explore multiple payments"
          width={634}
          height={526}
          sizes="100%"
          className="w-full md:w-max"
        />
        <Paragraph className="self-start lg:self-center text-xl lg:text-2xl xl:text-3xl text-white max-w-[16.563rem] lg:max-w-[21.125rem]">
          Multiple channel to easily receive payments. Keeps you always
          connected
        </Paragraph>
      </div>
    </section>
  );
};

export default BusinessExplore;
