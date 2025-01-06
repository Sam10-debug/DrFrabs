import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const BusinessPaymentRecieved = () => {
  return (
    <section className="container-max-width flex flex-col items-center px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
      <div className="order-2 lg:order-1 flex-1 flex flex-col items-center">
        <Heading as="h2" className="uppercase text-center">
          manage business <br className="hidden lg:inline-block" />
          transactions via payment link
        </Heading>
        <Paragraph size="small" className="my-5 text-center">
          Send secure payment links to customers, and manage all your{" "}
          <br className="hidden lg:inline-block" />
          business transactions in one place, simplifying your revenue{" "}
          <br className="hidden lg:inline-block" />
          collection and workflow.
        </Paragraph>
      </div>
      <div className="order-1 lg:order-2 w-full flex items-center justify-center gap-[5.375rem] mb-32 xl:mb-0 relative mt-[5.875rem]">
        <SuspenseImage
          src="/business/woman-phone.png"
          alt="woman phone"
          height={550}
          width={550}
          sizes="100%"
          className="h-[25rem] w-[25rem] xl:h-[35rem] xl:w-[35rem]"
        />
        <SuspenseImage
          src="/business/platnova-payment-sent.png"
          alt="payment sent"
          height={66}
          width={380}
          sizes="100%"
          className="absolute right-[3.3rem] md:right-[8rem] bottom-[-25%] md:bottom-[-12%] w-72 xl:right-[unset] xl:bottom-40 xl:left-[16%] xl:h-[5.5rem] xl:w-[21rem] flex-1 "
        />
        <SuspenseImage
          src="/business/platnova-payment-received.png"
          alt="payment received"
          height={66}
          width={380}
          sizes="100%"
          className="absolute left-[1.3rem] md:left-[8rem] bottom-[-3%] md:bottom-[15%] w-72 xl:left-[unset] xl:bottom-4 xl:right-[16%] xl:h-[5.5rem] xl:w-[21rem] flex-1 "
        />
      </div>
    </section>
  );
};

export default BusinessPaymentRecieved;
