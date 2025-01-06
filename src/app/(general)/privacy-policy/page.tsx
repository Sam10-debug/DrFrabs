"use client";
import AngleArrowSvg from "@/widgets/svg/angle-arrow";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Privacy Notice", link: "#notice" },
  { name: "Overview", link: "#overview" },
  { name: "Definitions", link: "#definition" },
  { name: "Our Privacy Principles", link: "#privacy-principles" },
  {
    name: "Personal Information we May Collect",
    link: "#personal-information",
  },
  { name: "How We Get Your Personal Information", link: "#get-personal-info" },
  {
    name: "How We May Use Your Personal Information",
    link: "#use-personal-info",
  },
  { name: "Data Security and Retention", link: "#data-security" },
  { name: "Cookies", link: "#cookies" },
  { name: "Updates to Our Privacy Policy", link: "#updates" },
  { name: "Contact Us", link: "#contact" },
];

const Heading = ({ name, id }: { name: string; id: string }) => (
  <>
    <span id={id}></span>
    <h2 className="mt-10 font-bold mb-7">{name}</h2>
  </>
);

const PolicyPage = () => {
  const [selected, setSelected] = useState("Overview");
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
                    className="privacy-heading pb-2"
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
      const allHeadings = document.getElementsByClassName("privacy-heading");
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
    <>
      <main id="privacy" className="bg-white">
        <section className="w-11/12 lg:w-10/12 mx-auto max-w-[1200px]">
          <section className="pt-16 pb-20">
            <h1 className="text-center text-6xl md:text-[64px] lg:text-[84px] font-extrabold uppercase">
              Privacy Policy
            </h1>
          </section>

          <section className="md:flex gap-14">
            <DropDown />
            <aside className="hidden lg:block mt-16 sticky md:top-[200px] max-w-[260px]">
              <nav>
                <ul className="space-y-8">
                  {links.map(({ name, link }) => (
                    <li key={name}>
                      <Link className="privacy-heading" href={link}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="max-w-[829px] policy-style mb-10">
              <Heading id="notice" name="Privacy Notice" />
              <p>
                Last updated August 2024
                <br />
                We are Platnova Inc., a Delaware corporation (company number 7009837) with our headquarters located at 651 N Broad St, Suite 201, Middletown, DE 19709 USA. Platnova Inc. is a global technology company that offers secure and seamless solutions for bill payment, currency swapping, depositing, and money transfer worldwide. We also operate as Platnova LTD in Canada, Rwanda, United Kingdom, and as Platnova Technologies LTD in Nigeria.
                <br />
                <br />
                At Platnova and its affiliates (collectively referred to as
                Platnova), we greatly value the trust you place in us by sharing
                your information. We prioritize the privacy of our users and are
                dedicated to protecting it. Therefore, this Privacy Notice
                outlines the Personal Information we collect, the reasons for
                collecting it, and how we utilize it.
              </p>

              <Heading id="overview" name="Overview" />
              <p>
                This Privacy Notice describes your privacy rights regarding why,
                how, and when we collect, use, store, share, and protect your
                information across our website, payment platforms (“Platforms”),
                APIs, Software Applications, (“Apps”), email notifications and
                tools regardless of how you use or access them.
                <br />
                This Privacy Notice is applicable to all of the Website,
                software applications (“Apps”) and/or payment platforms
                (“Platforms”) offered by Platnova or its subsidiaries or
                affiliated companies collectively referred to as Platnova
                “Services”.
                <br />
                Platnova Technologies LTD. and its affiliates are part of a
                group which is made up of a number of local operating entities
                in a number of markets across the globe. “Platnova”, “we”, “us”,
                or our” in this privacy statement means the Platnova entity that
                is responsible for processing your personal information.
              </p>

              <Heading id="definition" name="Definitions" />
              <ul>
                <li>
                  <strong>Account:</strong> means a Platnova Account
                </li>
                <br />
                <li>
                  <strong>Cookies:</strong> A cookie is a small data file that
                  is transferred to your computer or mobile device. It enables
                  us to remember your account log-in information, IP addresses,
                  web traffic number of times you visit, browser type and
                  version, device details, date and time of visits.
                </li>
                <li>
                  <strong>Platnova:</strong> means Platnova Inc and subsidiaries
                  or affiliates.
                </li>
                <li>
                  <strong>Personal Information:</strong> Any information that
                  can be used to identify a living person including email
                  address, company name, password, payment card, financial
                  information such as (bank account number, etc.),
                  Government-issued Identity card and/or taxpayer identification
                  it may also include anonymous information that is linked to
                  you, for example, your internet protocol (IP), log-in
                  information, address, location, device or transaction data.
                </li>
                <li>
                  <strong>Sites:</strong> means any platform including but not
                  limited to mobile applications, websites and social media
                  platforms.
                </li>
                <li>
                  <strong>User:</strong> means an individual who uses the
                  Services or accesses the Sites and has agreed to use the end
                  services of Platnova.
                </li>
                <li>
                  <strong>Special Categories of Personal Information:</strong>{" "}
                  means details about your race or ethnicity, religious or
                  philosophical beliefs, sex life, sexual orientation, political
                  opinions, trade union membership, information about your
                  health and genetic and biometric data.
                </li>
              </ul>

              <Heading id="privacy-principles" name="Our Privacy Principles" />
              <p>Platnova focuses on the following core principles:</p>
              <ul>
                <li>
                  <strong>To Empower the individual:</strong> Platnova wants you
                  to be in charge of your personal information and to make your
                  own voluntary choices about your personal data;
                </li>
                <li>
                  <strong>To keep and secure personal information:</strong>{" "}
                  Platnova Inc. and its affiliates (collectively, “Platnova’) do
                  not take your trusting us with your information for granted.
                  We take responsibility to ensuring that appropriate security
                  measures are put in place and your personal information is
                  protected;
                </li>
                <li>
                  <strong>To be transparent and to educate users:</strong> For
                  you to know what personal information is, how we collect
                  personal information, for what purpose and how we secure
                  personal information;
                </li>
                <li>
                  <strong>To abide by local laws:</strong> Platnova is a global
                  company with local privacy expertise. Our privacy practices
                  may vary among the countries in which we operate to reflect
                  local practices and legal requirements. Specific privacy
                  notices may apply to some of our products and services. Please
                  visit the webpage of the specific product or service to learn
                  more about our privacy and information practices in relation
                  to that product or service;
                </li>
                <li>
                  <strong>
                    To collect and store personal information on the “need to
                    collect” basis:
                  </strong>{" "}
                  Platnova collects personal information to perform its services
                  for you. We work to have measures in place to prevent
                  collecting and storing personal data beyond what we need.
                </li>
              </ul>

              <Heading
                id="personal-information"
                name="
              Personal Information We May Collect About You"
              />
              <p>
                We may collect, use, process, store, or transfer personal
                information such as:
              </p>
              <ul>
                <li>
                  <strong>Identity Data:</strong> Information such as, your full
                  name(s), your government-issued identity number, and your date
                  of birth. This data is to enable us to verify your identity in
                  order to offer our services to you;
                </li>
                <li>
                  <strong>Contact Data:</strong> This is data that is needed to
                  reach out to you, such as your contact address, email address,
                  telephone number, details of the device you use and billing
                  details;
                </li>
                <li>
                  <strong>Contact List:</strong> We may collect your contact
                  list to enhance and streamline your airtime and data purchase
                  experience within the app.
                </li>
                <li>
                  <strong>Identification documents:</strong> (such as your
                  passport or any Government-issued identity card), a photograph
                  (if applicable) and any other registration information you may
                  provide to prove you are eligible to use our services;
                </li>
                <li>
                  <strong>Log/Technical information:</strong> When you access
                  Platnova services, our servers automatically record
                  information that your browser sends whenever you visit a
                  website, links you have clicked on, length of visit on certain
                  pages, unique device identifier, log-in information, location
                  and other device details.
                </li>
                <li>
                  <strong>Financial Data:</strong> Information, such as personal
                  account number, the merchant’s name and location, the date and
                  the total amount of transaction, and other information
                  provided by financial institutions or merchants when we act on
                  their behalf;
                </li>
                <li>
                  <strong>Transactional Data:</strong> These are information
                  relating to a payment when you as a merchant (using one or
                  more of our payment processing services) or as a customer, are
                  using our products or services;
                </li>
                <li>
                  <strong>Marketing and Communications Data:</strong> This
                  includes both a record of your decision to subscribe or to
                  withdraw from receiving marketing materials from us or from
                  our third parties.
                </li>
                <li>
                  <strong>Records of your discussions with us:</strong> if we
                  contact you and if you contact us.
                </li>
              </ul>
              <p>
                We may also collect, store, use and transfer non-personal
                information or anonymized data such as statistical or
                demographic data. As a principle, we do not collect any Special
                Categories of Personal Information. If we do collect Special
                Categories of Personal Information, we will ensure compliance
                with applicable law.
              </p>
              <p>
                This Privacy Policy applies to Platnova services only. We do not
                exercise control over the sites displayed or linked from within
                our various services. These other sites may place their own
                cookies, plug-ins or other files on your computer, collect data
                or solicit personal information from you. Platnova does not
                control these third-party websites and we are not responsible
                for their privacy statements. Please consult such third parties’
                privacy statements.
              </p>

              <Heading
                id="get-personal-info"
                name="
              How we get your Personal Information and why we have it"
              />
              <p>
                The Personal Information we have about you is directly made
                available to us when you:
              </p>
              <ul>
                <li>Sign up for a Platnova Account;</li>
                <li>Use any of our services;</li>
                <li>Contact our customer support team;</li>
                <li>Fill our online forms;</li>
                <li>Contact us;</li>
              </ul>
              <p>
                The lawful basis we rely on for processing your Personal
                Information are:
              </p>
              <ul>
                <li>
                  <strong>Your Consent:</strong> Where you agree to us
                  collecting your Personal Information by using our Services.
                </li>
                <li>
                  <strong>We have a contractual obligation:</strong> Without
                  your Personal Information, we cannot provide our Services to
                  you.
                </li>
                <li>
                  <strong>We have a legal obligation:</strong> To ensure we are
                  fully compliant with all applicable Financial legislations
                  such as Anti-Money Laundering and Counter Terrorist Financing
                  Laws, we must collect and store your Personal Information. We
                  protect against fraud by checking your identity with your
                  Personal Information.
                </li>
              </ul>

              <Heading
                id="use-personal-info"
                name="
              How We May Use Your Personal Information"
              />

              <p>We may use your Personal Information we collect to:</p>
              <ul>
                <li>
                  Create and manage any accounts you may have with us, verify
                  your identity, provide our services, and respond to your
                  inquiries;
                </li>
                <li>
                  Process your payment transactions (including authorization,
                  clearing, chargebacks and other related dispute resolution
                  activities);
                </li>
                <li>
                  Protect against and prevent fraud, unauthorized transactions,
                  claims and other liabilities;
                </li>
                <li>
                  Provide, administer and communicate with you about products,
                  services, offers, programs and promotions of Platnova,
                  financial institutions, merchants and partners;
                </li>
                <li>
                  Evaluate your interest in employment and contact you regarding
                  possible employment with Platnova;
                </li>
                <li>
                  Evaluate and improve our business, including developing new
                  products and services;
                </li>
                <li>
                  As necessary to establish, exercise and defend legal rights;
                </li>
                <li>
                  To use data analytics to improve our Website, products or
                  services, and user experiences;
                </li>
                <li>
                  For other purposes for which we provide specific notice at the
                  time of collection.
                </li>
              </ul>
              <p>
                <strong>Usage of Collected Contact List</strong>
              </p>
              <p>
                The collected contact list will be used to enhance and
                streamline your airtime and data purchase experience within the
                app.
              </p>

              <Heading id="data-security" name="Data Security and Retention" />

              <p>
                The security of your Personal Information is important to
                Platnova. We are committed to protecting the information we
                collect. We maintain administrative, technical and physical
                controls designed to protect the Personal Information you
                provide, or we collect against loss or theft, as well as against
                any unauthorized access, risk of loss, disclosure, copying,
                misuse or modification.
              </p>
              <p>
                Other security measures include but not limited to, secure
                servers, firewall, data encryption and granting access only to
                employees in order to fulfil their job responsibilities.
              </p>
              <p>
                Where you use a password for any of your Accounts, please ensure
                you do not share this with anyone, and the password is kept
                confidential at all times.
              </p>
              <p>
                We are committed to conducting our business in accordance with
                these principles in order to ensure that the confidentiality of
                your Personal Information is protected and maintained.
                Transmitting information online is not entirely secure. As such,
                we cannot guarantee that all information provided online is
                secure. We would take all reasonable steps to ensure that your
                Personal Information is secured and well protected.
              </p>
              <p>
                We will only retain personal information on our servers for as
                long as is reasonably necessary as long as we are providing
                Services to you. Where you close your Account, your information
                is stored on our servers to the extent necessary to comply with
                regulatory obligations and for the purpose of fraud monitoring,
                detection and prevention. Where we retain your Personal Data, we
                do so in compliance with limitation periods under the applicable
                law.
              </p>

              <Heading id="cookies" name="Cookies" />
              <p>
                Like many other websites, we use cookies to distinguish you from
                other users and to customize and improve our services.
              </p>
              <p>
                Some browsers may automatically accept cookies while some can be
                modified to decline cookies or alert you when a website wants to
                place a cookie on your computer. If you do choose to disable
                cookies, it may limit your ability to use our website. For
                detailed information on the cookies and how we use them see our
                Cookie Policy.
              </p>

              <Heading id="updates" name="Updates to our privacy policy" />
              <p>
                From time to time, we may change, amend or review this Privacy
                Policy from time to time to reflect new services or changes in
                our Privacy Policy and place any updates on this page. All
                changes made will be posted on this page and where changes will
                materially affect you, we will notify you of this change by
                placing a notice online or via mail. If you keep using our
                Services, you consent to all amendments of this Privacy Policy.
              </p>

              <Heading id="contact" name="Contact Us" />
              <p>
                All access requests, questions, comments, complaints and other
                requests regarding the privacy policy should be sent to{" "}
                <a href="mailto:support@platnova.com">support@platnova.com</a>.
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default PolicyPage;
