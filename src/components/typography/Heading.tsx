import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  custom?: boolean;
  noLineHeight?: boolean;
}
const Heading = ({
  children,
  as = "h1",
  custom,
  noLineHeight,
  ...rest
}: HeadingProps) => {
  const HeadingTag = as;
  const pickTag = (tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") =>
    !custom && as === tag;
  return (
    <HeadingTag
      {...rest}
      className={cn(
        "font-bold",
        {
          "text-black text-[2.5rem] xl:text-[5.5rem] leading-[3rem] xl:leading-[5.5rem]":
            pickTag("h1"),
        },
        {
          "text-[1.375rem] xl:text-[3rem] leading-[1.75rem] xl:leading-[3.875rem] text-grey_500":
            pickTag("h2"),
        },
        {
          "text-[1rem] xl:text-[1.5rem] leading-[1.3rem] xl:leading-[1.95rem] text-grey_500":
            pickTag("h3"),
        },

        { "leading-none": noLineHeight },
        rest.className
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
