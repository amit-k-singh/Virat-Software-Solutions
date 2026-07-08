import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LeadFormShell from "../../components/LeadFormShell";
import TechAnimation from "../../components/TechAnimation";
import "../../assets/css/industries.css";

import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckLine,
  RiFlashlightLine,
  RiRotateLockLine,
  RiFocus3Line,
  RiRobot2Line,
  RiCodeBoxLine,
  RiReactjsLine,
  RiCloudLine,
  RiLayoutLine,
} from "react-icons/ri";

export const metadata = {
  title: "About Virat Software Solutions | Engineering Scalable Digital Products",
  description:
    "Learn about Virat Software Solutions. We help businesses design, build, and scale modern digital products through custom software development, AI solutions, and cloud engineering.",
  alternates: {
    canonical: "https://viratsoftware.com/about",
  },
};

const finalCtaContent = {
  title: "Let’s Build Something That Works for Your Business",
  description:
    "If you are looking for a software development company that focuses on real results, scalable systems, and long-term support, Virat Software Solutions is ready to work with you.",
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
    "API & System Integration",
    "Other",
  ],
};

const builtItems = [
  "Custom Software Solutions",
  "SaaS Products & Digital Platforms",
  "Web & Mobile Applications",
  "AI & Automation Systems",
  "Cloud & DevOps Infrastructure",
  "API & System Integrations",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Section */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter aboutHeroCenter">
              <h1>Technology Built for Business Growth</h1>
              <p className="leadText aboutHeroDesc1">
                Virat Software Solutions helps businesses design, build, and scale modern digital products through
                custom software development, AI solutions, cloud engineering, and intelligent automation.
              </p>
              <p className="leadText aboutHeroDesc2">
                From startups validating ideas to organizations modernizing systems, we create scalable technology
                designed for performance, adaptability, and long-term growth.
              </p>
              <div className="heroActions">
                <a className="primaryButton" href="/contact">
                  <RiArrowRightLine aria-hidden="true" />
                  Talk to an Engineer
                </a>
                <a className="secondaryButton" href="/solutions">
                  View Our Work
                  <RiArrowRightUpLine aria-hidden="true" />
                </a>
              </div>
              <div className="valuePills">
                <span className="valuePill">
                  <RiRobot2Line aria-hidden="true" />
                  AI / ML
                </span>
                <span className="valuePill">
                  <RiCodeBoxLine aria-hidden="true" />
                  .NET
                </span>
                <span className="valuePill">
                  <RiReactjsLine aria-hidden="true" />
                  React
                </span>
                <span className="valuePill">
                  <RiCloudLine aria-hidden="true" />
                  Cloud & DevOps
                </span>
                <span className="valuePill">
                  <RiLayoutLine aria-hidden="true" />
                  SaaS
                </span>
                <span className="valuePill">
                  <RiCodeBoxLine aria-hidden="true" />
                  API Integrations
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Who We Are */}
        <section className="sectionPad" id="who-we-are">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <div className="sectionIntro text-start aboutIntroHeader">
                  <p className="eyebrow">Who We Are</p>
                  <h2>Engineering Solutions With Purpose</h2>
                </div>
                <p className="aboutIntroText">
                  At Virat Software Solutions, we believe technology delivers the most value when it solves real
                  business problems.
                </p>
                <p className="aboutIntroText">
                  We combine software engineering, product thinking, and modern technologies to build web
                  applications, mobile apps, SaaS platforms, cloud solutions, and AI-driven systems that help
                  businesses move faster and scale smarter.
                </p>
                <p className="aboutIntroTextLast">
                  Our focus is simple — practical execution, scalable architecture, and long-term technology partnerships.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <article className="contentCard d-flex gap-4 align-items-start aboutDiffCard">
                      <div className="aboutDiffIconWrap diffIconWrapCyan">
                        <RiFlashlightLine size={28} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="aboutDiffCardTitle">Efficient</h3>
                        <p className="aboutDiffCardDesc">
                          Eliminating technical waste and bloat. We build code that runs performantly, launches rapidly, and runs cost-effectively in production.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-12">
                    <article className="contentCard d-flex gap-4 align-items-start aboutDiffCard">
                      <div className="aboutDiffIconWrap diffIconWrapNavy">
                        <RiRotateLockLine size={28} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="aboutDiffCardTitle">Adaptable</h3>
                        <p className="aboutDiffCardDesc">
                          Our modular architectural decisions ensure your applications are flexible, easy to modify, and ready for future integrations.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-12">
                    <article className="contentCard d-flex gap-4 align-items-start aboutDiffCard">
                      <div className="aboutDiffIconWrap diffIconWrapCyan">
                        <RiFocus3Line size={28} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="aboutDiffCardTitle">Innovative</h3>
                        <p className="aboutDiffCardDesc">
                          Incorporating modern machine learning models, cloud automation pipelines, and advanced UI/UX to keep your systems ahead of competitors.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What We Build */}
        <section className="sectionPad sectionAlt" id="what-we-build">
          <div className="container">
            <div className="sectionIntro text-center mb-5">
              <p className="eyebrow">Services</p>
              <h2>Solutions Built Around Modern Business Needs</h2>
              <p className="leadText aboutBuildDesc">
                Businesses today require more than development alone. They need scalable applications, connected systems,
                cloud infrastructure, and intelligent automation that support evolving operations and growth.
              </p>
            </div>
            
            <div className="row g-4 mt-3">
              {builtItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item}>
                  <article className="contentCard aboutBuildCard">
                    <div className="d-flex align-items-center gap-3">
                      <div className="aboutBuildIconWrap">
                        <RiCheckLine size={18} aria-hidden="true" />
                      </div>
                      <h3 className="aboutBuildCardTitle">{item}</h3>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <a className="secondaryButton" href="/solutions">
                Explore Services
                <RiArrowRightUpLine aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Our Approach */}
        <section className="sectionPad" id="our-approach">
          <div className="container">
            <div className="contentCard aboutApproachCard">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="sectionIntro text-start aboutApproachIntro">
                    <p className="eyebrow">Our Philosophy</p>
                    <h2>Built for Long-Term Technology Partnerships</h2>
                  </div>
                  <p className="aboutApproachText">
                    Every project starts with understanding the business problem, technical requirements, and growth
                    objectives before development begins.
                  </p>
                  <p className="aboutApproachText">
                    Our delivery approach combines strategy, architecture, agile engineering, testing, and continuous
                    optimization to create software that is reliable, scalable, and ready for real-world use.
                  </p>
                  <p className="aboutApproachTextLast">
                    Whether launching an MVP, modernizing an existing platform, or building enterprise-grade solutions,
                    we focus on outcomes that support sustainable business growth.
                  </p>
                </div>
                <div className="col-12 col-lg-4 text-lg-end">
                  <a className="primaryButton" href="/contact">
                    <RiArrowRightLine aria-hidden="true" />
                    Start the Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Lead Form & SVG Animation */}
        <section className="sectionPad sectionAlt" id="final-cta" aria-labelledby="final-cta-heading">
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
