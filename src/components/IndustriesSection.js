import { industriesContent } from "../data/siteContent";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function IndustriesSection() {
  return (
    <section className="sectionPad sectionAlt" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        <div className="sectionIntro">
          <h2 id="industries-heading">{industriesContent.title}</h2>
          <p>{industriesContent.description}</p>
        </div>

        <div className="row g-3 mb-4">
          {industriesContent.items.map((industry, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={industry}>
              <article
                className="chipCard reveal"
                style={{ animationDelay: `${80 + index * 55}ms` }}
              >
                <h3>{industry}</h3>
              </article>
            </div>
          ))}
        </div>

        <div className="industryCta">
          <a className="btn btn-primary" href="/#contact">
            {industriesContent.ctaLabel}
            <RiArrowRightUpLine aria-hidden="true" />
          </a>
          <p className="industryNote">{industriesContent.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
