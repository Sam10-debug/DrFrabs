"use client";

import { ArrowTopRightIcon } from "@/components/icons/icon";
import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import { cn, copyToClipboard } from "@/lib/utils";
import DownloadApp from "@/widgets/app/mobile-app-buttons";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, Suspense } from "react";

const ReferAndEarn = () => {
  function openStore(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    copyToClipboard(window.location.href);
    window.open(e.currentTarget.href, "_blank");
  }

  return (
    <main className="relative ">
      <section id="refer" className=" bg-white container-max-width mx-auto py-7 md:py-28 flex flex-col items-center gap-5 md:gap-8 relative z-20">
        <h1 className="uppercase text-center text-4xl md:text-5xl lg:text-[84px] lg:leading-[88px] font-bold">
          invite a <br className="lg:hidden" /> friend{" "}
          <br className="lg:hidden" /> and <LineBreak showIn="lg" /> get{" "}
          <br className="lg:hidden" />
          rewarded
        </h1>
        <p className="text-md px-10 text-center opacity-80">
          Earn up to 00000 when you get your friend to register on the platnova
          mobile app
        </p>

        <Button
          className={cn("w-full mb-5 text-white max-w-[12.5rem] min-h-[3rem]")}
          asChild
          variant="brand"
        >
          <Link href={"https://platnova.me"}>
            Invite a friend now
            <ArrowTopRightIcon className="ml-[10px]" />
          </Link>
        </Button>
        <Suspense>
          <DownloadApp onAppStoreClick={openStore} onPlayStoreClick={openStore} />
        </Suspense>
        <Heading className="mt-10" as="h2">{`Here's how it works`}</Heading>

        <div className="w-11/12 flex flex-col gap-5 lg:w-full lg:grid lg:grid-cols-2 lg:gap-[2.125rem]">
          {info.map(({ title, desc, img }, i) => (
            <div
              className="flex flex-col justify-between p-4 gap-5 bg-[#E4E4E480] mx-auto rounded-3xl w-full lg:p-[32px_24px_32px_24px] lg:min-h-[16.56rem]"
              key={title + i}
            >
              <Image
                src={`/${img}.png`}
                width={67}
                height={67}
                className="w-[3rem] lg:w-max"
                alt={desc}
              />
              <div className="w-10/12 lg:w-auto flex flex-col gap-3">
                <Heading as="h3">{title}</Heading>
                <Paragraph className="">{desc}</Paragraph>
              </div>
            </div>
          ))}
        </div>

        {/* <ReferLeaderBoard /> */}
      </section>
    </main>
  );
};

export default ReferAndEarn;

const info = [
  {
    title: "Create a Platnova Account",
    desc: "Download our mobile app and create an account for free",
    img: "refer-create-account",
  },
  {
    title: "Sign up and complete your KYC",
    desc: "Register and complete your kyc verification within minutes",
    img: "refer-kyc",
  },
  {
    title: "Share your referral link to friends",
    desc: "Share your referral links to friends and families to let them create an account",
    img: "refer-share",
  },
  {
    title: "Get rewarded instantly",
    desc: "enjoy your reward when your referees successfully create their Platnova account",
    img: "refer-reward",
  },
];
