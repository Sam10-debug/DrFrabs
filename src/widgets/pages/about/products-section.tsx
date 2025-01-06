import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const services = [
  {
    title: "Multi-Currency Wallet (NGN, USD, GBP, EUR, etc)",
    icon: "/multi-currency.png",
  },
  {
    title: "Virtual Card Creation and Funding",
    icon: "/cards.png",
  },
  {
    title: "Bill Payments",
    icon: "/bill-payments.png",
  },
  {
    title: "Local & Int’l Gift Cards",
    icon: "/gift-card.png",
  },

  {
    title: "Tuition & Educational Payments",
    icon: "/tuition.png",
  },

  {
    title: "Multi-currency Saving (Vault)",
    icon: "/vault-icon.png",
  },

  {
    title: "300+ Digital Currency Swaps",
    icon: "/crypto.png",
  },

  {
    title: "Card, Bank Transfers, Mobile Money, USSD",
    icon: "/transfer-about.png",
  },
];

const AboutProductsSection = () => {
  return (
    <section className="bg-[#E9E9E9]/30">
      <div className="content-container py-24">
        <AppTextBody
          title="product and services"
          description={
            <div className="md:mt-20">
              Our wide range of products and services includes global money
              transfers, secure savings, crypto deposits and swaps (300+
              Cryptocurrency Swaps), physical and virtual cards, a multicurrency
              wallet (NGN, USD, GBP, EUR, etc.), gift cards, global airtime and
              data top-up, bill payments, tuition and educational payments,
              Vault (for saving in Pounds, Dollars, and Naira), flight bookings,
              and lifestyle services such as booking lounges, stays, and
              vacations.
            </div>
          }
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map(({ title, icon }, index) => (
            <div
              key={`service-${index}`}
              className="bg-white rounded-2xl py-6 flex flex-col items-center gap-4 px-10 text-center"
            >
              <div className="relative h-20 w-20">
                <Image src={icon} alt={title} layout="fill" />
              </div>
              <p className="font-medium opacity-80">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProductsSection;
