import { ArrowTopRightIcon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import SuspenseImage from "@/components/ui/SuspenseImage";
import { WAIT } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

const BusinessTransactionHero = () => {
  return (
    <section
      id="transaction-hero"
      className="bg-white_f0 w-full relative container-max-width px-4 py-[3.5rem] lg:py-[10rem] mx-auto flex flex-col gap-12 xl:gap-3 xl:flex-row items-center xl:items-start justify-between"
    >
      <div className="w-full max-w-[40rem] flex-1 shrink-0 lg:mt-16 order-2 xl:order-1 relative z-[3] flex flex-col md:items-center xl:items-start">
        <h1 className="font-extrabold text-[2.5rem] xl:text-[5.5rem] text-grey_500 uppercase md:text-center xl:text-start leading-none max-w-[65rem]">
          TRANSACTIONS <br /> BEYOND <br /> BORDER
        </h1>
        <p className=" mt-6 xl:mt-8 mb-[2rem] xl:mb-8 text-sm xl:text-2xl md:text-center xl:text-start text-grey_500 w-full max-w-[35rem]">
          Supercharge your business with the best financial resource
        </p>
        <Button className="flex items-center gap-4 text-white px-9" asChild>
          <Link href={WAIT} target="_blank">
            Get Started <ArrowTopRightIcon height={10} width={10} />
          </Link>
        </Button>
      </div>
      <div className="shrink-0 order-1 xl:pt-48 xl:ml-[-8rem]">
        <SuspenseImage
          src="/transactions/transaction.png"
          alt="business img"
          width={614}
          height={512}
          className="w-[20rem] h-[18.25rem] xl:w-[38rem] xl:h-[32rem] shrink-0 z-[3] relative"
          sizes="100%"
        />
      </div>
    </section>
  );
};

export default BusinessTransactionHero;
