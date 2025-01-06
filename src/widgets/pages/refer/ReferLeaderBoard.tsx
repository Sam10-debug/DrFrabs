import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";
import React from "react";

const ReferLeaderBoard = () => {
  return (
    <section   className=" w-full mt-12 ">
      <div className="w-full h-[627px] lg:h-[914px] rounded-3xl p-3 lg:p-8 bg-transparent lg:bg-white_f9">
        <Heading as="h3" className="text-center font-semibold lg:text-left">
          Top referrals
        </Heading>
        <div className="bg-white_f9 mt-4 lg:mt-8 rounded-2xl flex flex-col">
          <div className="lg:bg-[#EAE4FE] lg:mx-8 flex justify-between rounded-2xl px-6 py-3 lg:px-12 lg:py-6">
            {["Novatags", "Date", "Points"].map((item, i) => (
              <Paragraph
                className={`lg:text-brand ${
                  item !== "Novatags" ? "lg:w-[9.3125rem]" : "lg:w-[12.688rem]"
                }`}
                key={item + i}
              >
                {item}
              </Paragraph>
            ))}
          </div>
          <div className="p-3 lg:px-12 lg:py-6 lg:mx-5 flex flex-col gap-2 lg:gap-3">
            {info.map(({ img, name, date, pnts }, i) => (
              <>
                <div
                  key={img + i}
                  className="w-full p-2 lg:px-0 bg-white_f0 flex items-center justify-between rounded-xl lg:bg-transparent"
                >
                  <div className="flex items-center gap-1 lg:w-[12.688rem] lg:gap-5">
                    <Image
                      src={`/${img}.png`}
                      className="w-8 lg:w-max rounded-full"
                      width={48}
                      height={48}
                      alt={name + pnts + i}
                    />
                    <Paragraph className="max-w-24 lg:max-w-[7.8125rem] overflow-hidden whitespace-nowrap text-ellipsis">
                      {name}
                    </Paragraph>
                  </div>

                  <Paragraph className="ml-[-26px] lg:ml-0 lg:w-[9.3125rem]">
                    {date}
                  </Paragraph>

                  <Paragraph className="lg:w-[9.3125rem]">{`${pnts} points`}</Paragraph>
                </div>
                <span className="hidden lg:block mt-1 w-full h-px bg-black/30"></span>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferLeaderBoard;

const info = [
  {
    img: "nova-profile",
    name: "benedict_grammarian",
    date: "13/10/24",
    pnts: 300,
  },
  {
    img: "nova-profile",
    name: "benedict_grammarian",
    date: "13/10/24",
    pnts: 300,
  },
  {
    img: "nova-profile",
    name: "benedict_grammarian",
    date: "13/10/24",
    pnts: 300,
  },
  {
    img: "nova-profile",
    name: "benedict_grammarian",
    date: "13/10/24",
    pnts: 300,
  },
  {
    img: "nova-profile",
    name: "benedict_grammarian",
    date: "13/10/24",
    pnts: 300,
  },
];
