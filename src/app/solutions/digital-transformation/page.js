import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PortfolioSlider from "../../../components/PortfolioSlider";
import LeadFormShell from "../../../components/LeadFormShell";
import TechStackShowcase from "../../../components/TechStackShowcase";
import FaqAccordion from "../../../components/FaqAccordion";
import TechAnimation from "../../../components/TechAnimation";
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
  RiCheckboxCircleLine,
  RiSettings3Line,
  RiCloudLine,
  RiRocketLine,
  RiUserStarLine,
  RiLineChartLine,
  RiBankCardLine,
  RiCodeBoxLine,
  RiStore2Line,
  RiShoppingCartLine,
  RiCodeLine,
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
  title: "Digital Transformation Services",
  description:
    "Modernize systems, streamline workflows, and unlock new growth opportunities through technology-driven transformation services with Virat Software Solutions.",
  alternates: {
    canonical: "/solutions/digital-transformation",
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

const transformBenefits = [
  {
    title: "Increased Operational Efficiency",
    description: "Automate repetitive tasks, reduce manual effort, and streamline workflows across departments to improve productivity.",
    Icon: RiSettings3Line,
  },
  {
    title: "Improved Decision-Making",
    description: "Access accurate, real-time business data that enables faster, more informed decisions at every level of the organization.",
    Icon: RiLineChartLine,
  },
  {
    title: "Better Customer Experiences",
    description: "Create seamless digital experiences that improve customer engagement, satisfaction, and retention.",
    Icon: RiUserStarLine,
  },
  {
    title: "Reduced Operational Costs",
    description: "Optimize resources, eliminate inefficiencies, and reduce maintenance costs associated with outdated systems.",
    Icon: RiBankCardLine,
  },
  {
    title: "Enhanced Business Agility",
    description: "Respond faster to market changes, customer expectations, and new business opportunities through flexible digital systems.",
    Icon: RiRocketLine,
  },
  {
    title: "Scalable Business Growth",
    description: "Build a modern technology ecosystem capable of supporting future expansion, innovation, and operational complexity.",
    Icon: RiCloudLine,
  },
];

const transformAudiences = [
  {
    badge: "1. Growing Businesses",
    title: "Integrated operations growth",
    description: "Replace manual processes and disconnected systems with integrated digital solutions that support operational growth.",
    bullets: [
      "Improve business efficiency",
      "Standardize processes",
      "Enhance team productivity",
      "Support scalable growth",
    ],
  },
  {
    badge: "2. Enterprise Teams",
    title: "Technical debt modernization",
    description: "Modernize legacy systems and implement digital initiatives that improve agility, visibility, and performance.",
    bullets: [
      "Reduce technical debt",
      "Improve cross-functional collaboration",
      "Accelerate innovation initiatives",
      "Strengthen operational resilience",
    ],
  },
  {
    badge: "3. Operations & Business Leaders",
    title: "Control and reporting workflows",
    description: "Gain better control over workflows, reporting, and business performance through automation and connected systems.",
    bullets: [
      "Improve decision-making",
      "Eliminate operational bottlenecks",
      "Increase process visibility",
      "Optimize resource utilization",
    ],
  },
  {
    badge: "4. Organizations Undergoing Change",
    title: "Expansion and transformation continuity",
    description: "Support mergers, expansions, modernization efforts, and digital initiatives with technology solutions built for long-term success.",
    bullets: [
      "Modernize legacy environments",
      "Improve business continuity",
      "Simplify technology ecosystems",
      "Enable future-ready operations",
    ],
  },
];

const transformWhyVirat = [
  {
    title: "Business-First Transformation Strategy",
    description: "We start with your business challenges, operational requirements, and growth objectives before recommending technology solutions.",
    Icon: RiLineChartLine,
  },
  {
    title: "Process & Technology Alignment",
    description: "Our approach connects people, processes, systems, and technology to create sustainable improvements across the organization.",
    Icon: RiSettings3Line,
  },
  {
    title: "Modern Engineering Expertise",
    description: "From custom software and cloud platforms to AI and system integrations, we leverage modern technologies to drive transformation.",
    Icon: RiCodeBoxLine,
  },
  {
    title: "Scalable Digital Foundations",
    description: "We design solutions that support long-term business growth while remaining flexible enough to adapt to changing requirements.",
    Icon: RiCloudLine,
  },
  {
    title: "End-to-End Delivery Capability",
    description: "Our team supports every stage of transformation, from assessment and planning to implementation, optimization, and continuous improvement.",
    Icon: RiCheckboxCircleLine,
  },
  {
    title: "Focus on Measurable Outcomes",
    description: "We prioritize initiatives that improve efficiency, reduce costs, enhance customer experiences, and create lasting business value.",
    Icon: RiUserStarLine,
  },
];

const transformFaqs = [
  {
    question: "1. What is digital transformation?",
    answer: "Digital transformation is the process of using technology to improve business operations, customer experiences, decision-making, and organizational efficiency. It often involves modernizing systems, automating processes, and adopting digital-first workflows.",
  },
  {
    question: "2. Why is digital transformation important for modern businesses?",
    answer: "Businesses that rely on manual processes and outdated systems often struggle to scale efficiently. Digital transformation helps improve productivity, reduce operational costs, enhance customer experiences, and create a foundation for long-term growth.",
  },
  {
    question: "3. How does Virat Software Solutions approach digital transformation?",
    answer: "Virat Software Solutions takes a business-first approach by understanding organizational goals, operational challenges, and technology requirements before designing solutions that deliver measurable outcomes.",
  },
  {
    question: "4. What types of digital transformation projects do you support?",
    answer: "We support process automation, software modernization, cloud migration, workflow optimization, system integration, AI implementation, data transformation, and custom digital platform development.",
  },
  {
    question: "5. Can digital transformation help reduce operational costs?",
    answer: "Yes. By automating repetitive tasks, improving efficiency, and eliminating outdated processes, businesses can significantly reduce operational overhead and improve resource utilization.",
  },
  {
    question: "6. How do you modernize legacy systems?",
    answer: "We assess existing systems, identify limitations, and implement modernization strategies that improve performance, scalability, security, and integration capabilities while minimizing business disruption.",
  },
  {
    question: "7. What technologies are commonly used in digital transformation initiatives?",
    answer: "Our digital transformation projects leverage technologies including .NET, React, Node.js, Flutter, AWS, Azure, Google Cloud Platform, AI solutions, APIs, automation platforms, and modern data systems.",
  },
  {
    question: "8. Can Virat Software Solutions work alongside our internal teams?",
    answer: "Absolutely. We frequently collaborate with business stakeholders, IT departments, and internal development teams to support transformation initiatives and accelerate delivery.",
  },
  {
    question: "9. How long does a digital transformation project take?",
    answer: "Project timelines vary based on scope, complexity, business goals, and existing technology environments. Some initiatives can be delivered within months, while enterprise-wide transformations may be phased over a longer period.",
  },
  {
    question: "10. How do you measure the success of digital transformation initiatives?",
    answer: "Success is typically measured through improvements in operational efficiency, process automation, customer experience, cost reduction, productivity gains, system performance, and overall business outcomes.",
  },
];

export default function DigitalTransformationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>Digital Transformation Services</h1>
              <p className="eyebrow solutionsEyebrowLarge">
                Transform Legacy Processes Into Scalable Digital Operations
              </p>
              <p className="leadText">
                Modernize systems, streamline workflows, and unlock new growth opportunities through technology-driven
                transformation. Virat Software Solutions helps businesses improve efficiency, automate operations,
                integrate systems, and build digital capabilities that support long-term business success.
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

        {/* Section 2: What Digital Transformation Solves */}
        <section className="sectionPad sectionAlt" id="what-digital-solves" aria-labelledby="solves-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="solves-heading">
              <p className="eyebrow">Problems We Address</p>
              <h2>What Digital Transformation Solves</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div
                  className="contentCard solutionsMainWhatWeSolveCard" >
                  <p className="solutionsIntroText">
                    Many businesses struggle with disconnected systems, manual processes, outdated technology, and
                    operational inefficiencies that slow growth and increase costs. As organizations scale, these
                    challenges often create bottlenecks that impact productivity, customer experience, and decision-making.
                  </p>
                  <p className="solutionsIntroTextLast">
                    Digital transformation helps businesses modernize operations through automation, cloud technologies,
                    data-driven processes, and connected digital systems. Whether you're replacing legacy software,
                    improving internal workflows, or creating new digital experiences, a strategic transformation
                    initiative helps you:
                  </p>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Eliminate manual and repetitive business processes</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Improve operational efficiency and productivity</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Connect fragmented systems and business data</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Enhance customer and employee experiences</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Increase visibility through real-time reporting and insights</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Create a technology foundation that supports future growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of Digital Transformation Services */}
        <section className="sectionPad" id="benefits" aria-labelledby="benefits-heading">
          <div className="container">
            <SectionHeader
              title="Benefits of Digital Transformation Services"
              description="Digital transformation helps organizations become more agile, efficient, and competitive. By modernizing processes and leveraging technology effectively, businesses can improve performance, reduce costs, and respond faster to changing market demands."
              id="benefits-heading"
            />
            <div className="row g-4">
              {transformBenefits.map((item) => {
                const BenefitIcon = item.Icon;
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                    <article className="contentCard h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div
                            className="solutionsMainIconWrap" style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "10px",
                              background: "rgba(111, 212, 212, 0.16)",
                              color: "var(--color-navy)",
                            }}
                          >
                            <BenefitIcon size={22} aria-hidden="true" />
                          </div>
                          <h3 className="m-0 solutionsBenefitCardTitle">{item.title}</h3>
                        </div>
                        <p className="solutionsBenefitCardText">{item.description}</p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Built for Organizations Driving Change */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Built for Organizations Driving Change"
              description="Our digital transformation services are designed for businesses looking to modernize operations, improve efficiency, and leverage technology as a competitive advantage."
              id="audience-heading"
            />
            <div className="row g-4">
              {transformAudiences.map((aud) => (
                <div className="col-12 col-md-6" key={aud.badge}>
                  <article className="audienceCard h-100 solutionsAudienceCard">
                    <span className="audienceBadge">{aud.badge}</span>
                    <h3 className="solutionsAudienceCardTitle">{aud.title}</h3>
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

        {/* Section 5: Planning a Digital Transformation Initiative? */}
        <section className="sectionPad" aria-labelledby="idea-cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="idea-cta-heading" className="ctaBannerTitle">
                  Planning a Digital Transformation Initiative?
                </h2>
                <p className="solutionsCtaText">
                  Partner with Virat Software Solutions to refine processes, integrate custom modules, migrate server databases, and unlock agility cleanly.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Talk to a Digital Transformation Expert
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Businesses Choose Virat for Digital Transformation */}
        <section className="sectionPad sectionAlt" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <SectionHeader
              title="Why Businesses Choose Virat for Digital Transformation"
              description="Digital transformation initiatives often fail because organizations focus on technology before understanding business objectives. At Virat Software Solutions, we align technology investments with operational goals to ensure transformation delivers measurable business outcomes."
              id="why-heading"
            />
            <div className="row g-4">
              {transformWhyVirat.map((item) => {
                const WhyIcon = item.Icon;
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                    <article className="contentCard h-100">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          className="solutionsMainIconWrap" style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "10px",
                            background: "rgba(1, 31, 138, 0.08)",
                            color: "var(--color-navy)",
                          }}
                        >
                          <WhyIcon size={20} aria-hidden="true" />
                        </div>
                        <h3 className="m-0 solutionsDifferentiatorTitle">{item.title}</h3>
                      </div>
                      <p className="solutionsDifferentiatorText">{item.description}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 7: How We Deliver Digital Transformation */}
        <section className="sectionPad" id="bring-to-market" aria-labelledby="market-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="market-heading">
              <p className="eyebrow">Execution Roadmap</p>
              <h2>How We Deliver Digital Transformation</h2>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row g-4 text-start">
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardCyan">
                      <p className="solutionsDeliverText">
                        Successful digital transformation requires a balance between business strategy, technology
                        modernization, and operational execution. Our approach focuses on identifying opportunities where
                        technology can create measurable improvements while minimizing disruption to day-to-day operations.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardNavy">
                      <p className="solutionsDeliverText">
                        From process assessment and system modernization to automation, integrations, cloud adoption,
                        and continuous optimization, we help businesses implement practical digital solutions that improve
                        efficiency, enhance visibility, and support sustainable growth.
                      </p>
                    </div>
                  </div>
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
            <PortfolioSlider cards={portfolioContent.cards} />
          </div>
        </section>

        {/* Section 10: Technologies and Platforms We Use */}
        <TechStackShowcase content={techStackContent} />

        {/* Section 11: Frequently Asked Questions */}
        <section className="sectionPad sectionAlt" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <SectionHeader title="Frequently Asked Questions About Digital Transformation Services" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={transformFaqs} />
            </div>
          </div>
        </section>

        {/* Section 12: Lead Form */}
        <section className="sectionPad" id="final-cta" aria-labelledby="final-cta-heading">
          <div className="container">
            {/* Title First (Full Width) */}
            <div className="sectionIntro text-center mb-5">
              <h2 id="final-cta-heading">Let’s Build Something That Works for Your Business</h2>
              <p className="finalCtaDesc">
                If you are looking for a software development company that focuses on real results, scalable systems, and long-term support, Virat Software Solutions is ready to work with you.
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
      </main>
      <Footer />
    </>
  );
}
