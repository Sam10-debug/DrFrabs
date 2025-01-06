"use client";

import Paragraph from "@/components/typography/Paragraph";
import { imageBlur } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import gsap from "gsap";
import Image from "next/image";

const HomeCardSection = () => {
  return (
    <section id="card-section" className="py-10 md:py-24">
      <div className="content-container">
        <AppTextBody
          scrollSpeed={0.5}
          containerId="card-section"
          title={
            <div>
              Experience more with our virtual/physical Card{" "}
              <span className="inline-block md:w-[131px] w-14">
                <svg
                  className="card-text-svg"
                  viewBox="0 0 131 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="125"
                    height="57"
                    rx="28.5"
                    fill="white"
                  />
                  <rect
                    className="rect w-1/2"
                    x="3"
                    y="3"
                    // width="125"
                    height="57"
                    rx="28.5"
                    stroke="#7049F7"
                    strokeWidth="6"
                  />
                  <path
                    d="M36 18.543L39.7689 27.7741L49 31.543L39.7689 35.3118L36 44.543L32.2311 35.3118L23 31.543L32.2311 27.7741L36 18.543Z"
                    fill="#1E1E1E"
                  />
                  <path
                    className="path -translate-x-12 opacity-0"
                    d="M59 45.8743V17.2114C59 14.3451 61.3451 12 64.2114 12L103.297 12C106.163 12 108.509 14.3451 108.509 17.2114V45.8743C108.509 48.7406 106.163 51.0857 103.297 51.0857H64.2114C61.3451 51.0857 59 48.7406 59 45.8743Z"
                    fill="#FFD08A"
                  />
                  <path
                    className="path -translate-x-12 opacity-0"
                    d="M108.509 27.6343V25.0286H92.8743C91.4411 25.0286 90.2686 23.856 90.2686 22.4229C90.2686 20.9897 91.4411 19.8171 92.8743 19.8171H94.1771V17.2114H92.8743C90.008 17.2114 87.6629 19.5566 87.6629 22.4229C87.6629 25.2891 90.008 27.6343 92.8743 27.6343H96.7829V35.4514H92.8743C89.2263 35.4514 86.36 38.3177 86.36 41.9657C86.36 45.6137 89.2263 48.48 92.8743 48.48H95.48V45.8743H92.8743C90.6594 45.8743 88.9657 44.1806 88.9657 41.9657C88.9657 39.7509 90.6594 38.0571 92.8743 38.0571H108.509V35.4514H99.3886V27.6343H108.509ZM74.6343 35.4514H70.7257V27.6343H74.6343C77.5006 27.6343 79.8457 25.2891 79.8457 22.4229C79.8457 19.5566 77.5006 17.2114 74.6343 17.2114H70.7257V19.8171H74.6343C76.0674 19.8171 77.24 20.9897 77.24 22.4229C77.24 23.856 76.0674 25.0286 74.6343 25.0286H59V27.6343H68.12V35.4514H59V38.0571H74.6343C76.8491 38.0571 78.5429 39.7509 78.5429 41.9657C78.5429 44.1806 76.8491 45.8743 74.6343 45.8743H72.0286V48.48H74.6343C78.2823 48.48 81.1486 45.6137 81.1486 41.9657C81.1486 38.3177 78.2823 35.4514 74.6343 35.4514Z"
                    fill="#413E37"
                  />
                </svg>
              </span>
            </div>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Experience smooth payments across 13+ currencies with our card.
              </Paragraph>

              <div>
                <AppCta text="Get your card" link="/cards" />
              </div>
            </div>
          }
          onDisplayCB={() => {
            gsap.to(".path", {
              x: 0,
              opacity: 1,
            });

            gsap.to(".rect", {
              width: 125,
            });
          }}
        />

        <div className="flex items-center md:flex-row flex-col mt-10 md:mt-0 p-fade">
          <div
            data-scroll
            data-scroll-speed="2"
            className="relative aspect-square xl:max-h-[608.46px] w-full max-w-[700px]"
          >
            <Image
              src="/platnova-card-verve-visa-mastercard.png"
              alt="platnova cards"
              fill
              sizes="(max-width: 640px) 70vw, 40vw"
              {...imageBlur}
            />
            {/* {cards.map(({ type, icon, color }, i) => (
              <div
                key={type}
                className="absolute aspect-video max-w-[453px] w-full"
                style={{ transform: `rotate(${i * 30}deg}` }}
              >
                <AppCard color={color} cardTypeIcon={icon} />
              </div>
            ))} */}
          </div>

          <div className="max-w-[269px] space-y-4 mt-10 md:mt-20">
            <p className="text-[#4B4B4B]">
              Join a host of other Platnovans using our virtual card.
            </p>
            <div className="relative w-full max-w-[106px] h-10">
              <Image
                src="/group-of-people.png"
                alt="People"
                fill
                sizes="(max-width: 640px) 30vw, 10vw"
                {...imageBlur}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCardSection;
