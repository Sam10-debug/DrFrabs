import {
  CnbcSvg,
  NairametricsSvg,
  TechCabalSvg,
  TechCrunchSvg,
  VanguarSvg,
  YahooSvg,
  ThisDaySvg,
  GuardianSvg,
} from "@/widgets/svg/about-us-svgs";

const newsSites = [
  // {
  //   icon: <TechCrunchSvg className="lg:w-[12.375rem] w-[8rem]" />,
  //   name: "techcrunch",
  //   link: "",
  // },
  {
    icon: <VanguarSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "vanguard",
    link: "https://www.vanguardngr.com/2024/09/fintech-firm-moves-to-simplify-financial-services-for-nigerians",
  },
  {
    icon: <TechCabalSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "techcabal",
    link: "https://techcabal.com/2024/04/02/platnova-emerges-victorious-at-tech-unite-africa-expo-secures-most-innovative-app-award/",
  },
  {
    icon: <NairametricsSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "nairametics",
    link: "https://nairametrics.com/2023/08/21/platnova-redefining-the-landscape-of-global-fintech/",
  },
  {
    icon: <VanguarSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "vanguard2",
    link: "https://www.vanguardngr.com/2024/10/were-ready-to-redefine-global-finance-benjamin-oyemonlan-ceo-platnova",
  },
  {
    icon: <ThisDaySvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "thisday",
    link: "https://www.thisdaylive.com/index.php/2024/10/05/empowering-global-finance-platnova-ready-to-compete-at-startup-world-cup/",
  },
  {
    icon: <GuardianSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "guardian",
    link: "https://guardian.ng/technology/nigerian-fintech-platnova-aims-high-after-startup-world-cup-success/",
  },
  {
    icon: <TechCabalSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "techcabal2",
    link: "https://techcabal.com/2024/04/02/meet-platnova-the-all-in-one-cross-border-payment-app/",
  },
  {
    icon: <VanguarSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "vanguard3",
    link: "https://www.vanguardngr.com/2024/10/our-vision-is-to-empower-financial-freedom-globally-platnova-ceo",
  },
  {
    icon: <TechCabalSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "techcabal3",
    link: "https://techcabal.com/2024/02/16/platnova-launches-vaunt-an-innovative-way-of-saving-in-different-currencies/",
  },

  {
    icon: <TechCabalSvg className="lg:w-[12.375rem] w-[8rem]" />,
    name: "techcabal4",
    link: "https://techcabal.com/2023/12/22/platnova-surpasses-50000-users-milestone-and-unveils-exciting-features-for-2024/",
  },

 

  // {
  //   icon: <CnbcSvg className="w-[3.25rem] lg:w-[5rem]" />,
  //   name: "cnbcafrica",
  //   link: "",
  // },
  
  
  
  // {
  //   icon: <YahooSvg className="lg:w-[12.375rem] w-[8rem]" />,
  //   name: "yahoofinance",
  //   link: "",
  // },
];

const AboutPublicationSection = () => {
  return (
    <section className="py-10 md:py-24">
      <div className="content-container">
        <h4 className="uppercase text-3xl lg:text-4xl xl:text-5xl font-bold">
          featured by
        </h4>

        <p className="my-8 lg:my-16 text-sm lg:text-2xl font-medium max-w-[70%] lg:max-w-[40rem]">
          Dedicated to building firmness, trust and reliability across the
          fintech industry
        </p>

        <div className="overflow-x-scroll scrollbar-hide grid grid-cols-2 lg:flex lg:items-center gap-3 lg:gap-8 mt-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            {newsSites
              .filter((item, i) => i < 5)
              .map(({ link, icon, name }) => (
                <div key={name}>
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    {icon}
                  </a>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            {newsSites
              .filter((item, i) => i > 4)
              .map(({ link, icon, name }) => (
                <div key={name}>
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    {icon}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPublicationSection;
