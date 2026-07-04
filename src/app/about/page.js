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
} from "react-icons/ri";

export const metadata = {
  title: "About Virat Software Solutions | Engineering Scalable Digital Products",
  description:
    "Learn about Virat Software Solutions. We help businesses design, build, and scale modern digital products through custom software development, AI solutions, and cloud engineering.",
  alternates: {
    canonical: "/about",
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
            <div className="heroCenter" style={{ maxWidth: "860px" }}>
              <h1>Technology Built for Business Growth</h1>
              <p className="leadText" style={{ margin: "0 auto 24px", maxWidth: "760px" }}>
                Virat Software Solutions helps businesses design, build, and scale modern digital products through
                custom software development, AI solutions, cloud engineering, and intelligent automation.
              </p>
              <p className="leadText" style={{ margin: "0 auto 32px", maxWidth: "760px", opacity: 0.85 }}>
                From startups validating ideas to organizations modernizing systems, we create scalable technology
                designed for performance, adaptability, and long-term growth.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  color: "var(--color-navy)",
                  letterSpacing: "0.05em",
                  marginBottom: "32px",
                  opacity: 0.9,
                }}
              >
                AI / ML &nbsp;|&nbsp; .NET &nbsp;|&nbsp; React &nbsp;|&nbsp; Cloud & DevOps &nbsp;|&nbsp; SaaS &nbsp;|&nbsp; API Integrations
              </p>
              <div className="heroActions">
                <a className="primaryButton" href="/contact">
                  <RiArrowRightLine aria-hidden="true" />
                  Talk to an Engineer
                </a>
                <a className="secondaryButton" href="/solutions" style={{ border: "1px solid rgba(1, 31, 138, 0.15)" }}>
                  View Our Work
                  <RiArrowRightUpLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Who We Are */}
        <section className="sectionPad" id="who-we-are">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <div className="sectionIntro text-start" style={{ marginBottom: "24px" }}>
                  <p className="eyebrow">Who We Are</p>
                  <h2>Engineering Solutions With Purpose</h2>
                </div>
                <p style={{ fontSize: "1.08rem", lineHeight: "1.7", color: "var(--color-muted)", marginBottom: "20px" }}>
                  At Virat Software Solutions, we believe technology delivers the most value when it solves real
                  business problems.
                </p>
                <p style={{ fontSize: "1.08rem", lineHeight: "1.7", color: "var(--color-muted)", marginBottom: "20px" }}>
                  We combine software engineering, product thinking, and modern technologies to build web
                  applications, mobile apps, SaaS platforms, cloud solutions, and AI-driven systems that help
                  businesses move faster and scale smarter.
                </p>
                <p style={{ fontSize: "1.08rem", lineHeight: "1.7", color: "var(--color-muted)", marginBottom: "0" }}>
                  Our focus is simple — practical execution, scalable architecture, and long-term technology partnerships.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <article className="contentCard d-flex gap-4 align-items-start" style={{ padding: "28px" }}>
                      <div
                        style={{
                          background: "rgba(111, 212, 212, 0.15)",
                          padding: "14px",
                          borderRadius: "12px",
                          color: "var(--color-navy)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <RiFlashlightLine size={28} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px" }}>Efficient</h3>
                        <p style={{ margin: 0, color: "var(--color-muted)" }}>
                          Eliminating technical waste and bloat. We build code that runs performantly, launches rapidly, and runs cost-effectively in production.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-12">
                    <article className="contentCard d-flex gap-4 align-items-start" style={{ padding: "28px" }}>
                      <div
                        style={{
                          background: "rgba(1, 31, 138, 0.08)",
                          padding: "14px",
                          borderRadius: "12px",
                          color: "var(--color-navy)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <RiRotateLockLine size={28} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px" }}>Adaptable</h3>
                        <p style={{ margin: 0, color: "var(--color-muted)" }}>
                          Our modular architectural decisions ensure your applications are flexible, easy to modify, and ready for future integrations.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-12">
                    <article className="contentCard d-flex gap-4 align-items-start" style={{ padding: "28px" }}>
                      <div
                        style={{
                          background: "rgba(111, 212, 212, 0.15)",
                          padding: "14px",
                          borderRadius: "12px",
                          color: "var(--color-navy)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <RiFocus3Line size={28} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px" }}>Innovative</h3>
                        <p style={{ margin: 0, color: "var(--color-muted)" }}>
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
              <p className="leadText" style={{ margin: "16px auto 0", maxWidth: "800px" }}>
                Businesses today require more than development alone. They need scalable applications, connected systems,
                cloud infrastructure, and intelligent automation that support evolving operations and growth.
              </p>
            </div>
            
            <div className="row g-4 mt-3">
              {builtItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item}>
                  <article className="contentCard" style={{ padding: "24px", height: "100%" }}>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          background: "rgba(111, 212, 212, 0.16)",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          color: "var(--color-navy)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <RiCheckLine size={18} aria-hidden="true" />
                      </div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: "700", margin: 0 }}>{item}</h3>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <a className="secondaryButton" href="/solutions" style={{ border: "1px solid rgba(1, 31, 138, 0.15)" }}>
                Explore Services
                <RiArrowRightUpLine aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Our Approach */}
        <section className="sectionPad" id="our-approach">
          <div className="container">
            <div className="contentCard" style={{ padding: "50px", borderLeft: "4px solid var(--color-cyan)" }}>
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="sectionIntro text-start" style={{ marginBottom: "20px" }}>
                    <p className="eyebrow">Our Philosophy</p>
                    <h2>Built for Long-Term Technology Partnerships</h2>
                  </div>
                  <p style={{ fontSize: "1.06rem", lineHeight: "1.7", color: "var(--color-muted)", marginBottom: "16px" }}>
                    Every project starts with understanding the business problem, technical requirements, and growth
                    objectives before development begins.
                  </p>
                  <p style={{ fontSize: "1.06rem", lineHeight: "1.7", color: "var(--color-muted)", marginBottom: "16px" }}>
                    Our delivery approach combines strategy, architecture, agile engineering, testing, and continuous
                    optimization to create software that is reliable, scalable, and ready for real-world use.
                  </p>
                  <p style={{ fontSize: "1.06rem", lineHeight: "1.7", color: "var(--color-muted)", marginBottom: 0 }}>
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
      </main>
      <Footer />
    </>
  );
}
