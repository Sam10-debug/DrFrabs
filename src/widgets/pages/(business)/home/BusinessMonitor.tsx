import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const BusinessMonitor = () => {
  return (
    <section className="w-full">
      <section className="container-max-width flex flex-col items-center gap-10 xl:gap-0 px-4 xl:px-0 py-[3.5rem] lg:py-[9rem] lg:w-10/12 mx-auto">
        <div className="w-full lg:bg-white_f9 lg:p-16 lg:rounded-[40px] flex flex-col items-center xl:items-start xl:flex-row gap-8 xl:gap-[5.75rem]">
          <div className="relative w-[22rem] xl:w-[35.75rem] order-1">
            <SuspenseImage
              src="/business/monitor.png"
              alt="invoice"
              width={548}
              height={548}
              className="w-full"
            />
            <SuspenseImage
              src="/business/tojoe.png"
              alt="invoice"
              width={347}
              height={78}
              className="w-[15.125rem] absolute -bottom-8 right-3 lg:w-max lg:-bottom-12 lg:-right-16"
            />
          </div>
          <div className="order-1 flex-1 flex flex-col md:items-center xl:items-start">
            <Heading
              as="h2"
              className="uppercase w-[300px] xl:w-[529px] md:text-center xl:text-start"
            >
              monitor transactions and stay in control of your funds
            </Heading>
            <Paragraph
              size="small"
              className="my-5 w-[90%] xl:w-[470px] md:text-center xl:text-start "
            >
              Track your business transactions in real-time, and manage your
              funds effortlessly. You have complete control and visibility over
              your financial activities.
            </Paragraph>
            <GetStartedOutlineBtn toWaitList />
          </div>
        </div>
      </section>
    </section>
  );
};

export default BusinessMonitor;

const info = [
  {
    image: "/business/coin-wallet.png",
    body: "Control how much your team members spend.",
  },
  {
    image: "/business/list.png",
    body: "Monitor transaction activities across multiple wallet. ",
  },
  {
    image: "/business/card.png",
    body: "Get physical or virtual cards to transact globally  with ease and convenience. ",
  },
];
