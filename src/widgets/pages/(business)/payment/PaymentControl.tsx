import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";

const PaymentControl = () => {
  return (
    <section id="payment-control" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col items-center gap-12 md:gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center w-full max-w-[54rem]"
          >
            a more advanced way to control HOW to receive money
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center w-full max-w-[35rem]"
          >
            Supercharge your business with the best financial resource
          </Paragraph>
        </div>

        <div className="w-full max-w-full grid md:grid-cols-2 gap-[1.875rem] xl:gap-[4rem] xl:mt-[3.75rem]">
          {info?.map((item, i) => (
            <div
              key={i + 1}
              className="bg-white_f0 w-full max-w-[35rem] lg:max-w-[100%] px-6 py-8 xl:p-[3.75rem] rounded-[1.25rem] h-[20.25rem] xl:h-auto"
            >
              <span className="xl:w-fit bg-black text-xs xl:text-2xl text-[#F5F5F7] rounded-[50px] py-[0.625rem] px-5">
                {item?.title}
              </span>
              <Heading
                custom
                className="uppercase my-7 text-[1.375rem] leading-[28.6px] lg:text-[2rem] lg:leading-[2.6rem] xl:w-full w-[250px]"
              >
                {item?.header}
              </Heading>
              <Paragraph size="small" className="w-[95%]">
                {item?.body}
              </Paragraph>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PaymentControl;

const info = [
  {
    title: "Virtual account",
    header: <>do more with one time virtual account </>,
    body: "With the Virtual account, you can create a temporary account number and get credited within minutes",
  },
  {
    title: "One account for all",
    header: <>multiple link, one account </>,
    body: "Limitless virtual accounts available on Platnova across different currencies. Multiple links, a single account",
  },
];
