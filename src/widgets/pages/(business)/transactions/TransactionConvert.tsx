import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const TransactionConvert = () => {
  return (
    <section
      id="transaction-convert"
      className="container-max-width flex flex-col xl:flex-row items-center justify-center gap-10 lg:gap-24 px-4 xl:px-0 py-[3.5rem] lg:py-[9rem] lg:w-10/12 mx-auto"
    >
      <SuspenseImage
        src="/transactions/convert.png"
        alt="transaction img"
        width={468}
        height={530}
        className="w-full max-w-[468px] sm:w-10/12 md:w-8/12 lg:w-max"
      />
      <div className="flex-1 max-w-[35rem] xl:w-full flex flex-col md:items-center xl:items-start ">
        <Heading
          as="h2"
          className="uppercase md:text-center xl:text-start w-[90%]"
        >
          CONVERT BETWEEN DIFFERENT CURRENCIES
        </Heading>
        <Paragraph
          size="small"
          className="mb-8 mt-[1.5rem] md:text-center xl:text-start xl:mb-[2.5rem] xl:w-[400px] leading-6"
        >
          With Platnova, not only can you accept payments but converting is also
          easy
        </Paragraph>

        <GetStartedOutlineBtn toWaitList />
      </div>
    </section>
  );
};

export default TransactionConvert;
