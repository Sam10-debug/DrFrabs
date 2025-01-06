import AboutHeroSection from "@/widgets/pages/about/hero-section";
import AboutHighlightsSection from "@/widgets/pages/about/hightlights-section";
import AboutMissionSection from "@/widgets/pages/about/mission-section";
import AboutProductsSection from "@/widgets/pages/about/products-section";
import AboutPublicationSection from "@/widgets/pages/about/publications-sections";
import AboutStandardSection from "@/widgets/pages/about/standards-section";
import AboutTeamSection from "@/widgets/pages/about/team-section";
import AboutVisionSection from "@/widgets/pages/about/vision-section";

const AboutPage = () => {
  return (
    <main className="overflow-x-hidden">
      <AboutHeroSection />
      <AboutProductsSection />
      <AboutMissionSection />
      <AboutVisionSection />
      <AboutHighlightsSection />
      <AboutStandardSection />
      <AboutTeamSection />
      <AboutPublicationSection />
    </main>
  );
};

export default AboutPage;
