import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes } from "react";

const AppCta = ({
  text,
  outline,
  link = "/download",
  variant,
  ...rest
}: VariantProps<typeof buttonVariants> &
  HTMLAttributes<HTMLDivElement> & {
    text: string;
    link?: string;
    outline?: boolean;
  }) => {
  return (
    <div {...rest}>
      <Link href={link}>
        <Button
          variant={variant ? variant : outline ? "brand-outline" : "brand"}
          elevated={!outline}
          className={`min-w-max gap-2 px-4 py-3 ${
            variant === "white_bg" && "text-black"
          } font-bold`}
        >
          {text}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 7H17M17 7V17M17 7L7 17"
              stroke={
                variant === "white_bg"
                  ? "#000"
                  : outline
                  ? "var(--brand)"
                  : "#fff"
              }
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Link>
    </div>
  );
};

export default AppCta;
