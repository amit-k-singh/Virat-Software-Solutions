import { industryCards, portfolioHighlights } from "../data/siteContent";
import {
  RiArrowRightUpLine,
  RiBankLine,
  RiBookOpenLine,
  RiBox3Line,
  RiGovernmentLine,
  RiHeartPulseLine,
  RiLineChartLine,
  RiRouteLine,
  RiServiceLine,
  RiShoppingBag3Line,
} from "react-icons/ri";

const industryIcons = [
  RiHeartPulseLine,
  RiShoppingBag3Line,
  RiServiceLine,
  RiGovernmentLine,
  RiBookOpenLine,
  RiBox3Line,
  RiRouteLine,
  RiBankLine,
  RiLineChartLine,
];

export default function IndustriesSection() {
  return (
    <section className="sectionPad sectionAlt" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        <div className="sectionIntro">
          <p className="eyebrow">Industries</p>
          <h2 id="industries-heading">Domain expertise across high-impact sectors</h2>
          <p>
            We tailor architecture, compliance, integrations, and product workflows
            to the operating realities of each industry.
          </p>
        </div>

        <div className="row g-3 mb-5">
          {industryCards.map((industry, index) => {
            const Icon = industryIcons[index] || RiServiceLine;
            return (
              <div className="col-6 col-lg-4" key={industry}>
                <article
                  className="chipCard reveal"
                  style={{ animationDelay: `${80 + index * 55}ms` }}
                >
                  <Icon className="chipIcon" aria-hidden="true" />
                  <h3>{industry}</h3>
                </article>
              </div>
            );
          })}
        </div>

        <div className="sectionIntro" id="portfolio">
          <p className="eyebrow">Portfolio</p>
          <h2>Selected project outcomes</h2>
        </div>

        <div className="row g-4">
          {portfolioHighlights.map((item, index) => (
            <div className="col-12 col-lg-4" key={item.title}>
              <article
                className="surfaceCard reveal"
                style={{ animationDelay: `${130 + index * 70}ms` }}
              >
                <p className="cardLabel">{item.domain}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contact" className="surfaceCardAction">
                  View approach
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
