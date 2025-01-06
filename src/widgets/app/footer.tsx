"use client";
import { FC, Suspense } from "react";
import PlaystoreSvg from "../svg/playstore";
import AppstoreSvg from "../svg/appstore";
import AppLogo from "../svg/logo";
import Link from "next/link";
import DownloadApp from "./mobile-app-buttons";
import SocialPages from "./social-pages";
import SocialPages2 from "./business-social-pages";

import { usePathname } from "next/navigation";
import { BusinessChristmasImg, PersonalChristmasImg, WhiteChristmasImg } from "./navbar";

interface FooterProps {
  bgColor?: string;
  textColor?: string;
}

interface FooterHeadProps {
  textColor: string;
}

interface FooterLinksProps {
  textColor: string;
}

interface FooterAddressesProps {
  textColor: string;
}

const FooterHead: FC<FooterHeadProps> = ({ textColor }) => {
  const pathname = usePathname();
  return (
    <div className="pt-10 py-5 md:py-14">
      <div className="text-center max-w-[665px] mx-auto space-y-5">
        <h5 className={`text-3xl md:text-5xl font-bold ${textColor}`}>
          Your all in one finance <br /> and lifestyle app
        </h5>
        <p className={`text-xs md:text-base ${textColor}`}>
          Get access to our features and secure your financial future
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        {/* <DownloadApp /> */}
        {pathname === "/" || pathname.startsWith("/personal") ? (
          <Suspense>
            <DownloadApp />
          </Suspense>
        ) : (
          // <DownloadApp />
          ""
        )}
      </div>
    </div>
  );
};

const FooterLinks: FC<FooterLinksProps> = ({ textColor }) => {
  const pathname = usePathname();
  const links = [
    {
      name: "PERSONAL",
      items: [
        { title: "International Transfers", link: "/international-transfer" },
        { title: "Cards", link: "/cards" },
        { title: "Refill & Top-ups", link: "/refill" },
        { title: "Vault", link: "/vault" },
        { title: "Lifestyle", link: "/lifestyle" },
        { title: "Currency Swaps", link: "/swap" },
        { title: "OTC Deposits/Payouts", link: "/otc" },
        { title: "Tuition Payment", link: "/tuition" },
      ],
    },
    {
      name: "BUSINESS",
      suffix: "Coming soon",
      items: [
        { title: "Money Payments", link: "/business/transactions" },
        { title: "Business Cards", link: "/business/card" },
        { title: "Payment Links", link: "/business/payment" },
        { title: "Invoice", link: "/business/invoice" },
      ],
    },
    {
      name: "COMPANY",
      items: [
        { title: "About Us", link: "/about" },
        { title: "Blog", link: "https://platnova.medium.com/" },
        { title: "Contact", link: "https://support.platnova.com" },
      ],
    },
    {
      name: "LEGAL",
      items: [
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Terms of Use",
          link: "/terms",
        },
        {
          title: "Cookie Policy",
          link: "/cookies-policy",
        },
      ],
    },
  ];
  return (
    <div className="md:pb-10">
      <div>
        <div
          className={`flex flex-wrap flex-[1_1_max-content] ${textColor} pt-6 pb-8 md:pb-14 justify-between gap-y-8`}
        >
          {links.map(({ name, items }) => (
            <div key={name} className="space-y-2">
              <p className={`text-sm md:text-base font-bold ${textColor}`}>
                {["PERSONAL", "BUSINESS"].includes(name) && (
                  <span className="hidden lg:inline">{`PRODUCT - `}</span>
                )}
                {name}
              </p>
              <ul className="space-y-2 ">
                {items.map(({ title, link }) => (
                  <li key={title} className={`text-xs md:text-sm ${textColor}`}>
                    <Link href={link}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="w-full hidden md:block" />
        <div className="md:py-8 pb-8 flex flex-col-reverse md:flex-row gap-14 md:gap-4 justify-between">
          <div className="space-y-3">
            {pathname.startsWith("/business") ? (
              // <AppLogo light />
              <WhiteChristmasImg />
            ) : (
              // <AppLogo dark />
              <BusinessChristmasImg />
            )}

            <p className={`text-sm ${textColor}`}>
              © {new Date().getFullYear()} Platnova. All rights reserved
            </p>
          </div>

          <div>
            <div className="md:text-right space-y-3">
              <p className={`text-sm md:text-base font-bold ${textColor}`}>
                CONTACT US
              </p>
              <a
                href="mailto:support@platnova.com"
                className={`${textColor} text-sm`}
              >
                support@platnova.com
              </a>
              <div
                className={` ${
                  pathname.startsWith("/business")
                    ? " text-white order-1"
                    : "max-w-[250px] "
                }`}
              >
                {pathname.startsWith("/business") ? (
                  <SocialPages2 outlined />
                ) : (
                  <SocialPages />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const addresses = [
  {
    location: "United States of America",
    addr: "Platnova Inc. (No. 7009837) with business address at 651 N Broad St, Suite 201, Middletown, DE 19709 USA.",
  },
  {
    location: "United Kingdom",
    addr: "Platnova LTD. (No. 14692738), is registered under Company House with registered office address at Office 4 219 Kensington High Street, Kensington, London, England, W8 6BD",
  },
  {
    location: "Canada",
    addr: "Platnova LTD. (No. 1000534048) with registered office address at 6D - 7398 Yonge St PMB 830 Thornhill, ON L4J8J2, Canada.",
  },
  {
    location: "Rwanda",
    addr: "Platnova LTD. (No. 120213497) with registered office address at Remera, Gasabo, Umujyi wa Kigali, Rwanda",
  },
  {
    location: "Nigeria",
    addr: "Platnova Technologies Limited (No. 6934651) with registered business address at Milagro Mall, Orchid Road, Eleganza Bus Stop, Lekki. Lagos, Nigeria",
  },
];

const FooterAddresses: FC<FooterAddressesProps> = ({ textColor }) => {
  return (
    <div className="pb-20">
      <div>
        <div className="grid md:grid-cols-2 gap-6 -10">
          {addresses.map(({ location, addr }) => (
            <div key={location} className="space-y-1">
              <p className={`font-semibold ${textColor}`}>{location}</p>
              <p className={`text-sm ${textColor} `}>{addr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AppFooter: FC<FooterProps> = ({
  bgColor = "bg-[#E9E9E9]/30",
  textColor = "text-[#030303]",
}) => {
  return (
    <footer className={bgColor}>
      <div className="px-4 !w-full md:!w-10/12 xl:!w-9/12 content-container">
        <FooterHead textColor={textColor} />
        <FooterLinks textColor={textColor} />
        <FooterAddresses textColor={textColor} />
      </div>
    </footer>
  );
};

export default AppFooter;
