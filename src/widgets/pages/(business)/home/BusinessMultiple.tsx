import GetStartedOutlineBtn from "@/components/button/GetStartedOutlineBtn";
import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const BusinessMultiple = () => {
  return (
    <section className="flex flex-col md:items-center gap-10 container-max-width px-4 xl:px-0 py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
      <div className="flex-1 w-10/12 xl:w-full flex flex-col items-center">
        <Heading as="h2" className="uppercase self-start">
          explore multiple <LineBreak /> payment options
        </Heading>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-16">
        <div className="w-10/12 mb-16 lg:mb-0 relative rounded-2xl flex pt-10 pr-10 shadow-xl lg:max-w-[45%]">
          <SuspenseImage
            src="/business/schedule-payment.png"
            alt="explore multiple payments"
            width={518}
            height={545}
            className="self-end rounded-bl-2xl"
          />
          <SuspenseImage
            src="/business/schedule-reminder.png"
            alt="explore multiple payments"
            width={283}
            height={173}
            className="w-[9.875rem] md:w-max absolute -bottom-8 md:-bottom-16 -right-12"
          />
        </div>
        <div className="flex-grow w-full lg:max-w-[40%]">
          {info.map(({ title, desc }, i) => (
            <div key={title + i} className="flex flex-col lg:gap-2">
              <Heading as="h3" className="uppercase font-extrabold">
                {title}
              </Heading>
              <Paragraph
                size="small"
                className="mb-8 mt-[1.5rem] leading-snug xl:mb-[2.5rem]"
              >
                {desc}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessMultiple;

const info = [
  {
    title: "schedule payment anytime",
    desc: "Scheduled payments enable you to automate recurring payments by setting them to be processed on predetermined dates.",
  },
  {
    title: "Set payment reminders",
    desc: "Payment reminder ensures you never miss a due date by alerting your customers in advance, giving them time to manage and make timely payments.",
  },
];
