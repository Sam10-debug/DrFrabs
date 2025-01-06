import AppTextBody from "@/widgets/app/text-body";
import VisionSvg from "@/widgets/svg/vision";

const AboutVisionSection = () => {
  return (
    <section>
      <div className="content-container">
        <AppTextBody
          title="Our Vision"
          description={
            <div className="md:mt-20">
              We aim to be the most trusted and innovative payment processing
              company in the world. We envision a future where financial
              transactions are easy, fast, and secure for everyone, everywhere.
              By leveraging cutting-edge technology and our dedication to
              excellence, we strive to revolutionize finance and empower
              millions to achieve their goals.
              <br />
              <br />
              Join us at Platnova Technologies Limited and be part of a
              financial revolution that is shaping the future of global
              financial services.
            </div>
          }
        />

        <div className="mt-16 md:mt-5">
          <VisionSvg className="w-[7.5rem] h-[7.5rem] lg:w-auto lg:h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
