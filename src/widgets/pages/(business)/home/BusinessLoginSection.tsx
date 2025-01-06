import Heading from "@/components/typography/Heading";
import LineBreak from "@/components/typography/LineBreak";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const BusinessLoginSection = () => {
  return (
    <section className="w-full mx-auto bg-white_f0 ">
      <section className="container-max-width mx-auto flex flex-col items-center gap-10 xl:gap-6 px-4 md:px-0 py-[3.5rem] lg:py-[9rem]">
        <Heading
          as="h1"
          className="order-2 lg:order-1 uppercase font-extrabold text-center lg:text-left lg:self-start text-[1.37rem] xl:text-[3rem] "
          noLineHeight
        >
          SET UP YOUR ACCOUNT <LineBreak /> IN SECONDS
        </Heading>
        <div className="lg:order-2 w-full flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[50%] lg:mt-20 mb-8 lg:mb-0 relative flex flex-col">
            <SuspenseImage
              src="/business/activation-identification.png"
              alt="account activation identification"
              width={411}
              height={279}
              sizes="100%"
              className="z-[2] w-[70%] place-self-end"
            />
            <SuspenseImage
              src="/business/activation-steps.png"
              alt="account activation steps"
              width={417}
              height={309}
              sizes="100%"
              className="z-[2] w-[70%] place-self-start"
            />
            <SuspenseImage
              src="/business/acc-activation-rectangle.png"
              alt="account activation identification"
              width={500}
              height={286}
              sizes="100%"
              className="w-3/4 z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col text-center gap-7 w-full lg:w-max xl:gap-10 order-2">
            {info.map(({ img, header, body, bg, alt }, i) => (
              <div
                key={i + 1}
                className={`${bg} flex px-6 py-4 lg:py-6 lg:pl-6 lg:pr-20 shadow-lg rounded-2xl items-center gap-3`}
              >
                <SuspenseImage
                  src={`/business/${img}.png`}
                  alt={alt}
                  width={50}
                  height={50}
                  sizes="100%"
                  className="w-8 xl:w-max xl:h-max order-0"
                />
                <div className="ml-3 flex flex-col gap-3">
                  <Heading
                    as="h3"
                    className="text-left text-[1rem] font-bold xl:text-[1.25rem] "
                    noLineHeight
                  >
                    {header}
                  </Heading>
                  {body && (
                    <Paragraph
                      size="small"
                      className="text-left leading-6 max-w-52 xl:max-w-80"
                    >
                      {body}
                    </Paragraph>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BusinessLoginSection;

const info = [
  {
    img: "create-account",
    header: "01 create an account",
    body: "Easily create an account for your business in minutes.",
    bg: "bg-[#F1F1F1]",
    alt: "create account",
  },
  {
    img: "add-personal-info",
    header: "02 add personal info.",
    body: "Add your correct personal information",
    bg: "bg-[#F3F4E7]",
    alt: "personal info",
  },
  {
    img: "add-business-info",
    header: "03 add business info.",
    body: "Add all relevant information requested in the signup form",
    bg: "bg-white_f0",
    alt: "business info",
  },
  {
    img: "start-banking",
    header: "04 start banking",
    body: "Start enjoyinng Platnova experience",
    bg: "bg-[#E7F4E7]",
    alt: "start banking",
  },
];
