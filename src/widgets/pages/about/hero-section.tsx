"use client";

import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const metrics = [
  {
    title: "Active Users",
    metric: "70,000+",
  },
  {
    title: "Downloads",
    metric: "100,000+",
  },
  {
    title: "Transaction Processed",
    metric: "500,000+",
  },
];

const AboutHeroSection = () => {
  const isMobile = useMediaQuery(MediaQueryBreakPoints.mobile);

  useEffect(() => {
    if (isMobile) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-hero-section",
        scrub: 0.3,
        start: "top top",
        end: "center top",
      },
    });

    tl.to("#about-details-container", {
      scale: 1.1,
      y: -40,
    });
  }, [isMobile]);

  return (
    <section id="about-hero-section" className="w-full overflow-hidden">
      <div className="h-[200px] md:h-[calc(100vh/1.6)] lg:min-h-[500px] xl:min-h-[626px] relative">
        <Image
          src="/platnova-team.png"
          alt="Platnova team"
          fill
          className=" md:rounded-b-[60px] object-cover"
          priority
          sizes="100vw"
        />
        <div className="h-full w-full bg-white  opacity-10  md:rounded-b-[60px]"></div>
      </div>

      <div
        id="about-details-container"
        className="bg-white rounded-[30px] md:rounded-[40px] px-5 md:px-10 py-20 text-center scale-90 mx-auto md:w-11/12 -mt-20 md:-mt-40 relative z-20 space-y-14"
      >
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl uppercase font-extrabold">
            fast, secure, reliable payments
          </h1>
          <p className="max-w-[920px] text-[#4B4B4B] mx-auto">
            Platnova is a leading fintech company with a
            global presence, registered in the US, Canda, UK, Rwanda and Nigeria. We
            specialize in providing innovative financial solutions that cater to
            both individuals and businesses, ensuring seamless and secure
            financial transactions across the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 w-10/12  xl:w-9/12 mx-auto gap-8">
          {metrics.map(({ metric, title }) => (
            <div
              key={title}
              className="shadow-[0px_4px_30px_4px_rgba(0,0,0,0.05)] py-10 px-6 rounded-3xl"
            >
              <p className="text-3xl font-bold">{metric}</p>
              <p className="opacity-70 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
