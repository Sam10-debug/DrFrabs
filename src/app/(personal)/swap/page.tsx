import SwapCurrencySection from "@/widgets/pages/swap/currency-section";
import SwapHeroSection from "@/widgets/pages/swap/hero-section";
import SwapMethodsSection from "@/widgets/pages/swap/methods-section";
import SwapProcedureSection from "@/widgets/pages/swap/procedure-section";
import SwapRatesSection from "@/widgets/pages/swap/rates-section";

const SwapPage = () => {
  return (
    <main>
      <SwapHeroSection />
      <SwapCurrencySection />
      <SwapMethodsSection />
      <SwapRatesSection />
      <SwapProcedureSection />
    </main>
  );
};

export default SwapPage;
