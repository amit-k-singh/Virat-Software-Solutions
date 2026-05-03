import { stats } from "../data/siteContent";
import {
  RiArrowRightLine,
  RiBarChartFill,
  RiCheckboxCircleLine,
  RiFolderChartLine,
  RiGroupLine,
  RiRocket2Line,
} from "react-icons/ri";
import heroBg from "../assets/images/hero-bg.png";

const statIcons = [
  RiFolderChartLine,
  RiGroupLine,
  RiBarChartFill,
  RiRocket2Line,
];

const statAccentColors = [
  {
    strong: "#ff7a18",
    soft: "rgba(255, 122, 24, 0.2)",
  },
  {
    strong: "#00a896",
    soft: "rgba(0, 168, 150, 0.2)",
  },
  {
    strong: "#2f80ed",
    soft: "rgba(47, 128, 237, 0.2)",
  },
  {
    strong: "#d946ef",
    soft: "rgba(217, 70, 239, 0.2)",
  },
];

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
            <p className="eyebrow reveal">
              Software Engineering for Business Growth
            </p>
            <h1
              className="heroTitle reveal"
              style={{ animationDelay: "100ms" }}
            >
              We build digital products that move your company faster.
            </h1>
            <p className="heroText reveal" style={{ animationDelay: "200ms" }}>
              Virat Software Solutions partners with ambitious teams to design,
              build, and optimize web applications, mobile platforms, SaaS
              products, AI systems, and automation workflows.
            </p>
            <div
              className="heroActions reveal"
              style={{ animationDelay: "300ms" }}
            >
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
            <ul className=" executionFocusList" role="list">
              <li className="executionFocusCard">
                <RiCheckboxCircleLine aria-hidden="true" />
                <span>Product-led teams with domain specialists</span>
              </li>
              <li className="executionFocusCard">
                <RiCheckboxCircleLine aria-hidden="true" />
                <span>Weekly delivery checkpoints and demos</span>
              </li>
              <li className="executionFocusCard">
                <RiCheckboxCircleLine aria-hidden="true" />
                <span>Security-first architecture and QA automation</span>
              </li>
            </ul>
        </div>

        <div className="row g-3 statsRow">
          {stats.map((item, index) => {
            const Icon = statIcons[index] || RiBarChartFill;
            const accent = statAccentColors[index % statAccentColors.length];
            return (
              <div className="col-6 col-md-3" key={item.label}>
                <article
                  className="statTile reveal"
                  style={{
                    animationDelay: `${500 + index * 80}ms`,
                    "--stat-accent": accent.strong,
                    "--stat-accent-soft": accent.soft,
                  }}
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
