import React from 'react';

export const DecorativeTechElements: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Small Dotted Grid near upper right */}
      <div className="absolute top-4 right-6 sm:top-8 sm:right-12 z-0 opacity-40">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="dotted-grid"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.5" fill="#0B9297" />
          </pattern>
          <rect width="96" height="96" fill="url(#dotted-grid)" />
        </svg>
      </div>

      {/* 2. Abstract Connected Graph Nodes (Faint Geometric Lines) */}
      <svg
        className="absolute top-1/4 right-2 sm:right-6 w-56 h-56 text-[#0B9297] opacity-25 z-0"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection Lines */}
        <line x1="40" y1="50" x2="110" y2="40" stroke="#0B9297" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="110" y1="40" x2="160" y2="90" stroke="#0B9297" strokeWidth="1" />
        <line x1="110" y1="40" x2="90" y2="120" stroke="#0B9297" strokeWidth="1" />
        <line x1="160" y1="90" x2="140" y2="160" stroke="#0B9297" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="90" y1="120" x2="140" y2="160" stroke="#0B9297" strokeWidth="1" />
        <line x1="40" y1="50" x2="60" y2="130" stroke="#0B9297" strokeWidth="1" />
        <line x1="60" y1="130" x2="90" y2="120" stroke="#0B9297" strokeWidth="1" />

        {/* Nodes */}
        <circle cx="40" cy="50" r="3.5" fill="#0B9297" />
        <circle cx="110" cy="40" r="4" fill="#0B9297" />
        <circle cx="160" cy="90" r="3" fill="#0B9297" />
        <circle cx="90" cy="120" r="4.5" fill="#0B9297" />
        <circle cx="140" cy="160" r="3.5" fill="#0B9297" />
        <circle cx="60" cy="130" r="3" fill="#0B9297" />

        {/* Outer Ring on Primary Node */}
        <circle cx="90" cy="120" r="8" stroke="#0B9297" strokeWidth="0.8" opacity="0.6" />
      </svg>

      {/* 3. Understated AI / Neural Network / Cybernetic Wireframe on the far right */}
      <svg
        className="absolute bottom-6 right-0 sm:right-2 w-48 sm:w-60 h-48 sm:h-60 text-[#142B45] opacity-15 z-0"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Synapse Rings */}
        <circle cx="180" cy="120" r="40" stroke="#0B9297" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="180" cy="120" r="70" stroke="#0B9297" strokeWidth="0.75" />
        <circle cx="180" cy="120" r="100" stroke="#142B45" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Neural Network Layer Vectors */}
        <path
          d="M120 60 L180 80 L220 50 M120 120 L180 120 L220 120 M120 180 L180 160 L220 190"
          stroke="#0B9297"
          strokeWidth="0.8"
        />
        <path
          d="M120 60 L180 120 L220 190 M120 180 L180 120 L220 50"
          stroke="#142B45"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />

        {/* Micro Tech Data Crosses */}
        <g stroke="#0B9297" strokeWidth="1" opacity="0.7">
          <line x1="176" y1="40" x2="184" y2="40" />
          <line x1="180" y1="36" x2="180" y2="44" />
          <line x1="216" y1="160" x2="224" y2="160" />
          <line x1="220" y1="156" x2="220" y2="164" />
        </g>
      </svg>
    </div>
  );
};
