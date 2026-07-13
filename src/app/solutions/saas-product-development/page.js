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
  title: "SaaS Product Development Services",
  description:
    "Build secure, cloud-based software products that support recurring revenue, seamless user experiences, and long-term growth with our expert SaaS development services.",
  alternates: {
    canonical: "/solutions/saas-product-development",
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

const saasBenefits = [
  {
    title: "Faster Product Launch",
    description: "Accelerate time-to-market with a structured development approach that enables businesses to launch and validate products quickly.",
    Icon: RiRocketLine,
  },
  {
    title: "Recurring Revenue Opportunities",
    description: "Create subscription-based business models that generate predictable revenue and long-term customer relationships.",
    Icon: RiBankCardLine,
  },
  {
    title: "Scalable Infrastructure",
    description: "Support growing user bases, increased workloads, and evolving business requirements without rebuilding core systems.",
    Icon: RiCloudLine,
  },
  {
    title: "Lower Operational Complexity",
    description: "Centralized deployment, updates, and maintenance simplify product management while improving customer experience.",
    Icon: RiSettings3Line,
  },
  {
    title: "Improved Accessibility",
    description: "Enable users to access applications securely from anywhere through modern cloud-based environments.",
    Icon: RiUserStarLine,
  },
  {
    title: "Continuous Product Innovation",
    description: "Introduce new features, enhancements, and integrations faster while maintaining platform stability and performance.",
    Icon: RiCheckboxCircleLine,
  },
];

const saasAudiences = [
  {
    badge: "1. Startups & SaaS Founders",
    title: "Concept to market validation",
    description: "Transform innovative ideas into market-ready SaaS products with scalable architecture and efficient product development.",
    bullets: [
      "Validate SaaS concepts faster",
      "Launch subscription-based products",
      "Build investor-ready platforms",
      "Create scalable product foundations",
    ],
  },
  {
    badge: "2. Product Companies",
    title: "Cloud product expansion",
    description: "Expand product portfolios with cloud-based solutions designed to improve customer experiences and business performance.",
    bullets: [
      "Accelerate product delivery",
      "Improve customer retention",
      "Enhance platform scalability",
      "Support business growth initiatives",
    ],
  },
  {
    badge: "3. Scaling Businesses",
    title: "Legacy-to-SaaS transformation",
    description: "Modernize traditional software offerings and transition toward cloud-native SaaS solutions that support evolving customer needs.",
    bullets: [
      "Enable recurring revenue models",
      "Improve operational efficiency",
      "Expand digital capabilities",
      "Increase market competitiveness",
    ],
  },
  {
    badge: "4. Enterprise Innovation Teams",
    title: "Internal and external platform scale",
    description: "Build secure SaaS platforms, customer portals, and business applications that support digital transformation and operational excellence.",
    bullets: [
      "Launch enterprise-grade solutions",
      "Improve user accessibility",
      "Streamline business processes",
      "Scale digital initiatives confidently",
    ],
  },
];

const saasWhyVirat = [
  {
    title: "Product-Focused Engineering",
    description: "We align technology decisions with product goals, customer needs, and business outcomes to create software that delivers measurable value.",
    Icon: RiUserStarLine,
  },
  {
    title: "Scalable SaaS Architecture",
    description: "Our cloud-native development approach ensures your platform can support growing users, new features, and evolving business requirements.",
    Icon: RiCloudLine,
  },
  {
    title: "Modern Technology Stack",
    description: "We leverage technologies such as .NET, React, Node.js, Flutter, PostgreSQL, AWS, Azure, and Google Cloud to build reliable SaaS products.",
    Icon: RiCodeBoxLine,
  },
  {
    title: "Security & Reliability",
    description: "From authentication and access control to infrastructure security and compliance considerations, we prioritize platform stability and protection.",
    Icon: RiCheckboxCircleLine,
  },
  {
    title: "Business-Driven Development",
    description: "Every feature, workflow, and technical decision is guided by business objectives, customer expectations, and long-term scalability.",
    Icon: RiLineChartLine,
  },
  {
    title: "Long-Term Product Partnership",
    description: "Beyond launch, we help businesses optimize performance, introduce new capabilities, and evolve products as market demands change.",
    Icon: RiRocketLine,
  },
];

const saasFaqs = [
  {
    question: "1. What makes SaaS product development different from traditional software development?",
    answer: "SaaS product development focuses on building cloud-based applications that are delivered through the internet, updated centrally, and designed to support multiple users or customers efficiently. Unlike traditional software, SaaS products must prioritize scalability, uptime, security, subscription management, and continuous improvement.",
  },
  {
    question: "2. Why should businesses invest in SaaS product development?",
    answer: "SaaS product development helps businesses create recurring revenue models, improve customer accessibility, reduce deployment complexity, and launch software products that can grow with market demand. Virat Software Solutions helps businesses turn these advantages into practical, scalable digital products.",
  },
  {
    question: "3. How do you build a SaaS product that can scale over time?",
    answer: "A scalable SaaS product starts with the right architecture, cloud infrastructure, database design, and performance strategy. At Virat Software Solutions, we plan for growth from the beginning so your platform can handle more users, more data, and more features without major rework.",
  },
  {
    question: "4. Can Virat Software Solutions help with SaaS product strategy as well as development?",
    answer: "Yes. We support SaaS businesses beyond coding by helping define product direction, feature priorities, technical architecture, and launch strategy. This ensures the product is built around real business goals and customer needs.",
  },
  {
    question: "5. What technologies do you use for SaaS product development?",
    answer: "Our SaaS development stack includes .NET, React, Next.js, Node.js, Flutter, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, and Google Cloud Platform. We choose technologies based on product requirements, scalability, and long-term maintainability.",
  },
  {
    question: "6. Do you build multi-tenant SaaS platforms?",
    answer: "Yes. Virat Software Solutions develops multi-tenant SaaS applications that allow multiple customers to use the same platform securely while keeping their data isolated and performance optimized.",
  },
  {
    question: "7. How do you handle subscriptions, billing, and user access in SaaS products?",
    answer: "We design SaaS platforms with secure authentication, role-based access, subscription workflows, and billing integrations that support different pricing models and customer tiers. This helps businesses manage users and revenue efficiently.",
  },
  {
    question: "8. Can you modernize an existing SaaS platform?",
    answer: "Yes. We help businesses improve legacy SaaS products by upgrading architecture, enhancing performance, refining user experience, migrating to modern cloud environments, and adding new capabilities that support growth.",
  },
  {
    question: "9. Do you provide ongoing support after SaaS product launch?",
    answer: "Yes. Virat Software Solutions offers post-launch support that includes maintenance, feature enhancements, performance optimization, monitoring, and technical improvements to keep your SaaS product reliable and competitive.",
  },
  {
    question: "10. How do you ensure security in SaaS applications?",
    answer: "We build SaaS applications with security in mind from the start. This includes secure authentication, access control, encrypted communication, infrastructure best practices, and continuous monitoring to help protect user data and business operations.",
  },
];

export default function SaasProductDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>SaaS Product Development</h1>
              <p className="eyebrow solutionsEyebrowLarge">
                Turn Your Product Idea Into a Scalable SaaS Platform
              </p>
              <p className="leadText">
                Build secure, cloud-based software products that support recurring revenue, seamless user experiences, and
                long-term growth. We help startups, founders, and product teams design and develop SaaS solutions that
                are built to scale, adapt, and deliver measurable business value.
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

        {/* Section 2: What SaaS Product Development Solves */}
        <section className="sectionPad sectionAlt" id="what-saas-solves" aria-labelledby="solves-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="solves-heading">
              <p className="eyebrow">Problems We Address</p>
              <h2>What SaaS Product Development Solves</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div
                  className="contentCard solutionsMainWhatWeSolveCard" >
                  <p className="solutionsIntroText">
                    Building a successful SaaS product involves more than writing code. Businesses must solve challenges
                    related to scalability, multi-user access, subscription management, security, performance, and
                    continuous product improvement.
                  </p>
                  <p className="solutionsIntroTextLast">
                    SaaS product development helps organizations launch cloud-based software platforms that can serve
                    multiple customers efficiently while maintaining reliability, flexibility, and operational control.
                    Whether you're building a new SaaS business, modernizing an existing platform, or launching a
                    digital product, a well-structured SaaS solution helps you:
                  </p>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Validate your product idea with real users before scaling further</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Build a subscription-ready platform with recurring revenue potential</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Create a scalable architecture that supports growth and future expansion</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Improve user management, access control, and customer experience</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Reduce technical risk through secure and maintainable development</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Launch faster with a focused product roadmap and core feature set</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of SaaS Product Development Services */}
        <section className="sectionPad" id="benefits" aria-labelledby="benefits-heading">
          <div className="container">
            <SectionHeader
              title="Benefits of SaaS Product Development Services"
              description="SaaS product development gives businesses the ability to launch faster, scale efficiently, and deliver a better digital experience to customers. It creates the foundation for recurring revenue, easier product updates, stronger security, and long-term flexibility as business needs evolve."
              id="benefits-heading"
            />
            <div className="row g-4">
              {saasBenefits.map((item) => {
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

        {/* Section 4: Built for Businesses Creating Software Products */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Built for Businesses Creating Software Products"
              description="Our SaaS product development services are designed for organizations looking to build scalable software platforms, launch digital products, and create recurring revenue models."
              id="audience-heading"
            />
            <div className="row g-4">
              {saasAudiences.map((aud) => (
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

        {/* Section 5: Planning a SaaS Product but Unsure Where to Begin? */}
        <section className="sectionPad" aria-labelledby="idea-cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="idea-cta-heading" className="ctaBannerTitle">
                  Planning a SaaS Product but Unsure Where to Begin?
                </h2>
                <p className="solutionsCtaText">
                  Partner with Virat Software Solutions to refine features, design prototype assets, map engineering architecture, and launch your SaaS platform cleanly.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Talk to a SaaS Product Expert
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Businesses Choose Virat for SaaS Product Development */}
        <section className="sectionPad sectionAlt" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <SectionHeader
              title="Why Businesses Choose Virat for SaaS Product Development"
              description="Building a SaaS product requires a balance between business strategy, user experience, cloud architecture, and scalable engineering. Virat Software Solutions helps businesses create SaaS platforms designed to support growth, customer adoption, and long-term product success."
              id="why-heading"
            />
            <div className="row g-4">
              {saasWhyVirat.map((item) => {
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

        {/* Section 7: How We Build SaaS Products */}
        <section className="sectionPad" id="bring-to-market" aria-labelledby="market-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="market-heading">
              <p className="eyebrow">Execution Roadmap</p>
              <h2>How We Build SaaS Products</h2>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row g-4 text-start">
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardCyan">
                      <p className="solutionsDeliverText">
                        Successful SaaS products require more than development expertise. They require strategic planning,
                        scalable architecture, intuitive user experiences, and a technology foundation that can evolve
                        alongside business growth. Our approach focuses on building cloud-native software platforms that
                        balance speed, reliability, and long-term maintainability.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardNavy">
                      <p className="solutionsDeliverText">
                        From product discovery and architecture planning to development, testing, deployment, and
                        optimization, we work closely with stakeholders to deliver SaaS products that support customer
                        adoption, operational efficiency, and recurring revenue growth. Every solution is designed with
                        scalability, security, and future expansion in mind.
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
            <SectionHeader title="Frequently Asked Questions About SaaS Product Development Services" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={saasFaqs} />
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
