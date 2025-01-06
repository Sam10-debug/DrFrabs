import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { GET_STARTED_LINK, WAIT } from "@/constants/links";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface Props extends VariantProps<typeof buttonVariants> {
  toWaitList?: boolean;
  className?: string;
}

const GetStartedOutlineBtn = ({ toWaitList, variant, className }: Props) => {
  return (
    <Button
      variant={variant || "black_outline"}
      className={cn("w-full max-w-[12.5rem] min-h-[3rem]", className)}
      asChild
    >
      <Link href={toWaitList ? WAIT : GET_STARTED_LINK}>Get Started</Link>
    </Button>
  );
};

export default GetStartedOutlineBtn;
