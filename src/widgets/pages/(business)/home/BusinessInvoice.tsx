import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BusinessInvoice = () => {
  return (
    <section className="bg-grey_e4 w-full relative">
      <section className="flex flex-col items-center gap-6 xl:gap-0 container-max-width px-4 xl:px-0 py-[3.5rem] lg:py-[9rem] lg:w-10/12 mx-auto">
        <Heading as="h2" className="uppercase text-center w-full max-w-[50rem]">
          CREATE INVOICE FOR YOUR PRODUCTS OR SERVICES AND GET PAID
        </Heading>
        <div className="flex-1 order-2 xl:order-1 w-10/12 xl:w-full flex flex-col-reverse items-center xl:flex-row xl:items-start relative xl:mt-[4.4rem] ">
          <Image
            src="/business/customer-invoice.png"
            alt="invoice"
            width={554}
            height={487}
            sizes="100%"
            className="w-[16.4rem] xl:w-[35rem] h-[14.4rem] xl:h-[30rem] order-1 xl:order-1 mt-3 xl:mt-0"
          />
          <div className="order-1 flex flex-col items-center xl:items-start xl:absolute xl:left-[55%]">
            <Paragraph
              size="small"
              className="mb-7 xl:mt-[1.5rem] xl:mb-[2.5rem] text-center xl:text-start"
            >
              Create professional invoices in minutes and get paid faster with
              our invoicing feature.
            </Paragraph>

            <Button
              variant="black_outline"
              className="w-full max-w-[12.5rem]"
              asChild
            >
              <Link href="/business/transactions">Create Invoice</Link>
            </Button>
          </div>
        </div>
      </section>
      <Image
        src="/business/happy-user.png"
        alt="invoice user"
        width={437}
        height={243}
        sizes="100%"
        className="w-[12.5rem] xl:w-[28rem] h-[8.3rem] xl:h-[17.75rem] absolute bottom-[5%] md:bottom-[8%] xl:bottom-[10%] right-[5%] md:right-[30%] xl:right-[unset]  xl:left-[40%]"
      />
    </section>
  );
};

export default BusinessInvoice;
