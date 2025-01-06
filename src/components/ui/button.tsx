import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        brand: "bg-brand text-brand-foreground shadow hover:bg-brand/90",
        "brand-outline":
          "bg-transparent border border-brand text-brand shadow hover:bg-brand/90",
        "white-outline":
          "bg-transparent border border-white_f0 text-white shadow hover:bg-white_f0/90",
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        black_outline: "border border-[2px] border-black bg-none shadow-sm",
        white_bg: "bg-white hover:bg-white/50 shadow-sm",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  navbar?: boolean;
  wMax?: boolean;
  customWidth?: boolean;
  asChild?: boolean;
  elevated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      navbar,
      customWidth,
      wMax,
      elevated,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "px-4 py-3 font-bold",
          wMax && "w-max",
          !wMax && !customWidth && (navbar ? "lg:max-w-max" : "w-full max-w-max"),
          elevated &&
            "shadow-[0px_4px_15px_rgba(0,0,0,0.15)] hover:shadow-none duration-500"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
