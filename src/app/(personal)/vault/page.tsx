/* eslint-disable @next/next/no-img-element */
import AppPageHero from "@/widgets/app/page-hero";
import VaultCurrencyList from "@/widgets/pages/vault/currency-list-section";
import VaultFeaturesSection from "@/widgets/pages/vault/features-section";
import VaultHeroSection from "@/widgets/pages/vault/hero-section";
import VaultPlansSection from "@/widgets/pages/vault/plans-section";

const VaultPage = () => {
  return (
    <main>
      <VaultHeroSection />
      <VaultFeaturesSection />
      <VaultCurrencyList />
      <VaultPlansSection />
    </main>
  );
};

export default VaultPage;
