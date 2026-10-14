import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * High-fidelity SVG logo for Universität des Saarlandes (Saarland University)
 * Features official university colors: Deep Navy (#002B49) & Signature Teal (#00857C)
 */
export const SaarlandUniversityLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Universität des Saarlandes Logo"
    >
      {/* UdS Stylized Geometric Monogram / Symbol */}
      <g transform="translate(10, 8)">
        {/* Outer shield frame */}
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#002B49" />
        {/* Interlocking geometric triangles forming the iconic 'S' / university crest */}
        <path
          d="M16 48L32 16L48 48H16Z"
          fill="none"
          stroke="#00A39A"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 48L32 32L40 48H24Z"
          fill="#00A39A"
          opacity="0.9"
        />
        <circle cx="32" cy="22" r="3.5" fill="#FFFFFF" />
        {/* Subtle base accent line */}
        <line x1="20" y1="54" x2="44" y2="54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* University Typography */}
      <g transform="translate(86, 26)">
        <text
          x="0"
          y="16"
          fill="#002B49"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="17"
          fontWeight="800"
          letterSpacing="0.06em"
        >
          UNIVERSITÄT
        </text>
        <text
          x="0"
          y="35"
          fill="#00857C"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="0.12em"
        >
          DES SAARLANDES
        </text>
      </g>
    </svg>
  );
};

/**
 * High-fidelity SVG logo for The University of Texas at Austin
 * Features the signature UT Burnt Orange (#BF5700) and iconic Longhorn silhouette & Tower shield
 */
export const UTAustinLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="The University of Texas at Austin Logo"
    >
      {/* UT Austin Burnt Orange Badge */}
      <g transform="translate(10, 8)">
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#BF5700" />
        
        {/* Iconic Texas Longhorn Silhouette */}
        <path
          d="M14 26 C17 21, 23 21, 27 24 C29 25, 31 29, 32 32 C33 29, 35 25, 37 24 C41 21, 47 21, 50 26 C47 26, 42 27, 39 30 C36 33, 34 38, 34 44 C34 46, 30 46, 30 44 C30 38, 28 33, 25 30 C22 27, 17 26, 14 26 Z"
          fill="#FFFFFF"
        />
        {/* Subtle Texas Star at base */}
        <polygon
          points="32,47 33.2,50.8 37.2,50.8 34,53.2 35.2,57 32,54.6 28.8,57 30,53.2 26.8,50.8 30.8,50.8"
          fill="#FFFFFF"
          opacity="0.95"
        />
      </g>

      {/* University Typography */}
      <g transform="translate(86, 23)">
        <text
          x="0"
          y="14"
          fill="#54585A"
          fontFamily="system-ui, -apple-system, Georgia, serif"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          THE UNIVERSITY OF
        </text>
        <text
          x="0"
          y="34"
          fill="#BF5700"
          fontFamily="system-ui, -apple-system, Georgia, serif"
          fontSize="19"
          fontWeight="800"
          letterSpacing="0.03em"
        >
          TEXAS
        </text>
        <text
          x="88"
          y="34"
          fill="#333F48"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          AT AUSTIN
        </text>
      </g>
    </svg>
  );
};

/**
 * High-fidelity SVG logo for Julius-Maximilians-Universität Würzburg
 * Features the historic deep blue (#002E65) and university seal / crest
 */
export const WuerzburgUniversityLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Julius-Maximilians-Universität Würzburg Logo"
    >
      {/* JMU Historic Seal Badge */}
      <g transform="translate(10, 8)">
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#002E65" />
        
        {/* Heraldic Shield / Seal motif */}
        <circle cx="32" cy="32" r="23" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        <path
          d="M24 22H40V34C40 40 32 44 32 44C32 44 24 40 24 34V22Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2.5"
        />
        {/* Central Cross & Prince-Bishop Staff of Würzburg */}
        <line x1="32" y1="25" x2="32" y2="39" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="30" x2="37" y2="30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="24" r="1.5" fill="#D4AF37" />
        {/* Foundation Year badge */}
        <text
          x="32"
          y="56"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="8"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.1em"
        >
          1402
        </text>
      </g>

      {/* University Typography */}
      <g transform="translate(86, 23)">
        <text
          x="0"
          y="15"
          fill="#002E65"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="15"
          fontWeight="800"
          letterSpacing="0.08em"
        >
          JMU WÜRZBURG
        </text>
        <text
          x="0"
          y="34"
          fill="#5B6770"
          fontFamily="system-ui, -apple-system, Georgia, serif"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="0.02em"
        >
          Julius-Maximilians-Universität
        </text>
      </g>
    </svg>
  );
};
