import { serviceCards } from "../data/siteContent";
import {
  RiApps2AddLine,
  RiArrowRightUpLine,
  RiCloudLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiFlashlightLine,
  RiLayoutMasonryLine,
  RiRobot2Line,
  RiSmartphoneLine,
} from "react-icons/ri";

const serviceIcons = [
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiApps2AddLine,
  RiRobot2Line,
  RiCloudLine,
  RiDatabase2Line,
  RiLayoutMasonryLine,
  RiFlashlightLine,
];

export default function ServicesSection() {
  return (
    <section className="sectionPad" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="sectionIntro">
          <p className="eyebrow">Services</p>
          <h2 id="services-heading">From idea validation to enterprise-scale delivery</h2>
          <p>
            End-to-end engineering capabilities structured as reusable product teams,
            with quality and performance integrated into every sprint.
          </p>
        </div>

        <div className="row g-4">
          {serviceCards.map((service, index) => {
            const Icon = serviceIcons[index] || RiCodeSSlashLine;
            return (
              <div className="col-12 col-md-6 col-xl-3" key={service.title}>
                <article
                  className="surfaceCard reveal"
                  style={{ animationDelay: `${80 + index * 60}ms` }}
                >
                  <Icon className="sectionIcon" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="surfaceCardAction">
                    Discuss service
                    <RiArrowRightUpLine aria-hidden="true" />
                  </a>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
