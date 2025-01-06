import ITBenefitSection from "@/widgets/pages/international-transfers/benefit-section";
import ITCryptoSection from "@/widgets/pages/international-transfers/crypto-section";
import ITCurrencySection from "@/widgets/pages/international-transfers/currency-section";
import ITFeesSection from "@/widgets/pages/international-transfers/fees-section";
import ITHomeSection from "@/widgets/pages/international-transfers/hero-section";
import ITMethodsSection from "@/widgets/pages/international-transfers/methods-section";
import ITOtcSection from "@/widgets/pages/international-transfers/otc-section";
import ITSafetySection from "@/widgets/pages/international-transfers/safety-section";
import ITSecuritySection from "@/widgets/pages/international-transfers/security-section";

const InternationalTransferPage = () => {
  return (
    <main className="overflow-x-hidden">
      <ITHomeSection />
      <ITSecuritySection />
      <ITFeesSection />
      <ITCryptoSection />
      <ITCurrencySection />
      <ITBenefitSection />
      <ITMethodsSection />
      <ITSafetySection />
      <ITOtcSection />
    </main>
  );
};

export default InternationalTransferPage;
