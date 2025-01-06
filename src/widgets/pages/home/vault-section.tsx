import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import { imageBlur } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const HomeVaultSection = () => {
  return (
    <section id="vault-section" className="py-24">
      <div className="content-container">
        <AppTextBody
          containerId="vault-section"
          inverted
          title="Get Favorable Returns on your Money"
          description={
            <div className="space-y-10">
              <Paragraph size="small">
                Grow your wealth, beat inflation!
                <br /> Earn interest today!
              </Paragraph>

              <div>
                <AppCta text="Start a savings plan" link="/vault" />
              </div>
            </div>
          }
        />

        <div className="mt-14 aspect-video relative rounded-3xl md:rounded-[60px] overflow-hidden p-fade">
          <Image
            src="/vault.png"
            alt="platnova vault"
            className="rounded-3xl"
            fill
            sizes="(max-width: 640px) 60vw, 30vw"
            {...imageBlur}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeVaultSection;
