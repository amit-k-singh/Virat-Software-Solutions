"use client";

import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function FaqAccordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleIndex = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="faqList">
      {items.map((item, index) => {
        const isOpen = !!openIndexes[index];
        return (
          <article className="faqAccordionItem" key={item.question}>
            <button
              className="faqAccordionHeader"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              type="button"
            >
              <span>{item.question}</span>
              <RiArrowDownSLine
                className={`faqAccordionChevron ${isOpen ? "active" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div className={`faqAccordionContentWrapper ${isOpen ? "active" : ""}`}>
              <div className="faqAccordionContent">
                <div className="faqAccordionInner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
