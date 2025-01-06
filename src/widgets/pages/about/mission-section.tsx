import AppTextBody from "@/widgets/app/text-body";
import DartSvg from "@/widgets/svg/dart";

const AboutMissionSection = () => {
  return (
    <section>
      <div className="content-container py-16 md:py-32">
        <AppTextBody
          inverted
          title="Our Mission"
          description={
            <div className="md:mt-20">
              At Platnova Technologies, our mission is to empower individuals
              and businesses worldwide by providing the easiest, most secure,
              and most efficient payment processing services.
              <br />
              <br />
              We are dedicated to making financial services accessible and
              efficient, envisioning a world where financial empowerment is a
              reality for everyone and integrated into their daily lives.
            </div>
          }
        />

        <div className="flex justify-end mt-5 md:-mt-10">
          <DartSvg className="w-[7.5rem] h-[7.5rem] lg:w-auto lg:h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
