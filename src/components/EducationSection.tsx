import React, { useState, useEffect, useRef } from 'react';
import { Calendar, GraduationCap, Award, BookOpen, Sparkles, MapPin } from 'lucide-react';
import {
  SaarlandUniversityLogo,
  UTAustinLogo,
  WuerzburgUniversityLogo,
} from './UniversityLogos.tsx';

interface EducationItem {
  id: string;
  university: string;
  location: string;
  degreeLabel: string;
  degreeTitle: string;
  years: string;
  shortDescription: string;
  logo: React.ComponentType<{ className?: string }>;
  level: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'dr-ing-saarland',
    university: 'Universität des Saarlandes',
    location: 'Saarbrücken, Germany',
    degreeLabel: 'Doctorate',
    degreeTitle: 'Doctorate (Dr.-Ing.) in Artificial Intelligence',
    years: '1997–2001',
    shortDescription:
      'Advanced research in artificial intelligence and computer science.',
    logo: SaarlandUniversityLogo,
    level: 'Doctoral Level',
    icon: Award,
  },
  {
    id: 'master-saarland',
    university: 'Universität des Saarlandes',
    location: 'Saarbrücken, Germany',
    degreeLabel: "Research Master's Degree",
    degreeTitle: "Research Master's Degree (Dipl.-Math.) in Mathematics",
    years: '1994–1997',
    shortDescription: 'Advanced study and research in mathematics.',
    logo: SaarlandUniversityLogo,
    level: "Master's Level",
    icon: GraduationCap,
  },
  {
    id: 'ut-austin',
    university: 'The University of Texas at Austin',
    location: 'Austin, Texas, USA',
    degreeLabel: 'Field of Study',
    degreeTitle: 'Mathematics, Computer Science, and Philosophy',
    years: '1993–1994',
    shortDescription: 'Studied mathematics, computing, and philosophical ideas.',
    logo: UTAustinLogo,
    level: 'Graduate / Exchange Studies',
    icon: Sparkles,
  },
  {
    id: 'vordiplom-wuerzburg',
    university: 'Julius-Maximilians-Universität Würzburg',
    location: 'Würzburg, Germany',
    degreeLabel: 'Undergraduate Studies',
    degreeTitle:
      'Undergraduate Studies (Vordiplom) in Mathematics, Computer Science, and Philosophy',
    years: '1990–1993',
    shortDescription:
      'Foundational studies in mathematics, computer science, and analytical philosophy.',
    logo: WuerzburgUniversityLogo,
    level: 'Undergraduate Level',
    icon: BookOpen,
  },
];

export const EducationSection: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative w-full bg-[#F8FBFC] border-t border-[#D6E6E8]/70 py-20 sm:py-24 lg:py-28 scroll-mt-20 sm:scroll-mt-24 transition-colors duration-500"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading: Follows visual identity with Small uppercase teal label + Main heading + Intro */}
        <div
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-500 ease-out ${
            hasEntered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: hasEntered ? '0.4s' : '0s',
          }}
        >
          {/* Small Uppercase Teal Label */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0B9297] uppercase font-sans">
              ACADEMIC BACKGROUND
            </span>
          </div>

          {/* Main Heading */}
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#142B45] leading-[1.12]"
          >
            Education
          </h2>

          {/* Accent Line Below Education matching About Me & Services line */}
          <div className="w-16 h-1 bg-[#0B9297] rounded-full mt-4" aria-hidden="true" />

          {/* Short Introduction Underneath */}
          <p className="text-[#626B78] text-base sm:text-lg leading-relaxed mt-4 font-normal">
            My academic journey combines mathematics, computer science, philosophy, and artificial intelligence.
          </p>
        </div>

        {/* Education Cards: 4 consistent cards in a responsive grid - Appears with fade in after 0.4 sec */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {EDUCATION_DATA.map((item, index) => {
            const LogoComponent = item.logo;
            const ItemIcon = item.icon;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-[#D6E6E8] hover:border-[#142B45] p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1.5 ${
                  hasEntered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: hasEntered ? `${400 + index * 80}ms` : '0ms',
                }}
              >
                {/* Subtle top teal highlight bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0B9297] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top University Brand Bar with Logo & Level Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#D6E6E8]/60">
                    <div className="bg-[#F8FBFC] border border-[#D6E6E8]/70 rounded-xl px-4 py-2.5 flex items-center shadow-xs group-hover:border-[#0B9297]/40 transition-colors duration-300">
                      <LogoComponent className="h-9 sm:h-10 w-auto max-w-[210px] sm:max-w-[240px] object-contain group-hover:scale-[1.02] transition-transform duration-300" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5F7] text-[#0B9297] text-xs font-semibold tracking-wide">
                      <ItemIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{item.level}</span>
                    </div>
                  </div>

                  {/* University Name & Location */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#626B78] font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0B9297] shrink-0" aria-hidden="true" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-[#626B78] tracking-wide uppercase">
                      {item.university}
                    </h3>
                  </div>

                  {/* Degree Title (Large, Bold, Deep Navy) */}
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#142B45] leading-snug group-hover:text-[#0B9297] transition-colors duration-200 mb-4">
                    {item.degreeTitle}
                  </h4>

                  {/* Short Description */}
                  <p className="text-[#626B78] text-sm sm:text-[15px] leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Card Footer: Years with clean pill badge */}
                <div className="mt-6 pt-5 border-t border-[#D6E6E8]/60 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EAF5F7] text-[#142B45] text-xs font-bold tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#0B9297]" aria-hidden="true" />
                    <span>{item.years}</span>
                  </div>

                  <span className="text-xs font-semibold text-[#0B9297] group-hover:translate-x-0.5 transition-transform">
                    {item.degreeLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
