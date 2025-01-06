import Heading from "@/components/typography/Heading";
import SuspenseImage from "@/components/ui/SuspenseImage";

const PaymentSetting = () => {
  return (
    <section id="payment-setting" className="w-full bg-white_f0">
      <section className="container-max-width flex flex-col items-center gap-2 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center xl:w-full xl:max-w-[42rem] w-[330px]"
          >
            setting up a payment link is easy
          </Heading>
        </div>

        <div className="w-full bg-white rounded-2xl max-w-[78rem] flex flex-col-reverse items-center justify-center lg:items-start lg:flex-row gap-[1.875rem] xl:gap-[4rem] lg:mt-[3.75rem]">
          <SuspenseImage
            src="/payment/receive.png"
            alt="payment receive"
            width={655}
            height={596}
            className="w-full rounded-lg md:rounded-none md:w-[25rem] xl:w-[40.9375rem] max-w-[40.9375rem] shrink-0 relative"
          />
        </div>
      </section>
    </section>
  );
};

export default PaymentSetting;
