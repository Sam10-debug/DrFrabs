"use client";

import Paragraph from "@/components/typography/Paragraph";
import useAnimation from "@/hooks/use-animation";
import { imageBlur } from "@/lib/utils";
import AppChecklist from "@/widgets/app/checklist";
import AppCta from "@/widgets/app/cta";
import AppLayoutCutout from "@/widgets/app/svg/layout-cutout";
import AppTextBody from "@/widgets/app/text-body";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";

const checklist = [
  "13+ Currencies",
  "Payments to 50+ countries",
  "Multiple payment methods ",
];

const bankingServices = [
  {
    title: "Physical & Virtual Cards",
    icon: "/cards.png",
    link: "/cards",
  },
  {
    title: "Bill Payments",
    icon: "/bill-payments.png",
    link: "/refill",
  },
  {
    title: "Multicurrency Wallet",
    icon: "/multi-currency.png",
    link: "/download",
  },
  {
    title: "DeFi Deposits & Swaps",
    icon: "/crypto.png",
    link: "/download",
  },
  {
    title: "Gift cards",
    icon: "/gift-card.png",
    link: "/refill",
  },
  {
    title: "Tuition",
    icon: "/tuition.png",
    link: "/tuition",
  },
  {
    title: "Vault",
    icon: "/vault-icon.png",
    link: "/vault",
  },
  {
    title: "Events",
    icon: "/events.png",
    link: "/lifestyle",
  },
  {
    title: "Flights",
    icon: "/flights.png",
    link: "/lifestyle",
  },
  {
    title: "Hotel",
    icon: "/hotel.png",
    link: "/lifestyle",
  },
  {
    title: "Restaurant",
    icon: "/restaurant.png",
    link: "/lifestyle",
  },
  {
    title: "Savings",
    icon: "/savings.png",
    link: "/vault",
  },
];

const HomeServicesSection = () => {
  const { animate } = useAnimation();

  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    gsap.from(".marquee__part", {
      xPercent: 0,
    });
    const tween = gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
      })
      .repeat(-1)
      .totalProgress(0.5);

    const handleScrollFunc = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScrollFunc);

    return () => window.removeEventListener("scroll", handleScrollFunc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="services-section" className="bg-[#E9E9E9]/30 py-5">
        <div className="overflow-hidden">
          <h2 className="text-[84px] text-nowrap whitespace-nowrap font-bold text-[#000000]/5 marquee__part translate-x-0">
            CARDS - OTC - TRANSFER - GIFTCARDS - CARDS - OTC - TRANSFER -
            GIFTCARDS
          </h2>
        </div>
        <div className="h-10 md:h-20" />
        <div className="content-container">
          <AppTextBody
            containerId="services-section"
            title="SEND MONEY TO FRIENDS, FAMILY OR BUSINESS"
            description={
              <div className="space-y-8 md:-mt-20">
                <Paragraph size="small">
                  Send money to friends, family or business. Platnova helps you
                  send money globally in different currencies with ease.
                </Paragraph>

                <AppChecklist checklist={checklist} />

                <div>
                  <AppCta text="Send Money" link="/international-transfer" />
                </div>
              </div>
            }
          />
          <div className="h-20" />
          <div className="bg-white px-3 md:px-11 py-10 md:py-16 rounded-[40px] gap-6">
            <div data-speed="0.7">
              <div className="space-y-5 p-fade flex md:flex-row flex-col justify-between w-full">
                <div>
                  <h4 className="text-2xl lg:text-3xl xl:text-[40px] font-bold leading-[140%] xl:leading-[52px] xl:max-w-[430px] max-w-[300px]">
                    We Provide you with all Global Banking Services
                  </h4>
                </div>

                <div className="space-y-5">
                  <p className="text-[#4B4B4B] xl:max-w-[320px] text-sm xl:text-base max-w-[300px]">
                    We provide you with a comprehensive range of payment
                    services.
                  </p>

                  <AppCta text="Start now" outline />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4  xl:gap-x-12 mt-6">
                {bankingServices.map(({ title, icon, link }) => (
                  <Link key={title} href={link}>
                    <div className="flex flex-col items-center gap-6 py-5 md:h-[250px] justify-center rounded-lg md:rounded-[40px] hover:bg-[#E4E4E4]/40 duration-500 bg-transparent">
                      <div className="relative w-24 h-24">
                        <Image
                          src={icon}
                          alt={title}
                          fill
                          sizes="(max-width: 640px) 20vw, (max-width: 1024px) 10vw, 5vw"
                          {...imageBlur}
                        />
                      </div>

                      <p className="text-sm md:text-base font-semibold md:font-bold text-center">
                        {title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="h-10 md:h-20" />
        </div>
      </section>
      <AppLayoutCutout type="bottom" />
    </>
  );
};

export default HomeServicesSection;
