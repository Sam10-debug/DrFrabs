import { ArrowTopRightIcon } from "@/components/icons/icon";
import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import SuspenseImage from "@/components/ui/SuspenseImage";
import { WAIT } from "@/constants/links";
import Link from "next/link";

const PaymentHero = () => {
  return (
    <section
      id="payment-hero"
      className="bg-white_f0 w-full relative container-max-width px-4 py-[3.5rem] lg:py-[10rem] mx-auto flex flex-col gap-12 xl:gap-3 lg:flex-row items-center xl:items-start justify-between"
    >
      <div className="w-full max-w-[40rem] flex-1 shrink-0 lg:mt-16 order-2 lg:order-1 relative z-[3] flex flex-col md:items-center xl:items-start">
        <Heading className="font-extrabold text-[2.5rem] xl:text-[5.5rem] text-grey_500 uppercase md:text-center xl:text-start leading-none max-w-[65rem]">
          accept <br /> payment <LineBreak showIn="lg" /> via{" "}
          <span className="block xl:inline">links </span>
        </Heading>
        <Paragraph
          size="small"
          className="mt-6 xl:mt-8 mb-[2rem] xl:mb-8 md:text-center xl:text-start text-grey_500 w-full max-w-[35rem]"
        >
          Create payment links for your business and get paid across different
          currencies
        </Paragraph>
        <Button
          asChild
          className="text-white w-fit xl:hidden flex items-center gap-[10px] px-9 py-3"
        >
          <Link href={WAIT} target="_blank">
            Get Started <ArrowTopRightIcon height={10} width={10} />
          </Link>
        </Button>
      </div>
      <div className="order-1 sm:w-10/12 md:w-1/2 xl:w-max xl:mt-20 xl:mb-0 relative">
        <SuspenseImage
          src="/payment/hero-1.png"
          alt="payment img"
          width={511}
          height={542}
          className="w-full xl:w-max max-w-[31.94rem] z-[3] relative"
        />
        <SuspenseImage
          src="/payment/payment-successful.png"
          alt="payment successful img"
          width={378}
          height={96}
          className="w-[14.125rem] xl:w-max shrink-0 z-[3] bottom-[-8%] left-[unset] right-[3%] xl:right-[unset] xl:left-[-25%] xl:bottom-[20%] absolute"
        />
      </div>
    </section>
  );
};

export default PaymentHero;
