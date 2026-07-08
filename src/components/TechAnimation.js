"use client";

import React from "react";

export default function TechAnimation() {
  return (
    <div className="techAnimationContainer">
      <svg
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="techAnimationSvg"
      >
        {/* Ambient Glows */}
        <circle cx="250" cy="175" r="120" fill="url(#radialGlow)" opacity="0.15" />
        
        {/* Connection Network Lines */}
        {/* Top-Left to Center */}
        <path d="M 120,100 L 210,150" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="5 5" className="animatedDashedLine" />
        {/* Top-Right to Center */}
        <path d="M 380,100 L 290,150" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="5 5" className="animatedDashedLineReverse" />
        {/* Bottom-Left to Center */}
        <path d="M 120,250 L 210,200" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="5 5" className="animatedDashedLine" />
        {/* Bottom-Right to Center */}
        <path d="M 380,250 L 290,200" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="5 5" className="animatedDashedLineReverse" />

        {/* Center Tech Sphere & Orbits */}
        <circle cx="250" cy="175" r="55" stroke="#011f8a" strokeWidth="1" opacity="0.1" />
        <circle cx="250" cy="175" r="70" stroke="#6fd4d4" strokeWidth="1" strokeDasharray="6 6" className="slowRotateOrbit" />

        {/* Cloud Modernization Centerpiece (Center) */}
        <g className="floatingGroup">
          <g transform="translate(250, 175)">
            <circle cx="0" cy="0" r="28" stroke="url(#ringGrad)" strokeWidth="3" fill="#ffffff" filter="url(#dropShadow)" />
            <path
              d="M 6,0 C 6,-3.3 3.3,-6 0,-6 C -3.3,-6 -6,-3.3 -6,0 C -6,3.3 -3.3,6 0,6 C 3.3,6 6,3.3 6,0 Z"
              fill="#011f8a"
            />
            <path
              d="M 0,-14 L 0,-10 M 0,10 L 0,14 M -14,0 L -10,0 M 10,0 L 14,0 M -10,-10 L -7,-7 M 7,7 L 10,10 M -10,10 L -7,7 M 7,-10 L 10,-7"
              stroke="#011f8a"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="gearSpin"
            />
          </g>
        </g>

        {/* Laptop Code Window (Top-Left) */}
        <g className="floatingGroup">
          <g transform="translate(50, 50)">
            <rect x="0" y="0" width="100" height="70" rx="6" fill="#0d1b4b" filter="url(#dropShadow)" />
            <rect x="0" y="0" width="100" height="12" rx="4" fill="#071030" />
            <circle cx="6" cy="6" r="2" fill="#ff5f56" />
            <circle cx="12" cy="6" r="2" fill="#ffbd2e" />
            <circle cx="18" cy="6" r="2" fill="#27c93f" />
            
            <rect x="8" y="20" width="40" height="3" rx="1.5" fill="#6fd4d4" className="codePulse1" />
            <rect x="8" y="28" width="60" height="3" rx="1.5" fill="#ffffff" opacity="0.8" className="codePulse2" />
            <rect x="20" y="36" width="50" height="3" rx="1.5" fill="#6fd4d4" opacity="0.6" className="codePulse3" />
            <rect x="8" y="44" width="70" height="3" rx="1.5" fill="#ffffff" opacity="0.7" className="codePulse1" />
            <rect x="8" y="52" width="30" height="3" rx="1.5" fill="#6fd4d4" className="codePulse2" />
            
            <path d="M -10,70 L 110,70 L 100,75 L 0,75 Z" fill="#b0c4de" />
            <rect x="40" y="70" width="20" height="2" fill="#8090a0" />
          </g>
        </g>

        {/* Message / Contact Center (Top-Right) */}
        <g className="floatingGroup2">
          <g transform="translate(350, 50)">
            <rect x="0" y="0" width="100" height="70" rx="6" fill="#0d1b4b" filter="url(#dropShadow)" />
            <rect x="0" y="0" width="100" height="12" rx="4" fill="#071030" />
            <circle cx="6" cy="6" r="2" fill="#6fd4d4" />
            <circle cx="12" cy="6" r="2" fill="#6fd4d4" opacity="0.5" />
            
            {/* Conversation Speech Bubbles */}
            <rect x="10" y="20" width="50" height="18" rx="4" fill="#6fd4d4" />
            <path d="M 16,38 L 16,42 L 22,38 Z" fill="#6fd4d4" />
            <circle cx="22" cy="29" r="1.5" fill="#0d1b4b" className="codePulse1" />
            <circle cx="28" cy="29" r="1.5" fill="#0d1b4b" className="codePulse2" />
            <circle cx="34" cy="29" r="1.5" fill="#0d1b4b" className="codePulse3" />

            <rect x="45" y="42" width="45" height="18" rx="4" fill="#ffffff" />
            <path d="M 80,60 L 80,64 L 74,60 Z" fill="#ffffff" />
            <rect x="52" y="47" width="30" height="2" rx="1" fill="#0d1b4b" opacity="0.4" />
            <rect x="52" y="52" width="20" height="2" rx="1" fill="#0d1b4b" opacity="0.4" />
          </g>
        </g>

        {/* Analytics & Growth Dashboard (Bottom-Left) */}
        <g className="floatingGroup">
          <g transform="translate(50, 230)">
            <rect x="0" y="0" width="100" height="70" rx="6" fill="#0d1b4b" filter="url(#dropShadow)" />
            <rect x="0" y="0" width="100" height="12" rx="4" fill="#071030" />
            <circle cx="6" cy="6" r="2" fill="#ff5f56" />
            <circle cx="12" cy="6" r="2" fill="#ffbd2e" />
            <circle cx="18" cy="6" r="2" fill="#27c93f" />
            
            {/* Rising Line Chart */}
            <path d="M 15,55 L 32,42 L 48,48 L 68,32 L 85,25" stroke="#6fd4d4" strokeWidth="2.5" fill="none" strokeLinecap="round" className="animatedDashedLine" />
            <circle cx="85" cy="25" r="3" fill="#27c93f" className="codePulse1" />
            
            <line x1="15" y1="55" x2="85" y2="55" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
            <line x1="15" y1="35" x2="85" y2="35" stroke="#ffffff" strokeWidth="1" opacity="0.1" />
          </g>
        </g>

        {/* Database & Cloud Stack (Bottom-Right) */}
        <g className="floatingGroup2">
          <g transform="translate(350, 230)">
            {/* Cylinder 1 */}
            <g transform="translate(20, 5)">
              <ellipse cx="30" cy="10" rx="20" ry="7" fill="url(#dbGrad)" filter="url(#dropShadow)" />
              <path d="M 10,10 A 20,7 0 0 0 50,10 L 50,18 A 20,7 0 0 1 10,18 Z" fill="url(#dbGrad)" />
              <ellipse cx="30" cy="10" rx="20" ry="7" fill="none" stroke="#6fd4d4" strokeWidth="1" />
              <ellipse cx="30" cy="18" rx="20" ry="7" fill="none" stroke="#6fd4d4" strokeWidth="1" opacity="0.5" />
              <circle cx="18" cy="14" r="1.2" fill="#6fd4d4" className="dataDot1" />
            </g>
            {/* Cylinder 2 */}
            <g transform="translate(20, 20)">
              <ellipse cx="30" cy="10" rx="20" ry="7" fill="url(#dbGrad2)" filter="url(#dropShadow)" />
              <path d="M 10,10 A 20,7 0 0 0 50,10 L 50,18 A 20,7 0 0 1 10,18 Z" fill="url(#dbGrad2)" />
              <ellipse cx="30" cy="10" rx="20" ry="7" fill="none" stroke="#011f8a" strokeWidth="1" opacity="0.3" />
              <ellipse cx="30" cy="18" rx="20" ry="7" fill="none" stroke="#011f8a" strokeWidth="1" opacity="0.3" />
              <circle cx="18" cy="14" r="1.2" fill="#011f8a" className="dataDot2" />
            </g>
            {/* Cylinder 3 */}
            <g transform="translate(20, 35)">
              <ellipse cx="30" cy="10" rx="20" ry="7" fill="url(#dbGrad)" filter="url(#dropShadow)" />
              <path d="M 10,10 A 20,7 0 0 0 50,10 L 50,18 A 20,7 0 0 1 10,18 Z" fill="url(#dbGrad)" />
              <ellipse cx="30" cy="10" rx="20" ry="7" fill="none" stroke="#6fd4d4" strokeWidth="1" />
              <ellipse cx="30" cy="18" rx="20" ry="7" fill="none" stroke="#6fd4d4" strokeWidth="1" opacity="0.5" />
              <circle cx="18" cy="14" r="1.2" fill="#6fd4d4" className="dataDot3" />
            </g>
          </g>
        </g>

        {/* Definitions */}
        <defs>
          <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6fd4d4" />
            <stop offset="100%" stopColor="#6fd4d4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d1b4b" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#6fd4d4" />
            <stop offset="100%" stopColor="#0d1b4b" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d1b4b" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#011f8a" />
            <stop offset="100%" stopColor="#0d1b4b" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6fd4d4" />
            <stop offset="100%" stopColor="#011f8a" />
          </linearGradient>
          <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f8ff" />
          </linearGradient>
          <linearGradient id="dbGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eef5fc" />
            <stop offset="100%" stopColor="#d5e6f5" />
          </linearGradient>
          <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#011f8a" floodOpacity="0.08" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
