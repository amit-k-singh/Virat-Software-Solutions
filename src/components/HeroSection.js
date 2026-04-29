import { stats } from "../data/siteContent";
import {
  RiArrowRightLine,
  RiBarChartFill,
  RiCheckboxCircleLine,
  RiFolderChartLine,
  RiGroupLine,
  RiRocket2Line,
} from "react-icons/ri";

const statIcons = [RiFolderChartLine, RiGroupLine, RiBarChartFill, RiRocket2Line];

export default function HeroSection() {
  return (
    <section className="heroSection" id="home">
      <div className="container">
        <div className="row g-4 align-items-end">
          <div className="col-lg-8">
            <p className="eyebrow reveal">
              Software Engineering for Business Growth
            </p>
            <h1 className="heroTitle reveal" style={{ animationDelay: "100ms" }}>
              We build digital products that move your company faster.
            </h1>
            <p className="heroText reveal" style={{ animationDelay: "200ms" }}>
              Virat Software Solutions partners with ambitious teams to design,
              build, and optimize web applications, mobile platforms, SaaS products,
              AI systems, and automation workflows.
            </p>
            <div className="heroActions reveal" style={{ animationDelay: "300ms" }}>
              <a className="btn btn-primary btn-lg" href="#contact">
                <RiArrowRightLine className="btnIcon" aria-hidden="true" />
                Start Your Project
              </a>
              <a className="btn btn-outline-light btn-lg" href="#portfolio">
                <RiArrowRightLine className="btnIcon" aria-hidden="true" />
                Explore Case Studies
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="heroCard reveal" style={{ animationDelay: "400ms" }}>
              <p className="heroCardLabel">Execution Focus</p>
              <ul className="heroCardList" role="list">
                <li>
                  <RiCheckboxCircleLine aria-hidden="true" />
                  Product-led teams with domain specialists
                </li>
                <li>
                  <RiCheckboxCircleLine aria-hidden="true" />
                  Weekly delivery checkpoints and demos
                </li>
                <li>
                  <RiCheckboxCircleLine aria-hidden="true" />
                  Security-first architecture and QA automation
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="row g-3 statsRow">
          {stats.map((item, index) => {
            const Icon = statIcons[index] || RiBarChartFill;
            return (
              <div className="col-6 col-md-3" key={item.label}>
                <article
                  className="statTile reveal"
                  style={{ animationDelay: `${500 + index * 80}ms` }}
                >
                  <div className="statHead">
                    <Icon className="statIcon" aria-hidden="true" />
                  </div>
                  <p className="statValue">{item.value}</p>
                  <p className="statLabel">{item.label}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
