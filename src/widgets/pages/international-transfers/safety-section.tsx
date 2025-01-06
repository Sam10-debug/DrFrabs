import { cn } from "@/lib/utils";
import AppCta from "@/widgets/app/cta";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";

const SafetyInfoCard = ({
  className,
  miniIcon,
  text,
  image,
}: {
  className?: string;
  miniIcon: React.ReactNode;
  text: string;
  image: React.ReactNode;
}) => {
  return (
    <div
      className={cn([
        "h-[393px] flex flex-col justify-between bg-[#1E1E1E] text-white rounded-[40px] overflow-hidden md:w-auto w-[285px]",
        className,
      ])}
    >
      <div className="space-y-4 px-7 py-9">
        {miniIcon}

        <p>{text}</p>
      </div>

      <div>{image}</div>
    </div>
  );
};
const ITSafetySection = () => {
  return (
    <section className="bg-white">
      <div className="content-container py-16 md:py-32">
        <AppTextBody
          title={
            <>
              <span className="text-center">Safety First</span>
            </>
          }
          description={<AppCta className="hidden lg:block" text="Read more" />}
        />
        <div className="overflow-auto scrollbar-hide">
          <div className="grid grid-cols-[max-content_max-content_max-content] md:grid-cols-3 lg:w-11/12 xl:w-4/6 mx-auto mt-5 md:mt-20 items-center gap-4">
            <div>
              <SafetyInfoCard
                miniIcon={
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 4V6.5H11.5C11.8978 6.5 12.2794 6.65804 12.5607 6.93934C12.842 7.22064 13 7.60218 13 8V14C13 14.3978 12.842 14.7794 12.5607 15.0607C12.2794 15.342 11.8978 15.5 11.5 15.5H1.5C1.10218 15.5 0.720644 15.342 0.43934 15.0607C0.158035 14.7794 0 14.3978 0 14V8C0 7.60218 0.158035 7.22064 0.43934 6.93934C0.720644 6.65804 1.10218 6.5 1.5 6.5H3V4C3 3.07174 3.36875 2.1815 4.02513 1.52513C4.6815 0.868749 5.57174 0.5 6.5 0.5C7.42826 0.5 8.3185 0.868749 8.97487 1.52513C9.63125 2.1815 10 3.07174 10 4ZM4 4C4 3.33696 4.26339 2.70107 4.73223 2.23223C5.20107 1.76339 5.83696 1.5 6.5 1.5C7.16304 1.5 7.79893 1.76339 8.26777 2.23223C8.73661 2.70107 9 3.33696 9 4V6.5H4V4Z"
                      fill="white"
                    />
                  </svg>
                }
                text="Secure transactions with two-factor authentication"
                image={
                  <div className="relative aspect-square w-6/12 mb-9 ml-7">
                    <Image
                      src="/fingerprint-safelock.png"
                      alt="safelock"
                      fill
                    />
                  </div>
                }
              />
            </div>
            <div>
              <SafetyInfoCard
                className="bg-brand md:h-[450px]"
                miniIcon={
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 13V15H0V13C0 13 0 9.00004 7 9.00004C14 9.00004 14 13 14 13ZM10.5 3.50004C10.5 2.8078 10.2947 2.13111 9.91014 1.55554C9.52556 0.979969 8.97893 0.531365 8.33939 0.266459C7.69985 0.0015519 6.99612 -0.0677598 6.31718 0.0672885C5.63825 0.202337 5.01461 0.53568 4.52513 1.02516C4.03564 1.51465 3.7023 2.13829 3.56725 2.81722C3.4322 3.49615 3.50152 4.19989 3.76642 4.83943C4.03133 5.47897 4.47993 6.0256 5.0555 6.41018C5.63108 6.79477 6.30777 7.00004 7 7.00004C7.92826 7.00004 8.8185 6.63129 9.47487 5.97491C10.1313 5.31853 10.5 4.42829 10.5 3.50004ZM13.94 9.00004C14.5547 9.47578 15.0578 10.0805 15.4137 10.7715C15.7696 11.4626 15.9697 12.2233 16 13V15H20V13C20 13 20 9.37004 13.94 9.00004ZM13 3.67965e-05C12.3118 -0.00316434 11.6388 0.202568 11.07 0.590037C11.6774 1.43877 12.0041 2.45632 12.0041 3.50004C12.0041 4.54375 11.6774 5.5613 11.07 6.41004C11.6388 6.79751 12.3118 7.00324 13 7.00004C13.9283 7.00004 14.8185 6.63129 15.4749 5.97491C16.1313 5.31853 16.5 4.42829 16.5 3.50004C16.5 2.57178 16.1313 1.68154 15.4749 1.02516C14.8185 0.368786 13.9283 3.67965e-05 13 3.67965e-05Z"
                      fill="white"
                    />
                  </svg>
                }
                text="Trusted by 40,000+  customers worldwide"
                image={
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/positive-guy-girl-orange-sweatshirts-crosses-fingers-blue-wall.png"
                      alt="safelock"
                      fill
                    />
                  </div>
                }
              />
            </div>

            <div>
              <SafetyInfoCard
                miniIcon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22.5C9.68333 21.9167 7.77067 20.5873 6.262 18.512C4.75333 16.4367 3.99933 14.1327 4 11.6V5.5L12 2.5L20 5.5V11.6C20 14.1333 19.246 16.4377 17.738 18.513C16.23 20.5883 14.3173 21.9173 12 22.5Z"
                      fill="white"
                    />
                  </svg>
                }
                text="Data security with no compromises"
                image={
                  <div className="relative w-7/12  h-[130px] ml-auto mb-9 mr-5">
                    <Image src="/security-badge.png" alt="safelock" fill />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSafetySection;
