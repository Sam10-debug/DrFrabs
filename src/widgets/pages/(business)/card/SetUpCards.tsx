import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const SetUpCards = () => {
  return (
    <section
      id="card-setup"
      className="container-max-width flex flex-col items-center justify-between pb-[3rem] lg:pb-[5rem] lg:w-10/12 mx-auto"
    >
      <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-0 px-4 xl:px-0 py-[3.5rem] lg:py-[9rem] mx-auto">
        <div className="flex-1 order-2 xl:order-1 max-w-[35rem] xl:w-full flex flex-col md:items-center xl:items-start ">
          <Heading
            as="h2"
            className="uppercase md:text-center xl:text-start w-[90%]"
          >
            SET UP YOUR team cards IN FEW MINUTES
          </Heading>
          <Paragraph
            size="small"
            className="mb-8 mt-[1.5rem] md:text-center xl:text-start xl:mb-[2.5rem] w-[90%] "
          >
            Quick and easy card setup process that gets your team up and running
            in minutes.
          </Paragraph>

          <GetStartedOutlineBtn variant="white_bg" toWaitList />
        </div>
        <SuspenseImage
          src="/cards/slant-card.png"
          alt="slant card"
          width={640}
          height={507}
          className="w-[21rem] xl:w-max h-[17rem] xl:h-max order-1 xl:order-1"
        />
      </div>
      <div className="w-11/12 lg:w-full overflow-x-scroll scrollbar-hide">
        <div className="flex flex-row space-x-4 justify-between">
          {setUpCardInfo.map(({ desc, img }, i) => (
            <div
              key={desc + i}
              className="w-[14rem] h-[13rem] p-3 flex flex-col gap-5 flex-shrink-0 bg-grey_e4 rounded-xl lg:justify-evenly lg:p-8 lg:w-[24.125rem] lg:h-[20.56rem] max-w-[24.125rem] max-h-[20.562rem]"
            >
              <SuspenseImage
                src={`/business/${img}.png`}
                alt={img}
                width={100}
                height={100}
                className="w-16 lg:w-[6.25rem] lg:max-w-[6.25rem]"
              />
              <Paragraph size="small" className="leading-snug">
                {desc}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetUpCards;

const setUpCardInfo = [
  {
    desc: "Control how much your team members spend",
    img: "control-spending",
  },
  {
    desc: "Monitor transaction activities across multiple wallets",
    img: "monitor-transaction",
  },
  {
    desc: "Get physical or virtual cards to transact globally with ease and convenience.",
    img: "transact-globally",
  },
];
