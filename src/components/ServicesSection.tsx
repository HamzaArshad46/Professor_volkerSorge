import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Layout, Code2, ArrowRight, X, Linkedin, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'it-consulting',
    number: '1',
    title: '1.IT Consulting',
    description:
      'Get expert strategic guidance on making websites, software, diagrams, mathematical formulas, and scientific IT systems accessible to everyone.',
    icon: Briefcase,
    details:
      'Technical architecture audit, enterprise accessibility roadmaps, and digital compliance aligned with W3C, WCAG, and WAI-ARIA standards.',
  },
  {
    id: 'ued',
    number: '2',
    title: '2.User Experience Design (UED)',
    description:
      'Design inclusive, intuitive digital interfaces and tools that work seamlessly for people using screen readers and diverse assistive technologies.',
    icon: Layout,
    details:
      'User-centric wireframing, accessible visual hierarchies, tactile diagram interfaces, and human-computer interaction for complex STEM data.',
  },
  {
    id: 'web-dev',
    number: '3',
    title: '3.Web Development',
    description:
      'Build high-performance web applications and digital tools with semantic HTML, SVG/Canvas accessibility, and robust modern web standards.',
    icon: Code2,
    details:
      'Full-stack and frontend engineering with reactive components, speech rule engine integrations, and accessible scientific document delivery.',
  },
];

interface ServicesSectionProps {
  onLearnMore?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onLearnMore }) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect(); // Trigger animation only once
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
      id="services"
      className="relative w-full bg-white border-t border-[#D6E6E8]/60 py-20 sm:py-24 lg:py-28 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Eyebrow + Main Heading + Intro (Appears with fade in after 0.4 sec) */}
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
          {/* Small Eyebrow Label */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0B9297] uppercase font-sans">
              WHAT I OFFER
            </span>
          </div>

          {/* Main Heading */}
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#142B45] leading-[1.12]"
          >
            Services
          </h2>

          {/* Accent Line Below Services matching About Me line */}
          <div className="w-16 h-1 bg-[#0B9297] rounded-full mt-4" aria-hidden="true" />

          {/* Short Introduction Underneath */}
          <p className="text-[#626B78] text-base sm:text-lg leading-relaxed mt-4 font-normal">
            I help make complex scientific information easier to understand and accessible to everyone through thoughtful technology, inclusive design, and specialist development.
          </p>
        </div>

        {/* Services Cards: 3 in a horizontal row on desktop - Appears with fade in after 0.4 sec */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            // Alternating subtle tilt angle for visual rhythm (e.g. -1.5deg, 1.5deg, -1.5deg)
            const tiltStyle = index === 1 ? 'hover:rotate-[1.5deg]' : 'hover:rotate-[-1.5deg]';

            return (
              <div
                key={service.id}
                className={`h-full transition-all duration-500 ease-out ${
                  hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: hasEntered ? `${400 + index * 90}ms` : '0ms',
                }}
              >
                <div
                  id={service.id}
                  tabIndex={0}
                  className={`service-card h-full p-7 sm:p-8 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B9297] focus-visible:ring-offset-2 scroll-mt-24 ${tiltStyle}`}
                >
                  <div>
                    {/* Icon in pale blue container */}
                    <div className="w-12 h-12 rounded-lg bg-[#EAF5F7] text-[#0B9297] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0B9297] group-hover:text-white">
                      <Icon className="w-6 h-6 transition-colors duration-300" aria-hidden="true" />
                    </div>

                    {/* Card Main Heading: 1. IT Consulting / 2. User Experience Design (UED) / 3. Web Development */}
                    <h3 className="text-xl sm:text-[22px] font-bold text-[#142B45] tracking-tight leading-snug mb-3">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-[15px] text-[#626B78] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Compact Teal CTA Button */}
                  <div className="mt-8 pt-6 border-t border-[#D6E6E8]/40 flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(service);
                        onLearnMore?.(service);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-white bg-[#0B9297] hover:bg-[#087f84] rounded-md transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B9297]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142B45]/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#D6E6E8] overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-5 bg-[#EAF5F7]/80 border-b border-[#D6E6E8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B9297] text-white flex items-center justify-center shadow-xs">
                  <selectedService.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B9297]">
                    Service {selectedService.number}
                  </span>
                  <h3
                    id="service-modal-title"
                    className="text-lg font-bold text-[#142B45] leading-tight"
                  >
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-[#626B78] hover:text-[#142B45] hover:bg-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#626B78] mb-1.5">
                  Overview
                </h4>
                <p className="text-sm text-[#142B45] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div className="bg-[#F8FBFC] rounded-xl p-4 border border-[#D6E6E8]/70">
                <div className="flex items-center gap-2 mb-2 text-[#0B9297]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Key Focus & Deliverables
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#626B78] leading-relaxed">
                  {selectedService.details}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <a
                  href="https://linkedin.com/in/volker-sorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B9297] hover:bg-[#087f84] rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#626B78] hover:text-[#142B45] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
