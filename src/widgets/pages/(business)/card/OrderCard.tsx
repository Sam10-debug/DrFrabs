import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const OrderCard = () => {
  const Texts = ({
    mobile,
    header,
    desc,
  }: {
    mobile?: boolean;
    header: string;
    desc: string;
  }) => (
    <div
      className={`${
        mobile ? "lg:hidden" : "hidden lg:flex"
      } flex flex-shrink flex-col gap-3 lg:gap-5 lg:w-full`}
    >
      <Heading
        as="h3"
        className="font-semibold leading-snug text-grey_500 w-auto"
      >
        {header}
      </Heading>
      <Paragraph size="small" className="leading-snug lg:w-full">
        {desc}
      </Paragraph>
    </div>
  );

  return (
    <section id="order-card" className="w-full bg-grey_e4">
      <section className="container-max-width flex flex-col items-center gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="flex items-center flex-col ">
          <Heading
            as="h2"
            className="uppercase text-center w-full max-w-[54rem]"
          >
            order for physical card and get it delivered to you
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-center w-full max-w-[35rem]"
          >
            Order physical cards for your team and have them delivered directly
            to your doorstep, getting you up and running quickly.
          </Paragraph>
        </div>
        <div className="w-full grid grid-cols-1 lg:gap-5 lg:grid-cols-2 mt-4 md:mt-[6.5rem]">
          {info.map(({ header, desc, img, bg }, index) => (
            <div
              key={index + 1}
              className={`${bg} flex flex-col rounded-[20px] gap-6 mb-16 lg:flex-row lg:gap-40 lg:items-center lg:m-6 p-0 lg:p-6 lg:justify-between`}
            >
              <div className="mx-auto lg:h-max lg:w-[32.5rem] rounded-[1.25rem]">
                <div className="w-full shadow-md flex flex-col pl-8 bg-[#F7F7F7] pt-11 lg:p-[6_0_0_6] gap-14 lg:gap-16 lg:mb-12 h-[20rem] lg:h-max rounded-[1.25rem] overflow-hidden">
                  <SuspenseImage
                    src={img}
                    alt={`img-${index + 1}`}
                    width={500}
                    height={600}
                    className="lg:self-center lg:h-max lg:w-max ml-auto mt-auto"
                  />
                </div>
                <Texts header={header} desc={desc} />
              </div>
              <Texts mobile header={header} desc={desc} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default OrderCard;

const info = [
  {
    header: "Select team members  ",
    desc: "You have options to select teams members you can assign a specific card to",
    img: "/cards/select-member.png",
    bg: "lg:bg-business_card_gradient",
  },
  {
    header: "Customize card to your taste",
    desc: "Customize your physical card colour to your specific taste with options available for you.",
    img: "/cards/customize-card.png",
    bg: "lg:bg-[#F7F7F7]",
  },
  {
    header: "Fill in your delivery information ",
    desc: "Add your delivery information and relevant contact information to get your card delivered to you.",
    img: "/cards/deliver-info.png",
    bg: "lg:bg-[#F7F7F7]",
  },
  {
    header: "Confirm order and get it delivered to you",
    desc: "Select conveniently the delivery method you want and get your card delivered to your doorstep.",
    img: "/cards/deliver-card.png",
    bg: "lg:bg-business_card_gradient",
  },
];
