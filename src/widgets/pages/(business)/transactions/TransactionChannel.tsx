import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import { ExtendedArrowRight } from "@/components/icons/icon";
import GreenBankSvg from "@/components/svg/GreenBankSvg";
import OrangeMoneyBagSvg from "@/components/svg/OrangeMoneyBagSvg";
import PurpleBankSvg from "@/components/svg/PurpleBankSvg";
import YellowPhoneSvg from "@/components/svg/YellowPhoneSvg";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";

const TransactionChannel = () => {
  return (
    <section id="transaction-channel" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col-reverse xl:flex-col items-center gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading as="h2" className="uppercase text-center xl:w-[750px]">
            multiple channels to fund your account
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center xl:w-[550px] xl:leading-6"
          >
            Platnova helps businesses of all sizes and types, from retail,
            e-commerce, marketing, hospitality, travel agencies, consulting, and
            service sectors, process payments quickly and securely
          </Paragraph>
          <GetStartedOutlineBtn toWaitList className="mt-8" />
        </div>
        <div className="w-full flex justify-between mt-4 md:mt-[6.5rem] overflow-x-scroll scrollbar-hide">
          {info.map((item, index) => (
            <div
              key={index + 1}
              className="mx-2 flex flex-col rounded-[1.25rem] xl:rounded-[2.5rem] bg-[#F0F0F0] px-7 xl:px-9 py-14 xl:py-[3.75rem] w-[17.8rem] shrink-0 xl:w-[17.8rem] xl:h-[24rem] h-[18.75rem]"
            >
              <span className="shrink-0">{item?.icon}</span>
              <div className="mt-[3.5rem] xl:mt-[4.5rem]">
                <Heading
                  as="h3"
                  className="font-medium text-[1.25rem] text-grey_500"
                >
                  {item.header}
                </Heading>
                <Paragraph
                  size="small"
                  className="mt-2 text-grey_400 font-medium w-[230px]"
                >
                  {item.body}
                </Paragraph>
                <button
                  type="button"
                  className="text-grey_400 flex items-center gap-3 font-medium text-base mt-4"
                >
                  Try now <ExtendedArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default TransactionChannel;

const info = [
  {
    header: "BANK TRANSFER",
    icon: <PurpleBankSvg className="size-[2.875rem] xl:size-[6.25rem]" />,
    body: "Securely transfer money to your Platnova account.",
  },
  {
    header: "VIRTUAL BANK",
    icon: <GreenBankSvg className="size-[2.875rem] xl:size-[6.25rem]" />,
    body: "Add money with a single-use virtual bank account.",
  },
  {
    header: "USSD",
    icon: <YellowPhoneSvg className="size-[2.875rem] xl:size-[6.25rem]" />,
    body: "Add money through your mobile USSD.",
  },
  {
    header: "OTC (BILLERPAY)",
    icon: <OrangeMoneyBagSvg className="size-[2.875rem] xl:size-[6.25rem]" />,
    body: "Add large amounts securely and seamlessly.",
  },
];
