import { servicesContent } from "../data/siteContent";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function ServicesSection() {
  return (
    <section className="sectionPad" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="sectionIntro">
          <h2 id="services-heading">{servicesContent.title}</h2>
          <p>{servicesContent.description}</p>
        </div>

        <div className="row g-4">
          {servicesContent.services.map((service, index) => (
            <div className="col-12 col-md-6 col-xl-4" key={service.title}>
              <article
                className="surfaceCard reveal"
                style={{ animationDelay: `${80 + index * 60}ms` }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/#contact" className="surfaceCardAction">
                  {service.buttonLabel}
                  <RiArrowRightUpLine aria-hidden="true" />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
