import { heroContent } from "../data/siteContent";
import { RiArrowRightLine } from "react-icons/ri";
import heroBg from "../assets/images/hero-bg.png";

export default function HeroSection() {
  return (
    <section
      className="heroSection"
      id="home"
      style={{ "--hero-bg-image": `url(${heroBg.src})` }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <h1 className="heroTitle reveal" style={{ animationDelay: "100ms" }}>
              {heroContent.title}
            </h1>
            <p className="heroSubtitle reveal" style={{ animationDelay: "200ms" }}>
              {heroContent.subtitle}
            </p>
            <p className="heroText reveal" style={{ animationDelay: "300ms" }}>
              {heroContent.supporting}
            </p>
            <div className="heroActions reveal" style={{ animationDelay: "400ms" }}>
              {heroContent.ctas.map((cta) => (
                <a
                  key={cta.label}
                  className={`btn btn-lg ${cta.label === heroContent.ctas[0].label ? "btn-primary" : "btn-outline-light"}`}
                  href={cta.href}
                >
                  <RiArrowRightLine className="btnIcon" aria-hidden="true" />
                  {cta.label}
                </a>
              ))}
            </div>
            <p className="heroHighlight reveal" style={{ animationDelay: "500ms" }}>
              {heroContent.highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
