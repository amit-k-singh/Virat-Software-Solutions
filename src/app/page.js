import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeadFormShell from "../components/LeadFormShell";
import TechStackShowcase from "../components/TechStackShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqAccordion from "../components/FaqAccordion";
import TechAnimation from "../components/TechAnimation";
import "../assets/css/industries.css";
import { IndustryCards } from "../components/industries";
import {
  aboutContent,
  architectureContent,
  blogContent,
  contactContent,
  faqContent,
  finalCtaContent,
  heroContent,
  industriesContent,
  portfolioContent,
  privacyContent,
  ctaContent,
  processContent,
  servicesContent,
  solutionsContent,
  techStackContent,
  testimonialsContent,
  trustContent,
  termsContent,
} from "../data/siteContent";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowDownSLine,
  RiCheckboxCircleLine,
  RiMapPin2Line,
  RiMailLine,
  RiPhoneLine,
  RiRobot2Line,
  RiReactjsLine,
  RiNodejsLine,
  RiCodeBoxLine,
  RiCloudLine,
} from "react-icons/ri";
import {
  RiStore2Line,
  RiShoppingCartLine,
  RiCodeLine,
  RiBankCardLine,
  RiLineChartLine,
  RiLayoutLine,
  RiBarChartLine,
  RiFileList3Line,
  RiSearchLine,
} from "react-icons/ri";

const techIconMap = {
  "Shopify / CMS": RiStore2Line,
  "E-commerce": RiShoppingCartLine,
  "JavaScript": RiCodeLine,
  "Payment Gateway Integration": RiBankCardLine,
  "Conversion Optimization": RiLineChartLine,
  "WordPress / CMS": RiLayoutLine,
  "Frontend Development": RiCodeBoxLine,
  "Analytics Integration": RiBarChartLine,
  "Lead Forms": RiFileList3Line,
  "SEO Optimization": RiSearchLine,
};
export const metadata = {
  title: "Custom Software Development Company | AI, Web, Mobile & SaaS Development",
  description:
    "Virat Software Solutions is a custom software development company delivering web, mobile, SaaS, AI, cloud, and automation solutions built for scalable business growth. Talk to our engineering team today.",
};

function SectionHeader({ eyebrow, title, description, id }) {
  return (
    <div className="sectionIntro" id={id}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function ValuePills({ items }) {
  return (
    <div className="valuePills" role="list">
      {items.map((item) => (
        <span key={item} className="valuePill" role="listitem">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="heroSection" id="home">
          <div className="container">
            <div className="heroCenter">
    
              {/* eyebrow */}
              <p className="eyebrow">{heroContent.eyebrow}</p>
    
              {/* headline */}
              <h1 className="heroTitle">{heroContent.title}</h1>
    
              {/* supporting text */}
              <p className="heroText">{heroContent.description}</p>
    
              {/* ── CTA buttons ── */}
              <div className="heroActions">
                <a className="primaryButton" href="#final-cta">
                  <RiArrowRightLine aria-hidden="true" />
                  {heroContent.primaryCta}
                </a>
    
                <a className="secondaryButton" href="#portfolio">
                  <RiArrowRightUpLine aria-hidden="true" />
                  {heroContent.secondaryCta}
                </a>
              </div>

              {/* ── Value pills — AFTER highlight ── */}
              <div className="valuePills">
                <span className="valuePill">
                  <RiRobot2Line aria-hidden="true" />
                  AI / ML
                </span>
                <span className="valuePill">
                  <RiReactjsLine aria-hidden="true" />
                  React
                </span>
                <span className="valuePill">
                  <RiNodejsLine aria-hidden="true" />
                  Node.js
                </span>
                <span className="valuePill">
                  <RiCodeBoxLine aria-hidden="true" />
                  API Integrations
                </span>
                <span className="valuePill">
                  <RiCloudLine aria-hidden="true" />
                  AWS • Azure • GCP
                </span>
              </div>
    
            </div>
          </div>
        </section>

        <section className="sectionPad sectionTrust" aria-labelledby="trust-heading">
          <div className="container">
            <SectionHeader title={trustContent.title} description={trustContent.subtitle} id="trust-heading" />
            <div className="logoRail">
              <div className="logoRailTrack">
                {[0, 1].map((groupIndex) => (
                  <div className="logoRailGroup" key={groupIndex} aria-hidden={groupIndex === 1}>
                    {trustContent.logos.map((logo) => (
                      <div className="logoChip" key={`${groupIndex}-${logo.alt}`}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="(max-width: 767px) 180px, 220px"
                          className="logoImage"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sectionPad" id="solutions-architecture" aria-labelledby="architecture-heading">
          <div className="container">
            <SectionHeader title={architectureContent.title} description={architectureContent.description} id="architecture-heading" />
            <div className="heroActions">
              <a className="primaryButton" href="#final-cta">
                <RiArrowRightLine aria-hidden="true" />
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        <section className="sectionPad sectionAlt" id="solutions" aria-labelledby="solutions-heading">
          <div className="container">
            <SectionHeader title={solutionsContent.title} description={solutionsContent.description} id="solutions-heading" />
            <div className="row g-4">
              {solutionsContent.cards.map((card) => (
                <div className="col-12 col-md-6 col-xl-4" key={card.title}>
                  <article className="contentCard h-100">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <a href="#final-cta" className="inlineAction">
                      {card.button}
                      <RiArrowRightUpLine aria-hidden="true" />
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionPad" id="portfolio" aria-labelledby="portfolio-heading">
          <div className="container">
            <SectionHeader title={portfolioContent.title} description={portfolioContent.description} id="portfolio-heading" />
            <div className="row g-4">
              {portfolioContent.cards.map((card) => (
                <div className="col-12 col-lg-6" key={card.title}>
                  <article className="portfolioCard h-100">
                    <div className="cardLogoWrap">
                      <Image
                        src={card.logo}
                        alt={card.logoAlt || card.name}
                        className="cardLogo"
                      />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="valuePills">
                        {card.tech.map((item) => {
                          const Icon = techIconMap[item];
                          return (
                            <span key={item} className="valuePill">
                              {Icon && <Icon aria-hidden="true" />}
                              {item}
                            </span>
                          );
                        })}
                    </div>
                    <a href={card.link} className="inlineAction" target="_blank" rel="noreferrer">
                      View Project
                      <RiArrowRightUpLine aria-hidden="true" />
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionPad sectionAlt" id="services" aria-labelledby="services-heading">
          <div className="container">
            <SectionHeader title={servicesContent.title} description={servicesContent.description} id="services-heading" />
            <div className="row g-4">
              {servicesContent.cards.map((card) => (
                <div className="col-12 col-md-6 col-xl-4" key={card.title}>
                  <article className="contentCard serviceCard h-100">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <a href="#final-cta" className="inlineAction">
                      {card.button}
                      <RiArrowRightUpLine aria-hidden="true" />
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionPad" aria-labelledby="cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="cta-heading" className="ctaBannerTitle">{ctaContent.title}</h2>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#process">
                  Start Your Digital Transformation
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionPad sectionAlt" id="process" aria-labelledby="process-heading">
          <div className="container">
            <SectionHeader title={processContent.title} description={processContent.description} id="process-heading" />
            <div className="timelineGrid">
              {processContent.steps.map((step, index) => (
                <article className="timelineCard h-100" key={step.title}>
                  <p className="stepIndex">0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionPad" id="industries" aria-labelledby="industries-heading">
          <div className="container">
            <SectionHeader title={industriesContent.title} description={industriesContent.description} id="industries-heading" />
            <IndustryCards />
            <div className="industryFooterCallout">
              <a href="#final-cta" className="primaryButton">
                {industriesContent.cta}
              </a>
              <p>{industriesContent.supportingText}</p>
            </div>
          </div>
        </section>

        <TechStackShowcase content={techStackContent} />

        <section className="sectionPad" id="testimonials" aria-labelledby="testimonials-heading">
          <div className="container">
            <SectionHeader title={testimonialsContent.title} id="testimonials-heading" />
            <TestimonialsSection quotes={testimonialsContent.quotes} />
          </div>
        </section>

        {/* <section className="sectionPad sectionAlt" id="blog" aria-labelledby="blog-heading">
          <div className="container">
            <SectionHeader title={blogContent.title} id="blog-heading" />
          </div>
        </section> */}

        <section className="sectionPad" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <SectionHeader title={faqContent.title} id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={faqContent.items} />
            </div>
          </div>
        </section>

        <section className="sectionPad sectionAlt" id="final-cta" aria-labelledby="final-cta-heading">
          <div className="container">
            {/* Title First (Full Width) */}
            <div className="sectionIntro text-center mb-5">
              <h2 id="final-cta-heading">{finalCtaContent.title}</h2>
              <p style={{ maxWidth: "800px", margin: "16px auto 0", fontSize: "1.1rem", color: "var(--color-muted)" }}>
                {finalCtaContent.description}
              </p>
            </div>

            <div className="finalCtaGrid">
              <LeadFormShell
                title=""
                description=""
                buttonLabel={finalCtaContent.button}
                fieldLabels={finalCtaContent.fields}
                options={finalCtaContent.options}
              />
              <div className="finalCtaImageCol">
                <TechAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="sectionPad" id="about" aria-labelledby="about-heading">
          <div className="container">
            <SectionHeader title={aboutContent.title} description={aboutContent.description} id="about-heading" />
            <p className="bodyCopyLarge">{aboutContent.supporting}</p>
            <p className="highlightsLine">{aboutContent.highlights}</p>
            <div className="traitRow">
              {aboutContent.traits.map((trait) => (
                <span key={trait} className="traitChip">
                  {trait}
                </span>
              ))}
            </div>
            <div className="row g-4 mt-1">
              <div className="col-12 col-lg-6">
                <article className="contentCard h-100">
                  <h3>{aboutContent.whoWeAreTitle}</h3>
                  <p>{aboutContent.whoWeAre}</p>
                </article>
              </div>
              <div className="col-12 col-lg-6">
                <article className="contentCard h-100">
                  <h3>{aboutContent.whatWeBuildTitle}</h3>
                  <p>{aboutContent.whatWeBuild}</p>
                  <ul className="checkList" role="list">
                    {aboutContent.whatWeBuildList.map((item) => (
                      <li key={item}>
                        <RiCheckboxCircleLine aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
            <article className="contentCard mt-4">
              <h3>{aboutContent.approachTitle}</h3>
              <p>{aboutContent.approach}</p>
            </article>
          </div>
        </section>

        <section className="sectionPad sectionAlt" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <SectionHeader title={contactContent.title} description={contactContent.description} id="contact-heading" />
            <div className="contactGrid">
              <article className="contactPanel">
                <h3>{contactContent.contactTitle}</h3>
                <p>{contactContent.contactDescription}</p>
                <div className="contactDetail">
                  <RiMailLine aria-hidden="true" />
                  <span>Email</span>
                </div>
                <div className="contactDetail">
                  <RiPhoneLine aria-hidden="true" />
                  <span>Phone</span>
                </div>
                <div className="contactDetail">
                  <RiMapPin2Line aria-hidden="true" />
                  <span>{contactContent.location}</span>
                </div>
              </article>
              <FormShell
                title=""
                description={contactContent.formTitle}
                buttonLabel={contactContent.button}
                fieldLabels={contactContent.fields}
                compact
              />
            </div>
            <div className="faqList mt-5">
              <SectionHeader title={contactContent.faqsTitle} />
              {contactContent.faqs.map((item) => (
                <details className="faqItem" key={item.question}>
                  <summary>
                    <span>{item.question}</span>
                    <RiArrowDownSLine className="faqChevron" aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionPad" id="privacy-policy" aria-labelledby="privacy-heading">
          <div className="container legalContent">
            <SectionHeader title={privacyContent.title} id="privacy-heading" />
            <p>{privacyContent.intro}</p>
            {privacyContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {privacyContent.sections.map((section) => (
              <article key={section.title} className="legalBlock">
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="sectionPad sectionAlt" id="terms-conditions" aria-labelledby="terms-heading">
          <div className="container legalContent">
            <SectionHeader title={termsContent.title} id="terms-heading" />
            <p>{termsContent.intro}</p>
            {termsContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {termsContent.sections.map((section) => (
              <article key={section.title} className="legalBlock">
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
