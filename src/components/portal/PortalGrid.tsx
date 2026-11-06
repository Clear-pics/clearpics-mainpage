import React from 'react';
import { Layers, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ClinicalPortalItem } from '../../types/portal';
import { PortalCard } from './PortalCard';

interface PortalGridProps {
  modules: ClinicalPortalItem[];
  onPreview: (module: ClinicalPortalItem) => void;
  onNavigate?: (path: string) => void;
  searchQuery: string;
  onResetSearch: () => void;
}

export const PortalGrid: React.FC<PortalGridProps> = ({
  modules,
  onPreview,
  onNavigate,
  searchQuery,
  onResetSearch
}) => {
  return (
    <section id="conditions-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.14em] font-semibold text-[#9E4733] mb-1">
            <Layers className="w-3.5 h-3.5 text-[#9E4733]" />
            <span>Interactive Condition Directories</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F4E46] tracking-tight">
            Specialized Clinical Visual Atlases
          </h2>
          <p className="text-xs sm:text-sm text-[#52605B] mt-1 max-w-xl font-sans leading-relaxed">
            Each atlas functions as an independent, high-resolution condition web app equipped with stage progressions, diagnostic criteria, and clinical pathways.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#52605B]">
          <span className="w-2 h-2 rounded-full bg-[#2E6E62]" />
          <span>{modules.length} Live Visual Guides</span>
        </div>
      </div>

      {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      {modules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((item) => (
            <PortalCard
              key={item.id}
              module={item}
              onPreview={onPreview}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-[#E5DFD5] p-12 text-center max-w-lg mx-auto space-y-4 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#1F4E46] flex items-center justify-center mx-auto border border-[#E5DFD5]">
            <AlertCircle className="w-6 h-6 text-[#9E4733]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-[#1F4E46]">
              No matching clinical atlases found
            </h3>
            <p className="text-xs text-[#52605B]">
              No results found for "{searchQuery}". Try searching for terms like <strong>CEAP</strong>, <strong>Ulcer</strong>, <strong>DVT</strong>, or <strong>Vein</strong>.
            </p>
          </div>
          <button
            onClick={onResetSearch}
            className="tap-tactile px-5 py-2.5 text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] rounded-full transition-colors cursor-pointer shadow-xs"
          >
            Clear Search & Show All
          </button>
        </div>
      )}

    </section>
  );
};
