import { processSteps } from "../data/siteContent";

export default function ProcessSection() {
  return (
    <section className="sectionPad" id="about" aria-labelledby="process-heading">
      <div className="container">
        <div className="sectionIntro">
          <p className="eyebrow">About Us</p>
          <h2 id="process-heading">A process built for speed, clarity, and scale</h2>
          <p>
            Mission-driven delivery model focused on measurable product outcomes.
            We combine mission and vision with transparent execution.
          </p>
        </div>

        <div className="timelineGrid">
          {processSteps.map((step, index) => {
            return (
              <article
                className="timelineCard reveal"
                key={step.title}
                style={{ animationDelay: `${100 + index * 90}ms` }}
              >
                <p className="stepIndex">0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
