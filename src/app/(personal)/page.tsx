import type { Metadata } from "next";
import React from "react";

import HomeHeroSection from "@/widgets/pages/home/hero-section";

const LazyHomeBillsSection = React.lazy(
  () => import("@/widgets/pages/home/bills-section")
);
const LazyHomeBenefitsSection = React.lazy(
  () => import("@/widgets/pages/home/benefits-section")
);
const LazyHomeCardSection = React.lazy(
  () => import("@/widgets/pages/home/card-section")
);
const LazyHomeLifestyleSection = React.lazy(
  () => import("@/widgets/pages/home/lifestyle-section")
);
const LazyHomeServicesSection = React.lazy(
  () => import("@/widgets/pages/home/services-section")
);
const LazyHomeTuitionSection = React.lazy(
  () => import("@/widgets/pages/home/tuition-section")
);
const LazyHomeVaultSection = React.lazy(
  () => import("@/widgets/pages/home/vault-section")
);

export const metadata: Metadata = {
  title: "Platnova | Your all-in-one money and lifestyle app",
  description:
    "Global money transfers, secure savings, bill payments, defi deposits, and swaps; physical and virtual cards; a multicurrency wallet; gift cards; tuition fee payments; a vault for saving in Pounds, Dollars, and Naira; flight bookings; and lifestyle services such as booking lounges, stays, and vacations.",
  keywords:
    "Payment, send money, pay bills, buy airtime, receive money, virtual cards, purchase physical card, receive money from the US, create a bank account, create USD bank account, open an account in the US, open pounds account, get a USD card, flight bookings, book flights, vacations, staycations, save, savings, savings on Vault, Vault, lifestyle",

  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_SITE_URL as string) || "https://platnova.com"
  ),
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HomeHeroSection />
      <LazyHomeServicesSection />
      <LazyHomeCardSection />
      <LazyHomeBillsSection />
      <LazyHomeBenefitsSection />
      <LazyHomeVaultSection />
      <LazyHomeLifestyleSection />
      <LazyHomeTuitionSection />
    </main>
  );
}
