import PreferredCurrencyGuy from "@/components/svg/PreferredCurrencyGuy";
import Paragraph from "@/components/typography/Paragraph";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const OtcPaymentSection = () => {
  return (
    <section className="pt-24">
      <div className="content-container">
        <AppTextBody
          title={<>Get paid in your preferred currency</>}
          description={
            <div className="space-y-10">
              <Paragraph size="small" className="mt-5 lg:mt-10 font-medium">
                Whether you are a business owner, salary earner or freelancer,
                you can securely receive payment no matter the amount, from any
                part of the world in your preferred currency.
              </Paragraph>
              <p></p>
            </div>
          }
        />
        <div className="relative h-max pt-10">
          <Image
            className="z-[4] absolute top-36 lg:top-28 right-0 w-[4.312rem] lg:w-max"
            src="/revolut.png"
            width={194}
            height={187}
            alt="revolut"
          />
          <Image
            className="z-[3] absolute top-44 right-16 lg:top-64 lg:right-44 w-[4.312rem] lg:w-max"
            src="/paypal.png"
            width={194}
            height={187}
            alt="paypal"
          />
          <div className="relative flex flex-col w-full px-4 lg:w-max">
            <Image
              src="/deposit-success.png"
              width={438}
              height={123}
              alt="deposit successful"
              className="z-[2] lg:absolute lg:-right-64 lg:top-32 w-full lg:w-[27.36rem] lg:h-[7.69rem]"
            />
            <PreferredCurrencyGuy className="mt-8 lg:mt-0 w-full h-max lg:w-max" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtcPaymentSection;
