import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const PaymentBusiness = () => {
  return (
    <section id="payment-business" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col items-center gap-14 xl:gap-0 px-4 xl:px-0 py-[6rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center xl:w-[674px] w-[300px]"
          >
            CAREFULLY DESIGNED TO HELP BUSINESS OWNERS
          </Heading>
          <Paragraph
            size="small"
            className="mt-2 xl:mt-6 text-center xl:w-[489px] w-[250px]"
          >
            Platnova supports all businesses and business owners, our process is
            designed with you in mind.
          </Paragraph>
        </div>

        <div className="w-full lg:mt-[5.875rem] md:overflow-x-scroll scrollbar-hide">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            {arrInfo.map((item, index) => (
              <SuspenseImage
                src={item?.image}
                width={389}
                height={433}
                alt="vendors"
                key={index + 1}
                className="w-full md:w-[21.5rem] xl:w-[24.3125rem] max-w-[24.3125rem]"
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PaymentBusiness;

const arrInfo = [
  {
    image: "/payment/online-vendor-1.png",
  },
  {
    image: "/payment/online-vendor-2.png",
  },
  {
    image: "/payment/online-vendor-3.png",
  },
];
