import React from 'react';
import {
  ArrowRight,
  Eye,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ClinicalPortalItem } from '../../types/portal';

interface PortalCardProps {
  module: ClinicalPortalItem;
  onPreview: (module: ClinicalPortalItem) => void;
  onNavigate?: (path: string) => void;
}

export const PortalCard: React.FC<PortalCardProps> = ({ module, onPreview, onNavigate }) => {
  const isInternal = module.url.startsWith('/');

  return (
    <div className="group relative bg-white border border-[#E5DFD5] rounded-3xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#2E6E62]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
      
      {/* Top Section with Authentic Clinical Image Frame */}
      <div>
        
        {/* Authentic Clinical Image Container with Hover Zoom */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] mb-5">
          <img
            src={module.imageUrl}
            alt={module.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            onError={(e) => {
              // Fallback to placeholder if broken
              (e.currentTarget as HTMLImageElement).src = '/images/hero_medical_bg.jpg';
            }}
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Badges on top of image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-[0.12em] font-bold bg-[#FAF7F2]/95 backdrop-blur-md text-[#9E4733] border border-white/50 shadow-xs">
              {module.category}
            </span>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-900/80 backdrop-blur-md text-[#FAF7F2] border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{module.status}</span>
            </div>
          </div>

          {/* Staging tag at bottom of image */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 drop-shadow-xs">
            <span className="truncate mr-2 font-medium">
              {module.stagingSystem}
            </span>
            <span className="text-emerald-300 font-semibold shrink-0">
              {module.stagesCount}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 mb-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F4E46] group-hover:text-[#2E6E62] transition-colors leading-snug">
            {module.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-[#52605B] leading-relaxed font-sans line-clamp-3">
            {module.description}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {module.featureTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#FAF7F2] text-[#1F4E46] border border-[#E5DFD5]"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Card Bottom: Action CTA Buttons */}
      <div className="pt-4 border-t border-[#E5DFD5] flex items-center gap-2">
        {/* Quick Preview Button */}
        <button
          onClick={() => onPreview(module)}
          className="tap-tactile flex-1 py-2.5 px-3 rounded-full text-xs font-semibold text-[#1F4E46] bg-white hover:bg-[#FAF7F2] border border-[#E5DFD5] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          title="Inspect Staging Progression"
        >
          <Eye className="w-3.5 h-3.5 text-[#52605B]" />
          <span>Preview Staging</span>
        </button>

        {/* Open Atlas / Clinic Link */}
        {isInternal && onNavigate ? (
          <button
            onClick={() => onNavigate(module.url)}
            className="tap-tactile flex-1 py-2.5 px-3.5 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
          >
            <span>Open Clinic</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        ) : (
          <a
            href={module.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-tactile flex-1 py-2.5 px-3.5 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
          >
            <span>Open Atlas</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>
        )}
      </div>

    </div>
  );
};
