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
  title: "Cloud & DevOps Transformation Services",
  description:
    "Accelerate innovation, optimize cloud spending, and automate delivery pipelines with cloud and DevOps solutions designed by Virat Software Solutions.",
  alternates: {
    canonical: "/solutions/cloud-devops-transformation",
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

const cloudBenefits = [
  {
    title: "Faster Software Delivery",
    description: "Automate development, testing, and deployment processes to release new features and updates more efficiently.",
    Icon: RiRocketLine,
  },
  {
    title: "Improved Scalability",
    description: "Build cloud-native environments capable of handling increasing workloads, users, and business demands without disruption.",
    Icon: RiCloudLine,
  },
  {
    title: "Enhanced System Reliability",
    description: "Improve uptime, availability, monitoring, and disaster recovery capabilities through modern cloud infrastructure.",
    Icon: RiSettings3Line,
  },
  {
    title: "Optimized Cloud Costs",
    description: "Gain better visibility into resource usage while implementing strategies that reduce unnecessary infrastructure spending.",
    Icon: RiBankCardLine,
  },
  {
    title: "Stronger Security & Compliance",
    description: "Implement security best practices, access controls, infrastructure policies, and monitoring frameworks that protect business systems.",
    Icon: RiCheckboxCircleLine,
  },
  {
    title: "Increased Operational Agility",
    description: "Enable teams to respond quickly to business requirements through automated, scalable, and flexible technology environments.",
    Icon: RiUserStarLine,
  },
];

const cloudAudiences = [
  {
    badge: "1. Growing Technology Companies",
    title: "Infrastructure scale automation",
    description: "Modernize infrastructure and delivery processes to support product growth and increasing customer demand.",
    bullets: [
      "Improve deployment speed",
      "Scale infrastructure efficiently",
      "Reduce operational complexity",
      "Support rapid growth initiatives",
    ],
  },
  {
    badge: "2. SaaS & Product Teams",
    title: "Platform stability optimization",
    description: "Build cloud-native platforms and automated delivery pipelines that improve reliability and accelerate innovation.",
    bullets: [
      "Increase release frequency",
      "Improve platform stability",
      "Enhance developer productivity",
      "Support continuous delivery",
    ],
  },
  {
    badge: "3. Enterprise Organizations",
    title: "Cloud environment modernization",
    description: "Transform legacy infrastructure into modern cloud environments that improve efficiency, visibility, and operational control.",
    bullets: [
      "Modernize infrastructure",
      "Improve system resilience",
      "Strengthen governance",
      "Enable digital transformation",
    ],
  },
  {
    badge: "4. Engineering & Operations Teams",
    title: "DevOps pipeline standardization",
    description: "Adopt DevOps practices that streamline workflows, automate deployments, and improve collaboration across teams.",
    bullets: [
      "Reduce deployment risks",
      "Improve system monitoring",
      "Enhance operational visibility",
      "Increase delivery efficiency",
    ],
  },
];

const cloudWhyVirat = [
  {
    title: "Cloud-First Architecture Expertise",
    description: "We design scalable cloud environments that improve performance, flexibility, and operational efficiency while supporting future business growth.",
    Icon: RiCloudLine,
  },
  {
    title: "DevOps Automation & CI/CD Implementation",
    description: "Our team helps organizations automate development and deployment workflows to improve release speed, consistency, and reliability.",
    Icon: RiSettings3Line,
  },
  {
    title: "Multi-Cloud & Modern Infrastructure Experience",
    description: "We work with AWS, Microsoft Azure, and Google Cloud Platform to build solutions tailored to business requirements and technology strategies.",
    Icon: RiCodeBoxLine,
  },
  {
    title: "Security & Reliability by Design",
    description: "Infrastructure security, monitoring, disaster recovery, and compliance considerations are built into every cloud transformation initiative.",
    Icon: RiCheckboxCircleLine,
  },
  {
    title: "Cost Optimization Focus",
    description: "We help businesses improve resource utilization, control cloud spending, and maximize the value of cloud investments.",
    Icon: RiBankCardLine,
  },
  {
    title: "End-to-End Cloud Transformation Support",
    description: "From assessment and migration to automation, optimization, and ongoing management, we support every stage of the transformation journey.",
    Icon: RiLineChartLine,
  },
];

const cloudFaqs = [
  {
    question: "1. What is cloud and DevOps transformation?",
    answer: "Cloud and DevOps transformation is the process of modernizing infrastructure, automating software delivery, and adopting cloud technologies to improve scalability, efficiency, reliability, and operational performance.",
  },
  {
    question: "2. Why should businesses move to the cloud?",
    answer: "Cloud environments offer greater flexibility, scalability, reliability, and cost efficiency compared to traditional infrastructure. They also enable faster innovation and easier access to modern technologies.",
  },
  {
    question: "3. Why choose Virat Software Solutions for cloud and DevOps services?",
    answer: "Virat Software Solutions combines cloud architecture expertise, DevOps automation, software engineering, and infrastructure modernization capabilities to help businesses achieve measurable transformation outcomes.",
  },
  {
    question: "4. Which cloud platforms do you support?",
    answer: "We work with Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), helping businesses choose and optimize the right cloud environment for their needs.",
  },
  {
    question: "5. What are the benefits of implementing DevOps practices?",
    answer: "DevOps improves collaboration between teams, accelerates software delivery, reduces deployment risks, increases automation, and enhances system reliability.",
  },
  {
    question: "6. Can you migrate existing applications to the cloud?",
    answer: "Yes. We help businesses assess, plan, and execute cloud migration strategies while minimizing disruption and ensuring system performance and security.",
  },
  {
    question: "7. How do you optimize cloud infrastructure costs?",
    answer: "We analyze cloud usage, resource allocation, workloads, and architecture patterns to identify opportunities for cost reduction and improved efficiency.",
  },
  {
    question: "8. Do you implement CI/CD pipelines?",
    answer: "Yes. We design and implement continuous integration and continuous deployment (CI/CD) pipelines that automate testing, deployment, and release management processes.",
  },
  {
    question: "9. How do you ensure cloud security?",
    answer: "We implement security best practices including identity and access management, infrastructure hardening, monitoring, encryption, compliance controls, and ongoing security reviews.",
  },
  {
    question: "10. Can cloud and DevOps transformation support digital transformation initiatives?",
    answer: "Absolutely. Cloud and DevOps serve as foundational technologies that enable digital transformation, improve agility, accelerate innovation, and support modern business operations.",
  },
];

export default function CloudDevOpsTransformationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>Cloud & DevOps Transformation</h1>
              <p className="eyebrow solutionsEyebrowLarge">
                Build Scalable, Secure, and High-Performance Cloud Infrastructure
              </p>
              <p className="leadText">
                Accelerate innovation, improve deployment efficiency, and modernize infrastructure with cloud and DevOps
                solutions designed for growth. Virat Software Solutions helps businesses optimize cloud environments,
                automate delivery pipelines, strengthen security, and create resilient technology foundations for the future.
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

        {/* Section 2: What Cloud & DevOps Transformation Solves */}
        <section className="sectionPad sectionAlt" id="what-cloud-solves" aria-labelledby="solves-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="solves-heading">
              <p className="eyebrow">Problems We Address</p>
              <h2>What Cloud & DevOps Transformation Solves</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div
                  className="contentCard solutionsMainWhatWeSolveCard" >
                  <p className="solutionsIntroText">
                    Many organizations struggle with outdated infrastructure, slow software releases, manual deployment
                    processes, scalability limitations, and rising operational costs. These challenges often reduce
                    agility, increase risk, and slow business growth.
                  </p>
                  <p className="solutionsIntroTextLast">
                    Cloud and DevOps transformation helps businesses modernize infrastructure, automate software delivery,
                    improve system reliability, and optimize cloud operations. Whether you're migrating to the cloud,
                    implementing DevOps practices, or modernizing existing environments, the right strategy helps you:
                  </p>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Eliminate manual deployment and infrastructure management tasks</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Improve application performance and system reliability</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Accelerate software delivery and release cycles</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Optimize cloud costs and resource utilization</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Strengthen infrastructure security and compliance</span>
                    </li>
                    <li>
                      <RiCheckboxCircleLine aria-hidden="true" className="solutionsCheckIcon" />
                      <span>Create scalable environments that support business growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of Cloud & DevOps Transformation Services */}
        <section className="sectionPad" id="benefits" aria-labelledby="benefits-heading">
          <div className="container">
            <SectionHeader
              title="Benefits of Cloud & DevOps Transformation Services"
              description="Cloud and DevOps transformation enables organizations to deliver software faster, improve operational efficiency, and build infrastructure that adapts to changing business demands. By combining cloud technologies with automation and modern engineering practices, businesses gain greater flexibility, resilience, and scalability."
              id="benefits-heading"
            />
            <div className="row g-4">
              {cloudBenefits.map((item) => {
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

        {/* Section 4: Built for Organizations Modernizing Technology Operations */}
        <section className="sectionPad sectionAlt" id="audience" aria-labelledby="audience-heading">
          <div className="container">
            <SectionHeader
              title="Built for Organizations Modernizing Technology Operations"
              description="Our cloud and DevOps transformation services are designed for businesses looking to improve infrastructure performance, deployment efficiency, scalability, and operational resilience."
              id="audience-heading"
            />
            <div className="row g-4">
              {cloudAudiences.map((aud) => (
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

        {/* Section 5: Planning a Cloud or DevOps Transformation Initiative? */}
        <section className="sectionPad" aria-labelledby="idea-cta-heading">
          <div className="container">
            <div className="ctaBanner">
              <div className="ctaCopy">
                <h2 id="idea-cta-heading" className="ctaBannerTitle">
                  Planning a Cloud or DevOps Transformation Initiative?
                </h2>
                <p className="solutionsCtaText">
                  Partner with Virat Software Solutions to orchestrate deployment runners, configure cloud templates, monitor workloads, and unlock performance cleanly.
                </p>
              </div>
              <div className="ctaActions">
                <a className="secondaryButton" href="#final-cta">
                  Talk to a Cloud & DevOps Expert
                  <RiArrowRightLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Businesses Choose Virat for Cloud & DevOps Transformation */}
        <section className="sectionPad sectionAlt" id="why-virat" aria-labelledby="why-heading">
          <div className="container">
            <SectionHeader
              title="Why Businesses Choose Virat for Cloud & DevOps Transformation"
              description="Successful cloud transformation requires more than infrastructure migration. It requires a strategic approach that aligns cloud technologies, automation, security, and operational processes with business objectives. Virat Software Solutions helps organizations build cloud environments that support performance, reliability, and long-term growth."
              id="why-heading"
            />
            <div className="row g-4">
              {cloudWhyVirat.map((item) => {
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

        {/* Section 7: How We Deliver Cloud & DevOps Transformation */}
        <section className="sectionPad" id="bring-to-market" aria-labelledby="market-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="market-heading">
              <p className="eyebrow">Execution Roadmap</p>
              <h2>How We Deliver Cloud & DevOps Transformation</h2>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row g-4 text-start">
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardCyan">
                      <p className="solutionsDeliverText">
                        Successful cloud and DevOps initiatives begin with understanding current infrastructure, business
                        requirements, operational challenges, and future growth objectives. Our approach focuses on
                        creating scalable, secure, and automated environments that improve both business performance and
                        engineering productivity.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex">
                    <div className="contentCard h-100 solutionsDeliverCard solutionsDeliverCardNavy">
                      <p className="solutionsDeliverText">
                        From cloud architecture design and migration planning to CI/CD implementation, infrastructure
                        automation, monitoring, optimization, and ongoing support, we help businesses modernize technology
                        operations while reducing complexity and improving reliability.
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
            <SectionHeader title="Frequently Asked Questions About Cloud & DevOps Transformation Services" id="faq-heading" />
            <div className="mt-4">
              <FaqAccordion items={cloudFaqs} />
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
