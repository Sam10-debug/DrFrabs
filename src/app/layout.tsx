"use client";

import { Inter } from "next/font/google";
import "./globals.scss";
import "../styles/locomotive-base.scss";
import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { usePathname } from "next/navigation";
import ZohoDesk from '@/components/ui/zoho';
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loaderColor, setLoaderColor] = useState("#7049f7");
  const pathname = usePathname();

  useEffect(() => {
    const isBusinessPage = pathname.startsWith("/business");
    setLoaderColor(isBusinessPage ? "#f0f0f0" : "#7049f7");
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <Script
          defer
          strategy="afterInteractive"
          type="application/ld+json"
          src="/script/schema.json"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div data-scroll-container>
            <NextTopLoader color={loaderColor} height={5} />
            <ZohoDesk />
            {children}
          </div>
        </Providers>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAG_ID as string} />
      </body>
    </html>
  );
}