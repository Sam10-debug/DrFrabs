import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";
import Image from "next/image";

const SetPayment = () => {
  return (
    <section id="set-payment" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col justify-between gap-8 xl:gap-16 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="w-full flex flex-col gap-4 lg:gap-8 md:flex-row lg:justify-between">
          <div className="flex mt-4 lg:mt-0 flex-col order-2 md:order-1 gap-3">
            <Heading
              as="h2"
              className="uppercase text-primary_black font-extrabold w-full max-w-[54rem]"
            >
              schedule payment
              <LineBreak /> anytime
            </Heading>
            <Paragraph
              size="small"
              className="mt-2 lg:mt-6 text-primary_black w-full max-w-[26.5rem]"
            >
              {`
              Schedule future recurring payments once and for all. You don't
              have to make that payment every single time, just schedule it and
              relax.`}
            </Paragraph>
          </div>
          <SuspenseImage
            src="/business/payment-schedule.png"
            alt="payment schedule"
            width={590}
            height={488}
            sizes="100%"
            className="w-full md:w-[60%] order-1 md:order-2 lg:mt-10 xl:w-[36.875rem] max-w-[36.875rem]"
          />
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-16 md:flex-row lg:justify-start">
          <div className="flex mt-4 lg:mt-0 flex-col order-2 gap-3">
            <Heading
              as="h2"
              className="uppercase text-primary_black font-extrabold w-full max-w-[54rem]"
            >
              Set payment
              <LineBreak /> reminders
            </Heading>
            <Paragraph size="small" className="mt-2 lg:mt-6 text-primary_black leading-snug w-full max-w-[26.5rem]">
              The best payment reminder timeline and templates to use for your
              business and ensure timely payments from your clients.
            </Paragraph>
          </div>
          <SuspenseImage
            src="/business/auto-reminder.png"
            alt="set payment auto reminder"
            width={590}
            height={488}
            sizes="100%"
            className="w-full md:w-[60%] order-1 xl:w-[36.875rem] lg:mt-10 max-w-[36.875rem]"
          />
        </div>
      </section>
    </section>
  );
};

export default SetPayment;
