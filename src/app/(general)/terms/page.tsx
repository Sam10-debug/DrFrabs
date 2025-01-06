"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import AngleArrowSvg from "@/widgets/svg/angle-arrow";
import Link from "next/link";

const links = [
  { name: "Interpretation", link: "#interpretation" },
  { name: "Our Services", link: "#services" },
  { name: "Privacy Policy", link: "#privacy-policy" },
  { name: "Age Restriction", link: "#age-restriction" },
  { name: "License to Use Our Website", link: "#license" },
  { name: "Links to Other Websites and Services", link: "#other-websites" },
  { name: "Who May User Our Services?", link: "#use-services" },
  { name: "Prohibited Activities", link: "#prohibited" },
  { name: "Intellectual Property", link: "#property" },
  { name: "Ammendment of Terms", link: "#ammendment" },
  { name: "Termination", link: "#termination" },
  { name: "Governing Law", link: "#govn-law" },
  { name: "Dispute Resolution", link: "#resolution" },
  { name: "Warranty Disclaimer", link: "#disclaimer" },
  { name: "Limitation of Liability", link: "#limit-liability" },
  { name: "Indemnification", link: "#indemnification" },
  { name: "Breaches of these Terms", link: "#breaches" },
  { name: "Contact Us", link: "#contact" },
];

const HeadingLi = ({
  name,
  id,
  ...rest
}: HTMLAttributes<HTMLLIElement> & { name: string; id: string }) => (
  <>
    <span id={id}></span>
    <li {...rest} className="mt-16 font-bold mb-7">
      {name}
    </li>
  </>
);
const PlatnovaLink = () => (
  <Link className="mx-1 underline" href="https://platnova.com">
    https://platnova.com
  </Link>
);
const RegLink = ({ link }: { link: string }) => (
  <Link className="mx-1 underline" href={"https://" + link}>
    {link}
  </Link>
);

const PolicyPage = () => {
  const [selected, setSelected] = useState("Interpretation");
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
                    className="terms-heading pb-2"
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
      const allHeadings = document.getElementsByClassName("terms-heading");
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

  return (
    <main id="terms" className="content-container bg-white">
      <section className="py-24">
        <h1 className="text-center text-6xl md:text-[64px] lg:text-[84px] font-extrabold uppercase">
          terms of use
        </h1>
      </section>

      <section className="md:flex gap-14">
        <DropDown />
        <aside className="hidden lg:block mt-16 sticky md:top-[200px] max-w-[260px]">
          <nav>
            <ul className="space-y-8">
              {links.map(({ name, link }) => (
                <li key={name}>
                  <Link className="terms-heading" href={link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="max-w-[829px] policy-style mb-10">
          <p className="text-[#030712] pt-16 font-bold mb-7">
            Platnova Inc.
          </p>
          <p>
            The Terms and Conditions (“Terms”) contained on this webpage shall
            govern your access to and use of this website, including all pages
            within this website (collectively referred to as this “Website”)
          </p>
          <p>
            These Terms apply in full force and effect to your use of this
            Website and by using this Website, you expressly accept all terms
            and conditions contained herein in full. You must not use this
            Website, if you have any objection to any of these Terms. <br />
            <strong className="uppercase font-normal">
              PLEASE READ AND UNDERSTAND THIS TERMS OF USE CAREFULLY BEFORE
              PROCEEDING. BY USING THIS WEBSITE, YOU EXPRESSLY AND FULLY ACCEPT
              ALL THE TERMS AND CONDITIONS CONTAINED HEREIN
            </strong>
          </p>

          <ol type="1" className="list-inside font-normal">
            <HeadingLi
              id="interpretation"
              name="
                Interpretation"
            />
            <p>
              The following definitions and rules of interpretation shall apply
              in this Agreement -
            </p>

            <ol type="1" className="font-normal">
              <li>
                <p>
                  {`"Agreement", "Terms of Use" - means these terms of service as a whole`}
                </p>
              </li>
              <li>
                <p>
                  {`“Data Protection Legislation” - Nigeria Data Protection Act 2023
              (NDPA) , and all other applicable legislations, regulations and
              other regulatory requirements in force from time to time which
              apply to a party, all relating to the use of Personal Data;`}
                </p>
              </li>
              <li>
                <p>
                  {`
              “Documentation” - the documents, guides and other media made
              available to you by us online at https://platnova.com or at
              any other web address notified by us to you or through mobile
              application, which set out a description of the Services and any
              user instructions for the Services;`}
                </p>
              </li>
              <li>
                <p>
                  {`
              “Effective Date” - the date of your first use of and/or access to
              the Services;`}
                </p>
              </li>
              <li>
                <p>{`“Personal Data” - has the meaning defined in the NDPA;`}</p>
              </li>
              <li>
                <p>
                  {`
              “Services” - Platnova trading platform and other services
              [including any associated Application Programming Interface (API)]
              provided or made accessible by us to you online at`}
                  <PlatnovaLink />
                  {`
              or any other website notified by us to
              you or through mobile application.`}
                </p>
              </li>
            </ol>

            <HeadingLi
              id="services"
              name="
                Our Services"
            />
            <ol type="1" className="font-normal list-outside">
              {/* 2.1 */}
              <li value={2}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      We provide a wide range of payment solutions to
                      individuals and businesses worldwide. Our services
                      include:
                    </p>
                  </li>
                </ol>
                {/* normal numbering */}
                <ol type="1">
                  <li>
                    <p>Money lending and savings</p>
                  </li>
                  <li>
                    <p>Creating and funding virtual cards</p>
                  </li>
                  <li>
                    <p>Bill payments</p>
                  </li>
                  <li>
                    <p>Gift cards</p>
                  </li>
                  <li>
                    <p>Airtime and Data top-up</p>
                  </li>
                </ol>
              </li>
              {/* 2.2 */}
              <li value={2}>
                <ol type="1" start={2} className="list-decimal">
                  <li>
                    <p>
                      Our team of experts works tirelessly to provide
                      cutting-edge payment solutions to individuals and
                      businesses worldwide, and we are proud to serve customers
                      in multiple countries and regions. At Platnova, we are
                      committed to maintaining the highest standards of
                      security, transparency, and ethics in all our operations.
                      We leverage the latest technology and our extensive
                      industry experience to provide our customers with the
                      easiest, most secure, and efficient payment processing
                      services possible.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <HeadingLi
              id="privacy-policy"
              name="
                Privacy Policy"
            />
            <ol type="1" className="font-normal list-outside">
              {/* 3.1 */}
              <li value={3}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      Whenever you use our Services, you consent to the
                      collection, storage, transfer, and use of your information
                      as described in this Privacy Notice. This includes any
                      information you choose to provide that is deemed sensitive
                      under applicable laws and regulations. The terms on which
                      we process any personal information that we collect from
                      you or that you provide to us are described in our Privacy
                      Notice. The Privacy Notice is available on our website At
                      <PlatnovaLink />. By using the Services, you agree to the
                      Privacy Notice and consent to the processing of any
                      personal data described in the Privacy Notice and you
                      warrant that all data that you provide to us is accurate.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <HeadingLi
              id="age-restriction"
              name="
                Age Restriction"
            />
            <p>In order to use our services, you must be 18 and above.</p>

            <HeadingLi
              id="license"
              name="
                License to Use Our Website"
            />
            <ol type="1" className="font-normal">
              {/* 5 */}
              <li value={5}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      We grant you a non-assignable, non-exclusive and revocable
                      license to use the software provided as part of our
                      services in the manner permitted by these Terms. This
                      license grant includes all updates, upgrades, new versions
                      and replacement software for you to use in connection with
                      our services.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={5}>
                <ol type="1" start={2} className="list-decimal">
                  <li>
                    <p>
                      The services are protected by copyright, trademark, and
                      other laws of both the Federal Republic of Nigeria and
                      other relevant foreign countries. Nothing in this Term
                      gives you a right to use the Platnova name or any of
                      Platnova’s trademarks, logos, domain names, and other
                      distinctive brand features. All rights, title and interest
                      in and to the services are and will remain the exclusive
                      property of Platnova and its licensors.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={5}>
                <ol type="1" start={3} className="list-decimal">
                  <li>
                    <p>
                      If you do not comply with all the provisions, then you
                      will be liable for all resulting damages suffered by you,
                      Platnova Technologies LTD and all third parties. Unless
                      otherwise provided by applicable law, you agree not to
                      alter, re-design, reproduce, adapt, display, distribute,
                      translate, disassemble, reverse engineer, or otherwise
                      attempt to create any source code that is derived from the
                      software.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={5}>
                <ol type="1" start={4} className="list-decimal">
                  <li>
                    <p>
                      Any feedback, comments, or suggestions you may provide to
                      us and our services is entirely voluntary and we will be
                      free to use such feedback, comments or suggestions as we
                      see fit without any obligation to you.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <HeadingLi
              id="other-websites"
              name="
                Links to Other Websites and Services"
            />
            <p>
              {`
              The Services also may contain links to other websites or online
              services that we think may interest you (collectively, “Linked
              Services''). Linked Services are not under the control of
              Platnova and Platnova is not responsible for Linked Services or
              for any information or materials on, or any form of transmission
              received from, any Linked Service. The inclusion of a link does
              not imply endorsement by Platnova of the Linked Services or any
              association with the operators of the Linked Services. Platnova
              does not investigate, verify, or monitor the Linked Services.
              Platnova provides links to Linked Services for your convenience
              only. You access Linked Services at your own risk. If you decide
              to use these third-party services, you will be responsible for
              reviewing and understanding the terms and conditions associated
              with them. You agree that Platnova is not responsible for the
              performance of these services. You may be offered services,
              products and promotions provided by third parties and not by
              Platnova. The Website may contain links to third-party websites.
              The inclusion of any website link does not imply an approval,
              endorsement, or recommendation by Platnova.`}
            </p>

            <HeadingLi
              id="use-services"
              name="
                Who May Use Our Services?"
            />
            <p>
              You may use the Services only if you agree to form a binding
              contract with Platnova and are not a person barred from receiving
              services under the laws of the applicable jurisdiction. If you are
              accepting these Terms and using the Services on behalf of a
              company, business, or organization, you represent and warrant that
              you are authorized to do so.
            </p>

            <HeadingLi
              id="prohibited"
              name="
                Prohibited Activities"
            />

            <ol type="1" className="font-normal">
              {/* 5 */}
              <li value={8}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      In connection with your use of our website, your Account,
                      the Platnova Services, or in the course of your
                      interactions with Platnova, other Users, or third parties,
                      you will not:
                    </p>
                  </li>
                </ol>
              </li>

              {/* normal numbering */}
              <ol type="1" className="list-outside">
                <li>
                  <p>
                    use the Site or any Services in order to disguise the origin
                    or nature of illicit proceeds of, or to further, any breach
                    of applicable Laws, or to transact or deal in, any
                    contraband digital assets, fiat, funds, property, or
                    proceeds;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any Services if any applicable Laws,
                    including but not limited to AML Laws, Counter Terrorism
                    Financing (CTF) Laws, Anti-Corruption Laws, Economic
                    Sanctions Laws, prohibit, penalize, sanction, or expose the
                    Site to liability for any Services furnished or offered to
                    you under these Terms of Service;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any of the Services, or any financial
                    services of any financial Institution, whether or not an
                    affiliate of Platnova, to facilitate, approve, evade, avoid,
                    or circumvent any applicable Laws, including but not limited
                    to AML Laws, Anti-Corruption Laws, Cybercrime Laws, and
                    other applicable laws;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any Services to evade taxes under the Laws
                    of Nigeria or any other jurisdiction(s) applicable to you or
                    the Site;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any Services to interfere with or subvert
                    the rights or obligations of Platnova or the rights or
                    obligations of any other Site user or any other third party;
                  </p>
                </li>
                <li>
                  <p>
                    transact using fraudulent, misleading, or inaccurate
                    information presented to the Site or to Platnova or take
                    advantage of any technical glitch, malfunction, failure,
                    delay, default, or security breach;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any Services to engage in conduct that is
                    detrimental to Platnova or to any other Site user or any
                    other third party;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any Services to: (i) engage or attempt to
                    engage in wash trading, spoofing, fictitious trading, or
                    price manipulation; (ii) enter orders or quotes with the
                    intent to disrupt or with reckless disregard for the adverse
                    impact on the orderly conduct of trading or the fair
                    execution of transactions; or (iii) entering orders or
                    quotes with the intent of creating the false impression of
                    market depth or market interest;
                  </p>
                </li>
                <li>
                  <p>
                    use the Site or any Services, including the feature that
                    enables Platnova users receive funds in their Platnova
                    account through Platnova’s bank account without the need for
                    the Platnova user to receive such funds directly in their
                    own bank account, for legitimate transactions and that where
                    this feature is used by the user otherwise, the user is
                    liable for any administrative, civil, or criminal actions.
                    For the purpose of such transactions, the User understands
                    and accepts that at no time is Platnova an agent of the
                    user;
                  </p>
                </li>
                <li>
                  <p>
                    falsify or materially omit any information or provide
                    misleading or inaccurate information requested by Platnova,
                    including at registration or during the course of
                    administering any Services to you;
                  </p>
                </li>
                <li>
                  <p>
                    cause injury to, or attempt to harm, Platnova or any third
                    party through your access to the Site or any Services;
                  </p>
                </li>
                <li>
                  <p>
                    where you are subject to prohibitions or restrictions as set
                    forth above, access the Site or use any Services utilizing
                    any virtual private network, proxy service, or any other
                    third party service, network, or product with the effect of
                    disguising your IP address or location, or
                  </p>
                </li>
                <li>
                  <p>
                    violate, cause a violation of, or conspire or attempt to
                    violate these Terms of Service or applicable Laws.
                  </p>
                </li>
              </ol>

              <li value={8}>
                <ol type="1" start={2} className="list-decimal">
                  <li>
                    <p>
                      If Platnova determines that you have engaged in any
                      Prohibited Use as defined in 8.1 above, Platnova may
                      address such Prohibited Use through an appropriate
                      sanction in its sole and absolute discretion. Such
                      sanction may include, but is not limited to, making a
                      report to any Government, law enforcement, or other
                      authorities, without providing any notice of you about any
                      such report; confiscation of any fiat, funds, property,
                      proceeds, or digital assets in any digital assets account
                      or wallet that you have on the Site; and, suspending or
                      terminating your access to any Services or fiat, funds,
                      property, or digital assets from any digital assets
                      account or wallet address. Platnova may, at its sole and
                      absolute discretion, seize and deliver your property to
                      any applicable Government, law enforcement, or other
                      authorities where circumstances warrant. In addition,
                      should your actions or inaction result in the imposition
                      of economic costs to Platnova, you shall pay an amount to
                      Platnova so as to render Platnova whole, including without
                      limitation, the amount of taxes or penalties that might be
                      imposed on Platnova.
                    </p>
                  </li>
                </ol>
              </li>

              <li value={8}>
                <ol type="1" start={3} className="list-decimal">
                  <li>
                    <p>
                      In certain circumstances, you understand and agree that
                      Platnova reserves the right to immediately suspend your
                      Account with Platnova or make unilateral deduction(s) from
                      your Platnova wallet, where such funds belong to Platnova,
                      a customer other than you, or a third party, including a
                      Platnova partner or supplier. The circumstances in which
                      Platnova shall be entitled to exercise the contractual
                      right of suspension, and unilateral deductions above
                      include but not limited to the following:
                    </p>
                  </li>
                </ol>
              </li>

              {/* normal numbering */}
              <ol type="1" className="list-outside">
                <li>
                  <p>
                    To protect, preserve, or recover funds which Platnova has
                    reasonably established was erroneously, inadvertently, or
                    wrongly deposited in your Platnova wallet, whether due to
                    computer or human error; or
                  </p>
                </li>
                <li>
                  <p>
                    To recover funds which Platnova has reasonably established
                    as overpayment to your Platnova wallet in relation to an
                    already completed transaction on the Platnova platform,
                    whether due to computer or human error.
                  </p>
                </li>
              </ol>
              <li value={8}>
                <ol type="1" start={4} className="list-decimal">
                  <li>
                    <p>
                      In the event that funds described in 8.3 above have
                      already been dissipated by you or you are unable to refund
                      the funds immediately upon request by Platnova, you give
                      Platnova the right to use any legal means
                      possible-including civil action and/or criminal
                      prosecution–in recovering such funds from you.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <HeadingLi
              id="property"
              name="
                Intellectual Property"
            />
            <p>
              Unless otherwise stated, Platnova Technologies LTD. (collectively,
              Platnova) and/or its licensors own the intellectual property
              rights and materials on the website subject to the license below.
              We do not grant you any right, license, title or interest to any
              of our intellectual Property rights which you may or may not have
              access to. You agree to take such actions including any legal or
              official document or other documents that may be needed to further
              affirm our intellectual property rights.
            </p>

            <HeadingLi
              id="ammendment"
              name="
                Ammendment of Terms"
            />
            <ol type="1" className="font-normal">
              {/*  */}
              <li value={10}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      We may revise these Terms from time to time. The changes
                      will not be retroactive, and the most current version of
                      the Terms which will always be on
                      <RegLink link="platnova.com/terms" />
                      will govern our relationship with you. We will also try to
                      notify you of any material changes which could be done via
                      email associated with your account or service
                      notification. By continuing to use our services after the
                      changes become effective, you agree to be bound by the
                      revised Terms.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={10}>
                <ol type="1" start={2} className="list-decimal">
                  <li>
                    <p>
                      {`
                      In the event that any of these Terms is held to be
                      invalid or unenforceable, then that provision will be
                      limited or eliminated to the minimum extent necessary, and
                      the remaining provisions of these Terms will remain in
                      full effect. Platnova's failure to enforce any right or
                      provision of these Terms will not be deemed a waiver of
                      such right or provision.`}
                    </p>
                  </li>
                </ol>
              </li>
              <li value={10}>
                <ol type="1" start={3} className="list-decimal">
                  <li>
                    <p>
                      We may amend the Terms from time to time. You should visit
                      the Platnova website regularly to check when the Terms
                      were last updated (as displayed at the top of this
                      document) and to review the current Terms. We will do our
                      best to notify you of any amendments to the Terms that we
                      consider likely to materially affect your rights and
                      obligations. Any such notice will be posted on our Site,
                      or sent by email to the address associated with your
                      Platnova account. The continued use of your Platnova
                      account, after any amendment to these Terms, constitutes
                      your acceptance of the Terms, as modified by such
                      amendment. If you do not accept the Terms, or any
                      amendment to them, you must immediately stop using the
                      Platnova Site and your  Platnova account.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <HeadingLi
              id="termination"
              name="
                Termination"
            />

            <ol type="1" className="font-normal">
              {/*  */}
              <li value={11}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      Platnova has the right, at its discretion and without
                      liability to you, with or without prior notice or with or
                      without your consent, to temporarily terminate or
                      permanently terminate your access to all parts or any part
                      of our services. In cases of violation of our Terms of
                      Service, Platnova reserves the right to remedy such
                      violations in accordance with law and in equity, including
                      without limitation, the right to restrict, suspend, or
                      terminate your account or deny you access to the Services
                      without notice; and whenever the need to cooperate with
                      law enforcement regarding enquiries or need to comply with
                      law arises, Platnova shall be entitled to disclose
                      information including, but not limited to, your user
                      identity, and personal details.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={11}>
                <ol type="1" start={2} className="list-decimal">
                  <li>
                    <p>
                      You agree and accept that Platnova has the right to cancel
                      transaction and restrict, and terminate your account
                      without notice in the following situations, but not
                      limited to these situations:
                    </p>
                  </li>
                </ol>
              </li>

              {/* normal numbering */}
              <ol type="1" className="list-outside">
                <li>
                  <p>
                    Where we suspect that you are acting in breach of this
                    agreement; that your account is being used for or associated
                    with fraud, money laundry, terrorism financing, and any
                    other financial crimes or fraudulent activity;
                  </p>
                </li>
                <li>
                  <p>
                    Where your name appears in any governmental sanction list;
                    that you are taking any action that may circumvent our
                    controls such as opening multiple Platnova accounts or
                    abusing promotions offered;
                  </p>
                </li>
                <li>
                  <p>
                    Where your account is subjected to operational error or
                    other error which may require us to suspend your account
                    pending when such errors are treated;
                  </p>
                </li>
                <li>
                  <p>
                    Where we have reason to believe that another Platnova
                    account provided by us or one of our group companies is held
                    by you and has been used for any fraudulent activity, money
                    laundering, terrorism financing, or other criminal
                    activity;
                  </p>
                </li>
                <li>
                  <p>
                    Where you violate or we have reason to believe that you are
                    in violation of any law or regulation that is applicable to
                    your use of our services;
                  </p>
                </li>
              </ol>

              <li value={11}>
                <ol type="1" start={3} className="list-decimal">
                  <li>
                    <p>
                      Regarding suspension, you agree that we may suspend your
                      Platnova account at any time if:
                    </p>
                  </li>
                </ol>
              </li>

              {/* normal numbering */}
              <ol type="1" className="list-outside">
                <li>
                  <p>
                    We reasonably believe that your Platnova Account has been
                    compromised or for other security reasons; or
                  </p>
                </li>
                <li>
                  <p>
                    We reasonably suspect that your Platnova account has been
                    used or is being used without your authorization or used
                    fraudulently; and we shall notify you either before the
                    suspension or, if prior notification is not possible under
                    the circumstances, promptly after the suspension unless we
                    are prohibited by law to notify you.
                  </p>
                </li>
              </ol>

              <li value={11}>
                <ol type="1" start={4} className="list-decimal">
                  <li>
                    <p>
                      Your right to terminate: You may terminate this Agreement
                      by closing your Account at any time. When you close your
                      Account, any pending transactions will be canceled. Any
                      funds that may be held for you by us at the time of
                      closure, less any applicable fees, will be paid out to you
                      according to an agreed pay-out schedule, assuming all
                      pay-out-related authentication requirements have been
                      fulfilled (for example, you may not close your Account as
                      a means of evading your pay-out schedule). If an
                      investigation is pending at the time you close your
                      Account, Platnova may hold your funds as described herein.
                      If you are later determined to be entitled to some or all
                      of the funds in dispute, Platnova will release those funds
                      to you.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={11}>
                <ol type="1" start={5} className="list-decimal">
                  <li>
                    <p>
                      Effect of Termination: Platnova will not be liable to you
                      or any third party for termination of access to the
                      Service, deletion of your information or Account data, or
                      export of your information or Account data. We will not be
                      liable to you for compensation or damages in connection
                      with any termination or suspension of the Service. Any
                      termination of this Agreement does not relieve you of any
                      obligations to pay any fees or costs accrued prior to the
                      termination and any other amounts owed by you to us as
                      provided in this Agreement.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <HeadingLi
              id="govn-law"
              name="
                Governing Law"
            />
            <p>
              These Terms shall be interpreted and governed in accordance with
              the Laws of the Federal Republic of Nigeria  and you submit to the
              non-exclusive jurisdiction of the State and Federal Courts located
              in Nigeria for the resolution of any dispute.
            </p>

            <HeadingLi
              id="resolution"
              name="
                Dispute Resolution"
            />

            <ol type="1" className="font-normal">
              {/*  */}
              <li value={13}>
                <ol type="1" start={1} className="list-decimal">
                  <li>
                    <p>
                      Contact Platnova First. If a dispute arises between you
                      and Tradify, our goal is to learn about and address your
                      concerns and, if we are unable to do so to your
                      satisfaction, to provide you with a neutral and cost
                      effective means of resolving the dispute quickly. Disputes
                      between you and Platnova regarding the Platnova Services
                      may be reported to support@platnova.com at any time.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={2} className="list-decimal">
                  <li>
                    <p>
                      If a Party determines after negotiating in good faith for
                      a period of fourteen (14) days, that any disputes or
                      differences which may arise between the parties out of
                      this Agreement cannot be resolved through negotiation,
                      such matters shall be settled by mediation. Online
                      mediation processes may be deployed. If mediation also
                      fails or both parties fail to agree on a mediator within
                      another 14 days after the initial 14 days, parties shall
                      apply to Lagos Multi Door CourtHouse (LMDC) for dispute
                      resolution under the LMDC Mediation Procedure Rules or
                      such other rules mutually agreed by the Parties. The
                      proceedings shall be conducted in English Language and the
                      Laws of the Federal Republic of Nigeria shall apply.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={3} className="list-decimal">
                  <li>
                    <p>
                      Arbitration. Where dispute resolutions under this clause
                      above has been explored; if unsatisfied, a party may, for
                      any claim (excluding claims for injunctive or other
                      equitable relief) where the total amount of the award
                      sought is less than $10,000.00 USD (or other currencies
                      equivalents), the party requesting relief may elect to
                      resolve the dispute in a cost-effective manner through
                      binding non-appearance-based arbitration. If a party
                      elects arbitration, that party will initiate such
                      arbitration through any other established alternative
                      dispute resolution (ADR) provider mutually agreed upon by
                      the parties. The ADR provider and the parties must comply
                      with the following rules: (a) the arbitration shall be
                      conducted by telephone, online, and/or be solely based on
                      written submissions. The specific manner shall be chosen
                      by the party initiating the arbitration; (b) the
                      arbitration shall not involve any personal appearance by
                      the parties or witnesses unless otherwise mutually agreed
                      by the parties; and (c) any judgment on the award rendered
                      by the arbitrator may be entered in any court of competent
                      jurisdiction.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={4} className="list-decimal">
                  <li>
                    <p>
                      Law and Forum for Disputes. Except as otherwise agreed by
                      the parties or as described in this provision, you agree
                      that any claim or dispute you may have against Platnova
                      must be resolved by a court located in Nigeria or where
                      the defendant is located. You agree to submit to the
                      personal jurisdiction of the courts located within Nigeria
                      for the purpose of litigating all such claims or disputes.
                      This Agreement shall be governed in all respects by the
                      laws of Nigeria as such laws are applied to agreements
                      entered into and to be performed entirely within Nigeria,
                      without regard to conflict of law provisions.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={5} className="list-decimal">
                  <li>
                    <p>
                      Confidentiality. All Alternative Dispute Resolution (ADR)
                      proceedings and all information submitted, relating to or
                      presented in connection with or during the proceeding,
                      shall be deemed confidential information not to be
                      disclosed to any person not a party to the proceedings.
                      All communications, whether written or oral, made in the
                      course of or in connection with the Claim and its
                      resolution, by or on behalf of any party or by the
                      arbitrator or a mediator, including any arbitration award
                      or judgment related thereto, are confidential and
                      inadmissible for any purpose, including impeachment or
                      estoppel, in any other litigation or proceeding; provided
                      that evidence shall not be rendered inadmissible or
                      non-discoverable solely as a result of its use in the
                      dispute resolution proceedings.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={6} className="list-decimal">
                  <li>
                    <p>
                      Improperly Filed Litigation. All claims you bring against
                      Platnova must be resolved in accordance with the
                      provisions of this agreement. All claims filed or brought
                      contrary to these provisions shall be considered
                      improperly filed and a breach of this agreement. Should
                      you file a claim contrary to this provision, Platnova may
                      recover attorneys’ fees and costs (including in-house
                      attorneys and paralegals) provided that Platnova has
                      notified you in writing of the improperly filed claim, and
                      you have failed to promptly withdraw the claim.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={7} className="list-decimal">
                  <li>
                    <p>
                      Time Limitation. You agree that any cause of action
                      arising out of or related to the services must commence
                      within one (1) year after the cause of action accrues;
                      otherwise, the cause of action is permanently barred.
                    </p>
                  </li>
                </ol>
              </li>
              <li value={13}>
                <ol type="1" start={8} className="list-decimal">
                  <li>
                    <p>
                      Class Actions. Any arbitration under this Agreement will
                      only be on an individual basis. Class arbitrations, class
                      actions, private-attorney general actions, and
                      consolidation with other arbitrations are not permitted,
                      and you are waiving your rights to have your case decided
                      by a jury (assuming the jurisdiction operates a jury
                      system) and you are also waiving your right to participate
                      in a class action against Platnova.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>

            <p className="font-black">General</p>

            <HeadingLi
              id="disclaimer"
              name="
                Warranty Disclaimer"
            />

            <p>
              Platnova WILL ALWAYS ENSURE THAT THE WEBSITE IS AVAILABLE AT ALL
              TIMES AND BUG FREE. HOWEVER, IT IS USED AT YOUR OWN RISK.
            </p>
            <p>
              WE PROVIDE ALL MATERIALS “AS IS” WITH NO WARRANTY, EXPRESS OR
              IMPLIED, OF ANY KIND. WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES
              AND CONDITIONS, INCLUDING ANY IMPLIED WARRANTY OR CONDITION OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY,
              SECURITY, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY
              RIGHTS, WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, Platnova
              MAKES NO WARRANTY THAT OUR WEBSITE AND SERVICES WILL MEET YOUR
              REQUIREMENTS OR THAT OUR WEBSITE WILL REMAIN FREE FROM ANY
              INTERRUPTION, BUGS, INNACCURACIES, AND ERROR FREE.
            </p>
            <p>
              YOUR USE OF OUR SERVICES ARE AT YOUR OWN RISK AND YOU ALONE WILL
              BE RESPONSIBLE FOR ANY DAMAGE THAT RESULTS IN LOSS OF DATA OR
              DAMAGE TO YOUR COMPUTER SYSTEM. NO ADVICE OR INFORMATION, WHETHER
              ORAL OR WRITTEN OBTAINED BY YOU FROM OUR WEBSITE OR OUR SERVICES
              WILL CREATE ANY WARRANTY OR CONDITION NOT EXPRESSLY STATED.
            </p>

            <HeadingLi
              id="limit-liability"
              name="
                Limitation of Liability"
            />

            <p>
              YOU AGREE TO THE LIMITATION LIABILITY CLAUSE TO THE MAXIMUM EXTENT
              PERMITTED BY APPLICABLE LAW: PLATNOVA WILL IN NO WAY BE LIABLE FOR
              ANY DIRECT, INDIRECT, INCIDENTAL PUNITIVE, CONSEQUENTIAL, SPECIAL
              OR EXEMPLARY DAMAGES OR ANY DAMAGES INCLUDING DAMAGES RESULTING
              FROM REVENUE LOSS, PROFIT LOSS, USE, DATA, GOODWILL , BUSINESS
              INTERRUPTION OR ANY OTHER INTANGIBLE LOSSES (WHETHER PLATNOVA HAS
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR NOT) ARISING
              OUT OF PLATNOVA’S WEBSITE OR SERVICES (INCLUDING, WITHOUT
              LIMITATION TO INABILITY TO USE, OR ARISING FROM THE RESULT OF USE
              OF PLATNOVA’S WEBSITE OR SERVICES) WHETHER SUCH DAMAGES ARE BASED
              ON WARRANTY, TORT, CONTRACT, STATUTE OR ANY OTHER LEGAL THEORY.
            </p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF CERTAIN WARRANTIES OR
              LIMITATIONS ON THE SCOPE AND DURATION OF SUCH WARRANTIES, SO THE
              ABOVE DISCLAIMERS MAY NOT APPLY TO YOU IN THEIR ENTIRITIES, BUT
              WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
            </p>

            <HeadingLi
              id="indemnification"
              name="
                Indemnification"
            />

            <p>
              You hereby indemnify Platnova and undertake to keep Platnova
              indemnified against any losses, damages, costs, liabilities and
              expenses (including without limitation to reasonable legal fees)
              arising out of any breach by you of any provision of these Terms,
              or arising out of any claim that you have breached any provision
              of these Terms.
            </p>

            <HeadingLi
              id="breaches"
              name="
                Breaches of these Terms"
            />

            <p>
              Without prejudice to Platnova’s other rights under these Terms, if
              you breach these Terms in any way, Platnova may take such action
              as Platnova deems appropriate to deal with the breach, including
              suspending your access to the website, prohibiting you from
              accessing the website, blocking computers using your IP address
              from accessing the website, contacting your internet service
              provider to request that they block your access to the website
              and/or bringing court proceedings against you.
            </p>

            <HeadingLi
              id="contact"
              name="
                Contact Us"
            />

            <p>
              If you have any issues or questions in relation to these Terms,
              your rights and obligations arising from them, or your use of the
              Site and Service, your account, or any other issue, please contact
              <RegLink link="support@platnova.com" />
            </p>

            {/* Main ol */}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default PolicyPage;
