import BusinessExplore from "@/widgets/pages/(business)/home/BusinessExplore";
import BusinessHomeHero from "@/widgets/pages/(business)/home/BusinessHomeHero";
import BusinessLoginSection from "@/widgets/pages/(business)/home/BusinessLoginSection";
import BusinessConvert from "@/widgets/pages/(business)/home/BusinessConvert";
import BusinessInvoice from "@/widgets/pages/(business)/home/BusinessInvoice";
import BusinessSpending from "@/widgets/pages/(business)/home/BusinessSpending";
import BusinessMonitor from "@/widgets/pages/(business)/home/BusinessMonitor";
import BusinessPaymentRecieved from "@/widgets/pages/(business)/home/BusinessPaymentRecieved";
import BusinessKyb from "@/widgets/pages/(business)/home/BusinessKyb";
import BusinessScale from "@/widgets/pages/(business)/home/BusinessScale";
import BusinessReview from "@/widgets/pages/(business)/home/BusinessReview";
import BusinessMultiple from "@/widgets/pages/(business)/home/BusinessMultiple";

const Page = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <BusinessHomeHero />
      <BusinessConvert />
      <BusinessLoginSection />
      <BusinessExplore />
      <BusinessMultiple />
      <BusinessSpending />
      <BusinessMonitor />
      <BusinessPaymentRecieved />
      <BusinessKyb />
      <BusinessScale />
    </section>
  );
};

export default Page;
