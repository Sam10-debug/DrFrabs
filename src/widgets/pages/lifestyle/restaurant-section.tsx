import Paragraph from "@/components/typography/Paragraph";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const restaurants = [
  ["panama", "south-africa"],
  ["canada", "ghana"],
  ["nigeria", "dubai"],
];

const LifestyleRestaurantSection = () => {
  return (
    <>
      <section className="bg-[#E9E9E9]/30 md:py-16 py-10">
        <div className="content-container">
          <AppTextBody
            title={<>discover the most affordable restaurant near you</>}
            description={
              <div className="space-y-8">
                <Paragraph size="small">
                  Discover the perfect food spot near you to satisfy your
                  cravings.
                </Paragraph>

                <div>
                  <AppCta text="Try now" />
                </div>
              </div>
            }
          />

          <div className="py-8 md:py-16 px-5 md:px-10 lg:px-16 xl:px-28 bg-white rounded-[40px] mt-16 grid md:grid-cols-3 gap-4">
            {restaurants.map((r, index) => (
              <div
                key={`restaurant-group-${index}`}
                className="flex flex-col gap-10 lg:gap-16 lg:[&:nth-child(2)]:pt-10 [&:nth-child(2)]:pt-6"
              >
                {r.map((restaurant) => (
                  <div
                    key={restaurant}
                    className="relative aspect-square h-[250px] md:h-[180px] lg:h-[220px] xl:h-[258px]"
                  >
                    <Image
                      src={`/${restaurant}.png`}
                      alt={restaurant}
                      layout="fill"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <svg
        width="100%"
        viewBox="0 0 1440 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M215.47 59.6613H0V0H1440V185L417.703 185C403.905 185 390.528 180.244 379.827 171.534L325.113 127L244.688 69.0862C236.178 62.9584 225.956 59.6613 215.47 59.6613Z"
          className="fill-[#E9E9E9]/30"
        />
      </svg>
    </>
  );
};

export default LifestyleRestaurantSection;
