import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";

/* eslint-disable @next/next/no-img-element */
const CardsDeliverySection = () => {
  return (
    <section className="pt-24">
      <div className="content-container">
        <AppTextBody
          inverted
          title={
            <>
              order and get your
              <br /> physical card <br />
              Delivered to your doorstep
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Order for your Platnova card and get it delivered to you
                anywhere you are within 48hrs.
              </Paragraph>

              <div>
                <AppCta text="Get started" />
              </div>
            </div>
          }
        />

        <div className="max-w-[400px] lg:max-w-[650px] ml-auto mt-10 md:mt-0">
          <img
            src="/verve-mastercard-visa.png"
            alt="Pay for netflix, spotify or shop on amazon with platnova card"
          />
        </div>
      </div>
    </section>
  );
};

export default CardsDeliverySection;
