/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import AppPageHero from "@/widgets/app/page-hero";
import CardsBenefitsSection from "@/widgets/pages/cards/benefits-section";
import CardsControlSection from "@/widgets/pages/cards/control-section";
import CardsCustomizeSection from "@/widgets/pages/cards/customize-section";
import CardsDeliverySection from "@/widgets/pages/cards/delivery-section";
import CardFeaturesSection from "@/widgets/pages/cards/features-section";
import CardsHeroSection from "@/widgets/pages/cards/hero-section";
import CardsPaymentOption from "@/widgets/pages/cards/payment-section";
import CardsSubscriptionSection from "@/widgets/pages/cards/subscriptions-section";

const CardsPage = () => {
  return (
    <main>
      <CardsHeroSection />
      <CardsBenefitsSection />
      <CardsCustomizeSection />
      <CardFeaturesSection />
      <CardsDeliverySection />
      <CardsControlSection />
      <CardsPaymentOption />
      <CardsSubscriptionSection />
    </main>
  );
};

export default CardsPage;
