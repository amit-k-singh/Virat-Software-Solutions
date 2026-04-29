import { insightArticles } from "../data/siteContent";
import {
  RiArrowRightLine,
  RiCloudLine,
  RiCodeSSlashLine,
  RiLoopRightLine,
  RiRobot2Line,
} from "react-icons/ri";

const insightIcons = [RiCodeSSlashLine, RiRobot2Line, RiCloudLine, RiLoopRightLine];

export default function InsightsSection() {
  return (
    <section className="sectionPad sectionAlt" id="insights" aria-labelledby="insights-heading">
      <div className="container">
        <div className="sectionIntro">
          <p className="eyebrow">Insights</p>
          <h2 id="insights-heading">Practical engineering perspectives for modern teams</h2>
          <p>
            Actionable guidance from real project environments across software,
            AI, automation, and product strategy.
          </p>
        </div>

        <div className="row g-4">
          {insightArticles.map((article, index) => {
            const Icon = insightIcons[index] || RiCodeSSlashLine;
            return (
              <div className="col-12 col-md-6" key={article.title}>
                <article
                  className="insightCard reveal"
                  style={{ animationDelay: `${80 + index * 80}ms` }}
                >
                  <p className="cardLabel insightTop">
                    <Icon aria-hidden="true" />
                    {article.category}
                  </p>
                  <h3>{article.title}</h3>
                  <a href="#insights">
                    Read article
                    <RiArrowRightLine aria-hidden="true" />
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
