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
  RiBarChartLine,
  RiStore2Line,
  RiShoppingCartLine,
  RiCodeLine,
  RiLayoutLine,
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
  title: "AI & Automation Solutions",
  description:
    "Leverage artificial intelligence, machine learning, and workflow automation to streamline operations, improve decision-making, and unlock growth with Virat Software Solutions.",
  alternates: {
    canonical: "/solutions/ai-automation-solutions",
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

const aiBenefits = [
  {
    title: "Increased Operational Efficiency",
    description: "Automate repetitive tasks and workflows to free teams from manual work and focus on higher-value business activities.",
    Icon: RiSettings3Line,
  },
  {
    title: "Faster Decision-Making",
    description: "Leverage AI-driven insights and predictive analytics to make informed decisions based on real-time business data.",
    Icon: RiLineChartLine,
  },
  {
    title: "Reduced Operational Costs",
    description: "Minimize manual effort, improve process consistency, and optimize resource utilization across departments.",
    Icon: RiBankCardLine,
  },
  {
    title: "Improved Customer Experiences",
    description: "Deliver faster responses, personalized experiences, and intelligent support through AI-powered systems and automation.",
    Icon: RiUserStarLine,
  },
  {
    title: "Better Data Utilization",
    description: "Transform large volumes of business data into actionable insights that support growth, planning, and strategic initiatives.",
    Icon: RiBarChartLine,
  },
  {
    title: "Scalable Business Operations",
    description: "Implement automation frameworks that support growth without requiring proportional increases in workforce or operational costs.",
    Icon: RiCloudLine,
  },
];

const aiAudiences = [
  {
    badge: "1. Growing Businesses",
    title: "Smarter operational workflows",
    description: "Automate operational processes and reduce administrative workloads to support sustainable business growth.",
    bullets: [
      "Improve team productivity",
      "Reduce manual effort",
      "Streamline operations",
      "Scale efficiently",
    ],
  },
  {
    badge: "2. Product & Technology Companies",
    title: "AI feature integration",
    description: "Integrate AI capabilities into digital products, applications, and customer experiences to create innovative solutions.",
    bullets: [
      "Enhance product capabilities",
      "Improve user engagement",
      "Deliver intelligent features",
      "Accelerate innovation",
    ],
  },
  {
    badge: "3. Operations & Business Leaders",
    title: "Process performance tracking",
    description: "Use AI-powered insights and automation to improve business performance, visibility, and decision-making.",
    bullets: [
      "Optimize business processes",
      "Improve reporting accuracy",
      "Increase operational visibility",
      "Support strategic planning",
    ],
  },
  {
    badge: "4. Enterprise Organizations",
    title: "Intelligent enterprise workflows",
    description: "Implement AI and automation initiatives that improve efficiency, reduce costs, and support digital transformation objectives.",
    bullets: [
      "Automate enterprise workflows",
      "Improve business intelligence",
      "Increase operational resilience",
      "Drive innovation initiatives",
    ],
  },
];

const aiWhyVirat = [
  {
    title: "Business-Focused AI Strategy",
    description: "We identify AI opportunities that align with operational goals, customer needs, and measurable business objectives.",
    Icon: RiLineChartLine,
  },
  {
    title: "Practical Automation Solutions",
    description: "Our focus is on implementing automation that delivers immediate value by improving efficiency, reducing manual effort, and optimizing workflows.",
    Icon: RiSettings3Line,
  },
  {
    title: "Expertise Across Modern AI Technologies",
    description: "We leverage machine learning, predictive analytics, intelligent automation, natural language processing, and custom AI applications to solve business challenges.",
    Icon: RiCodeBoxLine,
  },
  {
    title: "Data-Driven Decision Support",
    description: "Our AI solutions help organizations transform raw data into actionable insights that improve business performance and planning.",
    Icon: RiBarChartLine,
  },
  {
    title: "Scalable & Future-Ready Architecture",
    description: "We build AI systems that integrate seamlessly with existing business applications while supporting future growth and innovation.",
    Icon: RiCloudLine,
  },
  {
    title: "End-to-End Implementation Support",
    description: "From strategy and use-case validation to development, deployment, and optimization, we support businesses throughout their AI journey.",
    Icon: RiCheckboxCircleLine,
  },
];

const aiFaqs = [
  {
    question: "1. What are AI and automation solutions?",
    answer: "AI and automation solutions use technologies such as machine learning, predictive analytics, natural language processing, and workflow automation to improve efficiency, reduce manual effort, and enhance business decision-making.",
  },
  {
    question: "2. How can AI help my business?",
    answer: "Artificial intelligence can help businesses automate repetitive tasks, analyze data, improve customer experiences, identify trends, optimize operations, and support faster, data-driven decisions.",
  },
  {
    question: "3. Why should I choose Virat Software Solutions for AI development?",
    answer: "Virat Software Solutions combines software engineering, data expertise, automation capabilities, and AI technologies to deliver practical solutions that solve real business challenges and create measurable outcomes.",
  },
  {
    question: "4. What types of AI solutions do you develop?",
    answer: "We develop AI-powered applications, machine learning models, predictive analytics systems, intelligent automation workflows, recommendation engines, business intelligence solutions, and custom AI integrations.",
  },
  {
    question: "5. Can AI be integrated into existing software systems?",
    answer: "Yes. We help businesses integrate AI capabilities into existing applications, SaaS platforms, business systems, customer portals, and operational workflows.",
  },
  {
    question: "6. What industries can benefit from AI and automation?",
    answer: "AI and automation can benefit industries including healthcare, finance, ecommerce, logistics, manufacturing, education, SaaS, retail, and professional services.",
  },
  {
    question: "7. Do I need large amounts of data to implement AI?",
    answer: "Not always. The amount of data required depends on the use case. We help businesses evaluate available data, identify opportunities, and determine the most effective AI implementation strategy.",
  },
  {
    question: "8. Which technologies do you use for AI development?",
    answer: "Our AI technology stack includes Python, TensorFlow, machine learning frameworks, cloud AI services, .NET, React, Node.js, AWS, Azure, Google Cloud Platform, and modern data platforms.",
  },
  {
    question: "9. Can automation improve operational efficiency?",
    answer: "Yes. Automation can significantly reduce manual work, improve consistency, accelerate workflows, and allow teams to focus on strategic business activities.",
  },
  {
    question: "10. How do you measure the success of AI initiatives?",
    answer: "We measure AI success through business outcomes such as increased efficiency, reduced costs, improved accuracy, enhanced customer experiences, productivity gains, and measurable return on investment.",
  },
];

export default function AiAutomationSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>AI & Automation Solutions</h1>
              <p className="eyebrow solutionsEyebrowLarge">
                Transform Business Operations with AI and Intelligent Automation
              </p>
              <p className="leadText">
                Leverage artificial intelligence, machine learning, and workflow automation to streamline operations,
                improve decision-making, and unlock new growth opportunities. Virat Software Solutions helps businesses
                implement practical AI solutions that deliver measurable results, increase efficiency, and reduce operational complexity.
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

        {/* Section 2: What AI & Automation Solutions Solve */}
        <section className="sectionPad sectionAlt" id="what-ai-solves" aria-labelledby="solves-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="solves-heading">
              <p className="eyebrow">Problems We Address</p>
              <h2>What AI & Automation Solutions Solve</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div
                  className="contentCard solutionsMainWhatWeSolveCard" >
                  <p className="solutionsIntroText">
                    Many businesses struggle with repetitive manual processes, fragmented data, delayed decision-making,
                    and operational inefficiencies that limit growth. As organizations scale, these challenges often
                    increase costs, reduce productivity, and impact customer experiences.
                  </p>
                  <p className="solutionsIntroTextLast">
                    AI and automation solutions help businesses automate routine tasks, analyze large volumes of data,
                    improve accuracy, and make faster business decisions. Whether you're exploring AI-powered
                    applications, workflow automation, predictive analytics, or machine learning solutions, the right
                    strategy can help you:
                  </p>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Eliminate repetitive and time-consuming manual tasks</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Improve operational efficiency through intelligent automation</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Reduce human errors and increase process accuracy</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Gain actionable insights from business data</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Enhance customer experiences with AI-powered interactions</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Scale operations without increasing operational overhead</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of AI & Automation Solutions */}
        <section className="sectionPad" id="benefits" aria-labelledby="benefits-heading">
          <div className="container">
            <SectionHeader
              title="Benefits of AI & Automation Solutions"
              description="Artificial intelligence and automation enable businesses to operate smarter, respond faster, and create more value from existing resources. By combining machine intelligence with automated workflows, organizations can improve productivity, reduce costs, and accelerate innovation."
              id="benefits-heading"
            />
            <div className="row g-4">
              {aiBenefits.map((item) => {
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

        {/* Section 4: Built for Businesses Ready to Scale Smarter */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Built for Businesses Ready to Scale Smarter"
              description="Our AI and automation services are designed for organizations seeking to improve efficiency, automate workflows, and gain a competitive advantage through intelligent technology."
              id="audience-heading"
            />
            <div className="row g-4">
              {aiAudiences.map((aud) => (
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

        {/* Section 5: Exploring AI but Unsure Where to Start? */}
        <section className="sectionPad" aria-labelledby="idea-cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="idea-cta-heading" className="ctaBannerTitle">
                  Exploring AI but Unsure Where to Start?
                </h2>
                <p className="solutionsCtaText">
                  Partner with Virat Software Solutions to evaluate data strategies, run prototype ML pilots, build custom models, and unlock automation cleanly.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Talk to an AI & Automation Expert
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Businesses Choose Virat for AI & Automation Solutions */}
        <section className="sectionPad sectionAlt" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <SectionHeader
              title="Why Businesses Choose Virat for AI & Automation Solutions"
              description="Successful AI implementation requires more than technology expertise. It requires a clear understanding of business processes, data, operational challenges, and measurable outcomes. Virat Software Solutions helps businesses implement AI and automation solutions that create real business impact."
              id="why-heading"
            />
            <div className="row g-4">
              {aiWhyVirat.map((item) => {
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

        {/* Section 7: How We Deliver AI & Automation Solutions */}
        <section className="sectionPad" id="bring-to-market" aria-labelledby="market-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="market-heading">
              <p className="eyebrow">Execution Roadmap</p>
              <h2>How We Deliver AI & Automation Solutions</h2>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row g-4 text-start">
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardCyan">
                      <p className="solutionsDeliverText">
                        Effective AI adoption begins with understanding business objectives, operational workflows, and
                        available data. Our approach focuses on identifying high-impact opportunities where artificial
                        intelligence and automation can create measurable improvements in efficiency, decision-making, and
                        customer experiences.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardNavy">
                      <p className="solutionsDeliverText">
                        From AI strategy and workflow analysis to model development, automation implementation,
                        integration, and optimization, we help businesses deploy intelligent solutions that drive
                        productivity, reduce operational friction, and support long-term growth.
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
            <SectionHeader title="Frequently Asked Questions About AI & Automation Solutions" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={aiFaqs} />
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
