import React from 'react';
import { ArrowUp, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { scrollToSection } from './Header.tsx';

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer className="w-full bg-[#142B45] text-white pt-16 pb-12 border-t border-[#142B45]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Academic Bio */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-md bg-[#0B9297] flex items-center justify-center text-white shadow-sm">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="4 6 12 18 20 6" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <span className="text-base font-bold tracking-[0.2em] text-white uppercase font-sans">
                  VOLKER SORGE
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-4">
                Professor in Computer Science specializing in diagram accessibility, mathematical semantics, and inclusive digital technologies.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#0B9297] shrink-0" aria-hidden="true" />
                <span>West Midlands, England, United Kingdom</span>
              </div>

              {/* Volker's LinkedIn Profile */}
              <div className="pt-2">
                <a
                  href="https://linkedin.com/in/volker-sorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-[#0B9297] group transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0B9297] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Volker’s Profile:</span>
                  <span className="underline decoration-[#0B9297]/40 group-hover:decoration-[#0B9297] font-medium text-white group-hover:text-[#0B9297]">
                    linkedin.com/in/volker-sorge
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Smooth Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#0B9297] uppercase mb-4 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, 'home')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={(e) => handleSmoothScroll(e, 'education')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  onClick={(e) => handleSmoothScroll(e, 'activities')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline"
                >
                  Activities
                </a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#0B9297] uppercase mb-4 font-sans">
              Services Offered
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline block"
                >
                  1. IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline block"
                >
                  2. User Experience Design (UED)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer hover:underline block"
                >
                  3. Web Development
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://linkedin.com/in/volker-sorge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-white bg-[#0B9297] hover:bg-[#087f84] rounded-md transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
                title="Connect with Volker Sorge on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Smooth Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Professor Volker Sorge. All rights reserved.</p>

          <button
            type="button"
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
            title="Smoothly scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0B9297] group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
