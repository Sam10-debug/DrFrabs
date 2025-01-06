import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  useBlackColor?: boolean;
  custom?: boolean;
  size?: "smaller" | "small";
}
const Paragraph = ({
  children,
  custom,
  size,
  useBlackColor,
  ...rest
}: ParagraphProps) => {
  return (
    <p
      {...rest}
      className={cn(
        `font-normal text-sm ${
          !custom &&
          (size === "small"
            ? "leading-[1.625rem] xl:text-[1.125rem]"
            : size === "smaller"
            ? "leading-[1.05875rem] xl:text-[0.82rem]"
            : "leading-[2.06rem] xl:text-[1.5rem]")
        } text-grey_400`,
        { "text-black": useBlackColor },
        rest.className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
