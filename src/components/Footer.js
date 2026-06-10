import Image from "next/image";
import Link from "next/link";
import { footerContent } from "../data/siteContent";
import {
  RiArrowRightSLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiPhoneLine,
  RiShieldCheckLine,
  RiWhatsappLine,
} from "react-icons/ri";
import viratLogo from "../assets/images/virat_logo.png";

const socialIcons = {
  Whatsapp: RiWhatsappLine,
  Linkedin: RiLinkedinBoxFill,
  Github: RiGithubFill,
};

const contactIcons = {
  mail: RiMailLine,
  phone: RiPhoneLine,
};

function FooterList({ title, items }) {
  return (
    <article className="footerCol">
      <h3>{title}</h3>
      <ul role="list">
        {items.map((item) => (
          <li key={item}>
            <span className="footerListItem">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FooterLinks({ items }) {
  return (
    <ul role="list" className="footerLinkList">
      {items.map((item) => (
        <li key={item}>
          <Link href="/#contact">{item}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="row g-4 footerMain">
          <div className="col-12 col-lg-3">
            <article className="footerCol footerBrand">
              <Link
                className="footerBrandLogoLink"
                href="/"
                aria-label="Virat Software Solutions Home"
              >
                <div className="footerBrandLogoWrap">
                  <Image
                    src={viratLogo}
                    alt="Virat Software Solutions"
                    className="footerBrandLogo"
                  />
                </div>
              </Link>
              <p>{footerContent.companySummary}</p>

              {/* <div
                className="footerClutchShell"
                aria-label="Clutch review widget"
              >
                <iframe
                  src="https://widget.clutch.co/widgets/get/2?ref_domain=www.appgambit.com&uid=2604123&rel_nofollow=false&ref_path=/"
                  title="Clutch Review Widget"
                  loading="lazy"
                  scrolling="no"
                  className="footerClutchFrame"
                />
              </div> */}
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <FooterList title="TECH" items={footerContent.tech} />
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <FooterList
              title="Hire Resources"
              items={footerContent.hireResources}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-2 footerStack">
            <article className="footerCol">
              <h3>Company</h3>
              <FooterLinks items={footerContent.companyLinks} />
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <article className="footerCol">
              <h3>{footerContent.stayConnected}</h3>
              <ul role="list" className="contactList">
                {footerContent.contacts.map((contact) => (
                  <li key={contact.href}>
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      {(() => {
                        const ContactIcon = contactIcons[contact.icon];
                        return ContactIcon ? (
                          <ContactIcon className="footerIcon" aria-hidden="true" />
                        ) : null;
                      })()}
                      <span>{contact.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
            <div className="footerBottom">
              <div className="socialGroup">
                <ul
                  className="socialList"
                  role="list"
                  aria-label="Social media links"
                >
                  {footerContent.social.map((social) => {
                    const Icon = socialIcons[social] || RiArrowRightSLine;
                    return (
                      <li key={social}>
                        <Link
                          href="/#contact"
                          className="socialLink"
                          aria-label={social}
                        >
                          <Icon aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footerDivider" />

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="copyright">{footerContent.copyright}</p>
          <ul className="legalList" role="list" aria-label="Legal links">
            {footerContent.legal.map((legal) => (
              <li key={legal.label}>
                <Link href={legal.href} className="d-flex align-items-center gap-1">
                  <RiShieldCheckLine aria-hidden="true" />
                  {legal.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
