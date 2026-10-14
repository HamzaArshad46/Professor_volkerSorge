import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from './Header.tsx';

interface HeroButtonsProps {
  onExploreActivities?: () => void;
}

export const HeroButtons: React.FC<HeroButtonsProps> = ({
  onExploreActivities,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreActivities) {
      onExploreActivities();
    } else {
      scrollToSection('activities');
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 pt-2">
      {/* Primary CTA: Explore My Activities */}
      <a
        href="#activities"
        onClick={handleClick}
        className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-[15px] font-semibold tracking-wide text-white bg-[#0B9297] hover:bg-[#087f84] rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B9297]"
        title="Smoothly scroll to Activities section"
      >
        <span>Explore My Activities</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};
