import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
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
  title: "Data & Analytics Solutions",
  description:
    "Unlock the value of your data with scalable analytics solutions, modern platforms, and intelligent reporting systems designed by Virat Software Solutions.",
  alternates: {
    canonical: "/solutions/data-analytics-solutions",
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

const dataBenefits = [
  {
    title: "Better Business Decision-Making",
    description: "Access reliable, real-time insights that help leaders make informed decisions based on facts rather than assumptions.",
    Icon: RiLineChartLine,
  },
  {
    title: "Improved Operational Visibility",
    description: "Monitor business performance across departments, teams, systems, and processes through centralized reporting and dashboards.",
    Icon: RiSettings3Line,
  },
  {
    title: "Faster Access to Critical Information",
    description: "Reduce the time spent gathering and consolidating data by creating unified, automated reporting environments.",
    Icon: RiBarChartLine,
  },
  {
    title: "Enhanced Business Performance",
    description: "Identify inefficiencies, bottlenecks, and growth opportunities through deeper analysis of operational and customer data.",
    Icon: RiUserStarLine,
  },
  {
    title: "Stronger Strategic Planning",
    description: "Use historical trends, forecasting models, and business intelligence to support long-term planning and resource allocation.",
    Icon: RiRocketLine,
  },
  {
    title: "Foundation for AI & Automation",
    description: "Establish clean, connected, and structured data systems that enable future artificial intelligence and automation initiatives.",
    Icon: RiCloudLine,
  },
];

const dataAudiences = [
  {
    badge: "1. Business Leaders & Decision Makers",
    title: "Operational planning and tracking",
    description: "Gain access to accurate insights that support operational performance, planning, and business growth.",
    bullets: [
      "Improve strategic decisions",
      "Increase business visibility",
      "Track key performance indicators",
      "Identify growth opportunities",
    ],
  },
  {
    badge: "2. Growing Businesses",
    title: "Scalable reporting ecosystems",
    description: "Create scalable reporting and analytics foundations that support expansion and operational complexity.",
    bullets: [
      "Centralize business data",
      "Improve reporting accuracy",
      "Automate analytics processes",
      "Support business scalability",
    ],
  },
  {
    badge: "3. Operations & Finance Teams",
    title: "Forecasting and budget control",
    description: "Leverage analytics to improve forecasting, operational efficiency, budgeting, and resource management.",
    bullets: [
      "Improve performance tracking",
      "Enhance forecasting capabilities",
      "Optimize business processes",
      "Increase operational control",
    ],
  },
  {
    badge: "4. Enterprise Organizations",
    title: "Data governance and warehouse scaling",
    description: "Build enterprise-grade data ecosystems that support analytics, business intelligence, governance, and digital transformation initiatives.",
    bullets: [
      "Connect enterprise systems",
      "Enable real-time reporting",
      "Improve data governance",
      "Support advanced analytics strategies",
    ],
  },
];

const dataWhyVirat = [
  {
    title: "Business-Centric Analytics Strategy",
    description: "We align analytics initiatives with business goals to ensure reporting and insights support real-world decision-making.",
    Icon: RiLineChartLine,
  },
  {
    title: "Connected Data Ecosystems",
    description: "Our solutions integrate data from multiple systems, platforms, and business applications to create a unified source of truth.",
    Icon: RiSettings3Line,
  },
  {
    title: "Modern Data Engineering Expertise",
    description: "We design scalable data architectures, pipelines, and analytics environments that support current and future business needs.",
    Icon: RiCodeBoxLine,
  },
  {
    title: "Real-Time Visibility & Reporting",
    description: "We help organizations move beyond static reports by creating interactive dashboards and real-time performance monitoring capabilities.",
    Icon: RiBarChartLine,
  },
  {
    title: "Scalable Technology Foundations",
    description: "Our solutions are designed to support growing data volumes, advanced analytics, business intelligence, and future AI initiatives.",
    Icon: RiCloudLine,
  },
  {
    title: "End-to-End Data Transformation Support",
    description: "From strategy and use-case validation to development, deployment, and optimization, we help businesses maximize the value of their data investments.",
    Icon: RiCheckboxCircleLine,
  },
];

const dataFaqs = [
  {
    question: "1. What are data and analytics solutions?",
    answer: "Data and analytics solutions help businesses collect, integrate, organize, analyze, and visualize data to improve decision-making, operational efficiency, and business performance.",
  },
  {
    question: "2. Why are data analytics important for businesses?",
    answer: "Data analytics helps organizations identify trends, monitor performance, uncover opportunities, reduce risks, and make informed decisions based on reliable information rather than assumptions.",
  },
  {
    question: "3. Why should I choose Virat Software Solutions for data and analytics services?",
    answer: "Virat Software Solutions combines data engineering, analytics expertise, software development, and modern cloud technologies to help businesses build scalable, insight-driven data ecosystems.",
  },
  {
    question: "4. What types of analytics solutions do you provide?",
    answer: "We provide business intelligence dashboards, reporting systems, data integration solutions, data warehouses, analytics platforms, KPI tracking systems, and custom data applications.",
  },
  {
    question: "5. Can you integrate data from multiple business systems?",
    answer: "Yes. We help businesses connect ERP systems, CRM platforms, SaaS applications, databases, APIs, and other data sources to create unified reporting environments.",
  },
  {
    question: "6. What technologies do you use for data and analytics projects?",
    answer: "Our solutions leverage technologies such as PostgreSQL, MongoDB, Python, cloud platforms, ETL pipelines, APIs, business intelligence tools, AWS, Azure, and Google Cloud services.",
  },
  {
    question: "7. Can data analytics improve business performance?",
    answer: "Absolutely. Analytics provides visibility into operations, customer behavior, financial performance, and business trends, enabling organizations to optimize processes and improve outcomes.",
  },
  {
    question: "8. Do you help businesses build data warehouses and data pipelines?",
    answer: "Yes. We design and implement scalable data warehouses, ETL processes, data pipelines, and integration frameworks that support reliable analytics and reporting.",
  },
  {
    question: "9. Can data analytics support AI and machine learning initiatives?",
    answer: "Yes. High-quality, connected, and structured data is essential for successful AI and machine learning implementations. Data analytics often serves as the foundation for advanced AI projects.",
  },
  {
    question: "10. How do you measure success in data and analytics projects?",
    answer: "Success is measured through improved reporting accuracy, faster access to insights, better decision-making, operational efficiency gains, increased visibility, and measurable business outcomes.",
  },
];

export default function DataAnalyticsSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>Data & Analytics Solutions</h1>
              <p className="eyebrow solutionsEyebrowLarge">
                Turn Business Data Into Actionable Insights
              </p>
              <p className="leadText">
                Unlock the full value of your data with scalable analytics solutions, modern data platforms, and
                intelligent reporting systems. Virat Software Solutions helps businesses transform fragmented data
                into meaningful insights that support faster decisions, operational efficiency, and long-term growth.
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

        {/* Section 2: What Data & Analytics Solutions Solve */}
        <section className="sectionPad sectionAlt" id="what-data-solves" aria-labelledby="solves-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="solves-heading">
              <p className="eyebrow">Problems We Address</p>
              <h2>What Data & Analytics Solutions Solve</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div
                  className="contentCard solutionsMainWhatWeSolveCard" >
                  <p className="solutionsIntroText">
                    Many organizations generate large volumes of data but struggle to convert it into actionable business
                    intelligence. Data often exists across multiple systems, departments, and platforms, making it
                    difficult to gain visibility, identify trends, and make informed decisions.
                  </p>
                  <p className="solutionsIntroTextLast">
                    Data and analytics solutions help businesses centralize information, improve reporting accuracy,
                    create real-time visibility, and uncover insights that drive growth. Whether you're building
                    dashboards, integrating data sources, modernizing reporting systems, or creating analytics platforms,
                    the right data strategy helps you:
                  </p>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Eliminate data silos across systems and departments</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Improve reporting accuracy and business visibility</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Access real-time operational and performance insights</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Support faster, data-driven decision-making</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Identify trends, opportunities, and business risks</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Build a scalable foundation for advanced analytics and AI initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of Data & Analytics Solutions */}
        <section className="sectionPad" id="benefits" aria-labelledby="benefits-heading">
          <div className="container">
            <SectionHeader
              title="Benefits of Data & Analytics Solutions"
              description="Modern businesses rely on data to improve performance, optimize operations, and identify new opportunities. Effective analytics solutions transform raw information into strategic insights that support growth and competitive advantage."
              id="benefits-heading"
            />
            <div className="row g-4">
              {dataBenefits.map((item) => {
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

        {/* Section 4: Built for Data-Driven Organizations */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Built for Data-Driven Organizations"
              description="Our data and analytics services are designed for organizations that want greater visibility, improved reporting, and better decision-making through connected data systems."
              id="audience-heading"
            />
            <div className="row g-4">
              {dataAudiences.map((aud) => (
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

        {/* Section 5: Struggling to Make Sense of Your Business Data? */}
        <section className="sectionPad" aria-labelledby="idea-cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="idea-cta-heading" className="ctaBannerTitle">
                  Struggling to Make Sense of Your Business Data?
                </h2>
                <p className="solutionsCtaText">
                  Partner with Virat Software Solutions to aggregate pipelines, design analytical views, construct secure repositories, and unlock insight cleanly.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Talk to a Data & Analytics Expert
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Businesses Choose Virat for Data & Analytics Solutions */}
        <section className="sectionPad sectionAlt" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <SectionHeader
              title="Why Businesses Choose Virat for Data & Analytics Solutions"
              description="Effective analytics requires more than dashboards and reports. It requires connected systems, reliable data, scalable architecture, and a clear understanding of business objectives. Virat Software Solutions helps organizations transform data into a strategic asset that drives measurable outcomes."
              id="why-heading"
            />
            <div className="row g-4">
              {dataWhyVirat.map((item) => {
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

        {/* Section 7: How We Deliver Data & Analytics Solutions */}
        <section className="sectionPad" id="bring-to-market" aria-labelledby="market-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="market-heading">
              <p className="eyebrow">Execution Roadmap</p>
              <h2>How We Deliver Data & Analytics Solutions</h2>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row g-4 text-start">
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardCyan">
                      <p className="solutionsDeliverText">
                        Successful analytics initiatives begin with understanding business objectives, data sources,
                        reporting requirements, and operational challenges. Our approach focuses on creating connected data
                        ecosystems that provide accurate, timely, and actionable insights across the organization.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardNavy">
                      <p className="solutionsDeliverText">
                        From data integration and pipeline development to business intelligence, dashboard creation,
                        analytics implementation, and optimization, we help businesses build scalable data solutions that
                        improve visibility, support strategic decisions, and enable sustainable growth.
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
            <div className="row g-4">
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
            <SectionHeader title="Frequently Asked Questions About Data & Analytics Solutions" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={dataFaqs} />
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
