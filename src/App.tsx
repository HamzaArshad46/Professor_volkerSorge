/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header, scrollToSection } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ActivitiesSection } from './components/ActivitiesSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Active navigation tracking on scroll: smoothly moves the active indicator in the hero bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollY > 350);

      // Top of page
      if (scrollY < 90) {
        setActiveNav('Home');
        return;
      }

      // Reached near bottom of page
      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveNav('Activities');
        return;
      }

      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height || 80;
      // Probe point below the hero/navbar
      const probeY = scrollY + headerHeight + 60;

      const activitiesEl = document.getElementById('activities');
      const servicesEl = document.getElementById('services');
      const educationEl = document.getElementById('education');
      const aboutEl = document.getElementById('about');

      if (activitiesEl && probeY >= activitiesEl.offsetTop) {
        setActiveNav('Activities');
      } else if (servicesEl && probeY >= servicesEl.offsetTop) {
        setActiveNav('Services');
      } else if (educationEl && probeY >= educationEl.offsetTop) {
        setActiveNav('Education');
      } else if (aboutEl && probeY >= aboutEl.offsetTop) {
        setActiveNav('About');
      } else {
        setActiveNav('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Handle hash on initial load and hashchange
    const handleHash = () => {
      const currentHash = window.location.hash.replace(/^#/, '');
      if (currentHash === 'activities') {
        setActiveNav('Activities');
        setTimeout(() => scrollToSection('activities'), 80);
      } else if (currentHash === 'services') {
        setActiveNav('Services');
        setTimeout(() => scrollToSection('services'), 80);
      } else if (currentHash === 'education') {
        setActiveNav('Education');
        setTimeout(() => scrollToSection('education'), 80);
      } else if (currentHash === 'about') {
        setActiveNav('About');
        setTimeout(() => scrollToSection('about'), 80);
      } else if (currentHash === 'home') {
        setActiveNav('Home');
        setTimeout(() => scrollToSection('home'), 80);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  // Global smooth scrolling delegation for all anchor links throughout the website
  useEffect(() => {
    const handleGlobalAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const targetId = href.slice(1);
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            if (targetId === 'about') setActiveNav('About');
            else if (targetId === 'education') setActiveNav('Education');
            else if (targetId === 'services') setActiveNav('Services');
            else if (targetId === 'activities') setActiveNav('Activities');
            else if (targetId === 'home') setActiveNav('Home');
            scrollToSection(targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalAnchorClick);
    return () => document.removeEventListener('click', handleGlobalAnchorClick);
  }, []);

  const handleNavClick = (item: string) => {
    // Set active link in hero bar immediately upon click
    setActiveNav(item);
  };

  return (
    <div className="min-h-screen bg-white text-[#142B45] flex flex-col selection:bg-[#EAF5F7] selection:text-[#0B9297]">
      {/* Navigation Header (Hero Bar) with Smooth Scrolling & Active Line Tracking */}
      <Header
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Page Flow */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Home Hero */}
        <HeroSection
          onExploreActivities={() => {
            setActiveNav('Activities');
            scrollToSection('activities');
          }}
        />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Education */}
        <EducationSection />

        {/* Section 4: Services */}
        <ServicesSection />

        {/* Section 5: Activities */}
        <ActivitiesSection />
      </main>

      {/* Academic Footer with smooth scrolling links */}
      <Footer />

      {/* Floating Smooth Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => {
            setActiveNav('Home');
            scrollToSection('home');
          }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white text-[#142B45] hover:text-[#0B9297] border border-[#D6E6E8] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B9297] animate-in fade-in duration-300"
          aria-label="Smoothly scroll to top of page"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-[#0B9297]" />
        </button>
      )}
    </div>
  );
}
