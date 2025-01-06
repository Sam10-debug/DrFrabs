import PaymentHero from "@/widgets/pages/(business)/payment/PaymentHero";
import PaymentBusiness from "@/widgets/pages/(business)/payment/PaymentBusiness";
import PaymentControl from "@/widgets/pages/(business)/payment/PaymentControl";
import PaymentSetting from "@/widgets/pages/(business)/payment/PaymentSetting";

const Page = () => {
  return (
    <section className="w-full">
      <PaymentHero />
      <PaymentControl />
      <PaymentSetting />
      <PaymentBusiness />
    </section>
  );
};

export default Page;
