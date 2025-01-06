import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const plans = [
  {
    currency: "NGN",
    duration: "3 months",
    description: (
      <>
        Save for 90 days and get <b>2.5% ROI.</b> That is, if you save{" "}
        <b>NGN1,000,000</b> for a duration of <b>3 months</b>, you will receive
        a total amount of <b>NGN 1,025,000 (capital + interest)</b> paid
        directly to your wallet.
      </>
    ),
    rate: "2.5%",
  },
  {
    currency: "NGN",
    duration: "6 months",
    description: (
      <>
        Save for 120 days and get <b>5.4% ROI</b>. That is, if you save{" "}
        <b>NGN1,000,000</b> for a duration of <b>6 months</b>, you will receive
        a total amount of <b>NGN1,054,000 (capital + interest)</b> paid directly
        to your wallet.
      </>
    ),
    rate: "5.4%",
  },
  {
    currency: "NGN",
    duration: "9 months",
    description: (
      <>
        Save for 270 days and get <b>8.4% ROI.</b> That is, if you save{" "}
        <b>NGN1,000,000</b> for a duration of <b>9 months</b>, you will receive
        a total amount of <b>NGN 1,084,000 (capital + interest)</b> paid
        directly to your wallet.
      </>
    ),
    rate: "8.4%",
  },
  {
    currency: "NGN",
    duration: "12 months",
    description: (
      <>
        Save for 90 days and get <b>11.5% ROI.</b> That is, if you save{" "}
        <b>NGN1,000,000</b> for a duration of <b>12 months</b>, you will receive
        a total amount of <b>NGN 1,115,000 (capital + interest)</b> paid
        directly to your wallet.
      </>
    ),
    rate: "11.5%",
  },
];

const VaultPlansSection = () => {
  return (
    <section className="py-24">
      <div className="content-container">
        <AppTextBody
          inverted
          title="Save in your favorite currency"
          description={
            <div className="space-y-8">
              <Paragraph size="small">
                You can select how you want to save from our 4 savings plan. The
                longer you save, the higher your ROI.
              </Paragraph>

              <div>
                <AppCta text="Start here" />
              </div>
            </div>
          }
        />

        <div className="bg-[#E9E9E9]/30 px-5 py-9 md:p-16 rounded-[40px] grid lg:grid-cols-2 gap-y-4 lg:gap-y-10 gap-x-6 mt-20">
          {plans.map(({ duration, currency, description, rate }) => (
            <div
              key={duration}
              className="bg-white rounded-2xl px-4 py-5 flex gap-8"
            >
              <div className="flex gap-3">
                <div className="flex">
                  <div className="relative h-6 w-6">
                    <Image
                      src={`/country-images/${currency}.png`}
                      alt={currency}
                      layout="fill"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-sm">{duration}</p>
                  <p className="text-xs opacity-70">{description}</p>
                </div>
              </div>
              <div>
                <div className="bg-[#EAE4FE] rounded-full px-2.5 py-1">
                  <p className="text-brand text-sm">{rate}</p>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default VaultPlansSection;
