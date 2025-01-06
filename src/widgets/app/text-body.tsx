"use client";

import useAnimation from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect } from "react";

interface IAppTextBodyProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  inverted?: boolean;
  containerId?: string;
  onDisplayCB?: () => void;
  scrollSpeed?: number;
}

const AppTextBody: React.FC<IAppTextBodyProps> = ({
  description,
  title,
  inverted,
  containerId,
  onDisplayCB,
  scrollSpeed,
}) => {
  const { animate } = useAnimation();
  useEffect(() => {
    if (containerId) {
      gsap.to(`#${containerId} .p-fade`, {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: `#${containerId} .p-fade`,
          start: "top 50%",
          // end: "100% top",
          // markers: true
        },

        onComplete: onDisplayCB,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id={`${containerId}-text-body`}
      className="space-y-4 md:space-y-0 relative p-fade"
    >
      <div
        className={cn([
          "md:max-w-[50%] xl:max-w-[696px]",
          inverted && "ml-auto md:text-right",
        ])}
      >
        <h3
          data-scroll
          data-scroll-speed={scrollSpeed || "2"}
          className="page-section-header"
        >
          {title}
        </h3>
      </div>
      <div>
        <div
          className={cn([
            "text-[#4B4B4B] lg:text-base text-sm md:text-right md:max-w-[50%] lg:max-w-[413px] md:-mt-4 ml-auto",
            inverted && "ml-0 md:text-left",
          ])}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default AppTextBody;
