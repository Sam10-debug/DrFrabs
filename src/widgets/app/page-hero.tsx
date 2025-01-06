"use client";

/* eslint-disable @next/next/no-img-element */

import gsap from "gsap";
import { useEffect } from "react";

interface IAppPageHeroProps {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  image: React.ReactNode;
  cta?: React.ReactNode;
}

const AppPageHero: React.FC<IAppPageHeroProps> = ({
  title,
  subtitle,
  image,
  cta,
}) => {
  useEffect(() => {
    gsap.to(`.reveal_text`, {
      y: 0,
      stagger: 0.05,
      delay: 0.8,
      duration: 0.1,
      opacity: 1,
    });
  });

  return (
    <section className="py-4 md:py-24 w-11/12 mx-auto">
      <div className="md:text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[84px] lg:leading-[88px] font-extrabold uppercase text-black reveal_text">
          {title}
        </h1>
        <h2 className="mt-6 text-sm md:text-base lg:text-3xl text-[#4B4B4B] max-w-[250px] md:max-w-full reveal_text">
          {subtitle}{" "}
        </h2>
        <div className="md:w-10/12 mx-auto mt-9 md:mt-16 max-w-[1200px]">
          {image}
        </div>

        <div className="flex justify-center mt-14">{cta}</div>
      </div>
    </section>
  );
};

export default AppPageHero;
