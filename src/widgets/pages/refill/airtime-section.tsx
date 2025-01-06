/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";

const RefillAirtimeSection = () => {
  return (
    <section className="pt-24">
      <div className="content-container">
        <AppTextBody
          title={
            <>
              Purchase airtime <br /> and data{" "}
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                You can easily buy your data and airtime for yourself or others
                across any network globally. Supports up to 30+ countries.
              </Paragraph>

              <div>
                <AppCta text="Buy now" />
              </div>
            </div>
          }
        />

        <div className="max-w-[50%] xl:max-w-[627px] mt-5 md:-mt-10">
          <div>
            <img src="/buy-mobile-data-with-platnova.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefillAirtimeSection;
