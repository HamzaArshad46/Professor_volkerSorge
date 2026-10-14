import React, { useState, useEffect, useRef } from 'react';
import aboutImg from '../assets/images/about_researcher_lab_1791879679816.jpg';

export const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-white border-t border-[#D6E6E8]/60 py-20 sm:py-24 lg:py-28 transition-colors duration-700 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image - Appears with fade in after 0.4 sec */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className={`relative w-full max-w-md mx-auto lg:max-w-none transition-all duration-500 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isVisible ? '0.4s' : '0s',
              }}
            >
              {/* Subtle pale blue background accent echoing the design identity */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 rounded-2xl bg-[#EAF5F7] -z-10 transform -rotate-1 transition-transform duration-300 group-hover:rotate-0"
                aria-hidden="true"
              />
              <div className="relative rounded-xl overflow-hidden border border-[#D6E6E8] shadow-sm bg-white transition-all duration-300 hover:shadow-md hover:border-[#0B9297]/50 group">
                <img
                  src={aboutImg}
                  alt="Professor Volker Sorge demonstrating research on diagram accessibility and computational mathematics"
                  className="w-full h-auto object-cover object-center max-h-[540px] lg:max-h-[600px] hover:scale-[1.02] transition-transform duration-300 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Heading and Narrative Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Heading: About Me (Bold, Large, and moving up and down slowly) - Appears after 0.4s */}
            <div
              className={`mb-6 sm:mb-8 transition-all duration-500 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isVisible ? '0.4s' : '0s',
              }}
            >
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#142B45] leading-[1.1]"
              >
                <span className="inline-block animate-float-name drop-shadow-xs">
                  About Me
                </span>
              </h2>
              {/* Accent Line Below About Me */}
              <div className="w-16 h-1 bg-[#0B9297] rounded-full mt-4" aria-hidden="true" />
            </div>

            {/* Narrative Text with Emphasized Keywords in #0B9297 - Appears smoothly after 0.4s */}
            <div
              className={`space-y-5 sm:space-y-6 text-[#626B78] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.8] font-normal transition-all duration-500 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isVisible ? '0.4s' : '0s',
              }}
            >
              <p>
                Volker Sorge is a{' '}
                <strong className="font-bold text-[#0B9297]">
                  computer science professor
                </strong>{' '}
                and leading expert in{' '}
                <strong className="font-bold text-[#0B9297]">
                  diagram accessibility
                </strong>
                ,{' '}
                <strong className="font-bold text-[#0B9297]">
                  mathematical accessibility
                </strong>
                , and{' '}
                <strong className="font-bold text-[#0B9297]">
                  web accessibility
                </strong>
                . His work focuses on making complex scientific content, including diagrams, mathematical formulas, and technical documents, understandable and accessible to everyone, particularly people using screen readers.
              </p>

              <p>
                He works on advanced software for{' '}
                <strong className="font-bold text-[#0B9297]">SVG</strong> and{' '}
                <strong className="font-bold text-[#0B9297]">Canvas</strong>{' '}
                accessibility of{' '}
                <strong className="font-bold text-[#0B9297]">
                  STEM diagrams
                </strong>{' '}
                and has contributed his expertise to several{' '}
                <strong className="font-bold text-[#0B9297]">W3C</strong> working
                groups and community groups, helping advance web and mathematical accessibility standards.
              </p>

              <p>
                With over{' '}
                <strong className="font-bold text-[#0B9297]">100 published</strong>{' '}
                research papers, his work spans document analysis, diagram and formula recognition,{' '}
                <strong className="font-bold text-[#0B9297]">
                  artificial intelligence
                </strong>
                , computational mathematics, logical reasoning, and automated discovery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
