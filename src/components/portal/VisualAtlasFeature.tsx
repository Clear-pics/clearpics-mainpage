import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Activity
} from 'lucide-react';
import { PORTAL_MODULES } from '../../data/portalData';

interface VisualAtlasFeatureProps {
  onOpenLiveUrl: (url: string) => void;
  onNavigate?: (path: string) => void;
}

export const VisualAtlasFeature: React.FC<VisualAtlasFeatureProps> = ({ onOpenLiveUrl, onNavigate }) => {
  const varicoseModule = PORTAL_MODULES[0]; // Varicose veins flagship
  const [activeStage, setActiveStage] = useState(2); // Default to C2 Subcutaneous
  const stages = varicoseModule.sampleStages || [];
  const current = stages[activeStage] || stages[0];

  return (
    <section id="visual-atlas-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] shadow-2xs relative overflow-hidden">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Flagship Showcase Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DFD5] text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2E6E62] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#9E4733]">Flagship Live Web App</span>
              <span className="text-[#E5DFD5]">·</span>
              <span className="font-mono text-[11px] text-[#52605B]">CEAP Standard Verified</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F4E46] leading-tight">
                Varicose Veins & Venous Disease Visual Guide
              </h2>
              <p className="text-xs sm:text-sm text-[#52605B] leading-relaxed max-w-xl font-sans">
                Explore the complete multi-stage photographic continuum from early spider telangiectasias (C1) to active chronic venous leg ulceration (C6) with interactive duplex ultrasound metrics.
              </p>
            </div>

            {/* Quick Interactive Stage Selector */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-[#52605B] font-mono">
                <span>Select Progression Stage:</span>
                <span className="text-[#1F4E46] font-semibold">CEAP Clinical Matrix</span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                {stages.map((st, idx) => {
                  const isSelected = activeStage === idx;
                  return (
                    <button
                      key={st.stage}
                      onClick={() => setActiveStage(idx)}
                      className={`tap-tactile py-2 px-1 rounded-2xl text-center transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#1F4E46] text-white font-bold border-[#1F4E46] shadow-sm scale-102'
                          : 'bg-white hover:bg-[#FAF7F2] text-[#1F4E46] border-[#E5DFD5] text-xs shadow-2xs'
                      }`}
                    >
                      <span className="block text-xs font-mono font-bold">{st.stage}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Callout Card */}
              {current && (
                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#1F4E46]">
                      {current.stage} – {current.name}
                    </span>
                    <span className="text-[10px] text-[#9E4733] font-mono uppercase tracking-wider font-semibold">
                      Diagnostic Sign
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#52605B] leading-relaxed">
                    {current.description}
                  </p>
                  <p className="text-[11px] text-[#2E6E62] font-medium pt-1 border-t border-[#E5DFD5]/60">
                    ↳ {current.clinicalSign}
                  </p>
                </div>
              )}
            </div>

            {/* CTA bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {onNavigate && (
                <button
                  onClick={() => onNavigate('/varicose-veins')}
                  className="tap-tactile py-3 px-6 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                >
                  <span>Open In-App Varicose Vein Clinic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <a
                href={varicoseModule.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-tactile py-3 px-5 rounded-full text-xs font-semibold text-[#1F4E46] bg-white hover:bg-[#FAF7F2] border border-[#E5DFD5] shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>External Reference Guide</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#52605B]" />
              </a>
            </div>

          </div>

          {/* Right: Authentic Clinical Photography Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <a
              href={varicoseModule.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-md relative group cursor-pointer bg-slate-900 block"
            >
              {/* Authentic Varicose Veins Image */}
              <img
                src="/images/varicose_veins.webp"
                alt="Varicose Veins Clinical Presentation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Status Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#FAF7F2] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE CLINICAL REFERENCE</span>
                </span>
                <span className="text-xs font-mono font-bold bg-[#FAF7F2] text-[#9E4733] px-2.5 py-0.5 rounded-full shadow-xs">
                  CEAP C0–C6
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                  Clinical Photographic Continuum
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-2 font-sans">
                  Macro photographic documentation across all 7 CEAP stages from saphenofemoral incompetence to active stasis ulcers.
                </p>
                <div className="pt-1.5 flex items-center justify-between text-xs text-emerald-300 font-mono">
                  <span>Varicose Veins Atlas</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Open Full Web App →
                  </span>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
