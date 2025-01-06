import TuitionAccomidationSection from "@/widgets/pages/tuition/accomodation-section";
import TuitionAllowancesSection from "@/widgets/pages/tuition/allowances-section";
import TuitionCurrencySection from "@/widgets/pages/tuition/currency-section";
import TutionHomeSection from "@/widgets/pages/tuition/home-section";
import TuitionInstituitionSection from "@/widgets/pages/tuition/instituition-section";
import TuitionProcessSection from "@/widgets/pages/tuition/process.section";

const TuitionPage = () => {
  return (
    <main>
      <TutionHomeSection />
      <TuitionProcessSection />
      <TuitionCurrencySection />
      <TuitionInstituitionSection />
      <TuitionAccomidationSection />
      <TuitionAllowancesSection />
    </main>
  );
};

export default TuitionPage;
