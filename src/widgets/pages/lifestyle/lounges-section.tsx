/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const LifestyleLoungesSection = () => {
  return (
    <>
      <section className="py-10 md:py-24">
        <div className="content-container">
          <AppTextBody
            inverted
            title="Lounges"
            description={
              <div className="space-y-8">
                <Paragraph size="small">
                  Need to unwind? We&apos;ve got you covered. Check out the best
                  bars, clubs, pubs and lit nightlife around you.
                </Paragraph>

                <div>
                  <AppCta text="Try now" />
                </div>
              </div>
            }
          />

          <div className="md:w-1/2 max-w-[608px] ml-auto relative aspect-[1.2/1] mt-10 md:mt-0">
            <div>
              <Image src="/lounge.png" alt="lounge" layout="fill" />
            </div>

            <div className="absolute -bottom-10 -left-1/3 hidden md:block">
              <div className="relative">
                <img
                  src="/party-cheers.png"
                  alt="champagne glasses"
                  className="max-w-[180px] lg:max-w-[292px]"
                />

                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifestyleLoungesSection;
