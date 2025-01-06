"use client";
import { InscribedArrow } from "@/components/icons/icon";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import { useState } from "react";

const PaymentFaq = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  return (
    <section className="w-full max-w-[800px] md:w-11/12 xl:w-10/12 flex flex-col items-center gap-16 xl:gap-14 px-4 xl:px-0 py-[3rem] md:py-[3.5rem] xl:py-[9rem] lg:w-10/12 mx-auto">
      <div className="flex items-center flex-col ">
        <Heading as="h2" className="uppercase text-center">
          frequently asked questions
        </Heading>
      </div>

      <div className="w-full max-w-[53rem] divide-y-2 border-[#B9B9B9] ">
        {faq.map((item, i) => (
          <div key={i + 1} className="w-full ">
            <div className="w-full flex justify-between gap-6 py-5 ">
              <h3 className="text-base lg:text-[2rem] font-medium text-grey_500">
                {item.header}
              </h3>
              <button
                className={`shrink-0 ${
                  i + 1 === activeFaq ? "-rotate-180" : ""
                } `}
                type="button"
                onClick={() => setActiveFaq(i + 1)}
              >
                <InscribedArrow className="size-5 lg:size-8" />
              </button>
            </div>
            {item?.body && activeFaq === i + 1 && (
              <Paragraph
                size="small"
                className="pb-5 font-normal text-grey_400"
              >
                {item?.body}
              </Paragraph>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentFaq;

const faq = [
  {
    header: "What are payment links?",
    body: `Payment Links are links or URLs that can be used to accept online payments anywhere or anytime. Essentially, it is a ‘Pay Now’ button that prompts customers to pay.Once a customer clicks the payment button, they’re taken to a payment page showing the amount due. Payment is secured through the link while you get real-time notifications for payment received.`,
  },
  {
    header: "How Does it work?",
  },
  {
    header: "Benefits of Payment Links For Customers",
  },
  {
    header: "Benefits of Using Payment Links For Businesses",
  },
  {
    header: "How secure payment link?",
  },
];
