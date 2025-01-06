import BudgetChartSvg from "@/components/svg/BudgetChartSvg";
import CashMaintenanceSvg from "@/components/svg/CashMaintenanceSvg";
import FundSvg from "@/components/svg/FundSvg";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";

const CardExperience = () => {
  return (
    <section
      id="card-exp"
      className="container-max-width flex flex-col items-center gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto"
    >
      <div className="flex items-center flex-col ">
        <Heading
          as="h2"
          className="uppercase md:text-center w-full max-w-[54rem]"
        >
          CREATE A SMOOTH CARD EXPERIENCE FOR YOUR TEAM
        </Heading>
        <Paragraph
          size="small"
          className="mt-6 md:text-center w-full max-w-[35rem]"
        >
          Provide a hassle-free payment experience for your team with easy card
          management and scale their spending power with ease.
        </Paragraph>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-start md:justify-between gap-5 lg:gap-5 lg:mt-[5.875rem] overflow-x-scroll scrollbar-hide">
        {arrInfo.map((item, index) => (
          <div
            key={index + 1}
            style={{
              background:
                "linear-gradient(126.81deg, #222222 16%, #383838 51.26%, #3C3C3C 85.15%)",
            }}
            className="w-full px-[1.875rem] py-11 xl:px-8 xl:py-10 rounded-[1.25rem] shrink-0 md:max-w-[21rem] xl:h-[23.75rem] xl:w-[23.75rem] xl:max-w-[23.75rem] xl:max-h-[23.75rem]"
          >
            <div className="shrink-0">{item.icon}</div>

            <div className="w-full pr-6">
              <Heading as="h3" className="font-semibold text-white w-full mt-4">
                {item.header}
              </Heading>
              <Paragraph
                size="small"
                className="mt-4 xl:mt-12 text-white font-normal"
              >
                {item.body}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardExperience;

const arrInfo = [
  {
    header: (
      <>
        FUND <br /> WALLET
      </>
    ),
    icon: <FundSvg className="size-[3.5rem] lg:size-[5rem]" />,
    body: "Fund your card easily with any currency of choice, with over 13 different currencies listed.",
  },
  {
    header: (
      <>
        BUDGET <br /> SPENDING
      </>
    ),
    icon: <BudgetChartSvg className="size-[3.5rem] lg:size-[5rem]" />,
    body: "Set and control budgets for your team's spending with your cards, ensuring expenses stay on track and within limits.",
  },
  {
    header: (
      <>
        NO MAINTENANCE <br /> FEE
      </>
    ),
    icon: <CashMaintenanceSvg className="size-[3.5rem] lg:size-[5rem]" />,
    body: "Enjoy zero maintenance fees or hidden charges, so you can focus on growing your business without unnecessary costs.",
  },
];
