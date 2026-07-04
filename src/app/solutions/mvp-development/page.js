import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import LeadFormShell from "../../../components/LeadFormShell";
import TechStackShowcase from "../../../components/TechStackShowcase";
import FaqAccordion from "../../../components/FaqAccordion";
import { IndustryCards } from "../../../components/industries";
import "../../../assets/css/industries.css";

import {
  techStackContent,
  portfolioContent,
  trustContent,
  finalCtaContent,
} from "../../../data/siteContent";

import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowDownSLine,
  RiCheckboxCircleLine,
  RiSettings3Line,
  RiRobot2Line,
  RiDatabase2Line,
  RiCloudLine,
  RiLayoutLine,
  RiRocketLine,
  RiUserStarLine,
  RiLineChartLine,
  RiStore2Line,
  RiShoppingCartLine,
  RiCodeLine,
  RiBankCardLine,
  RiBarChartLine,
  RiFileList3Line,
  RiSearchLine,
  RiCodeBoxLine,
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
  title: "MVP Development Services for Startups & Founders",
  description:
    "Validate your product idea, launch faster, and reduce development risk with scalable Minimum Viable Product (MVP) development services designed for startups and product teams.",
  alternates: {
    canonical: "/solutions/mvp-development",
  },
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

const mvpBenefits = [
  {
    title: "Faster Time-to-Market",
    description: "Launch core functionality quickly, gather real-world feedback, and establish an early market presence before competitors.",
    Icon: RiRocketLine,
  },
  {
    title: "Reduced Development Risk",
    description: "Validate assumptions and user demand before committing significant resources to features, infrastructure, and large-scale development.",
    Icon: RiCheckboxCircleLine,
  },
  {
    title: "Cost-Efficient Product Validation",
    description: "Focus investment on essential features that solve real user problems while avoiding unnecessary development costs.",
    Icon: RiBankCardLine,
  },
  {
    title: "Real User Feedback",
    description: "Collect insights from actual users to refine functionality, improve user experience, and prioritize future product enhancements.",
    Icon: RiUserStarLine,
  },
  {
    title: "Investor & Stakeholder Confidence",
    description: "A working MVP demonstrates product potential, market demand, and execution capability better than concepts, presentations, or prototypes alone.",
    Icon: RiLineChartLine,
  },
  {
    title: "Scalable Foundation for Growth",
    description: "Build on a modern technology architecture that supports future features, user growth, integrations, and business expansion.",
    Icon: RiCloudLine,
  },
];

const mvpAudiences = [
  {
    badge: "1. Startups & Founders",
    title: "Vision to functional validation",
    description: "Turn your vision into a functional product that helps validate market demand, attract early adopters, and secure stakeholder or investor confidence.",
    bullets: [
      "Validate product ideas faster",
      "Launch with essential features",
      "Reduce development risk and cost",
      "Build a foundation for future growth",
    ],
  },
  {
    badge: "2. Product Teams & Innovators",
    title: "Efficient concept validation",
    description: "Test new concepts, business models, and digital products without committing to large-scale development from day one.",
    bullets: [
      "Accelerate product experimentation",
      "Gather real user insights",
      "Prioritize features based on demand",
      "Improve product-market fit",
    ],
  },
  {
    badge: "3. Growing Businesses",
    title: "Risk-mitigated product launches",
    description: "Launch new digital products, customer portals, platforms, or services while minimizing risk and maximizing learning opportunities.",
    bullets: [
      "Explore new revenue streams",
      "Test new business initiatives",
      "Improve customer engagement",
      "Scale based on validated demand",
    ],
  },
  {
    badge: "4. Enterprises & Innovation Teams",
    title: "Enterprise transformation validation",
    description: "Validate new solutions, internal platforms, and digital transformation initiatives before investing in enterprise-wide implementation.",
    bullets: [
      "Pilot new ideas efficiently",
      "Reduce project uncertainty",
      "Validate business outcomes early",
      "Build scalable technology foundations",
    ],
  },
];

const mvpWhyVirat = [
  {
    title: "Product-First Development Approach",
    description: "We focus on solving real user problems and validating market demand, ensuring your MVP delivers meaningful business value from day one.",
    Icon: RiUserStarLine,
  },
  {
    title: "Faster Time-to-Market",
    description: "Our agile development approach helps startups and businesses launch quickly, gather feedback sooner, and accelerate product validation.",
    Icon: RiRocketLine,
  },
  {
    title: "Scalable Technology Foundations",
    description: "We build MVPs using modern technologies and cloud-ready architectures that support future enhancements, integrations, and user growth.",
    Icon: RiCloudLine,
  },
  {
    title: "Experienced Engineering Team",
    description: "Work directly with skilled software engineers experienced in web applications, mobile apps, SaaS products, AI solutions, and cloud technologies.",
    Icon: RiCodeBoxLine,
  },
  {
    title: "Business-Aligned Decision Making",
    description: "Every feature, technology choice, and development milestone is aligned with your product goals, budget, and growth objectives.",
    Icon: RiLineChartLine,
  },
  {
    title: "Beyond Launch Support",
    description: "From post-launch improvements to scaling and product evolution, we help transform validated MVPs into long-term digital products.",
    Icon: RiCheckboxCircleLine,
  },
];

const mvpFaqs = [
  {
    question: "1. What is an MVP in software development?",
    answer: "A Minimum Viable Product (MVP) is a version of a product built with essential features required to solve a core problem and gather feedback from real users before investing in full-scale development.",
  },
  {
    question: "2. Why should I choose Virat Software Solutions for MVP development?",
    answer: "Virat Software Solutions helps startups, founders, and businesses transform ideas into scalable digital products through a combination of product strategy, modern engineering, cloud technologies, and agile development practices. Our focus is on building MVPs that validate ideas quickly while creating a strong foundation for future growth.",
  },
  {
    question: "3. How long does it take Virat Software Solutions to build an MVP?",
    answer: "Development timelines depend on product complexity, features, integrations, and business requirements. Most MVP projects can be designed, developed, and launched within a few weeks to a few months.",
  },
  {
    question: "4. How much does MVP development cost?",
    answer: "MVP development costs vary based on functionality, user experience requirements, integrations, and technology choices. Virat Software Solutions helps businesses prioritize essential features to maximize value while optimizing development investment.",
  },
  {
    question: "5. What features should be included in an MVP?",
    answer: "An MVP should focus on the core functionality needed to solve a specific user problem, validate assumptions, and collect meaningful market feedback before expanding the product roadmap.",
  },
  {
    question: "6. Can Virat Software Solutions help validate my product idea?",
    answer: "Yes. We work closely with founders and product teams to assess market opportunities, define product goals, prioritize features, and create a practical roadmap before development begins.",
  },
  {
    question: "7. Can an MVP be scaled into a full product later?",
    answer: "Absolutely. Virat Software Solutions builds MVPs using scalable architectures and modern technologies, making it easier to add features, integrations, and advanced functionality as the product grows.",
  },
  {
    question: "8. Which technologies does Virat Software Solutions use for MVP development?",
    answer: "Our MVP development stack includes React, Next.js, .NET, Node.js, Flutter, PostgreSQL, MongoDB, AWS, Azure, Google Cloud Platform, and other technologies selected based on project requirements.",
  },
  {
    question: "9. Do I need a technical co-founder to build an MVP?",
    answer: "Not necessarily. Many startups and businesses partner with Virat Software Solutions to gain access to product strategy, technical expertise, architecture planning, development, testing, and deployment support.",
  },
  {
    question: "10. What happens after my MVP is launched?",
    answer: "After launch, Virat Software Solutions can support product enhancements, user feedback analysis, performance optimization, cloud scaling, new feature development, and long-term product growth initiatives.",
  },
];

export default function MvpDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>MVP Development Services</h1>
              <p className="eyebrow" style={{ fontSize: "1.2rem", fontWeight: "600", color: "var(--color-navy)", marginBottom: "18px" }}>
                Turn Your Product Idea Into a Market-Ready MVP
              </p>
              <p className="leadText">
                Validate your idea, launch faster, and reduce development risk with MVP development services designed
                for startups, founders, and product teams. We help businesses build scalable Minimum Viable Products
                that gather real user feedback, attract early adopters, and create a strong foundation for future growth.
              </p>
              <div className="heroActions">
                <a className="primaryButton" href="#final-cta">
                  <RiArrowRightLine aria-hidden="true" />
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What MVP Development Solves */}
        <section className="sectionPad sectionAlt" id="what-mvp-solves" aria-labelledby="solves-heading">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-5">
                <div className="sectionIntro mb-0" id="solves-heading">
                  <p className="eyebrow">Problems We Address</p>
                  <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", margin: 0 }}>
                    What MVP Development Solves
                  </h2>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div
                  className="contentCard"
                  style={{
                    padding: "36px",
                    background: "rgba(255, 255, 255, 0.95)",
                    borderLeft: "4px solid var(--color-navy)",
                    boxShadow: "var(--shadow-1)",
                  }}
                >
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--color-ink)", marginBottom: "20px" }}>
                    Launching a new product comes with uncertainty. Many startups and businesses invest significant time
                    and resources into building full-featured applications before validating whether the market actually
                    wants them.
                  </p>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--color-ink)", marginBottom: "24px" }}>
                    MVP development helps reduce this risk by focusing on the core features needed to test assumptions,
                    gather real user feedback, and validate product-market fit before making larger investments.
                  </p>
                  <p style={{ fontWeight: "700", color: "var(--color-navy)", marginBottom: "16px" }}>
                    Whether you're launching a startup, testing a new business model, or introducing a digital product, a well-built MVP helps you:
                  </p>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" style={{ color: "var(--color-cyan)" }} />
                      <span>Validate ideas with real users before full-scale development</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" style={{ color: "var(--color-cyan)" }} />
                      <span>Reduce development costs and time-to-market</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" style={{ color: "var(--color-cyan)" }} />
                      <span>Gather actionable feedback to improve product direction</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" style={{ color: "var(--color-cyan)" }} />
                      <span>Attract investors with a working product instead of a concept</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" style={{ color: "var(--color-cyan)" }} />
                      <span>Minimize technical debt through scalable architecture</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" style={{ color: "var(--color-cyan)" }} />
                      <span>Build a foundation for future growth and feature expansion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of MVP Development Services For Startups */}
        <section className="sectionPad" id="benefits" aria-labelledby="benefits-heading">
          <div className="container">
            <SectionHeader
              title="Benefits of MVP Development Services For Startups"
              description="Launching a product successfully requires more than a great idea. MVP development helps businesses validate concepts, reduce risk, and make informed decisions before investing in full-scale product development."
              id="benefits-heading"
            />
            <div className="row g-4 mt-2">
              {mvpBenefits.map((item) => {
                const BenefitIcon = item.Icon;
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                    <article className="contentCard h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "10px",
                              background: "rgba(111, 212, 212, 0.16)",
                              color: "var(--color-navy)",
                            }}
                          >
                            <BenefitIcon size={22} aria-hidden="true" />
                          </div>
                          <h3 className="m-0" style={{ fontSize: "1.2rem", fontWeight: "700" }}>{item.title}</h3>
                        </div>
                        <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.description}</p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Built for Founders, Innovators, and Product Teams */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Built for Founders, Innovators, and Product Teams"
              description="Our MVP development services are designed for organizations that need to validate ideas quickly, reduce product risk, and launch with confidence."
              id="audience-heading"
            />
            <div className="row g-4 mt-2">
              {mvpAudiences.map((aud) => (
                <div className="col-12 col-md-6" key={aud.badge}>
                  <article className="audienceCard h-100" style={{ padding: "28px" }}>
                    <span className="audienceBadge">{aud.badge}</span>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0d1b4b" }}>{aud.title}</h3>
                    <p className="audienceDesc">{aud.description}</p>
                    <ul className="audienceList" role="list">
                      {aud.bullets.map((bullet) => (
                        <li key={bullet}>
                          <RiCheckboxCircleLine aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Have an Idea but Unsure Where to Start? */}
        <section className="sectionPad" aria-labelledby="idea-cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="idea-cta-heading" className="ctaBannerTitle">
                  Have an Idea but Unsure Where to Start?
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", maxWidth: "600px", marginTop: "12px" }}>
                  Partner with Virat Software Solutions to refine features, design prototype assets, map engineering architecture, and launch your MVP cleanly.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Talk to an MVP Expert
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Businesses Choose Virat for MVP Development */}
        <section className="sectionPad sectionAlt" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <SectionHeader
              title="Why Businesses Choose Virat for MVP Development"
              description="Building an MVP is not just about developing software. It's about validating ideas, minimizing risk, and creating a foundation that supports future growth. At Virat Software Solutions, we combine product thinking, modern engineering, and scalable architecture to help businesses launch with confidence."
              id="why-heading"
            />
            <div className="row g-4 mt-2">
              {mvpWhyVirat.map((item) => {
                const WhyIcon = item.Icon;
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                    <article className="contentCard h-100">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "10px",
                            background: "rgba(1, 31, 138, 0.08)",
                            color: "var(--color-navy)",
                          }}
                        >
                          <WhyIcon size={20} aria-hidden="true" />
                        </div>
                        <h3 className="m-0" style={{ fontSize: "1.15rem", fontWeight: "700" }}>{item.title}</h3>
                      </div>
                      <p style={{ fontSize: "0.92rem", marginBottom: "0", lineHeight: "1.6" }}>{item.description}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 7: How We Bring MVPs to Market */}
        <section className="sectionPad" id="bring-to-market" aria-labelledby="market-heading">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-12 col-lg-9">
                <div className="sectionIntro" id="market-heading">
                  <p className="eyebrow">Execution Roadmap</p>
                  <h2>How We Bring MVPs to Market</h2>
                  <p className="bodyCopyLarge mt-3">
                    Successful MVPs are built with a clear focus on validation, speed, and long-term scalability. Our
                    approach combines product strategy, user-centric design, and modern software engineering to help
                    businesses launch quickly while reducing development risk and unnecessary complexity.
                  </p>
                  <p className="bodyCopyLarge mt-3">
                    From idea validation and feature prioritization to development, testing, and deployment, we work
                    closely with founders and product teams to create MVPs that deliver real user value. The goal is not
                    simply to launch faster, but to gather meaningful feedback, validate market demand, and build a
                    strong foundation for future product growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Our amazing clients */}
        <section className="sectionPad sectionTrust sectionAlt" aria-labelledby="trust-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="trust-heading">
              <p className="eyebrow">Our Partners</p>
              <h2>Our Amazing Clients</h2>
              <p>Trusted by startups and growing teams worldwide</p>
            </div>
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

        {/* Section 9: MVP Success Stories */}
        <section className="sectionPad" id="portfolio" aria-labelledby="portfolio-heading">
          <div className="container">
            <SectionHeader
              title="MVP Success Stories"
              description="From SaaS platforms and mobile applications to AI solutions and cloud-powered systems, discover how we help businesses build scalable technology, modernize operations, and drive growth."
              id="portfolio-heading"
            />
            <div className="row g-4 mt-2">
              {portfolioContent.cards.map((card) => (
                <div className="col-12 col-lg-6" key={card.title}>
                  <article className="portfolioCard h-100">
                    <div className="cardLogoWrap">
                      <Image src={card.logo} alt={card.logoAlt || card.name} className="cardLogo" />
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

        {/* Section 10: Technologies and Platforms We Use */}
        <TechStackShowcase content={techStackContent} />

        {/* Section 11: Frequently Asked Questions */}
        <section className="sectionPad sectionAlt" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <SectionHeader title="Frequently Asked Questions About MVP Development Services" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={mvpFaqs} />
            </div>
          </div>
        </section>

        {/* Section 12: Lead Form */}
        <section className="sectionPad" id="final-cta" aria-labelledby="final-cta-heading">
          <div className="container">
            <div className="finalCtaGrid">
              <div className="finalCtaCopy">
                <SectionHeader
                  title="Let’s Build Something That Works for Your Business"
                  description="If you are looking for a software development company that focuses on real results, scalable systems, and long-term support, Virat Software Solutions is ready to work with you."
                  id="final-cta-heading"
                />
              </div>
              <LeadFormShell
                title=""
                description=""
                buttonLabel={finalCtaContent.button}
                fieldLabels={finalCtaContent.fields}
                options={finalCtaContent.options}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
