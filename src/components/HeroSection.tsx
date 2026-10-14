import React from 'react';
import { MapPin } from 'lucide-react';
import { HeroButtons } from './HeroButtons.tsx';
import { DecorativeTechElements } from './DecorativeTechElements.tsx';
import portraitImg from '../assets/images/academic_portrait_1791793395826.jpg';

interface HeroSectionProps {
  onExploreActivities?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreActivities,
}) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center"
    >
      {/* Decorative Technical Background Elements */}
      <DecorativeTechElements />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content Column (~55% width on desktop -> 7 cols of 12) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small Introductory Greeting */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0B9297] uppercase">
                HELLO, I'M
              </span>
            </div>

            {/* Main Heading with Slow Attractive Floating Motion */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#142B45] leading-[1.08]">
              <span className="inline-block animate-float-name drop-shadow-xs">
                Volker Sorge
              </span>
            </h1>

            {/* Professional Subtitle */}
            <div className="mt-2.5 sm:mt-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#142B45] tracking-tight">
                Professor in Computer Science
              </h2>
              {/* Optional Subtle Location Detail */}
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#626B78] mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0B9297] shrink-0" aria-hidden="true" />
                <span>West Midlands, England, United Kingdom</span>
              </div>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-[#626B78] text-base sm:text-lg leading-relaxed max-w-xl mt-4 sm:mt-5 font-normal">
              Exploring computer science through research, innovation, and the development of intelligent digital technologies.
            </p>

            {/* CTA Button: Explore My Activities */}
            <div className="mt-6 sm:mt-8">
              <HeroButtons onExploreActivities={onExploreActivities} />
            </div>
          </div>

          {/* Right Portrait Column (~45% width on desktop -> 5 cols of 12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative z-10 pt-4 lg:pt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] flex items-end justify-center">
              
              {/* Large Pale Blue Circular Backdrop Shape behind the portrait (#EAF5F7) */}
              <div
                className="absolute w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] lg:w-[440px] lg:h-[440px] rounded-full bg-[#EAF5F7] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(11, 146, 151, 0.04)',
                }}
                aria-hidden="true"
              />

              {/* Secondary subtle concentric border ring for refined depth */}
              <div
                className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[480px] lg:h-[480px] rounded-full border border-[#D6E6E8]/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container - Overlapping Circular Backdrop naturally */}
              <div className="relative z-10 w-full overflow-hidden flex justify-center items-end">
                <img
                  src={portraitImg}
                  alt="Portrait of Professor Volker Sorge, academic in Computer Science"
                  className="w-[85%] sm:w-[88%] lg:w-[92%] h-auto max-h-[520px] lg:max-h-[580px] object-cover object-top select-none drop-shadow-sm"
                  style={{
                    maskImage:
                      'linear-gradient(to top, transparent 0%, black 14%, black 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to top, transparent 0%, black 14%, black 100%)',
                  }}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
