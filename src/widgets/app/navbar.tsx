"use client";

import AppLogo from "../svg/logo";
import AppBlackLogo from "../svg/app-black-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CaretDownIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Fragment, HTMLAttributes, SVGProps, useEffect, useState } from "react";
import { cn, imageBlur } from "@/lib/utils";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import AppCta from "./cta";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import { navLinks, navLinks2 } from "@/hooks/nav";
import { ArrowTopRightIcon } from "@/components/icons/icon";
import { WAIT } from "@/constants/links";

import {
  BookmarkAltIcon,
  PhoneIcon,
  PencilAltIcon,
  SupportIcon,
  ViewGridIcon,
  DocumentTextIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import { businessSectionIds } from "@/constants/sectionIds";

export const BusinessChristmasImg = () => (
  <Image
    width={2432}
    height={752}
    src="/christmas/Platnova-christmas-logo-full-black.png"
    className="w-40"
    alt="christmas business icon"
  />
);
export const PersonalChristmasImg = () => (
  <Image
    width={2432}
    height={752}
    src="/christmas/Platnova-christmas-logo-full.png"
    className="w-40"
    alt="christmas icon"
  />
);

export const WhiteChristmasImg = () => (
  <Image
    width={846}
    height={246}
    src="/christmas/PLA-XMAS-logo-white.png"
    className="w-40"
    alt="christmas icon"
  />
);

const ImageIcons = ({
  src,
  business,
  title,
}: {
  src: string;
  business?: boolean;
  title: string;
}) => {
  return (
    <div className={`${business ? "h-6 w-6" : "h-8 w-8"} relative`}>
      <Image src={src} alt={title} fill sizes="40px" {...imageBlur} />
    </div>
  );
};

export const navLinks = [
  {
    name: "Products",
    items: [
      {
        title: "Physical & Virtual cards",
        link: "/cards",
        icon: () => (
          <ImageIcons src="/cards.png" title="Physical & Virtual cards" />
        ),
      },
      {
        title: "Refill - Giftcards & Bill payments",
        link: "/refill",
        icon: () => (
          <ImageIcons
            src="/bill-payments.png"
            title="Refill- Giftcards & Bill payments"
          />
        ),
      },
      {
        title: "International Transfers",
        link: "/international-transfer",
        icon: () => (
          <ImageIcons
            src="/multi-currency.png"
            title="International Transfers"
          />
        ),
      },
      {
        title: "Vault",
        link: "/vault",
        icon: () => <ImageIcons src="/vault-icon.png" title="vault" />,
      },
      {
        title: "Lifestyle",
        link: "/lifestyle",
        icon: () => <ImageIcons src="/flights.png" title="Lifestyle" />,
      },
      {
        title: "Tuition",
        link: "/tuition",
        icon: () => <ImageIcons src="/tuition.png" title="Tuition" />,
      },
      {
        title: "Currency swap",
        link: "/swap",
        icon: () => (
          <ImageIcons src="/multi-currency.png" title="Currency swap" />
        ),
      },
      {
        title: "OTC deposits / payouts",
        link: "/otc",
        icon: () => (
          <ImageIcons src="/savings.png" title="OTC deposits/payouts" />
        ),
      },
      {
        title: "Refer and earn",
        link: "/refer_and_earn",
        icon: () => <ImageIcons src="/refer-earn.png" title="Refer and Earn" />,
      },
    ],
  },
  {
    name: "Resources",
    items: [
      {
        title: "Help Centre",
        icon: SupportIcon,
        link: "https://support.platnova.com",
        description:
          "Reach out and get all of your questions answered by our support team.",
      },
      {
        title: "Terms and Conditions",
        icon: BookmarkAltIcon,
        link: "/terms",
        description:
          "Get insights into our terms and conditions and how we handle your data.",
      },
      {
        title: "Privacy policy",
        icon: DocumentTextIcon,
        link: "/privacy-policy",
        description:
          "Know more about your privacy rights and how we handle your data",
      },
      {
        title: "Cookie policy",
        icon: BookOpenIcon,
        link: "/cookies-policy",
        description:
          "Get insights into our cookies policy and what we keep track of.",
      },
    ],
  },
  {
    name: "Company",
    items: [
      {
        title: "About us",
        icon: ViewGridIcon,
        link: "/about",
        description:
          "We are a team of passionate technologists and professional investors",
      },
      {
        title: "Careers",
        icon: PencilAltIcon,
        link: "https://angel.co/company/platnova/jobs",
        description: "Join our team of smart and ambitious members",
      },
      {
        title: "Contact us",
        icon: PhoneIcon,
        link: "http://support.platnova.com",
        description: "React out to us, we would like to hear from you.",
      },
    ],
  },
];

export const navLinks2 = [
  {
    name: "Products",
    items: [
      {
        title: "International Transfer",
        link: "/business/transactions",
        icon: () => (
          <ImageIcons
            business
            src="/business/business-intl-transfer.png"
            title="International Transfer"
          />
        ),
        // link: "/waitlist",
      },
      {
        title: "Business card",
        link: "/business/card",
        icon: () => (
          <ImageIcons business src="/business/business-cards.png" title="Business card" />
        ),
        // link: "/waitlist",
      },
      {
        title: "Payment Links",
        link: "/business/payment",
        icon: () => (
          <ImageIcons business src="/business/business-payment.png" title="Payment Links" />
        ),
        // link: "/waitlist",
      },
      {
        title: "Invoice Payment",
        link: "/business/invoice",
        icon: () => (
          <ImageIcons business src="/business/business-invoice.png" title="Invoice Payment" />
        ),
        // link: "/waitlist",
      },   
     ],
  },
  {
    name: "Resources",
    items: [
      {
        title: "Help Centre",
        icon: SupportIcon,
        link: "https://support.platnova.com",
        description:
          "Reach out and get all of your questions answered by our support team.",
      },
      {
        title: "Terms and Conditions",
        icon: BookmarkAltIcon,
        link: "/terms",
        description:
          "Get insights into our terms and conditions and how we handle your data.",
      },
      {
        title: "Privacy policy",
        icon: BookmarkAltIcon,
        link: "/privacy-policy",
        description:
          "Know more about your privacy rights and how we handle your data",
      },
      {
        title: "Cookie policy",
        icon: BookmarkAltIcon,
        link: "/cookies-policy",
        description:
          "Get insights into our cookies policy and what we keep track of.",
      },
    ],
  },
  {
    name: "Company",
    items: [
      {
        title: "About us",
        icon: ViewGridIcon,
        link: "/about",
        description:
          "We are a team of passionate technologists and professional investors",
      },
      {
        title: "Careers",
        icon: PencilAltIcon,
        link: "https://angel.co/company/platnova/jobs",
        description: "Join our team of smart and ambitious members",
      },
      {
        title: "Contact us",
        icon: PhoneIcon,
        link: "http://support.platnova.com",
        description: "React out to us, we would like to hear from you.",
      },
    ],
  },
];


const AppNavBar = () => {
  const [bgCol, setBgCol] = useState("");
  const pathname = usePathname();
  const isBusinessPage = pathname.startsWith("/business");
  const isWaitListPage = pathname.startsWith("/waitlist");
  const isTextWhite =
    (pathname.startsWith("/business/card") ||
      pathname.startsWith("/business/invoice")) &&
    ["rgb(3, 3, 3)"].includes(bgCol);

  const textCol = (icon?: boolean) => {
    const tStyle = {
      default: "",
      hover: "",
    };
    if (isTextWhite) {
      // styles for white text
      return icon
        ? {
            ...tStyle,
            default: "text-white",
            hover: "text-gray-100 group-hover:text-white_f0",
          }
        : {
            ...tStyle,
            default: "text-white",
            hover: "text-gray-100 hover:text-white_f0",
          };
    }
    // styles for dark text
    return icon
      ? {
          ...tStyle,
          default: "text-gray-700",
          hover: "text-gray-500 hover:text-white_f0",
        }
      : { ...tStyle, default: "text-gray-700", hover: "text-gray-900" };
  };

  const MenuItem = ({
    name,
    items,
    close,
    ...rest
  }: HTMLAttributes<HTMLButtonElement> & {
    name: string;
    items?: {
      title: string;
      link: string;
      description?: string;
      icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    }[];
    close: () => void;
  }) => {
    const [isHover, setIsHover] = useState(false);

    return (
      <Popover className={`relative ${rest.className}`}>
  {() => (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <PopoverButton
        className={cn(
          isHover ? textCol().hover : textCol().default,
          "group bg-transparent rounded-md inline-flex items-center text-sm font-medium focus:outline-none focus:ring-offset-2 focus:ring-transparent"
        )}
        onClick={() => setIsHover(!isHover)}
        aria-expanded={isHover}  // Add this for better accessibility
      >
        <span>{name}</span>
        <CaretDownIcon
          className={cn(
            isHover ? textCol(true).hover : textCol(true).default,
            "ml-2 h-3 w-3"
          )}
        />
      </PopoverButton>

      <Transition
        show={isHover}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          static
          className="lg:absolute z-10 -ml-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div className="rounded-lg lg:shadow-lg overflow-hidden">
            <div
              className={`relative grid gap-6 ${
                isTextWhite ? "bg-black text-white" : "bg-white text-gray-900"
              } px-5 py-6 sm:gap-8 sm:p-8 max-h-[650px] overflow-y-auto scrollbar-hide`}
            >
              {items?.map((item) => (
                <Link
                  rel="noreferrer"
                  key={item.title}
                  className={`-m-3 p-3 flex items-start rounded-lg ${
                    isTextWhite ? "hover:bg-white/20" : "hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    setIsHover(false);
                    close();
                  }}
                  href={item.link}
                >
                  {item?.icon ? (
                    <item.icon
                      className={`flex-shrink-0 h-6 w-6 text-purple-500 ${
                        isTextWhite
                          ? "text-white"
                          : isBusinessPage || isWaitListPage
                          ? "grayscale brightness-50"
                          : ""
                      }`}
                    />
                  ) : null}
                  <div className="ml-4">
                    <p className="text-base font-medium">{item.title}</p>
                    <p
                      className={`mt-1 text-sm ${
                        isTextWhite ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </div>
  )}
</Popover>

    );
  };

  const NavMenu = ({
    close,
    ...rest
  }: HTMLAttributes<HTMLDivElement> & { close: () => void }) => {
    return (
      <div className={`flex ${rest.className}`}>
        <PopoverGroup
          as="nav"
          className="space-y-4 lg:space-y-0 my-5 lg:my-0 lg:space-x-10 lg:flex items-center"
        >
          {isBusinessPage || isWaitListPage
            ? navLinks2.map(({ name, items }) => (
                <MenuItem close={close} key={name} {...{ name, items }} />
              ))
            : navLinks.map(({ name, items }) => (
                <MenuItem close={close} key={name} {...{ name, items }} />
              ))}
        </PopoverGroup>
      </div>
    );
  };

  const NavCta = (props: HTMLAttributes<HTMLButtonElement>) => {
    return (
      <>
        {isBusinessPage || isWaitListPage ? (
          <Button
            navbar
            className={`${props.className} flex shrink-0 items-center ${
              isTextWhite
                ? "text-black/90 hover:text-white bg-white hover:bg-white/30"
                : "text-white"
            } font-bold`}
            asChild
          >
            <Link href={WAIT} target="_blank">
              Request Access
              <ArrowTopRightIcon className="ml-[10px]" />
            </Link>
          </Button>
        ) : (
          <AppCta text="Get started" />
        )}
      </>
    );
  };

  const NavAppToggle = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
      <div className={props?.className}>
        <Link
          href="/"
          className={cn([
            "px-4 py-2 rounded",
            !isBusinessPage && !isWaitListPage
              ? "shadow-[0px_4px_15px_rgba(0,0,0,0.085)]"
              : "",
          ])}
        >
          <p
            className={`font-semibold text-sm ${
              isTextWhite ? "text-white" : "text-black/80"
            }`}
          >
            Personal
          </p>
        </Link>
        <Link
          href="/business"
          className={cn([
            "px-4 py-2 rounded",
            isBusinessPage || isWaitListPage
              ? "shadow-[0px_4px_15px_rgba(0,0,0,0.085)]"
              : "",
            isTextWhite ? " bg-white/30" : "",
          ])}
        >
          <p
            className={`font-semibold text-sm ${
              isTextWhite ? "text-white" : "text-black/80"
            }`}
          >
            Business
          </p>
        </Link>
      </div>
    );
  };

  const MobileNav = ({ close }: { close: () => void }) => {
    return (
      <div
        className={cn([
          "fixed top-0 z-[50] w-full px-4 py-5 flex flex-col justify-between duration-500",
          isTextWhite ? "bg-black" : "bg-white",
        ])}
      >
        <div className="flex items-center justify-between">
          {/* <AppLogo /> */}
          {isTextWhite ? (
            // <AppLogo light />
            <WhiteChristmasImg />
          ) : isBusinessPage || isWaitListPage ? (
            // <AppBlackLogo />
            <BusinessChristmasImg />
          ) : (
            // <AppLogo />
            <PersonalChristmasImg />
          )}
          <div className="-mr-2">
            <PopoverButton className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
              <span className="sr-only">Close menu</span>
              <Cross2Icon className="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>

        <div className="mt-2">
          <NavAppToggle className="flex lg:hidden" />
        </div>

        <div>
          <NavMenu close={close} />
        </div>

        <div>
          <NavCta />
        </div>
      </div>
    );
  };

  const checkVisibility = () => {
    const sectionArr = businessSectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => {
        const rect = section?.getBoundingClientRect();
        return rect && !(rect?.top >= window.innerHeight || rect?.bottom <= 0);
      });

    sectionArr.length > 0 &&
      sectionArr[0] !== null &&
      setBgCol(window.getComputedStyle(sectionArr[0]).backgroundColor);
  };

  useEffect(() => {
    // Check visibility on scroll
    window.addEventListener("scroll", checkVisibility, {
      passive: true,
    });
    // Initial check
    checkVisibility();
    if (pathname === "/business") setBgCol("#F0F0F0");

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [pathname]);

  return (
    <Popover
      as="header"
      style={{
        backgroundColor: !["rgba(0, 0, 0, 0)"].includes(bgCol)
          ? bgCol
          : "white",
      }}
      className="sticky top-0 z-[50]"
    >
      {({ open, close }) => (
        <>
          <div className="h-16 md:h-20 flex items-center w-11/12 xl:w-10/12 mx-auto justify-between">
            <div className="flex items-center gap-6 w-full">
              <div className="flex items-center justify-between lg:w-auto w-full">
                <Link
                  href={isBusinessPage || isWaitListPage ? "/business" : "/"}
                >
                  {isTextWhite ? (
                    // <AppLogo light />
                    <WhiteChristmasImg />
                  ) : isBusinessPage || isWaitListPage ? (
                    // <AppBlackLogo />
                    <BusinessChristmasImg />
                  ) : (
                    // <AppLogo />
                    <PersonalChristmasImg />
                  )}
                </Link>

                <div className="lg:hidden">
                  <PopoverButton
                    className={`bg-transparent rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 ${
                      isTextWhite ? "hover:bg-white/30" : "hover:bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent`}
                  >
                    <span className="sr-only">Open menu</span>
                    <HamburgerMenuIcon
                      className={`h-6 w-6 ${isTextWhite ? "text-white" : ""}`}
                      aria-hidden="true"
                    />
                  </PopoverButton>
                </div>
              </div>

              <NavAppToggle className="hidden lg:flex" />
            </div>
            <div className="hidden lg:flex gap-5 items-center">
              <NavMenu close={close} />

              <NavCta />
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              static
              className="absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden z-10"
            >
              <MobileNav close={close} />
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default AppNavBar;
