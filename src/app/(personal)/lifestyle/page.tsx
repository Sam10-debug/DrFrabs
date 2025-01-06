/* eslint-disable @next/next/no-img-element */
import AppPageHero from "@/widgets/app/page-hero";
import LifestyleBookSection from "@/widgets/pages/lifestyle/book-section";
import LifestyleHeroSection from "@/widgets/pages/lifestyle/hero-section";
import LifestyleLoungesSection from "@/widgets/pages/lifestyle/lounges-section";
import LifestyleRestaurantSection from "@/widgets/pages/lifestyle/restaurant-section";
import LifestyleStaysSection from "@/widgets/pages/lifestyle/stays-section";

const LifeStylePage = () => {
  return (
    <>
      <LifestyleHeroSection />
      <LifestyleBookSection />
      <LifestyleStaysSection />
      <LifestyleRestaurantSection />
      <LifestyleLoungesSection />
    </>
  );
};

export default LifeStylePage;
