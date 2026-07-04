import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LeadFormShell from "../../components/LeadFormShell";
import FaqAccordion from "../../components/FaqAccordion";
import "../../assets/css/industries.css";

import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
} from "react-icons/ri";

export const metadata = {
  title: "Talk to Software Development Experts | Virat Software Solutions",
  description:
    "Talk to our software development team about project planning, timelines, and scalable technology solutions including web, mobile, SaaS, AI, and cloud development.",
  alternates: {
    canonical: "/contact",
  },
};

const contactOptions = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "SaaS Product Development",
  "AI & Automation Solutions",
  "Cloud & DevOps",
  "API & System Integration",
  "UI/UX & Product Design",
  "QA & Testing",
  "Other",
];

const contactFieldLabels = {
  name: "Your name",
  email: "Email Address",
  phone: "Phone number",
  project: "What are you building?",
  message: "Your message",
};

const contactFaqs = [
  {
    question: "1. How do I get started with your software development team?",
    answer: "You can contact our team through the form, email, or phone. Share your project goals, technical requirements, or business challenges, and we’ll discuss the right development approach, timeline, and next steps.",
  },
  {
    question: "2. Can I discuss my software idea before having detailed requirements?",
    answer: "Yes. Many clients contact us during the early planning stage. We help businesses validate ideas, define requirements, explore technical options, and shape scalable solution strategies before development begins.",
  },
  {
    question: "3. Do you provide project estimates and technical consultation?",
    answer: "Yes. Based on your requirements, project scope, features, and technology needs, our team can provide guidance on timelines, delivery approach, and development estimates.",
  },
  {
    question: "4. What types of projects does Virat Software Solutions work on?",
    answer: "We build custom software solutions, web applications, mobile apps, SaaS platforms, AI systems, cloud-native applications, APIs, automation solutions, and digital transformation initiatives.",
  },
  {
    question: "5. Do you work with startups, SMBs, and enterprise businesses?",
    answer: "Yes. We work with startups, growing businesses, and enterprise teams looking for scalable software solutions, engineering expertise, and long-term technology support.",
  },
  {
    question: "6. Can your team support existing applications or ongoing development projects?",
    answer: "Absolutely. We can improve, modernize, extend, or support existing software systems, collaborate with internal teams, and help optimize active development projects.",
  },
  {
    question: "7. Which technologies do you use for software development?",
    answer: "Our technology stack includes .NET, React, Next.js, Node.js, Flutter, Python, TensorFlow, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, and Google Cloud Platform.",
  },
  {
    question: "8. Do you offer software development services for international clients?",
    answer: "Yes. We collaborate with businesses across different regions and support remote communication, agile delivery, and distributed project workflows.",
  },
  {
    question: "9. How quickly can your team respond after I submit the contact form?",
    answer: "Most inquiries receive an initial response within one business day. We review project requirements carefully to ensure productive and relevant discussions.",
  },
  {
    question: "10. Can I contact you for AI, cloud, SaaS, or digital transformation projects?",
    answer: "Yes. Our team supports projects across AI & automation, cloud engineering, SaaS product development, web & mobile applications, API integrations, and digital transformation initiatives.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Section */}
        <section className="solutionsHero" id="hero">
          <div className="container">
            <div className="heroCenter">
              <h1>Let’s Talk About Your Business</h1>
              <p className="leadText" style={{ margin: "0 auto 32px", maxWidth: "760px" }}>
                Whether you're building a new product, modernizing existing systems, or exploring AI, cloud, and
                software solutions, we're ready to understand your goals and help shape the right approach.
              </p>
              <div className="heroActions">
                <a className="primaryButton" href="#contact-content">
                  <RiArrowRightLine aria-hidden="true" />
                  Schedule a Call
                </a>
                <a className="secondaryButton" href="/solutions" style={{ border: "1px solid rgba(1, 31, 138, 0.15)" }}>
                  View Our Work
                  <RiArrowRightUpLine aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 & 3: Contact Info & Form Section */}
        <section className="sectionPad" id="contact-content">
          <div className="container">
            <div className="contactGrid">
              {/* Left Column: Contact Information */}
              <div
                className="contactPanel"
                style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  padding: 0,
                }}
              >
                <div className="sectionIntro text-start" style={{ marginBottom: "28px" }}>
                  <p className="eyebrow">Get in Touch</p>
                  <h2>Connect With Our Team</h2>
                  <p style={{ fontSize: "1.05rem", lineHeight: "1.65" }}>
                    We're here to help turn ideas into scalable digital solutions. Connect with our team through the
                    channel that works best for you.
                  </p>
                </div>

                <div className="d-flex flex-column gap-3 mt-2">
                  <article
                    className="contentCard"
                    style={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      boxShadow: "var(--shadow-1)",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(111, 212, 212, 0.16)",
                        padding: "12px",
                        borderRadius: "10px",
                        color: "var(--color-navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RiMailLine size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: "700", margin: "0 0 4px 0" }}>Email</h3>
                      <a
                        href="mailto:sales@viratsoftwaresolutions.com"
                        style={{ color: "var(--color-ink)", fontWeight: "600", fontSize: "0.95rem" }}
                      >
                        sales@viratsoftwaresolutions.com
                      </a>
                    </div>
                  </article>

                  <article
                    className="contentCard"
                    style={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      boxShadow: "var(--shadow-1)",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(1, 31, 138, 0.08)",
                        padding: "12px",
                        borderRadius: "10px",
                        color: "var(--color-navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RiPhoneLine size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: "700", margin: "0 0 4px 0" }}>Phone</h3>
                      <a
                        href="tel:+919998347578"
                        style={{ color: "var(--color-ink)", fontWeight: "600", fontSize: "0.95rem" }}
                      >
                        +91 99983 47578
                      </a>
                    </div>
                  </article>

                  <article
                    className="contentCard"
                    style={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      boxShadow: "var(--shadow-1)",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(111, 212, 212, 0.16)",
                        padding: "12px",
                        borderRadius: "10px",
                        color: "var(--color-navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RiMapPinLine size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: "700", margin: "0 0 4px 0" }}>Location</h3>
                      <span style={{ color: "var(--color-muted)", fontWeight: "600", fontSize: "0.85rem", lineHeight: "1.4", display: "block" }}>
                        Shop No 20, First Floor, Charbhuja Arcade, Amroli, Surat, Gujarat 394107
                      </span>
                    </div>
                  </article>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <LeadFormShell
                title=""
                description="Tell us what you're building, improving, or scaling. Our team will review your requirements and get back to you with the next steps."
                buttonLabel="Start the Conversation"
                fieldLabels={contactFieldLabels}
                options={contactOptions}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Map Section */}
        <section className="sectionPad" aria-label="Our Location Map">
          <div className="container">
            <div className="contentCard" style={{ padding: "10px", overflow: "hidden", height: "420px" }}>
              <iframe
                src="https://maps.google.com/maps?q=Shop%20No%2020,%20First%20Floor,%20Charbhuja%20arcade,%20Amroli,%20Surat,%20Surat,%20Gujarat%20394107&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "8px",
                  filter: "grayscale(1) invert(0.9) contrast(1.15) opacity(0.85)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Virat Software Solutions Office Location Map"
              />
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Section */}
        <section className="sectionPad sectionAlt" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="sectionIntro text-center mb-5" id="faq-heading">
              <p className="eyebrow">FAQs</p>
              <h2>Frequently Asked Questions About Working With Virat Software Solutions</h2>
            </div>
            <div className="mt-4">
              <FaqAccordion items={contactFaqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
