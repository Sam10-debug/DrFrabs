/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";

const options = [
  {
    name: "ATM",
    description: "Withdraw funds seamlessly with your card using ATM.",
    image: "/atm.png",
  },
  {
    name: "POS",
    description: "Enjoy fast and easy withdrawals with your card via pos.",
    image: "/pos.png",
  },
  {
    name: "Mobile App",
    description:
      "Secure, easy and instant transactions with your card on your mobile app.",
    image: "/mobile-phone.png",
  },
  {
    name: "WebApp",
    description: "Make seamless online payments with your card.",
    image: "/webapp.png",
  },
];

const CardsPaymentOption = () => {
  return (
    <section className="bg-[#E9E9E9]/30 py-24">
      <div className="content-container">
        <AppTextBody
          inverted
          title={
            <>
              Do more with our <br /> multiple payment <br /> channel options.
            </>
          }
          description={
            <div className="space-y-8 md:-mt-20">
              <Paragraph size="small">
                Our multiple payment channels gives you various means you can
                access your funds at a go.
              </Paragraph>

              <div>
                <AppCta text="Get started now" />
              </div>
            </div>
          }
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-11 xl:w-10/12 mx-auto mt-24">
          {options.map(({ name, description, image }) => (
            <div key={name} className="bg-white p-10 rounded-2xl space-y-5">
              <div className="max-w-[50%] lg:max-w-[212px] mx-auto">
                <div className="h-5" />
                <img src={image} alt={name} />
              </div>
              <div className="space-y-2 lg:w-9/12">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-[#4B4B4B]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsPaymentOption;
