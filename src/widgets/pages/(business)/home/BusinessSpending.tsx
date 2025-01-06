"use client";
import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import CardSwiper from "@/components/ui/swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css";
import Image from "next/image";

const info = [
  {
    title: "virtual",
    desc: "Create a virtual card that works for all online transactions to seamlessly make payments and simplify international transactions.",
    img: "virtual-card",
  },
  {
    title: "master",
    desc: "Get a MasterCard to streamline your business finances and simplify international transactions.",
    img: "master-card",
  },
  {
    title: "visa",
    desc: "Get a Visa card to streamline your business finances and simplify international transactions.",
    img: "visa-card",
  },
  {
    title: "verve",
    desc: "Get a Verve card to streamline your business finances and simplify international transactions.",
    img: "verve-card",
  },
];

const BusinessSpending = () => {
  return (
    <>
      <section className="w-full relative flex flex-col items-center gap-10 xl:gap-0 px-4 xl:px-[17vw] py-[3.5rem] lg:py-[9rem] m-0">
        <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 bg-peach_section_gradient"></div>
        <div className="w-full flex flex-col items-center z-[2]">
          <div className="my-5 bg-white rounded-full w-max px-6 py-3">
            <Paragraph size="small" className="text-center">
              Easy payment
            </Paragraph>
          </div>
          <div className="flex items-center order-1 flex-col mb-6 lg:mb-16 lg:order-0">
            <Heading
              as="h2"
              className="uppercase text-center w-full max-w-[42rem]"
            >
              global card experience for your business
            </Heading>
            <Paragraph
              size="small"
              className="mt-3 text-center xl:w-[492px] w-[250px]"
            >
              Get virtual and physical cards to manage your business expenses,
              and make payments globally.
            </Paragraph>
            <GetStartedOutlineBtn toWaitList className="mt-3 xl:mt-6" />
          </div>

          <CardSwiper
            spaceBetween={40}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: "custom-active-bullet",
              bulletClass: "custom-inactive-bullet",
            }} // Show pagination dots
            loop={true} // Enable looping slides
            className="my-3 w-full bg-transparent h-[25rem] lg:order-1 xl:h-[571px]"
            info={info}
            autoplay={{
              delay: 3000,
            }}
          />
        </div>
      </section>
      <Image
        src="/business/business-spending-svg.svg"
        alt="business spending svg"
        width={825}
        height={171}
        className="z-[2] mx-auto"
      />
    </>
  );
};

export default BusinessSpending;
