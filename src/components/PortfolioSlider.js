"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import {
  RiArrowRightUpLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStore2Line,
  RiShoppingCartLine,
  RiCodeLine,
  RiBankCardLine,
  RiLineChartLine,
  RiLayoutLine,
  RiCodeBoxLine,
  RiBarChartLine,
  RiFileList3Line,
  RiSearchLine,
} from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const techIconMap = {
  "Shopify / CMS": RiStore2Line,
  "E-commerce": RiShoppingCartLine,
  "JavaScript": RiCodeLine,
  "Payment Gateway Integration": RiBankCardLine,
  "Conversion Optimization": RiLineChartLine,
  "WordPress / CMS": RiLayoutLine,
  "Frontend Development": RiCodeBoxLine,
  "Analytics Integration": RiBarChartLine,
  "Lead Forms": RiFileList3Line,
  "SEO Optimization": RiSearchLine,
};

export default function PortfolioSlider({ cards = [] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!cards || cards.length === 0) return null;

  return (
    <div className="portfolio-slider-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={cards.length > 2}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
        className="portfolioSwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} className="h-auto d-flex">
            <article className="portfolioCard w-100">
              <div>
                <div className="cardLogoWrap">
                  <Image
                    src={card.logo}
                    alt={card.logoAlt || card.name}
                    className="cardLogo"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="valuePills">
                  {card.tech.map((item) => {
                    const Icon = techIconMap[item];
                    return (
                      <span key={item} className="valuePill">
                        {Icon && <Icon aria-hidden="true" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
              <a href={card.link} className="inlineAction" target="_blank" rel="noreferrer">
                View Project
                <RiArrowRightUpLine aria-hidden="true" />
              </a>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex justify-content-center mt-4">
        <div className="swiper-nav-buttons d-flex gap-2">
          <button ref={prevRef} className="swiper-nav-prev-btn" aria-label="Previous Project">
            <RiArrowLeftSLine size={24} aria-hidden="true" />
          </button>
          <button ref={nextRef} className="swiper-nav-next-btn" aria-label="Next Project">
            <RiArrowRightSLine size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
