"use client";
import gsap from "gsap";

import { useEffect } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import { cn } from "@/lib/utils";

import useAnimation from "@/hooks/use-animation";

import AppCta from "@/widgets/app/cta";
import Paragraph from "@/components/typography/Paragraph";

const StarSvg = dynamic(() => import("@/widgets/svg/star"));

const HomeHeroSection = () => {
  const { animate } = useAnimation();

  useEffect(() => {
    gsap.to("#hero-section .p-fade-in", animate("fade-in", { stagger: 0.1 }));
    gsap.to(
      ["#hero-section .p-rotate-in", "#hero-section .p-rotate-in-inverse"],
      animate("rotate-in", { delay: 0.3 })
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        scrub: 0.5,
        start: "top top",
      },
    });

    tl.to("#hero-image-container", {
      top: 4,
    }).to(
      ["#hero-image", "#hero-image-frame"],
      {
        scale: 1,
        y: 4,
      },
      "<"
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="hero-section"
      className="h-[700px] md:h-[500px] lg:h-[650px] content-container "
    >
      <div className="py-14 lg:py-20">
        <div data-scroll data-scroll-speed="2" className="flex justify-center">
          <h1 className={cn(["md:text-right page-title p-fade-in"])}>
            <div className="font-extrabold">SEAMLESS MONEY</div>
            {/* <br /> */}
            <div className="italic font-bold pr-16">PAYMENT</div>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center relative w-full mt-5 space-y-5 md:mt-0 md:space-y-0">
          <div
            className={cn([
              "space-y-5 md:absolute left-0 lg:top-12 md:max-w-[160px] lg:max-w-[200px] xl:max-w-[290px] p-rotate-in",
            ])}
          >
            <Paragraph size="small" data-scroll data-scroll-speed="2">
              Get the most out of your money, open multi-currency wallets, send
              and receive money seamlessly across the globe.
            </Paragraph>

            <AppCta text="Download App" />
          </div>
          <div>
            <div
              className={cn([
                "md:absolute right-0 top-20 flex flex-col items-end space-y-1.5 p-rotate-in-inverse",
              ])}
            >
              <div
                data-scroll
                data-scroll-speed="2"
                className="flex md:flex-col space-y-1.5 gap-1.5"
              >
                <p className="flex gap-1 items-end justify-end">
                  <span className="text-4xl font-extrabold ">4.0</span>{" "}
                  <span className="text-[#686868] text-xl ">/5</span>
                </p>
                <ul className="flex items-center gap-0.5">
                  {[...new Array(5)].map((_, index) => (
                    <li key={`star-${index}`}>
                      <StarSvg />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="lg:text-base text-xs text-[#4B4B4B]">
                  Over 50k+ Active users
                </p>
              </div>
              <div className="relative w-full max-w-[130px] h-10">
                <Image
                  src="/reviews-faces.png"
                  alt="People"
                  fill
                  sizes="(max-width: 640px) 30vw, 10vw"
                />
              </div>
            </div>
          </div>

          <div
            id="hero-image-container"
            className={cn([
              "flex relative w-10/12 md:w-full mx-auto  md:max-w-[300px] lg:max-w-[382px] aspect-square top-14 xl:translate-y-20  z-20 ",
            ])}
          >
            <Image
              src="/platnova.png"
              sizes="(max-width: 640px) 60vw, 25vw"
              alt="platnova"
              fill
              className="scale-110 md:scale-125"
              id="hero-image"
              priority
            />

            <div
              id="hero-image-frame"
              className="absolute h-[80%] translate-y-16 w-10/12 mx-auto inset-x-0 rounded-2xl scale-110 z-[100]"
            >
              <div className="border border-white h-full rounded-t-2xl"></div>
              <div className="h-14 lg:h-20 bg-white w-full rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
