/* eslint-disable @next/next/no-img-element */
import AppTextBody from "@/widgets/app/text-body";

const CardsSubscriptionSection = () => {
  return (
    <section className="py-10 md:py-24">
      <div className="content-container">
        <AppTextBody
          title={<>Get the card that works for all your subscriptions.</>}
          description="Manage your digital subscriptions without stress. You can make payments smoothly for all your subscriptions using the Platnova virtual card."
        />
        <div className="mt-10">
          <div className="md:bg-[linear-gradient(169.83deg,#F6E9F0_-14.15%,#FFFFFF_93.88%)] md:flex items-center rounded-2xl overflow-hidden md:shadow-[0px_4px_30px_rgba(0,0,0,0.055)]">
            <div className="md:w-1/2 xl:w-auto">
              <div className="mb-10 md:mb-0 md:w-8/12 mx-auto">
                <img
                  src="/subscriptions-with-platnova-card.png"
                  alt="apple pay, youtube, spotify, amazon, netflix, airbnb payments with platnova card"
                />
              </div>
            </div>
            <div className="max-w-[539px] md:w-1/2 xl:w-auto">
              <img
                src="/woman-holding-phone.png"
                alt="woman paying bills with platnova card"
                className="rounded-3xl md:rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSubscriptionSection;
