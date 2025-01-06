import RefillAirtimeSection from "@/widgets/pages/refill/airtime-section";
import RefillGiftcardsSection from "@/widgets/pages/refill/giftcards-section";
import RefillHeroSection from "@/widgets/pages/refill/hero-section";

const RefillPage = () => {
  return (
    <main>
      <RefillHeroSection />
      <RefillGiftcardsSection />
      <RefillAirtimeSection />
    </main>
  );
};

export default RefillPage;
