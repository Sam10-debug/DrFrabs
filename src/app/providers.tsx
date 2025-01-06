"use client";

import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextSnapPixel from "next-snapchat-pixel";
import { RatesProvider } from "@/context/conversion-rates";

MouseFollower.registerGSAP(gsap);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        new MouseFollower({
            className: "mf-cursor p-cursor",
        });
        NextSnapPixel.init(process.env.NEXT_PUBLIC_SNAP_PIXEL_ID);
        NextSnapPixel.track("PAGE_VIEW");
    }, []);

    return <RatesProvider>{children}</RatesProvider>;
}