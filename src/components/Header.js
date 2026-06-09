"use client";

import Image from "next/image";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowRightUpLine, RiMenu3Line } from "react-icons/ri";
import { navigationItems } from "../data/siteContent";
import viratLogo from "../assets/images/virat_logo.png";

function DropdownPanel({ panel }) {
  return (
    <div className={`dropdownPanel ${panel.variant === "mega" ? "dropdownMega" : "dropdownCompact"}`}>
      {panel.sections.map((section) => (
        <section className="panelSection" key={section.heading}>
          <h3 className="panelHeading">{section.heading}</h3>
          <div className="panelGroupGrid">
            {section.groups.map((group, index) => (
              <article className="panelGroup" key={`${section.heading}-${index}`}>
                <ul className="panelLinks" role="list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        <span>{link.label}</span>
                        <i className="ri-arrow-right-up-line panelLinkRi" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container">
        <div className="headerShell">
          <a className="brandMark" href="/#home" aria-label="Virat Software Solutions Home">
            <Image src={viratLogo} alt="Virat Software Solutions" className="brandLogo" priority />
          </a>

          <button
            className="mobileMenuToggle"
            type="button"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <RiMenu3Line aria-hidden="true" />
            Menu
          </button>

          <nav className="desktopNav" aria-label="Primary">
            <ul className="desktopNavList" role="list">
              {navigationItems.map((item) => (
                <li key={item.label} className={`navItem ${item.panel ? "navItemWithPanel" : ""}`}>
                  <a className="navLink" href={item.href}>
                    {item.label}
                    {item.panel ? <RiArrowDownSLine className="navChevron" aria-hidden="true" /> : null}
                  </a>
                  {item.panel ? <DropdownPanel panel={item.panel} /> : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="headerActions">
            <a className="headerGhost" href="/#contact">
              Contact
            </a>
            <a className="headerCta" href="/#final-cta">
              <RiArrowRightUpLine aria-hidden="true" />
              Talk Business
            </a>
          </div>
        </div>
      </div>

      <div className={`mobileNavWrap ${isMobileOpen ? "isOpen" : ""}`} id="mobile-navigation">
        <div className="container">
          <nav aria-label="Mobile Primary">
            <ul className="mobileNavList" role="list">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  {item.panel ? (
                    <details className="mobileDropdown">
                      <summary>
                        <span>{item.label}</span>
                        <RiArrowDownSLine className="mobileChevron" aria-hidden="true" />
                      </summary>
                      <ul role="list">
                        <li>
                          <a href={item.href} onClick={() => setIsMobileOpen(false)}>
                            <i className="ri-arrow-right-line mobileLinkRi" aria-hidden="true" />
                            {item.label} Overview
                          </a>
                        </li>
                        {item.panel.sections.flatMap((section) =>
                          section.groups.flatMap((group) =>
                            group.links.map((link) => (
                              <li key={`${item.label}-${link.label}`}>
                                <a href={link.href} onClick={() => setIsMobileOpen(false)}>
                                  <i className="ri-corner-down-right-line mobileLinkRi" aria-hidden="true" />
                                  {link.label}
                                </a>
                              </li>
                            ))
                          )
                        )}
                      </ul>
                    </details>
                  ) : (
                    <a href={item.href} onClick={() => setIsMobileOpen(false)}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="mobileNavActions">
                <a href="/#contact" onClick={() => setIsMobileOpen(false)}>
                  Contact
                </a>
                <a href="/#final-cta" onClick={() => setIsMobileOpen(false)}>
                  Talk Business
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
