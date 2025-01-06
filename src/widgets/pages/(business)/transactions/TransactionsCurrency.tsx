import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const TransactionsCurrency = () => {
  return (
    <section id="transaction-currency" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col items-center gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center w-full max-w-[54rem]"
          >
            MULTIPLE WALLET ACROSS DIFFERENT CURRENCIES
          </Heading>
          <Paragraph size="small" className="mt-6 text-center xl:w-[450px]">
            When it matters to confidently move money for your business, you can
            bank on Platnova
          </Paragraph>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 relative xl:mt-[5.875rem]">
          <SuspenseImage
            src="/transactions/multiple-wallet.png"
            alt="transaction image"
            height={521}
            width={507}
            sizes="100%"
            className="w-full sm:w-3/4 md:h-[21rem] md:w-[21rem] xl:h-[32.56rem] xl:w-[32em]"
          />

          <SuspenseImage
            src="/transactions/happy-user.png"
            alt="card"
            height={521}
            width={660}
            sizes="100%"
            className="w-full sm:w-3/4 md:h-[21rem] md:w-[27.07rem] xl:h-[32.56rem] xl:w-[41.25rem]"
          />
        </div>
      </section>
    </section>
  );
};

export default TransactionsCurrency;
