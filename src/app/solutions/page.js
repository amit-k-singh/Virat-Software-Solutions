import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioSlider from "../../components/PortfolioSlider";
import LeadFormShell from "../../components/LeadFormShell";
import TechStackShowcase from "../../components/TechStackShowcase";
import { IndustryCards } from "../../components/industries";
import FaqAccordion from "../../components/FaqAccordion";
import TechAnimation from "../../components/TechAnimation";
import "../../assets/css/industries.css";
import {
  techStackContent,
  portfolioContent,
  processContent,
  finalCtaContent,
} from "../../data/siteContent";

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
  title: "Technology Solutions Built for Modern Business Transformation",
  description:
    "Delivering scalable solutions across product engineering, AI & automation, cloud modernization, data intelligence, and digital transformation to help organizations innovate, adapt, and grow.",
  alternates: {
    canonical: "/solutions",
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

const solutionsList = [
  {
    id: "mvp-development",
    title: "MVP Development",
    description:
      "Launch faster with a scalable Minimum Viable Product designed to validate ideas, attract early users, and create a strong foundation for future growth.",
    button: "Validate Your Idea",
    Icon: RiRocketLine,
  },
  {
    id: "saas-product-development",
    title: "SaaS Product Development",
    description:
      "Build secure, subscription-ready SaaS platforms engineered for performance, scalability, and seamless user experiences.",
    button: "Build Your SaaS Platform",
    Icon: RiLayoutLine,
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modernize legacy workflows, systems, and operations with technology solutions built to improve efficiency, agility, and business performance.",
    button: "Accelerate Transformation",
    Icon: RiSettings3Line,
  },
  {
    id: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    description:
      "Leverage AI, machine learning, and intelligent automation to streamline operations, improve decision-making, and unlock new growth opportunities.",
    button: "Explore AI Solutions",
    Icon: RiRobot2Line,
  },
  {
    id: "data-analytics-solutions",
    title: "Data & Analytics Solutions",
    description:
      "Turn fragmented data into actionable insights through scalable analytics, connected systems, and data-driven decision frameworks.",
    button: "Unlock Data Intelligence",
    Icon: RiDatabase2Line,
  },
  {
    id: "cloud-devops-transformation",
    title: "Cloud & DevOps Transformation",
    description:
      "Build resilient cloud infrastructure, automate deployments, and optimize delivery pipelines for scalable, secure, and high-performing systems.",
    button: "Modernize Your Infrastructure",
    Icon: RiCloudLine,
  },
];

const audienceList = [
  {
    badge: "Founder-Led Companies & Product Builders",
    title: "Senior execution without enterprise consulting overhead",
    description:
      "For founders and product teams that need experienced engineering leadership, faster delivery, and direct access to decision-makers — not layered processes, junior-heavy teams, or slow-moving vendors.",
    bullets: [
      "Products built for launch, adoption, and scale",
      "Architecture decisions made with long-term growth in mind",
      "Faster execution through lean, senior-led delivery",
      "Direct collaboration with builders who own outcomes",
    ],
  },
  {
    badge: "Growth-Stage Businesses & Digital Operators",
    title: "Systems that scale with your business, not against it",
    description:
      "For companies that have outgrown fragmented tools, rigid platforms, or development bottlenecks and need technology that supports operational growth and evolving customer demands.",
    bullets: [
      "Scalable platforms aligned with real business usage",
      "Performance, reliability, and cost optimization built in",
      "Automation that reduces operational friction",
      "AI and data initiatives tied to measurable business value",
    ],
  },
  {
    badge: "Enterprise Teams Seeking Faster Transformation",
    title: "Enterprise-grade delivery without enterprise complexity",
    description:
      "For business units, transformation leaders, and enterprise teams that need modernization, integration, or cloud initiatives delivered faster than traditional consulting and system integration models allow.",
    bullets: [
      "Focused modernization instead of costly full rebuilds",
      "Secure, scalable architectures with clear ownership",
      "Seamless integration across legacy and modern ecosystems",
      "Outcome-driven delivery with fewer handoffs and faster execution",
    ],
  },
];

const whySolutions = [
  {
    title: "Built Around Real Business Needs",
    description:
      "Every solution starts with understanding your goals, operational realities, and growth plans — not forcing predefined frameworks or delivery models.",
    Icon: RiUserStarLine,
  },
  {
    title: "Engineering With Clear Ownership",
    description:
      "Direct access to experienced engineers, faster decisions, and transparent execution from architecture to deployment.",
    Icon: RiCheckboxCircleLine,
  },
  {
    title: "Designed to Scale",
    description:
      "From MVPs and SaaS products to AI systems and cloud platforms, we build technology designed for performance, resilience, and long-term adaptability.",
    Icon: RiCloudLine,
  },
  {
    title: "Focused on Outcomes, Not Activity",
    description:
      "Less complexity. Fewer handoffs. Practical execution aligned with measurable business results.",
    Icon: RiLineChartLine,
  },
];

const solutionsFaqs = [
  {
    question: "1. What types of technology solutions does Virat Software Solutions provide?",
    answer:
      "We deliver solutions across MVP development, SaaS platforms, digital transformation, AI & automation, data & analytics, and cloud & DevOps modernization designed to support business growth and operational efficiency.",
  },
  {
    question: "2. How do you determine the right solution for a business?",
    answer:
      "We begin by understanding business goals, operational challenges, technical requirements, and growth plans before recommending an approach aligned with your priorities, scale, and long-term objectives.",
  },
  {
    question: "3. Do you build solutions for startups, growing companies, and enterprises?",
    answer:
      "Yes. Our solutions support founders, scaling businesses, and enterprise teams looking to launch products, modernize systems, automate operations, or accelerate digital transformation initiatives.",
  },
  {
    question: "4. Can Virat Software Solutions modernize existing applications or legacy systems?",
    answer:
      "Absolutely. We help businesses modernize legacy platforms, improve architecture, migrate to cloud environments, optimize performance, and integrate modern technologies without unnecessary disruption.",
  },
  {
    question: "5. Which technologies power your solutions?",
    answer:
      "Our solutions are built using modern technologies including .NET, React, Next.js, Flutter, Node.js, Python, AI/ML frameworks, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, and Google Cloud Platform.",
  },
  {
    question: "6. Do your solutions support cloud, AI, and system integrations?",
    answer:
      "Yes. We design solutions that combine software engineering, AI capabilities, cloud infrastructure, APIs, automation, and connected systems to create scalable digital ecosystems.",
  },
  {
    question: "7. How do you ensure your solutions are scalable and future-ready?",
    answer:
      "We focus on architecture, performance, security, flexibility, and maintainability from the beginning — helping businesses build solutions that can evolve alongside operational growth and changing market needs.",
  },
];
export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>Technology Solutions Built for Modern Business Transformation</h1>
              <p className="leadText">
                Delivering scalable solutions across product engineering, AI & automation, cloud modernization, data
                intelligence, and digital transformation to help organizations innovate, adapt, and grow.
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

        {/* Section 2: What We Solve */}
        <section className="sectionPad sectionAlt" id="what-we-solve" aria-labelledby="solve-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="solve-heading">
              <p className="eyebrow">Problems We Address</p>
              <h2>What We Solve</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="contentCard solutionsMainWhatWeSolveCard">
                  <p className="bodyCopyLarge solutionsMainCopylarge">
                    Businesses today face challenges that go far beyond development — from legacy systems, scalability
                    bottlenecks, and cloud migration to disconnected applications, technical debt, and operational
                    inefficiencies. Virat Software Solutions helps organizations solve these challenges through scalable
                    software architecture, AI-driven solutions, cloud engineering, automation, and connected digital
                    platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Engineered Solutions (Cards) */}
        <section className="sectionPad" id="solutions-list" aria-labelledby="solutions-list-heading">
          <div className="container">
            <SectionHeader
              title="Business Challenges. Engineered Solutions."
              description="From product launches to enterprise modernization, our solutions help businesses innovate faster, automate operations, and scale with confidence."
              id="solutions-list-heading"
            />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {solutionsList.map((sol) => {
                const CardIcon = sol.Icon;
                return (
                  <div className="col solutionAnchor" id={sol.id} key={sol.id}>
                    <article className="contentCard h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="solutionsMainIconWrap">
                            <CardIcon size={24} aria-hidden="true" />
                          </div>
                          <h3 className="m-0 solutionsMainCardTitle">{sol.title}</h3>
                        </div>
                        <p>{sol.description}</p>
                      </div>
                      <a href="#final-cta" className="inlineAction">
                        {sol.button}
                        <RiArrowRightUpLine aria-hidden="true" />
                      </a>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Who Our Solutions Are Built For */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Who Our Solutions Are Built For"
              description="Our solutions are designed for organizations that need scalable technology, faster execution, and measurable outcomes, without unnecessary complexity, oversized delivery teams, or generic consulting frameworks."
              id="audience-heading"
            />
            <div className="whoBuiltForGrid">
              {audienceList.map((aud) => (
                <article className="audienceCard" key={aud.badge}>
                  <span className="audienceBadge">{aud.badge}</span>
                  <h3>{aud.title}</h3>
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
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why Virat Solutions */}
        <section className="sectionPad" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="sectionIntro text-center">
                  <h2>Why Virat Solutions</h2>
                  <p className="mt-2">
                    Building technology is easy. Building technology that supports growth, adapts to change, and delivers
                    measurable business value is harder. That's where we focus.
                  </p>
                </div>
              </div>
            </div>
            <div className="whySolutionsGrid">
              {whySolutions.map((item) => {
                const WhyIcon = item.Icon;
                return (
                  <article className="whyCard" key={item.title}>
                    <h3>
                      <WhyIcon aria-hidden="true" />
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Ready to Build, Modernize, or Scale? */}
        <section className="sectionPad sectionAlt" aria-labelledby="ready-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="ready-heading" className="ctaBannerTitle">Ready to Build, Modernize, or Scale?</h2>
                <p className="solutionsCtaText">
                  Whether you're launching a new product, modernizing legacy systems, adopting AI, or optimizing cloud
                  infrastructure, Virat Software Solutions delivers technology solutions engineered for performance,
                  agility, and measurable business outcomes.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Start the Conversation
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Our Development Process */}
        <section className="sectionPad" id="process" aria-labelledby="process-heading">
          <div className="container">
            <SectionHeader
              title={processContent.title}
              description={processContent.description}
              id="process-heading"
            />
            <div className="timelineGrid mt-4">
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

        {/* Section 8: Industries We Serve */}
        <section className="sectionPad sectionAlt" id="industries" aria-labelledby="industries-heading">
          <div className="container">
            <div className="sectionIntro text-center">
              <p className="eyebrow" id="industries-heading">Industries We Serve</p>
              <h2>Industries We Serve</h2>
              <p>Purpose-built technology solutions for evolving business models, operational complexity, and digital growth.</p>
            </div>
            <IndustryCards />
            <div className="industryFooterCallout text-center mt-5">
              <a href="#final-cta" className="primaryButton">
                Get a Solution Built for Your Industry
              </a>
              <p className="mt-2 text-muted">Discuss Your Business Requirements</p>
            </div>
          </div>
        </section>

        {/* Section 9: Tech Stack Showcase */}
        <TechStackShowcase content={techStackContent} />

        {/* Section 10: Projects */}
        <section className="sectionPad" id="portfolio" aria-labelledby="portfolio-heading">
          <div className="container">
            <SectionHeader
              title="Technology Built Around Business Outcomes"
              description="See how our custom engineered solutions helped businesses streamline, validate, and scale."
              id="portfolio-heading"
            />
            <PortfolioSlider cards={portfolioContent.cards} />
            <div className="text-center mt-5">
              <Link href="/#portfolio" className="secondaryButton">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Accordions */}
        <section className="sectionPad sectionAlt" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <SectionHeader title="Frequently Asked Questions" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={solutionsFaqs} />
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
