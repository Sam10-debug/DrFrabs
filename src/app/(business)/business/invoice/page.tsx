import HowItWorks from "@/widgets/pages/(business)/invoice/HowItWorks";
import JoinOthers from "@/widgets/pages/(business)/invoice/JoinOthers";
import LighteningSpeed from "@/widgets/pages/(business)/invoice/LighteningSpeed";
import RequestPayment from "@/widgets/pages/(business)/invoice/RequestPayment";
import SetPayment from "@/widgets/pages/(business)/invoice/SetPayment";
import TrackPayments from "@/widgets/pages/(business)/invoice/TrackPayments";
import TransformBilling from "@/widgets/pages/(business)/invoice/TransformBilling";

const Page = () => {
  return (
    <section className="w-full">
      <RequestPayment />
      <LighteningSpeed />
      <TransformBilling />
      <TrackPayments />
      <SetPayment />
      <HowItWorks />
      <JoinOthers />
    </section>
  );
};

export default Page;
