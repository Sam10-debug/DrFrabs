import { ArrowTopRightIcon } from "@/components/icons/icon";
import BusinessHeroSvg from "@/components/svg/BusinessHeroSvg";
import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import { WAIT } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

const BusinessHomeHero = () => {
  return (
  
      <section className="overflow-hidden w-full relative container-max-width px-4 pt-[7.5rem] pb-[3.5rem] lg:pt-[10rem] lg:pb-[5rem] mx-auto flex flex-col items-center justify-between">
        <div className="w-full mx-auto my-5 flex-1 relative z-[3] ">
          <div className="w-full mb-5">
            <Paragraph className="text-center font-semibold w-max rounded-full border-[0.5px] border-black/10 mx-auto my-2 py-2 px-5 bg-pink_gradient">
              Join a host of other businesses
            </Paragraph>
          </div>
          <Heading
            as="h1"
            className="uppercase font-extrabold text-center w-full"
          >
            Scale your business <LineBreak showIn="xl" /> to the next level
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center w-full max-w-full mx-auto"
          >
            Supercharge your business with the best financial resource, secure
            payment processes, <LineBreak showIn="xl" /> smooth currency
            conversion, and seamless transaction tracking.
          </Paragraph>
          <div className="w-[300px] lg:mt-16 flex justify-center my-5 max-w-[12rem] mx-auto items-center font-bold text-sm xl:text-base">
            <Button variant="default" className="text-white_f0" asChild>
              <Link className="bg-primary_black" href={WAIT} target="_blank">
                Request access
                <ArrowTopRightIcon
                  className="ml-[10px]"
                  width={10}
                  height={10}
                />
              </Link>
            </Button>
          </div>
        </div>
        <div className="shrink-0 order-1 mt-10 mb-5 xl:mb-0">
          <BusinessHeroSvg className="w-[150vw] h-[22.75rem] max-w-[150vw] xl:w-max xl:h-max shrink-0 z-[3] relative" />
        </div>
      </section>
    
  );
};

export default BusinessHomeHero;
