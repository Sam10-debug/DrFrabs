import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";
import Image from "next/image";

const TransactionPayment = () => {
  return (
    <section
      id="transaction-payment"
      className="bg-white_f0 container-max-width flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-0 px-4 xl:px-0 py-[3rem] lg:py-[9rem] lg:w-10/12 mx-auto"
    >
      <SuspenseImage
        src="/transactions/desktop-payment.png"
        alt="transaction img"
        width={528}
        height={539}
        sizes="100%"
        className="block w-[21rem] xl:w-[33rem] h-[21rem] xl:h-[33.687rem] order-1 xl:order-1 max-w-[528px]"
      />
      <div className="flex-1 order-2 xl:order-1 xl:w-max flex flex-col md:items-center xl:items-start xl:pl-16">
        <Heading
          as="h2"
          className="uppercase md:text-center xl:text-start w-[90%] lg:w-full"
        >
          SEND AND RECEIVE PAYMENT ACROSS DIFFERENT CURRENCIES
        </Heading>
        <Paragraph
          size="small"
          className="mb-8 mt-[1.5rem] md:text-center xl:text-start xl:mb-[2.5rem] xl:w-[400px] w-[300px]"
        >
          Transfer on Platnova means the days of &quot;have you received
          it?&quot; are over.
        </Paragraph>

        <GetStartedOutlineBtn toWaitList />
      </div>
    </section>
  );
};

export default TransactionPayment;
