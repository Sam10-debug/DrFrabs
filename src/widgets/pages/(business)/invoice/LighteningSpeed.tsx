import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const LighteningSpeed = () => {
  return (
    <section id="lightening-speed" className="w-full bg-grey_e9">
      <section className="container-max-width flex flex-col-reverse xl:flex-col items-center gap-16 xl:gap-10 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center w-full max-w-[54rem]"
          >
            one less thing to <LineBreak showIn="xl" />
            worry about
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center w-full max-w-[35rem]"
          >
            Create payment links for your business and get paid across different
            currencies
          </Paragraph>
        </div>

        <div className="w-full flex flex-col items-start gap-4 p-5 rounded-xl bg-white_f0 justify-center lg:items-center lg:flex-row lg:rounded-3xl lg:p-10">
          {info.map(({ title, desc, img }, i) => (
            <div
              key={title + i}
              className="p-3 flex flex-col lg:gap-3 xl:max-w-[30%]"
            >
              <div className="flex items-center gap-4">
                <SuspenseImage
                  src={`/business/${img}.png`}
                  alt={title}
                  height={64}
                  width={64}
                  className="w-[2rem] lg:w-[4rem]"
                />
                <Heading as="h3" className="uppercase font-bold">
                  {title}
                </Heading>
              </div>
              <Paragraph size="small" className="mt-3 lg:mt-6 w-full max-w-[35rem]">
                {desc}
              </Paragraph>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default LighteningSpeed;

const info = [
  {
    title: "save time",
    desc: "Create invoices 5x faster than traditional methods.",
    img: "save-time",
  },
  {
    title: "reduce errors",
    desc: "Our smart system minimizes manual input mistakes",
    img: "reduce-errors",
  },
  {
    title: "get paid faster",
    desc: "Convenience is everything. Give your customers the option of paying with one click",
    img: "paid-faster",
  },
];
