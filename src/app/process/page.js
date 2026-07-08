import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LeadFormShell from "../../components/LeadFormShell";
import TechAnimation from "../../components/TechAnimation";
import IndustryCards from "../../components/industries/IndustryCards";
import FaqAccordion from "../../components/FaqAccordion";
import "../../assets/css/industries.css";

import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCompass3Line,
  RiCodeSSlashLine,
  RiShieldCheckLine,
  RiRocket2Line,
  RiChatFollowUpLine,
  RiTeamLine,
  RiSlideshowLine,
  RiCheckLine,
} from "react-icons/ri";

export const metadata = {
  title: "Our Software Development Process | Virat Software Solutions",
  description:
    "Explore our structured, agile software development process. We turn ideas into scalable digital products through discovery, architecture, agile sprints, QA, and deployment.",
  alternates: {
    canonical: "/process",
  },
};

const finalCtaContent = {
  title: "Let's Build Your Next Digital Product",
  description:
    "Ready to discuss your software engineering goals, timeline, and delivery approach? Connect with our team to start the conversation.",
  button: "Start the Conversation",
  fields: {
    name: "Your name",
    email: "Email Address",
    phone: "Phone number",
    project: "What are you building?",
    message: "Your message",
  },
  options: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "SaaS Product Development",
    "AI & Automation Solutions",
    "Cloud & DevOps",
    "Other",
  ],
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    icon: RiCompass3Line,
    colorClass: "iconWrapCyan",
    description:
      "We begin by understanding your business goals, target audience, and system requirements. Together, we define project scope, prioritize critical MVP features, and build a strategic technical roadmap.",
  },
  {
    step: "02",
    title: "Solution Design & Architecture",
    icon: RiSlideshowLine,
    colorClass: "iconWrapNavy",
    description:
      "Our architects design high-performance, modular system blueprints. We select the optimal technology stack, structure secure database schemas, map out API endpoints, and create intuitive UX/UI user flows.",
  },
  {
    step: "03",
    title: "Agile Development & Engineering",
    icon: RiCodeSSlashLine,
    colorClass: "iconWrapCyan",
    description:
      "Our development team translates specifications into production-grade code. Working in structured agile sprints, we provide functional preview builds, commit cleaner code, and maintain Git repositories.",
  },
  {
    step: "04",
    title: "Quality Assurance & Validation",
    icon: RiShieldCheckLine,
    colorClass: "iconWrapNavy",
    description:
      "We run extensive QA checks to validate system stability. This includes unit testing backend functions, cross-browser responsiveness tests, API performance profiling, security audits, and user flow checks.",
  },
  {
    step: "05",
    title: "Deployment, Optimization & Growth",
    icon: RiRocket2Line,
    colorClass: "iconWrapCyan",
    description:
      "We launch your software product using modern CI/CD automation pipelines. After release, we monitor real-time system performance, resolve user feedback, and scale the infrastructure as demand increases.",
  },
];

const collaborationItems = [
  {
    title: "Direct Engineering Access",
    icon: RiTeamLine,
    description: "Work directly with our developers and product engineers. No middle layers or communication delays.",
  },
  {
    title: "Transparent Sprints",
    icon: RiCodeSSlashLine,
    description: "Receive regular demo builds and direct Git repository access. You always know exactly what is being built.",
  },
  {
    title: "Active Communication Loops",
    icon: RiChatFollowUpLine,
    description: "We communicate through your preferred channels (Slack/Teams) with scheduled milestone demos and reports.",
  },
];

const processFaqs = [
  {
    question: "1. How do you estimate software development timelines and budgets?",
    answer: "During our initial discovery phase, we break down requirements into specific tasks and technical milestones. Based on complexity, integration points, and UI designs, we provide clear estimates with transparent delivery ranges.",
  },
  {
    question: "2. Can we change project requirements during the development process?",
    answer: "Yes. Our agile sprint-based framework accommodates changes easily. We review progress at the end of each sprint, allowing us to pivot, re-prioritize, or add features without derailing active development timelines.",
  },
  {
    question: "3. How do you ensure transparent progress reporting?",
    answer: "We provide clients with direct access to our work management boards, scheduled video demonstrations, and Git commits. You receive a demo of working software at regular intervals to review progress firsthand.",
  },
  {
    question: "4. What is your QA validation and testing process?",
    answer: "We use a multi-layered testing approach, including automated unit tests, API integration checks, security vulnerability scanning, and manual QA validation across devices to ensure zero-defect product launches.",
  },
  {
    question: "5. What happens during post-deployment support and optimization?",
    answer: "We offer continuous application monitoring, server optimization, software updates, and support packages to ensure your platform remains secure, performant, and ready to scale with user growth.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Section */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter processHeroCenter">
              <h1>Our Software Development Process</h1>
              <p className="leadText processHeroDesc">
                A structured, transparent, and results-focused approach to engineering custom software. We combine product strategy with agile engineering to deliver reliable products.
              </p>
              <div className="heroActions">
                <a className="primaryButton" href="#process-steps">
                  <RiArrowRightLine aria-hidden="true" />
                  View 5-Step Process
                </a>
                <a className="secondaryButton" href="/contact">
                  Start a Conversation
                  <RiArrowRightUpLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How We Turn Ideas Into Scalable Solutions */}
        <section className="sectionPad" id="philosophy">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <div className="sectionIntro text-start processIntroHeader">
                  <p className="eyebrow">Philosophy</p>
                  <h2>How We Turn Ideas Into Scalable Solutions</h2>
                </div>
                <p className="processIntroText">
                  We believe that successful software development is built on solid product strategy, clean code, and transparent execution. We don't just write code; we help define the right solutions for business problems.
                </p>
                <p className="processIntroTextLast">
                  By combining architecture blueprints, agile development sprints, and continuous feedback loops, we reduce engineering risk and build systems that scale alongside your user base.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="contentCard processPillarsCard">
                  <h3 className="processPillarsTitle">Our Execution Pillars</h3>
                  <ul className="audienceList" role="list">
                    <li>
                      <RiCheckLine size={20} aria-hidden="true" />
                      <span>Product-first roadmap engineering</span>
                    </li>
                    <li>
                      <RiCheckLine size={20} aria-hidden="true" />
                      <span>Symmetrical, modular, and maintainable systems</span>
                    </li>
                    <li>
                      <RiCheckLine size={20} aria-hidden="true" />
                      <span>Direct collaboration without overhead</span>
                    </li>
                    <li>
                      <RiCheckLine size={20} aria-hidden="true" />
                      <span>Automated validations and automated deployments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our 5-Step Development Process */}
        <section className="sectionPad sectionAlt" id="process-steps">
          <div className="container">
            <div className="sectionIntro text-center mb-5">
              <p className="eyebrow">Framework</p>
              <h2>Our 5-Step Development Process</h2>
              <p className="leadText processStepsDesc">
                A reliable product lifecycle process designed to deliver functional software on time and within scope.
              </p>
            </div>

            <div className="row g-4 mt-3">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div className="col-12 col-lg-4 d-flex" key={step.step}>
                    <article className="contentCard processStepCard">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className={`processStepIconWrap ${step.colorClass}`}>
                          <Icon size={24} aria-hidden="true" />
                        </div>
                        <span className="processStepNumber">{step.step}</span>
                      </div>
                      <h3 className="processStepTitle">{step.title}</h3>
                      <p className="processStepText">
                        {step.description}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: How We Collaborate With Clients */}
        <section className="sectionPad" id="collaboration">
          <div className="container">
            <div className="sectionIntro text-center mb-5">
              <p className="eyebrow">Communication</p>
              <h2>How We Collaborate With Clients</h2>
              <p className="leadText processStepsDesc">
                We prioritize close communication, clear expectations, and regular updates to ensure we remain aligned on goals and delivery timelines.
              </p>
            </div>

            <div className="row g-4 mt-3">
              {collaborationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="col-12 col-md-4" key={item.title}>
                    <article className="contentCard text-center processCollabCard">
                      <div className="processCollabIconWrap">
                        <Icon size={26} aria-hidden="true" />
                      </div>
                      <h3 className="processCollabTitle">{item.title}</h3>
                      <p className="processCollabText">
                        {item.description}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Technologies & Methodologies We Use */}
        <section className="sectionPad sectionAlt" id="methodologies">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <div className="sectionIntro text-start processIntroHeader">
                  <p className="eyebrow">Standards</p>
                  <h2>Technologies & Methodologies We Use</h2>
                </div>
                <p className="processIntroText">
                  We apply modern engineering best practices to reduce manual intervention, prevent delivery delays, and guarantee system stability in live environments.
                </p>
                <p className="processIntroTextLast">
                  From automated continuous integration (CI/CD) pipelines to agile Scrum frameworks and Git workflow checkpoints, we build software using the same standards as leading tech companies.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row g-3">
                  {["Agile & Scrum Frameworks", "CI/CD Deployment Automations", "Automated QA & Unit Testing", "Cloud-Native Architectures", "Git Feature Branches", "DevOps Infrastructure as Code"].map((tech) => (
                    <div className="col-12 col-md-6" key={tech}>
                      <div className="contentCard d-flex align-items-center gap-2 processMethodCard">
                        <div className="processMethodIconWrap">
                          <RiCheckLine size={20} aria-hidden="true" />
                        </div>
                        <span className="processMethodTitle">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Industries We Support */}
        <section className="sectionPad" id="industries">
          <div className="container">
            <div className="sectionIntro text-center mb-5">
              <p className="eyebrow">Expertise</p>
              <h2>Industries We Support</h2>
            </div>
            <IndustryCards />
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="sectionPad sectionAlt" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="faq-heading">
              <p className="eyebrow">FAQs</p>
              <h2>Frequently Asked Questions About Our Process</h2>
            </div>
            <div className="mt-4">
              <FaqAccordion items={processFaqs} />
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA */}
        <section className="sectionPad" id="final-cta" aria-labelledby="final-cta-heading">
          <div className="container">
            {/* Title First (Full Width) */}
            <div className="sectionIntro text-center mb-5">
              <h2 id="final-cta-heading">{finalCtaContent.title}</h2>
              <p className="finalCtaDesc">
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
      </main>
      <Footer />
    </>
  );
}
