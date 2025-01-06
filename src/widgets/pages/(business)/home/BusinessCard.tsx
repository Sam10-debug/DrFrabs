import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BusinessCard = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-0 w-full px-4 md:px-0 py-[3.5rem] lg:py-[9rem] lg:w-10/12 mx-auto">
      <Heading as="h2" className="uppercase text-center w-full max-w-[54rem]">
        create invoice and pay later designed for business
      </Heading>
      <div className="flex-1 order-2 md:order-1 w-10/12 md:w-full flex items-start relative mt-[2.2rem] md:mt-[4.4rem] ">
        <Image
          src="/business/invoice.png"
          alt="invoice"
          width={895}
          height={571}
          sizes="100%"
          className="w-full md:w-[56rem] h-[11.5rem] md:h-[35rem] order-1 md:order-1"
        />
        <div className="order-1 md:absolute md:left-[55%]">
          <Paragraph
            size="small"
            className="mb-8 md:mt-[1.5rem] md:mb-[2.5rem]"
          >
            Dummy text talking about invoice payment. payment link talking about
            invoice payment.
          </Paragraph>

          <Button variant="black_outline" className="w-full max-w-[12.5rem]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
