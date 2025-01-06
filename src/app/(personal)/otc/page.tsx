import OtcBenefitsSections from "@/widgets/pages/otc/benefits-section";
import OtcHeroSection from "@/widgets/pages/otc/hero-section";
import OtcPaymentSection from "@/widgets/pages/otc/payment-section";
import OtcProcedureSection from "@/widgets/pages/otc/procedure-section";

const OtcPage = () => {
  return (
    <main>
      <OtcHeroSection />
      <OtcBenefitsSections />
      <OtcPaymentSection />
      <OtcProcedureSection />
    </main>
  );
};

export default OtcPage;
