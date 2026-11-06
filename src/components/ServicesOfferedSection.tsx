import React, { useState, useRef } from 'react';
import {
  Stethoscope,
  Building2,
  CalendarCheck,
  Receipt,
  FileCheck2,
  HeartHandshake,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';

interface ServicesOfferedSectionProps {
  onScheduleClick?: () => void;
}

export const ServicesOfferedSection: React.FC<ServicesOfferedSectionProps> = ({
  onScheduleClick
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Stethoscope,
      title: 'Surgical Consultation & Coordination',
      description:
        'Helping patients arrange consultations with appropriate specialists and understand the steps involved in seeking a surgical opinion.'
    },
    {
      icon: Building2,
      title: 'Hospital Identification & Coordination',
      description:
        'Assisting patients in identifying suitable healthcare facilities based on their medical requirements, location, preferences, and available options.'
    },
    {
      icon: CalendarCheck,
      title: 'Treatment Planning Support',
      description:
        'Helping patients coordinate consultations, investigations, documentation, hospital admission, and other practical requirements as advised by their treating medical team.'
    },
    {
      icon: Receipt,
      title: 'Cost & Financial Coordination',
      description:
        'Facilitating access to available treatment estimates and helping patients understand the administrative aspects of insurance, cashless facilities, and payment procedures.'
    },
    {
      icon: FileCheck2,
      title: 'Pre-operative Assistance',
      description:
        'Supporting patients with appointment schedules, documentation, investigations prescribed by their doctors, and hospital admission formalities.'
    },
    {
      icon: HeartHandshake,
      title: 'Post-operative Coordination',
      description:
        'Helping patients arrange follow-up appointments, obtain discharge instructions from their treating team, and coordinate recommended rehabilitation or home-care services where available.'
    }
  ];

  // Quadrupled list for seamless, uninterrupted infinite right-to-left loop (0% to -50%)
  const marqueeItems = [...services, ...services, ...services, ...services];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services-offered" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs sm:text-sm font-bold text-teal-700 uppercase tracking-wider block">
                Core Business Focus
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-[11px] text-slate-500 font-medium">
                Continuous Horizontal Stream
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Services Offered
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              Our principal focus is surgical healthcare and the comprehensive coordination services surrounding it.
            </p>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-teal-700 fill-teal-700" />
                  <span className="hidden sm:inline">Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-600" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              )}
            </button>

            {/* Manual Nudge Buttons */}
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 text-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll left"
              title="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 text-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll right"
              title="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {onScheduleClick && (
              <button
                onClick={onScheduleClick}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ml-2"
              >
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Moving Marquee Track (Right to Left) */}
        <div className="relative w-full overflow-hidden py-2 group">
          {/* Left subtle fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Right subtle fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* The moving track container */}
          <div
            ref={scrollContainerRef}
            className={`animate-marquee-rtl gap-4 sm:gap-6 py-2 overflow-x-visible select-none ${
              isPaused ? 'is-paused' : ''
            }`}
          >
            {marqueeItems.map((service, index) => {
              const Icon = service.icon;
              const originalIndex = index % services.length;
              return (
                <div
                  key={index}
                  className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:bg-white hover:border-teal-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer group/card"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-100/90 text-teal-800 flex items-center justify-center shadow-2xs group-hover/card:scale-105 group-hover/card:bg-teal-700 group-hover/card:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60">
                        0{originalIndex + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover/card:text-teal-950 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>ClearPix Care Service</span>
                    <span className="text-teal-600 font-semibold group-hover/card:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
