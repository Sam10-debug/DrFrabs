import Paragraph from "@/components/typography/Paragraph";
import { imageBlur } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppLayoutCutout from "@/widgets/app/svg/layout-cutout";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const services = [
  {
    name: "Airtime Recharge",
    items: [
      { title: "MTN", image: "/mtn.png" },
      { title: "Bell Mobility", image: "/bell-mobility.png" },
      { title: "Delight Mobile", image: "/delight-mobile.png" },
      { title: "SFR", image: "/sfr.png" },
    ],
  },
  {
    name: "Electricity Bills",
    items: [
      { title: "AEDC", image: "/aedc.png" },
      { title: "Ghana Electricity", image: "/ghana-electricity.png" },
      { title: "Sierra Leone", image: "/edsa.png" },
      { title: "South Africa", image: "/eskom.png" },
    ],
  },
  {
    name: "Giftcards",
    items: [
      { title: "Google Play", image: "/google-play.png" },
      { title: "Itunes", image: "/itunes.png" },
      { title: "Amazon", image: "/amazon.png" },
      { title: "Nordstorm", image: "/nordstorm.png" },
    ],
  },
  {
    name: "Internet Banking",
    items: [
      { title: "Zelle", image: "/zelle.png" },
      { title: "CashApp", image: "/cashapp.png" },
      { title: "Revolut", image: "/revolut.png" },
      { title: "Mobile Money", image: "/mobile-money.png" },
    ],
  },
];

const HomeBillsSection = () => {
  return (
    <>
      <AppLayoutCutout type="top" />

      <section id="bills-section" className="bg-[#E9E9E9]/30 py-14">
        <div className="content-container">
          <AppTextBody
            scrollSpeed={1}
            containerId="bills-section"
            title="Conveniently Manage your Bills and Subscriptions"
            description={
              <div className="space-y-10">
                <Paragraph size="small">
                  Easily recharge your airtime, purchase data bundles, renew
                  your TV subscriptions, etc from the comfort of your home or on
                  the go.
                </Paragraph>

                <div>
                  <AppCta text="Start now" link="/refill" />
                </div>
              </div>
            }
          />

          <div className="grid md:grid-cols-2 gap-5 w-full md:aspect-square md:max-h-[400px] lg:max-h-[500px] xl:max-h-[650px] mt-8 md:mt-0">
            <div
              data-scroll
              data-scroll-speed="2"
              className="col-span-1 relative md:aspect-auto min-h-[400px] md:min-h-[auto]"
            >
              <Image
                src="/joyful-man.png"
                alt="joyful man"
                fill
                sizes="(max-width: 640px) 60vw, 30vw"
                {...imageBlur}
              />
            </div>
            <div className="col-span-1 relative aspect-square md:aspect-auto">
              <div className="md:h-40"></div>
              <Image
                src="/subscription-cards.png"
                alt="subscription cards"
                fill
                sizes="(max-width: 640px) 60vw, 30vw"
                {...imageBlur}
              />
            </div>
          </div>

          <div className="bg-white px-2 md:px-11 py-8 md:py-16 rounded-[40px] gap-6 mt-10">
            {services.map(({ name, items }) => (
              <div data-scroll data-scroll-speed="1" key={name} className="">
                <div className="rounded-3xl overflow-hidden">
                  <div className="relative z-20 p-4 xl:p-6 space-y-3">
                    <p className="font-medium">{name}</p>
                    <div className="flex gap-2 justify-between items-center">
                      {items.map(({ title, image }) => (
                        <div
                          key={title}
                          className="space-y-1 flex  md:flex-row flex-col items-center md:flex-1 md:gap-4"
                        >
                          <div className="h-12 flex items-center">
                            <div className="flex items-center flex-wrap border-2 border-white h-9 xl:h-14 w-9 xl:w-14 mx-auto relative rounded-full">
                              <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="48px"
                                {...imageBlur}
                              />
                            </div>
                          </div>
                          <p className="text-[0.625rem] md:text-xs text-center opacity-80 h-5">
                            {title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBillsSection;
