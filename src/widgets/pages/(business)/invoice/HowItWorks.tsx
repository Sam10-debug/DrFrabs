import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-grey_e9">
      <section className="container-max-width flex flex-col items-center gap-16 xl:gap-10 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col">
          <Heading
            as="h2"
            className="uppercase text-center w-full max-w-[54rem]"
          >
            how it works
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center w-full max-w-[35rem]"
          >
            Stay on top of your finances with real-time{" "}
            <LineBreak showIn="lg" /> payment updates.
          </Paragraph>
        </div>
        <div className="w-full xl:w-max flex flex-col items-center gap-3 md:grid md:grid-cols-2 lg:gap-6">
          {info.map(({ img }, i) => (
            <SuspenseImage
              key={img + i}
              src={`/business/${img}.png`}
              alt={img}
              width={492}
              height={422}
              className="w-full xl:w-max max-w-[30.75rem]"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;

const info = [
  {
    img: "fill-in-product-info",
  },
  {
    img: "add-item-details",
  },
  {
    img: "set-invoice-price",
  },
  {
    img: "payment-update",
  },
];
