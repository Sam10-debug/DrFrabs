/* eslint-disable @next/next/no-img-element */
"use client";

import Paragraph from "@/components/typography/Paragraph";
import useAnimation from "@/hooks/use-animation";
import { cn, imageBlur } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const benefits = [
  {
    title: "Seamless internal transfer with zero charges",
    image: "/transfer.svg",
    customImgSize: "w-20 h-20",
  },
  {
    title: "Instant transaction notifications",
    image: "/notification.svg",
    customImgSize: "w-full",
  },
  {
    title: "Competitive exchange rates",
    image: "/fiat-exchange.svg",
    customImgSize: "w-full",
  },
  {
    title: "Multiple deposit and payout method",
    image: "/deposit-methods.svg",
    customImgSize: "w-full",
  },
  {
    title: "Zero account & card maintenance fees",
    image: "/zero-maintenance-fees.svg",
    customImgSize: "w-[100px] mx-auto",
  },
  {
    title: "One KYC for all accounts",
    image: "/kyc.svg",
    customImgSize: "w-1/2 h-[80px]",
  },
];

const HomeBenefitsSection = () => {
  const { animate } = useAnimation();

  useEffect(() => {
    gsap.to(
      "#benefits-section .p-fade-in",
      animate("fade-in", {
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#benefits-section",
          start: "top 20%",
          end: "100% top",
        },
      })
    );
  });
  return (
    <section id="benefits-section" className="py-20">
      <div className="content-container">
        <AppTextBody
          containerId="benefits-section"
          title={
            <>
              a truly global <br /> APP
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Enjoy cross-border transactions that gives you more control over
                your money.
              </Paragraph>

              <div>
                <AppCta text="Get an account" />
              </div>
            </div>
          }
        />

        <div className="grid md:grid-cols-3 gap-10 mt-20 benefits-container">
          {benefits.map(({ title, image, customImgSize }) => (
            <div
              key={title}
              className="relative rounded-3xl overflow-hidden px-8 py-5 lg:py-14 bg-white  shadow-[0px_8px_45px_rgba(246,233,240,0.5)] p-fade-in"
            >
              <div className="absolute top-0 left-0">
                <svg
                  width="379"
                  height="260"
                  viewBox="0 0 379 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0588 0L24.0588 260M71.5823 0L71.5823 260M119.106 0L119.106 260M166.629 0V260M214.153 0L214.153 260M261.676 0L261.676 260M309.2 0V260M356.723 0V260M379 30.25H0M379 70.25H0M379 110.25H0M379 150.25H0M379 190.25H0M379 230.25H0"
                    stroke="url(#paint0_linear_3480_5212)"
                    strokeWidth="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3480_5212"
                      x1="190.094"
                      y1="36.5"
                      x2="190.094"
                      y2="178"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E9E9E9" />
                      <stop offset="1" stopColor="#E8E8E8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative z-20 h-full flex flex-col justify-between gap-8">
                <div className={cn(["h-[120px] relative", customImgSize])}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="30vw"
                    {...imageBlur}
                  />
                </div>
                <div className="lg:text-xl font-bold lg:max-w-[90%] h-10">
                  <p>{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenefitsSection;
