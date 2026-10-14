import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeNav?: string;
  onContactClick?: () => void;
  onNavClick: (item: string) => void;
}

export const scrollToSection = (sectionId: string) => {
  const cleanId = sectionId.replace(/^#/, '');
  const section = document.getElementById(cleanId);
  if (!section) return;

  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height || 80;

  // For home, scroll smoothly to the very top of the window
  if (cleanId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  // Calculate target position: accounting for sticky header height plus a comfortable 12px breathing buffer
  // so the sticky hero bar never collides with or covers the section top border line or heading.
  const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  const targetPosition = Math.max(0, elementPosition - headerHeight - 12);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: targetPosition,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
};

export const Header: React.FC<HeaderProps> = ({
  activeNav: currentActiveNav,
  onContactClick,
  onNavClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localActiveNav, setLocalActiveNav] = useState('Home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const activeNav = currentActiveNav ?? localActiveNav;

  // Track scroll position to update the top progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percentage = (scrollPx / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, percentage)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Clean navigation links: Home, About, Education, Services, Activities
  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Activities', href: '#activities', id: 'activities' },
  ];

  const handleNavClick = (label: string, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    setLocalActiveNav(label);
    onNavClick(label);
    const targetId = href.replace(/^#/, '');
    scrollToSection(targetId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#D6E6E8]/60 shadow-xs">
      {/* Thin Scroll Progress Indicator at the top of the header */}
      <div
        className="absolute top-0 left-0 w-full h-[3px] bg-[#EAF5F7]/40 z-50 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#0B9297] to-[#0EACB2] origin-left transition-transform duration-100 ease-out shadow-[0_1px_4px_rgba(11,146,151,0.3)]"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('Home', '#home', e)}
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#0B9297] rounded cursor-pointer"
          aria-label="Volker Sorge - Back to Top"
        >
          {/* Teal Geometric Academic Lettermark */}
          <div className="w-9 h-9 rounded-md bg-[#0B9297] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
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

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.22em] text-[#142B45] uppercase font-sans">
              VOLKER SORGE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.label, item.href, e)}
                className="group relative px-4 py-2 rounded-full transition-all duration-500 ease-out cursor-pointer active:scale-95"
              >
                {/* Soft background pill for hover and active states */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ease-out pointer-events-none ${
                    isActive
                      ? 'bg-[#EAF5F7] shadow-2xs'
                      : 'bg-transparent group-hover:bg-[#EAF5F7]/70'
                  }`}
                  aria-hidden="true"
                />

                {/* Nav text with smooth color transition */}
                <span
                  className={`relative z-10 text-[13px] tracking-wide transition-colors duration-500 ease-out select-none ${
                    isActive
                      ? 'text-[#0B9297] font-bold'
                      : 'text-[#626B78] font-medium group-hover:text-[#0B9297]'
                  }`}
                >
                  {item.label}
                </span>

                {/* Soft Active Indicator Line below item */}
                <span
                  className={`absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full transition-all duration-500 ease-out pointer-events-none ${
                    isActive
                      ? 'bg-[#0B9297] opacity-100 scale-x-100 shadow-[0_1px_5px_rgba(11,146,151,0.35)]'
                      : 'bg-[#0B9297]/40 opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Right CTA: Volker's LinkedIn Profile */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="https://linkedin.com/in/volker-sorge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider text-white bg-[#0B9297] hover:bg-[#087f84] rounded-md transition-all duration-300 shadow-xs hover:shadow active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B9297]"
            title="Connect with Volker Sorge on LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#142B45] hover:text-[#0B9297] focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D6E6E8] bg-white px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300 ease-out">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.label, item.href, e)}
                  className={`text-sm py-2.5 px-4 rounded-xl transition-all duration-500 ease-out cursor-pointer flex items-center justify-between active:scale-[0.98] ${
                    isActive
                      ? 'bg-[#EAF5F7] text-[#0B9297] font-bold shadow-xs'
                      : 'text-[#142B45] font-medium hover:bg-[#EAF5F7]/60 hover:text-[#0B9297]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                      isActive ? 'bg-[#0B9297] scale-100 opacity-100' : 'bg-transparent scale-0 opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <a
                href="https://linkedin.com/in/volker-sorge"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-white bg-[#0B9297] hover:bg-[#087f84] rounded-md transition-all duration-300 cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>Volker's LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
