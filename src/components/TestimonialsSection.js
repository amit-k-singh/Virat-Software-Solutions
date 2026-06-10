"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import surveyAnimation from "../assets/lottie-json/survey-animation.json";

export default function TestimonialsSection({ quotes = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interactionTick, setInteractionTick] = useState(0);

  const totalQuotes = quotes.length;

  useEffect(() => {
    if (!totalQuotes) {
      return undefined;
    }

    const autoAdvance = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalQuotes);
    }, 2500);

    return () => {
      clearInterval(autoAdvance);
    };
  }, [totalQuotes, interactionTick]);

  if (!quotes.length) {
    return null;
  }

  const activeQuote = quotes[activeIndex];
  const initials = activeQuote.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 1)
    .toUpperCase();

  const showPrevious = () => {
    setInteractionTick((tick) => tick + 1);
    setActiveIndex((currentIndex) => (currentIndex - 1 + totalQuotes) % totalQuotes);
  };

  const showNext = () => {
    setInteractionTick((tick) => tick + 1);
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalQuotes);
  };

  return (
    <div className="row g-4 align-items-stretch testimonialsSplit">
      <div className="col-12 col-lg-7">
        <article className="quoteCard testimonialsQuoteCard h-100">
          <div className="quoteControls" aria-label="Testimonial navigation">
            <button
              className="quoteControlButton"
              type="button"
              onClick={showPrevious}
              aria-label="Show previous quote"
            >
              &lt;
            </button>
            <button
              className="quoteControlButton"
              type="button"
              onClick={showNext}
              aria-label="Show next quote"
            >
              &gt;
            </button>
          </div>
          <blockquote className="testimonialQuoteBody" aria-live="polite" aria-atomic="true">
            <p>{activeQuote.quote}</p>
          </blockquote>
          <div className="testimonialAuthorMeta">
            <span className="testimonialAvatar" aria-hidden="true">
              {initials}
            </span>
            <div>
              <p className="testimonialAuthorName">{activeQuote.name}</p>
              <p className="testimonialAuthorRole">{activeQuote.designation}</p>
            </div>
          </div>
        </article>
      </div>
      <div className="col-12 col-lg-5">
        <aside className="testimonialAnimationCard h-100" aria-label="Client satisfaction survey animation">
          <Lottie animationData={surveyAnimation} loop autoplay className="testimonialLottie" />
        </aside>
      </div>
    </div>
  );
}
