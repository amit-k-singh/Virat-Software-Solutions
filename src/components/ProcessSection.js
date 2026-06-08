import { processContent } from "../data/siteContent";

export default function ProcessSection() {
  return (
    <section className="sectionPad" id="process" aria-labelledby="process-heading">
      <div className="container">
        <div className="sectionIntro">
          <h2 id="process-heading">{processContent.title}</h2>
          <p>{processContent.description}</p>
          <a className="btn btn-outline-light processCta" href="/about">
            {processContent.ctaLabel}
          </a>
        </div>

        <div className="timelineGrid">
          {processContent.steps.map((step, index) => (
            <article
              className="timelineCard reveal"
              key={step.title}
              style={{ animationDelay: `${100 + index * 90}ms` }}
            >
              <p className="stepIndex">{step.step}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
