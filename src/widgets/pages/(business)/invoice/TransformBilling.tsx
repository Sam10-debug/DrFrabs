import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";
import Image from "next/image";

const TransformBilling = () => {
  return (
    <section id="transform-billing" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col lg:flex-row justify-between gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="relative flex flex-col order-2 lg:order-1 gap-0 lg:gap-2">
          <Heading
            as="h2"
            className="uppercase text-primary_black font-extrabold w-full max-w-[54rem]"
          >
            Built for business
            <LineBreak showIn="xl" /> owners like you
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-primary_black w-full max-w-[35rem]"
          >
            Ready to invoice in style, bookkeep less, and get paid fast? You’re
            in the right place.
          </Paragraph>
          <div className="flex items-center gap-3">
            <SuspenseImage
              src="/business/billing-people.png"
              alt="card"
              width={161}
              height={53}
              sizes="100%"
              className="w-max"
            />
            <Paragraph
              size="smaller"
              className="text-[0.82rem] text-black/50 leading-snug flex-grow"
            >
              Join a host of other business owners currently
              <br className="hidden xl:inline-block" /> using the invoice
              payment option
            </Paragraph>
          </div>
        </div>
        <SuspenseImage
          src="/business/billing.png"
          alt="billing"
          width={590}
          height={478}
          sizes="100%"
          className="w-full md:w-[25rem] order-1 xl:order-2 xl:w-[36.875rem]"
        />
      </section>
    </section>
  );
};

export default TransformBilling;
