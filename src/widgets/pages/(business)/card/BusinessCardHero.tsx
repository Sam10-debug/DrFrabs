import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const BusinessCardHero = () => {
  return (
    <section id="card-hero" className="w-full bg-primary_black">
      <section className="w-full relative container-max-width px-4 py-[3.5rem] lg:py-[10rem] mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between">
        <div className="w-full max-w-[40rem] flex-1 flex flex-col items-center xl:block shrink-0 lg:mt-16 order-2 xl:order-1 relative z-[3] ">
          <h1 className="font-extrabold text-[2.5rem] xl:text-[5.5rem] self-start md:self-center text-white uppercase md:text-center xl:text-start leading-none max-w-[65rem]">
            MORE CARD, <br /> MORE <br /> CONTROL
          </h1>
          <Paragraph
            size="small"
            className="mt-6 xl:mt-8 mb-[2rem] xl:mb-8 md:text-center self-start md:self-center xl:text-start text-white w-full max-w-[35rem]"
          >
            Get multiple cards and customise them to suit your payments needs,
            giving you greater control over your business expenses.
          </Paragraph>
        </div>
        <div className="shrink-0 order-1 mb-5 xl:mt-20 xl:mb-0">
          <SuspenseImage
            src="/cards/vertical-card-stack.png"
            alt="business img"
            width={640}
            height={672}
            className="w-[21rem] h-[18.75rem] xl:w-[40rem] xl:h-[42rem] shrink-0 z-[3] relative"
            sizes="100%"
          />
        </div>
      </section>
    </section>
  );
};

export default BusinessCardHero;
