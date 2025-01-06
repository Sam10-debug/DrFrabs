import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import { WAIT } from "@/constants/links";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import SuspenseImage from "@/components/ui/SuspenseImage";

const RequestPayment = () => {
  return (
    <section id="invoice-hero" className="w-full bg-primary_black">
      <section className="container-max-width flex flex-col lg:flex-row justify-between gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex flex-col order-2 lg:order-1 gap-6">
          <Heading
            as="h1"
            className="uppercase text-white_f0 font-extrabold w-full max-w-[54rem]"
          >
            Request payment <br className="hidden xl:inline-block" /> and get
            paid <br className="hidden xl:inline-block" />
            smoothly
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-white_f0 leading-snug w-full max-w-[35rem]"
          >
            Easily request payment and get paid fast, <br /> hassle-free and
            easy.
          </Paragraph>
          <Button
            wMax
            variant="white-outline"
            className="flex items-center gap-4 text-white hover:text-primary_black px-4"
            asChild
          >
            <Link href={WAIT}>
              Start your journey here{" "}
              <ArrowTopRightIcon height={14} width={14} />
            </Link>
          </Button>
        </div>
        <SuspenseImage
          src="/business/request-payment-hero.png"
          alt="card"
          height={523}
          width={576}
          sizes="100%"
          className="w-full md:w-[25rem] order-1 xl:order-2 xl:w-max xl:h-max"
        />
      </section>
    </section>
  );
};

export default RequestPayment;
