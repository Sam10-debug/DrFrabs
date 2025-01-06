"use client";
// Import Swiper React components
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";

type CardSwiperProps = SwiperProps & {
  info: Array<{ title: string; desc: string; img: string }>;
};

const CardSwiper = ({ info, ...rest }: CardSwiperProps) => {
  return (
    <Swiper
      {...rest}
      // Enable modulesz
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    >
      {info.map((item, i) => (
        <SwiperSlide key={item.title + i}>
          <div className="mx-auto w-full h-[90%] bg-swiper_card_gradient shadow-lg md:w-[95%] md:h-[90%] overflow-hidden rounded-2xl relative flex flex-col justify-between items-center gap-3">
            <div className="w-full px-5 flex-1 flex flex-col md:items-center justify-center gap-2">
              <Heading
                as="h3"
                className="mt-4 uppercase font-base md:text-center w-full"
              >
                {item.title}
              </Heading>
              <Paragraph className="mt-3 md:text-center xl:w-[492px] w-[250px]">
                {item.desc}
              </Paragraph>
            </div>
            <Image
              src={`/business/${item.img}.png`}
              alt="card"
              height={589}
              width={370}
              sizes="100%"
              className="w-[280px] md:w-[320px] lg:w-max"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
