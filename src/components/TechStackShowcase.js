"use client";

import { useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

const iconMap = {
  ...RiIcons,
  ...SiIcons,
};

function TechIcon({ iconName }) {
  const Icon = iconMap[iconName] ?? RiIcons.RiCodeBoxLine;

  return <Icon aria-hidden="true" />;
}

export default function TechStackShowcase({ content }) {
  const [activeCategory, setActiveCategory] = useState("AI/ML");
  const categories = content.categories ?? [];
  const visibleCategories = activeCategory === "All" ? categories : categories.filter((category) => category.title === activeCategory);
  const totalItems = categories.reduce((count, category) => count + category.items.length, 0);

  return (
    <section className="sectionPad sectionAlt" id="tech-stack" aria-labelledby="tech-heading">
      <div className="container">
        <div className="techStackShell">
          <div className="sectionIntro techStackIntro" id="tech-heading">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>

          <div className="techStackModalHeader" role="tablist" aria-label="Filter technologies by category">
            <button
              className={`techStackTab ${activeCategory === "All" ? "isActive" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === "All"}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                className={`techStackTab ${activeCategory === category.title ? "isActive" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.title}
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="techStackMetaRow" aria-live="polite">
            <span>{activeCategory === "All" ? `Showing all ${categories.length} categories` : `Filtered by ${activeCategory}`}</span>
            <span>{totalItems} technologies and platforms</span>
          </div>

          <div className="techStackPanel">
            {visibleCategories.map((category) => (
              <section className="techCategoryBlock" key={category.title} aria-labelledby={`tech-${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <div className="techCategoryHeader">
                  <h3 id={`tech-${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{category.title}</h3>
                  <span>{category.items.length} items</span>
                </div>

                <div className="techStackGrid">
                  {category.items.map((item) => (
                    <article className="techStackTile" key={item.name}>
                      <span className="techStackIcon">
                        <TechIcon iconName={item.icon} />
                      </span>
                      <span className="techStackName">{item.name}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}