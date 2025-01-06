import Heading from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { WAIT } from "@/constants/links";
import Link from "next/link";

const JoinOthers = () => {
  return (
    <section id="join-others" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col items-center gap-16 xl:gap-10 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <Heading as="h2" className="uppercase text-center w-full max-w-[54rem]">
          join other business <br /> owners
        </Heading>
        <Button variant="black_outline" className="w-[12rem] h-[3rem]" asChild>
          <Link href={WAIT}>Start your journey here</Link>
        </Button>
      </section>
    </section>
  );
};

export default JoinOthers;
