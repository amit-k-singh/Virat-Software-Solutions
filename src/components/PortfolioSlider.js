"use client";

import Image from "next/image";
import sardharLogo from "../assets/images/TrustedClient/sardhar-logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
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
  RiCpuLine,
  RiGlobalLine,
  RiCommandLine,
  RiDatabase2Line,
  RiBracesLine,
} from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const RobotIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="4" y="7" width="16" height="12" rx="4" />
    <path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" />
  </svg>
);

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
  "AI Integration": RobotIcon,
  "Web Application": RiGlobalLine,
  "Developer Utility": RiCommandLine,
  "Database Systems": RiDatabase2Line,
  "API Development": RiBracesLine,
};

const VSupportBotLogo = () => (
  <div
    style={{
      width: "52px",
      height: "52px",
      backgroundColor: "#0d1527",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    className="cardLogo"
  >
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="7" width="16" height="12" rx="4" />
      <path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" />
    </svg>
  </div>
);

const Base64StudioLogo = () => (
  <div
    style={{
      height: "52px",
      backgroundColor: "#312d2a",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      color: "#ffffff",
      fontFamily: "var(--font-sans), system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      letterSpacing: "-0.01em",
    }}
    className="cardLogo"
  >
    <span style={{ opacity: 0.9 }}>Base64</span>
    <span style={{ fontWeight: "800", marginLeft: "4px", color: "#f3f0ec" }}>Studio</span>
  </div>
);

const DermaTechLogo = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
    className="cardLogo"
  >
    <div
      style={{
        width: "52px",
        height: "52px",
        backgroundColor: "#6c5ce7",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    </div>
    <span
      style={{
        color: "var(--color-navy)",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        fontSize: "18px",
        fontWeight: "800",
        letterSpacing: "-0.01em",
      }}
    >
      DermaTech
    </span>
  </div>
);

const IronPulseLogo = () => (
  <div
    style={{
      width: "52px",
      height: "52px",
      backgroundColor: "#111111",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    className="cardLogo"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
      <path d="m2.5 21.5 1.4-1.4" />
      <path d="m20.1 3.9 1.4-1.4" />
      <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
      <path d="m9.6 14.4 4.8-4.8" />
    </svg>
  </div>
);

const SardharLogo = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
    className="cardLogo"
  >
    <Image
      src={sardharLogo}
      alt="Sardhar logo"
      style={{
        width: "52px",
        height: "52px",
        objectFit: "contain",
        marginRight: "12px",
        borderRadius: "50%",
      }}
    />
    <span
      style={{
        color: "var(--color-navy)",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        fontSize: "18px",
        fontWeight: "800",
        letterSpacing: "-0.01em",
      }}
    >
      Sardhar
    </span>
  </div>
);

export default function PortfolioSlider({ cards = [] }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  if (!cards || cards.length === 0) return null;

  return (
    <div className="portfolio-slider-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
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
                <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                  <div className="cardLogoWrap" style={{ marginBottom: 0 }}>
                    {card.logo === "vsupportbot" ? (
                      <VSupportBotLogo />
                    ) : card.logo === "base64" ? (
                      <Base64StudioLogo />
                    ) : card.logo === "dermatech" ? (
                      <DermaTechLogo />
                    ) : card.logo === "ironpulse" ? (
                      <IronPulseLogo />
                    ) : card.logo === "sardhar" ? (
                      <SardharLogo />
                    ) : typeof card.logo === "function" ? (
                      <card.logo />
                    ) : (
                      <Image
                        src={card.logo}
                        alt={card.logoAlt || card.name}
                        className="cardLogo"
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </div>
                  <a
                    href={card.link}
                    className="viewProjectLink"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${card.name} project`}
                  >
                    <span>View</span>
                    <RiArrowRightUpLine className="arrowIcon" aria-hidden="true" />
                  </a>
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
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex justify-content-center mt-4">
        <div className="swiper-nav-buttons d-flex gap-2">
          <button ref={(node) => setPrevEl(node)} className="swiper-nav-prev-btn" aria-label="Previous Project">
            <RiArrowLeftSLine size={24} aria-hidden="true" />
          </button>
          <button ref={(node) => setNextEl(node)} className="swiper-nav-next-btn" aria-label="Next Project">
            <RiArrowRightSLine size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
