import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const AsManyCards = () => {
  return (
    <section id="many-cards" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col-reverse xl:flex-col items-center gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center w-full max-w-[54rem]"
          >
            gET AS MANY CARD YOU NEED FOR YOUR TEAM
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center w-full max-w-[35rem]"
          >
            Whether it&apos;s 10 or 100, you can create multiple virtual or
            physical cards for each and every one of your team members.
          </Paragraph>
        </div>

        <div className="w-full flex flex-col-reverse xl:flex-row items-center justify-center gap-8 xl:gap-[5.375rem] relative xl:mt-[5.875rem]">
          <SuspenseImage
            src="/cards/card-meeting.png"
            alt="card"
            height={550}
            width={550}
            sizes="100%"
            className="h-[21rem] w-[21rem] xl:h-[32rem] xl:w-[36rem]"
          />

          <SuspenseImage
            src="/cards/top-card-stack.png"
            alt="card"
            height={309}
            width={468}
            sizes="100%"
            className="h-[18rem] w-[20rem] xl:h-[20.5rem] xl:w-[29rem]"
          />
        </div>
      </section>
    </section>
  );
};

export default AsManyCards;
