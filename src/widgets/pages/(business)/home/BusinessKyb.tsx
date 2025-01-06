import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const BusinessKyb = () => {
  return (
    <section className="w-full bg-peach">
      <section className="flex flex-col md:items-center xl:flex-row xl:items-start gap-8 xl:gap-15 container-max-width px-4 xl:px-0 py-[3.5rem] lg:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex-1 bg-white_f0 rounded-2xl lg:rounded-[2.5rem] p-8 md:p-16 xl:p-32 order-2 xl:order-1 w-full flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col">
            <div className="order-2 lg:order-1 mt-20 lg:mt-0">
              <Heading
                as="h2"
                className="uppercase xl:text-start xl:w-[540px] w-[250px]"
              >
                MULTIPLE ACCOUNTS, ONE KYB
              </Heading>
              <Paragraph
                size="small"
                className="mb-8 mt-[1.5rem] xl:mb-[2.5rem] w-full max-w-[27.375rem] leading-6"
              >
                Streamline your business operations by managing multiple
                accounts with a single verification process.
              </Paragraph>
            </div>
            <SuspenseImage
              src="/business/kyb.png"
              alt="multiple accounts"
              width={584}
              height={237}
              className="order-1 lg:order-2 w-full md:w-10/12 xl:w-max"
            />
          </div>
          <GetStartedOutlineBtn className="self-start lg:self-end" toWaitList />
        </div>
      </section>
    </section>
  );
};

export default BusinessKyb;
