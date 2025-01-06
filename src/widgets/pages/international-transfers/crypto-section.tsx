import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const ITCryptoSection = () => {
  return (
    <section className="bg-white_f9">
      <div className="content-container py-16 md:py-32">
        <AppTextBody
          inverted
          containerId="bills-section"
          title={
            <>
              GOT CRYPTO AND <br /> NOT FIAT?
            </>
          }
          description={
            <div className="space-y-10">
              <Paragraph size="small" className="font-medium">
                Send and receive money with crypto. It is easy and instant with
                zero HODL.
              </Paragraph>

              <div>
                <AppCta text="Try now" />
              </div>
            </div>
          }
        />

        <div className="relative aspect-[16/6] mt-10">
          <Image src="/crypto-illustration.png" alt="illustration" fill />
        </div>
      </div>
    </section>
  );
};

export default ITCryptoSection;
