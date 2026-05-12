"use client";

export default function ContactForm() {
  return (
    <section className="contactSection">
      <div className="container">
        <div className="contactContainer">
          {/* LEFT: Creative Info */}
          <div className="contactLeft">
            <div className="infoBox">
              <h2>Ready to Transform Your Business?</h2>
              <p className="infoSubtitle">
                Get expert guidance on your next project. Our team is ready to help you achieve your goals.
              </p>
              
              <div className="infoBenefits">
                <div className="benefitItem">
                  <span className="benefitIcon">⚡</span>
                  <div>
                    <h4>Fast Response</h4>
                    <p>Expect replies within 24 hours</p>
                  </div>
                </div>
                <div className="benefitItem">
                  <span className="benefitIcon">🎯</span>
                  <div>
                    <h4>Expert Team</h4>
                    <p>Skilled professionals with years of experience</p>
                  </div>
                </div>
                <div className="benefitItem">
                  <span className="benefitIcon">💼</span>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>Tailored to your unique requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="contactRight">
            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <h3>Get in Touch</h3>

              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="phone">Contact Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 555-5555"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="submitBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
