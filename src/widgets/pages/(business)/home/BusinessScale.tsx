import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import { ArrowTopRightIcon } from "@/components/icons/icon";
import Heading from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { GET_STARTED_LINK, WAIT } from "@/constants/links";
import Link from "next/link";

const BusinessScale = () => {
  return (
    <section className="w-full bg-peach">
      <section className="w-full flex flex-col items-center container-max-width mx-auto px-4 py-20 md:py-40">
        <Heading as="h2" className="uppercase text-center w-full max-w-[54rem]">
          LET US HELP YOU SCALE TO THE NEXT LEVEL
        </Heading>
        <GetStartedOutlineBtn className="mt-12 lg:mt-20" toWaitList />
      </section>
    </section>
  );
};

export default BusinessScale;
