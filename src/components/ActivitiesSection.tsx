import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Users, BookOpen, Calendar, PenTool, Heart, School } from 'lucide-react';
// Primary activity image assets — clearly localized and easily replaceable with actual event photographs
import math4vipImg from '../assets/images/math4vip_meeting_1791952667586.jpg';
import devnarSchoolImg from '../assets/images/devnar_school_session_1791953108275.jpg';

/**
 * Placeholder / representative image sources clearly localized here for easy future replacement.
 */
export const FEATURED_ACTIVITY_IMAGE_SRC = math4vipImg;
export const DEVNAR_ACTIVITY_IMAGE_SRC = devnarSchoolImg;

export const ActivitiesSection: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === card1Ref.current) setCard1Visible(true);
            if (entry.target === card2Ref.current) setCard2Visible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="activities"
      className="relative w-full bg-white border-t border-[#D6E6E8]/60 py-20 sm:py-24 lg:py-28 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="activities-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading Structure - Appears with fade in after 0.4 sec */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-500 ease-out ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: headerVisible ? '0.4s' : '0s',
          }}
        >
          {/* Small Uppercase Teal Label */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0B9297] uppercase font-sans">
              BEYOND RESEARCH
            </span>
          </div>

          {/* Main Heading */}
          <h2
            id="activities-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#142B45] leading-[1.12]"
          >
            Activities
          </h2>

          {/* Accent Line Below Activities matching About Me line */}
          <div className="w-16 h-1 bg-[#0B9297] rounded-full mt-4" aria-hidden="true" />

          {/* Supporting Description */}
          <p className="text-[#626B78] text-base sm:text-lg leading-relaxed mt-4 font-normal">
            Discover the academic events, collaborations, and initiatives contributing to more accessible and inclusive mathematics.
          </p>
        </div>

        {/* Activities List */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-14">
          
          {/* Activity 1 — Math4VIP Meeting (Appears with fade in after 0.4 sec) */}
          <div
            ref={card1Ref}
            className={`bg-white rounded-2xl border border-[#D6E6E8] hover:border-[#142B45] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 ${
              card1Visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: card1Visible ? '0.4s' : '0s',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column — Event Image (approx. 4:3 aspect ratio) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                  {/* Subtle pale blue background accent echoing the portfolio visual identity */}
                  <div
                    className="absolute -inset-2 sm:-inset-2.5 rounded-2xl bg-[#EAF5F7] -z-10 transform -rotate-1 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative rounded-xl overflow-hidden border border-[#D6E6E8] bg-white shadow-xs group">
                    {/* Category Pill Tag atop image */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase rounded-md bg-[#142B45]/90 text-white backdrop-blur-xs border border-white/10 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B9297]" />
                        Academic Event
                      </span>
                    </div>

                    <img
                      src={FEATURED_ACTIVITY_IMAGE_SRC}
                      alt="Researchers participating in an academic discussion about mathematics accessibility."
                      className="w-full h-auto aspect-4/3 object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Subtext Clarification for Academic Meeting */}
                  <div className="mt-3.5 flex items-center justify-between text-xs text-[#626B78] px-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0B9297]" />
                      Math4VIP Seminar
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#626B78]/80">
                      Higher Education Accessibility
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column — Event Details & Article Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Event Category & Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-2.5">
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#0B9297] uppercase font-sans">
                    ACADEMIC EVENT
                  </span>
                  <span className="text-[#D6E6E8]" aria-hidden="true">•</span>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#626B78]">
                    <MapPin className="w-3.5 h-3.5 text-[#0B9297] shrink-0" aria-hidden="true" />
                    <span>Marburg, Germany</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#142B45] tracking-tight leading-[1.2] mb-4">
                  Advancing Mathematics Accessibility in Higher Education
                </h3>

                {/* Article Content in Two Short, Readable Paragraphs with Bold Emphasis in Teal #0B9297 */}
                <div className="space-y-4 text-[#626B78] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.75] font-normal">
                  <p>
                    It was great to attend last week&apos;s Math4VIP meeting in Marburg, organised by Thomas Busch, Kai Kortus, Ilka Agricola and others, focusing on progress in mathematics accessibility in Germany&apos;s higher education system.
                  </p>

                  <p>
                    It was encouraging to see the emphasis on{' '}
                    <strong className="font-bold text-[#0B9297]">
                      full participation rather than passive learning
                    </strong>
                    , alongside recognition of{' '}
                    <strong className="font-bold text-[#0B9297]">
                      LaTeX as the lingua franca of mathematics
                    </strong>
                    .
                  </p>
                </div>

                {/* Two Highlight Summary Lines / Cards Below the Article with 0.3s hover smoothness */}
                <div className="mt-6 pt-6 border-t border-[#D6E6E8]/70 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Highlight 1: Inclusive Participation */}
                  <div className="p-4 rounded-xl bg-[#EAF5F7]/70 border border-[#D6E6E8] hover:border-[#0B9297] hover:bg-[#EAF5F7] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded bg-white text-[#0B9297] flex items-center justify-center border border-[#D6E6E8]/60 shadow-2xs">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#142B45] tracking-tight">
                        Inclusive Participation
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#626B78] leading-relaxed pl-8">
                      Supporting full participation in learning, rather than passive observation.
                    </p>
                  </div>

                  {/* Highlight 2: Accessible Mathematics */}
                  <div className="p-4 rounded-xl bg-[#EAF5F7]/70 border border-[#D6E6E8] hover:border-[#0B9297] hover:bg-[#EAF5F7] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded bg-white text-[#0B9297] flex items-center justify-center border border-[#D6E6E8]/60 shadow-2xs">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#142B45] tracking-tight">
                        Accessible Mathematics
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#626B78] leading-relaxed pl-8">
                      Recognising LaTeX as a shared language for expressing mathematical content.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Activity 2 — Devnar School for the Blind (Appears with fade in after 0.4 sec) */}
          <div
            ref={card2Ref}
            className={`bg-white rounded-2xl border border-[#D6E6E8] hover:border-[#142B45] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 ${
              card2Visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: card2Visible ? '0.4s' : '0s',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column — Workshop Image */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                  {/* Subtle pale blue background accent echoing the portfolio visual identity */}
                  <div
                    className="absolute -inset-2 sm:-inset-2.5 rounded-2xl bg-[#EAF5F7] -z-10 transform rotate-1 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative rounded-xl overflow-hidden border border-[#D6E6E8] bg-white shadow-xs group">
                    {/* Category Pill Tag atop image */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase rounded-md bg-[#142B45]/90 text-white backdrop-blur-xs border border-white/10 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B9297]" />
                        Accessibility in Action
                      </span>
                    </div>

                    <img
                      src={DEVNAR_ACTIVITY_IMAGE_SRC}
                      alt="Inclusive educational technology session with students exploring tactile diagram tools."
                      className="w-full h-auto aspect-4/3 object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Subtext Clarification for Educational Collaboration */}
                  <div className="mt-3.5 flex items-center justify-between text-xs text-[#626B78] px-1">
                    <span className="inline-flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-[#0B9297]" />
                      Devnar School Field Session
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#626B78]/80">
                      Tactile Diagram Evaluation
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column — Event Details & Article Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Event Category & Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-2.5">
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#0B9297] uppercase font-sans">
                    ACCESSIBILITY IN ACTION
                  </span>
                  <span className="text-[#D6E6E8]" aria-hidden="true">•</span>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#626B78]">
                    <MapPin className="w-3.5 h-3.5 text-[#0B9297] shrink-0" aria-hidden="true" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#142B45] tracking-tight leading-[1.2] mb-4">
                  Accessibility in Action at Devnar School for the Blind
                </h3>

                {/* Article Content in Three Clean, Readable Paragraphs with Bold Emphasis in Teal #0B9297 */}
                <div className="space-y-4 text-[#626B78] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.75] font-normal">
                  <p>
                    Our team visited{' '}
                    <strong className="font-bold text-[#0B9297]">
                      Devnar School for the Blind
                    </strong>{' '}
                    to test our diagram-drawing tool with students and see how they use technology.
                  </p>

                  <p>
                    The students tried drawing mathematical shapes, and their{' '}
                    <strong className="font-bold text-[#0B9297]">
                      curiosity, excitement, and positive response
                    </strong>{' '}
                    made the experience very encouraging.
                  </p>

                  <p>
                    A special thank you to{' '}
                    <strong className="font-bold text-[#0B9297]">
                      Dr. Saibaba Goud and Jyothi Goud
                    </strong>
                    , founders of Devnar, for making this collaboration possible and their continued work supporting children with visual impairments.
                  </p>
                </div>

                {/* Two Highlight Summary Cards Below the Article with 0.3s hover smoothness */}
                <div className="mt-6 pt-6 border-t border-[#D6E6E8]/70 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Highlight 1: Hands-on Diagram Drawing */}
                  <div className="p-4 rounded-xl bg-[#EAF5F7]/70 border border-[#D6E6E8] hover:border-[#0B9297] hover:bg-[#EAF5F7] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded bg-white text-[#0B9297] flex items-center justify-center border border-[#D6E6E8]/60 shadow-2xs">
                        <PenTool className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#142B45] tracking-tight">
                        Tactile Diagram Testing
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#626B78] leading-relaxed pl-8">
                      Enabling students to draw mathematical shapes and experience accessible geometry.
                    </p>
                  </div>

                  {/* Highlight 2: Inclusive Partnership */}
                  <div className="p-4 rounded-xl bg-[#EAF5F7]/70 border border-[#D6E6E8] hover:border-[#0B9297] hover:bg-[#EAF5F7] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded bg-white text-[#0B9297] flex items-center justify-center border border-[#D6E6E8]/60 shadow-2xs">
                        <Heart className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#142B45] tracking-tight">
                        Dedicated Collaboration
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#626B78] leading-relaxed pl-8">
                      Partnering with Dr. Saibaba Goud & Jyothi Goud to empower visually impaired learners.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
