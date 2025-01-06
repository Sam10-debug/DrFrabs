"use client";
import AngleArrowSvg from "@/widgets/svg/angle-arrow";
import AppNavBar from "@/widgets/app/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Use of Cookies", link: "#use-of-cookies" },
  { name: "Control of Cookies", link: "#control-of-cookies" },
  { name: "Other Tracking Technologies", link: "#other-tracking-technologies" },
  { name: "Privacy Policy", link: "#privacy-policy" },
];

const Heading = ({ name, id }: { name: string; id: string }) => (
  <>
    <span id={id}></span>
    <h2 className="mt-10 font-bold mb-7">{name}</h2>
  </>
);

const PolicyPage = () => {
  const [selected, setSelected] = useState("Use of Cookies");
  const [isOpen, setIsOpen] = useState(false);

  const DropDown = () => (
    <div className="sticky top-[64px] lg:hidden">
      <div
        className="w-full p-3 bg-white mb-2 rounded-[5px] flex items-center justify-ceneter gap-2"
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      >
        {selected}
        <AngleArrowSvg className={`${isOpen ? "rotate-0" : "rotate-180"}`} />
      </div>

      <div
        className={`p-3 bg-white rounded-[8px] ${isOpen ? "block h-auto" : "hidden h-0"
          }`}
      >
        <div>
          <nav>
            <ul className="space-y-8">
              {links.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    onClick={() => {
                      setSelected(name);
                      setIsOpen(false);
                    }}
                    className="cookie-heading pb-2"
                    href={link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const Highlight = () => {
      const allHeadings = document.getElementsByClassName("cookie-heading");
      Array.from(allHeadings).forEach((heading) => {
        heading.addEventListener("click", () =>
          heading.classList.add("text-brand", "border-b-2", "border-brand")
        );
        heading.addEventListener("blur", () =>
          heading.classList.remove("text-brand", "border-b-2", "border-brand")
        );
      });
    };
    window.addEventListener("scroll", Highlight, { passive: true });
    return () => window.removeEventListener("scroll", Highlight);
  }, []);

  // useEffect(() => {
  //   const Highlight = () => {
  //     const allHeadings = document.getElementsByClassName("privacy-heading");
  //     Array.from(allHeadings).forEach((heading) => {
  //       const rect = heading?.getBoundingClientRect();
  //       if (rect) {
  //         if (rect?.top < window.innerHeight / 5 && rect?.top > 0) {
  //           heading.classList.add("text-brand", "border-b-2", "border-brand");
  //         } else
  //           heading.classList.remove(
  //             "text-brand",
  //             "border-b-2",
  //             "border-brand"
  //           );
  //       }
  //     });
  //   };
  //   window.addEventListener("scroll", Highlight, { passive: true });
  //   return () => window.removeEventListener("scroll", Highlight);
  // }, []);

  return (
    <main id="cookies" className="content-container bg-white mb-16">
      <section className="w-11/12 lg:w-10/12 mx-auto max-w-[1200px]">
        <section className="pt-16 pb-20 ">
          <h1 className="text-center text-6xl md:text-[64px] lg:text-[84px] font-extrabold uppercase">
            COOKIES Policy
          </h1>
        </section>

        <section className="md:flex gap-14">
          <DropDown />
          <aside className="hidden lg:block mt-16  sticky md:top-[200px] max-w-[260px]">
            <nav>
              <ul className="space-y-8">
                {links.map(({ name, link }) => (
                  <li key={name}>
                    <Link className="cookie-heading" href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-[829px] policy-style mt-12 p-2">
            <p>
              Platnova (“we” or “us” or “our”) may use cookies, web beacons,
              tracking pixels, and other tracking technologies when you visit our
              website, including any other media form, media channel, mobile
              website, or mobile application related or connected thereto
              (collectively, the “Site”) to help customize the Site and improve
              your experience.
            </p>
            <p>
              We reserve the right to make changes to this Cookie Policy at any
              time and for any reason. We will alert you about any changes by
              updating the “Last Updated” date of this Cookie Policy.
            </p>
            <p>
              Any changes or modifications will be effective immediately upon
              posting the updated Cookie Policy on the Site, and you waive the
              right to receive specific notice of each such change or
              modification. You are encouraged to periodically review this Cookie
              Policy to stay informed of updates. You will be deemed to have been
              made aware of, will be subject to, and will be deemed to have
              accepted the changes in any revised Cookie Policy by your continued
              use of the Site after the date such revised Cookie Policy is posted.
            </p>

            <Heading id="use-of-cookies" name="Use of Cookies" />
            <p>
              A “cookie” is a string of information which assigns you a unique
              identifier that we store on your computer. Your browser then
              provides that unique identifier to use each time you submit a query
              to the Site. We use cookies on the Site to, among other things, keep
              track of services you have used, record registration information,
              record your user preferences, keep you logged into the Site,
              facilitate purchase procedures, and track the pages you visit.
              Cookies help us understand how the Site is being used and improve
              your user experience.
            </p>

            <Heading id="control-of-cookies" name="Control of Cookies" />
            <p>
              Most browsers are set to accept cookies by default. However, you can
              remove or reject cookies in your browser’s settings. Please be aware
              that such action could affect the availability and functionality of
              the Site.
            </p>

            <Heading
              id="other-tracking-technologies"
              name="Other Tracking Technologies"
            />
            <p>
              In addition to cookies, we may use web beacons, pixel tags, and
              other tracking technologies on the Site to help customize the Site
              and improve your experience. A “web beacon” or “pixel tag” is a tiny
              object or image embedded in a web page or email.
            </p>
            <p>
              They are used to track the number of users who have visited
              particular pages and viewed emails, and acquire other statistical
              data. They collect only a limited set of data, such as a cookie
              number, time and date of page or email view, and a description of
              the page or email on which they reside. Web beacons and pixel tags
              cannot be declined. However, you can limit their use by controlling
              the cookies that interact with them.
            </p>

            <Heading id="privacy-policy" name="Privacy Policy" />
            <p>
              For more information about how we use information collected by
              cookies and other tracking technologies, please refer to our
              <a href="#privacy-policy">Privacy Policy</a>. This Cookie Policy is
              part of and is incorporated into our Privacy Policy. By using the
              Site, you agree to be bound by this Cookie Policy and our Privacy
              Policy.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default PolicyPage;
