import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SuspenseImage from "@/components/ui/SuspenseImage";

const TrackPayments = () => {
  return (
    <section id="track-payments" className="w-full bg-grey_e9">
      <section className="container-max-width flex flex-col lg:flex-row justify-between gap-16 xl:gap-0 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
        <div className="relative flex flex-col order-2 lg:order-1 gap-0 lg:gap-2">
          <Heading
            as="h2"
            className="uppercase text-primary_black font-extrabold w-full max-w-[54rem]"
          >
            whip up invoices at
            <br className="hidden xl:inline-block" /> lightening speed
          </Heading>
          <Paragraph
            size="small"
            className="mt-6 text-primary_black w-full max-w-[35rem]"
          >
            Create beautiful invoices that reflect your business branding and
            capabilities.
          </Paragraph>
          <div className="mt-8 lg:mt-12 w-full flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16">
            <div className="flex flex-col drop-shadow-xl max-w-[35.69rem]">
              <div
                style={{
                  background:
                    "linear-gradient(126.81deg, #222222 16%, #383838 51.26%, #3C3C3C 85.15%)",
                }}
                className="w-full h-1/2 px-[1.875rem] rounded-t-[1.25rem] py-11 xl:px-8 xl:py-10 shrink-0"
              >
                <div className="w-full pr-2">
                  <Heading
                    as="h3"
                    className="font-semibold text-white text-[1.25rem] xl:text-[2rem] w-full mt-4"
                  >
                    Track Payments <br /> Easily
                  </Heading>
                  <Paragraph className="mt-4 xl:mt-6 text-white leading-snug font-normal">
                    Create payment links for your business and get paid across
                    different currencies
                  </Paragraph>
                </div>
              </div>
              <div className="w-full h-1/2 py-16 px-6 bg-white_f0 rounded-b-[1.25rem]">
                <SuspenseImage
                  src="/business/invoice-successful.png"
                  alt="boost cash"
                  width={491}
                  height={196}
                  sizes="100%"
                  className="mx-auto max-w-10/12 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col drop-shadow-xl max-w-[35.69rem]">
              <div className="w-full h-1/2 px-[1.875rem] bg-white_f0 rounded-t-[1.25rem] py-11 xl:px-8 xl:py-10 shrink-0">
                <div className="w-full pr-2">
                  <Heading
                    as="h3"
                    className="font-semibold text-primary_black text-[1.25rem] xl:text-[2rem] w-full mt-4"
                  >
                    Boost Your Cash <br /> Flow
                  </Heading>
                  <Paragraph className="mt-4 xl:mt-6 text-primary_black leading-snug font-normal">
                    Monitor your cash flow, stay organized, and stop sweating.
                  </Paragraph>
                </div>
              </div>
              <div className="w-full h-1/2 pb-4 md:pb-0 bg-white_f0 rounded-b-[1.25rem]">
                <SuspenseImage
                  src="/business/boost-cash.png"
                  alt="boost cash"
                  width={485}
                  height={293}
                  className="mx-auto w-[90%] xl:w-[80%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TrackPayments;
