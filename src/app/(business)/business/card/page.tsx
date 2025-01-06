import AsManyCards from "@/widgets/pages/(business)/card/AsManyCards";
import BusinessCardHero from "@/widgets/pages/(business)/card/BusinessCardHero";
import CardExperience from "@/widgets/pages/(business)/card/CardExperience";
import OrderCard from "@/widgets/pages/(business)/card/OrderCard";
import SetUpCards from "@/widgets/pages/(business)/card/SetUpCards";

const Page = () => {
  return (
    <section className="w-full">
      <BusinessCardHero />
      <SetUpCards />
      <AsManyCards />
      <CardExperience />
      <OrderCard />
    </section>
  );
};

export default Page;
