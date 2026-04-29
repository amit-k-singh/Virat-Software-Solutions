import { footerContent } from "../data/siteContent";
import {
  RiArrowRightSLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiShieldCheckLine,
  RiTwitterXFill,
  RiWhatsappLine,
} from "react-icons/ri";

const contactIcons = {
  Email: RiMailLine,
  Phone: RiPhoneLine,
  "WhatsApp Chat": RiWhatsappLine,
  Location: RiMapPin2Line,
};

const socialIcons = {
  LinkedIn: RiLinkedinBoxFill,
  Instagram: RiInstagramLine,
  "Twitter (X)": RiTwitterXFill,
  Facebook: RiFacebookCircleFill,
};

function FooterList({ title, items }) {
  return (
    <article className="footerCol">
      <h3>{title}</h3>
      <ul role="list">
        {items.map((item) => (
          <li key={item.label || item}>
            {item.href ? (
              <a href={item.href}>
                <RiArrowRightSLine className="footerIcon" aria-hidden="true" />
                {item.label}
              </a>
            ) : (
              <span className="footerListItem">
                <i className="ri-checkbox-blank-circle-line footerItemRi" aria-hidden="true" />
                {item}
              </span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Footer() {
  return (
    <footer className="siteFooter" id="contact">
      <div className="container">
        <div className="row g-4 footerMain">
          <div className="col-12 col-lg-4">
            <article className="footerCol">
              <h2>{footerContent.companyName}</h2>
              <p>{footerContent.companySummary}</p>
              <ul className="quickLinks" role="list">
                {footerContent.companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <RiArrowRightSLine className="footerIcon" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="col-6 col-lg-2">
            <FooterList title="Services" items={footerContent.services} />
          </div>
          <div className="col-6 col-lg-2">
            <FooterList title="Industries" items={footerContent.industries} />
          </div>
          <div className="col-6 col-lg-2">
            <FooterList title="Resources" items={footerContent.resources} />
          </div>
          <div className="col-6 col-lg-2">
            <article className="footerCol">
              <h3>Contact</h3>
              <ul role="list">
                {footerContent.contacts.map((contact) => {
                  const Icon = contactIcons[contact.label] || RiArrowRightSLine;
                  return (
                    <li key={contact.label} className="contactItem">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("https") ? "_blank" : undefined}
                        rel={contact.href.startsWith("https") ? "noreferrer" : undefined}
                      >
                        <Icon className="footerIcon" aria-hidden="true" />
                        <span className="contactLabel">{contact.label}:</span>
                        <span>{contact.value}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </div>

        <div className="footerDivider" />

        <div className="footerBottom">
          <ul className="socialList" role="list" aria-label="Social media links">
            {footerContent.social.map((social) => {
              const Icon = socialIcons[social.label] || RiArrowRightSLine;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="socialLink"
                    aria-label={social.label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="legalList" role="list" aria-label="Legal links">
            {footerContent.legal.map((legal) => (
              <li key={legal.label}>
                <a href={legal.href}>
                  <RiShieldCheckLine aria-hidden="true" />
                  {legal.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="copyright">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
