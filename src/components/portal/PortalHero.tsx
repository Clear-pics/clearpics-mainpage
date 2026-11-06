import React from 'react';
import { Search, X, Activity, Filter, ArrowRight } from 'lucide-react';
import { PortalCategory } from '../../types/portal';
import { PORTAL_CATEGORIES } from '../../data/portalData';

interface PortalHeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: PortalCategory;
  onSelectCategory: (cat: PortalCategory) => void;
  totalCount: number;
  filteredCount: number;
}

export const PortalHero: React.FC<PortalHeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  totalCount,
  filteredCount
}) => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero Container with Vecteezy Doctor Virtual Background Image */}
      <div 
        className="relative rounded-3xl border border-[#E5DFD5] overflow-hidden shadow-2xs py-12 sm:py-18 px-6 sm:px-12 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_medical_bg.jpg')" }}
      >
        {/* Warm ivory scrim overlay allowing text to stand out while showcasing medical visual */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/95 via-[#FBF9F5]/90 to-[#FAF7F2]/95 backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-5">
        
        {/* Top: Clinical Badge/Pill matching Varicose Veins site */}
        <div className="inline-flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] font-semibold text-[#9E4733] bg-[#9E4733]/10 px-3.5 py-1 rounded-full border border-[#9E4733]/20">
            Next-Gen Clinical Visual Guides
          </span>
          <span className="text-xs font-mono text-[#52605B] hidden sm:inline">
            CEAP Staging Verified
          </span>
        </div>

        {/* Main Title: Source Serif 4 typography matching Varicose Veins website */}
        <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.12] tracking-[-0.015em] text-[#1F4E46] text-balance">
          Interactive{' '}
          <span className="italic font-normal text-[#2E6E62]">
            Clinical Atlases
          </span>{' '}
          & Condition Pathways
        </h1>

        {/* Subtitle: Refined editorial medical typography */}
        <p className="mt-3 text-sm sm:text-base lg:text-[17px] text-[#52605B] max-w-2xl mx-auto leading-relaxed font-sans text-balance">
          Access detailed, high-resolution condition guides, stage progressions, and interactive clinical visualization tools curated for healthcare professionals and patient education.
        </p>

        {/* Search & Filter Bar: Rounded-full tactile pill matching Meridian Vascular */}
        <div className="pt-4 max-w-2xl mx-auto space-y-4">
          
          <div className="relative flex items-center bg-white rounded-full border border-[#E5DFD5] shadow-2xs p-1.5 focus-within:border-[#2E6E62] focus-within:ring-4 focus-within:ring-[#2E6E62]/10 transition-all">
            <div className="pl-4 pr-2 text-[#52605B]">
              <Search className="w-4 h-4 text-[#1F4E46]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search condition or staging (e.g. CEAP, Wells, Wagner, Fontaine)..."
              className="w-full text-xs sm:text-sm py-2 px-1 text-[#1A2421] placeholder:text-[#52605B]/60 bg-transparent focus:outline-none font-sans"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="p-1.5 rounded-full text-[#52605B] hover:text-[#1A2421] hover:bg-[#FAF7F2] transition-colors mr-1 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#52605B] font-mono pr-4 select-none">
                <kbd className="px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#E5DFD5]">esc</kbd>
                <span>clear</span>
              </div>
            )}
          </div>

          {/* Filter Chip Bar Underneath: Clean rounded-full buttons */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-1 text-xs">
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] font-semibold text-[#52605B] mr-1 hidden sm:inline">
              Filter:
            </span>
            {PORTAL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`tap-tactile min-h-[36px] rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1F4E46] text-white border border-[#1F4E46] shadow-xs'
                      : 'bg-white hover:bg-[#FAF7F2] text-[#1F4E46] border border-[#E5DFD5] shadow-2xs hover:border-[#2E6E62]/40'
                  }`}
                >
                  {cat === 'All' ? `All Conditions (${totalCount})` : cat}
                </button>
              );
            })}
          </div>

          {/* Search Result Summary info */}
          {searchQuery && (
            <div className="text-xs text-[#52605B] flex items-center justify-center gap-2 pt-1 font-mono">
              <span>Showing <strong>{filteredCount}</strong> of {totalCount} reference atlases</span>
              <span>·</span>
              <button
                onClick={() => {
                  onSearchChange('');
                  onSelectCategory('All');
                }}
                className="text-[#9E4733] hover:underline font-semibold cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>

      </div>
      </div>
    </section>
  );
};
