import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/icon";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";

const BusinessReview = () => {
  return (
    <section className="w-full flex justify-center relative h-[36rem] md:h-[45rem] lg:h-[54rem] overflow-hidden">
      <section className="relative z-[2] flex flex-col items-center w-full max-w-[34rem] px-4 py-[3.5rem] lg:py-[9rem] mx-auto">
        <Heading
          as="h2"
          className="uppercase text-center text-[1.375rem] xl:text-[2.5rem] "
        >
          hear what businesses are saying
        </Heading>
        <div className="">
          <Paragraph
            size="small"
            className="mb-6 xl:mt-[1.5rem] text-center w-full max-w-[27.375rem]"
          >
            Managing my business has been much more easier with Platnova
            business. More control over my business. I would definitely
            recommend for any business owner.
          </Paragraph>
          <Heading as="h3" className="mb-8 text-sm xl:text-2xl text-center">
            CEO, Planova Solutions
          </Heading>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/business/avatar.png"
            alt="avatar-img"
            width={147}
            height={129}
            sizes="100%"
            className="w-[4.625rem] h-[4rem] xl:w-[9rem] xl:h-[8rem] rounded-[2.rem]"
          />
          <div className="flex items-center gap-2 mt-5 xl:mt-10">
            <button className="h-8 w-8 xl:h-12 xl:w-12 rounded-full bg-[#B9B9B9] text-white grid place-content-center ">
              <ArrowLeftIcon />
            </button>
            <button className="h-8 w-8 xl:h-12 xl:w-12 rounded-full bg-black text-white grid place-content-center ">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>
      <Image
        src="/business/arr-1.png"
        alt="convert"
        width={514}
        height={689}
        sizes="100%"
        className="absolute bottom-0 right-[-6rem] w-[11rem] h-[16rem] xl:w-[32rem] xl:h-[32rem]"
      />
      <Image
        src="/business/arr-2.png"
        alt="convert"
        width={514}
        height={689}
        sizes="100%"
        className="absolute top-0 left-[-6rem] xl:left-0 w-[11rem] h-[16rem] xl:w-[32rem] xl:h-[32rem]"
      />
    </section>
  );
};

export default BusinessReview;
