import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Layers,
  ArrowRight,
  Activity
} from 'lucide-react';
import { ClinicalPortalItem } from '../../types/portal';

interface PortalPreviewModalProps {
  module: ClinicalPortalItem | null;
  onNavigate?: (path: string) => void;
  onClose: () => void;
}

export const PortalPreviewModal: React.FC<PortalPreviewModalProps> = ({
  module,
  onNavigate,
  onClose
}) => {
  if (!module) return null;

  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const stages = module.sampleStages || [];
  const currentStage = stages[selectedStageIndex] || stages[0];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD5] overflow-hidden my-6 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E5DFD5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5DFD5] shadow-2xs flex items-center justify-center text-[#1F4E46] font-bold">
              <Activity className="w-5 h-5 text-[#1F4E46]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#9E4733]/10 text-[#9E4733] border border-[#9E4733]/20">
                  {module.category}
                </span>
                <span className="text-xs font-mono text-[#52605B]">
                  {module.stagingSystem}
                </span>
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1F4E46] tracking-tight leading-snug">
                {module.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#52605B] hover:text-[#1A2421] rounded-full hover:bg-white border border-transparent hover:border-[#E5DFD5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Authentic Condition Photo Banner */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#FAF7F2]">
            <img
              src={module.imageUrl}
              alt={module.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/hero_medical_bg.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
              <span className="font-semibold">{module.title}</span>
              <span className="text-emerald-300 font-bold">{module.stagesCount}</span>
            </div>
          </div>

          {/* Summary Banner */}
          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#9E4733] block">
                Clinical Overview & Protocol
              </span>
              <p className="text-xs sm:text-[13px] text-[#52605B] leading-relaxed max-w-xl font-sans">
                {module.summaryNote || module.description}
              </p>
            </div>
            
            {module.url.startsWith('/') && onNavigate ? (
              <button
                onClick={() => {
                  onClose();
                  onNavigate(module.url);
                }}
                className="tap-tactile py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] transition-all shadow-xs flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Open Dedicated Clinic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href={module.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-tactile py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] transition-all shadow-xs flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Launch Live Web App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Interactive Staging Visualizer */}
          {stages.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1F4E46]">
                    Clinical Progression Stages ({stages.length})
                  </h3>
                  <p className="text-xs text-[#52605B]">
                    Select a progression step below to inspect anatomical signs and criteria.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#1F4E46] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DFD5]">
                  {module.stagingSystem}
                </span>
              </div>

              {/* Stage selector pills */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {stages.map((st, idx) => {
                  const isSelected = selectedStageIndex === idx;
                  return (
                    <button
                      key={st.stage}
                      onClick={() => setSelectedStageIndex(idx)}
                      className={`tap-tactile p-2 rounded-2xl text-center transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#1F4E46] text-white border-[#1F4E46] shadow-sm font-bold scale-102'
                          : 'bg-white hover:bg-[#FAF7F2] text-[#1F4E46] border-[#E5DFD5] shadow-2xs'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold">{st.stage}</div>
                      <div className="text-[10px] truncate opacity-80 mt-0.5">{st.name.split(' ')[0]}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card */}
              {currentStage && (
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#1F4E46] px-3 py-1 rounded-full bg-white border border-[#E5DFD5] shadow-2xs">
                      {currentStage.stage} · {currentStage.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#52605B]">
                      Step {selectedStageIndex + 1} of {stages.length}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1A2421] font-medium leading-relaxed font-sans">
                    {currentStage.description}
                  </p>

                  <div className="pt-2 border-t border-[#E5DFD5] flex items-start gap-2 text-xs text-[#52605B]">
                    <span className="text-[#1F4E46] font-semibold shrink-0">Diagnostic Sign:</span>
                    <span>{currentStage.clinicalSign}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Module Feature Tags & Verified Citations */}
          <div className="pt-2 border-t border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#52605B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2E6E62]" />
              <span className="font-mono">{module.referencesCount} Peer-Reviewed Clinical Citations Included</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {module.featureTags.map((tag, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E5DFD5] text-[#1F4E46] text-[10px] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#E5DFD5] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="tap-tactile px-4 py-2 text-xs font-semibold text-[#52605B] hover:text-[#1A2421] hover:bg-white rounded-full transition-colors cursor-pointer"
          >
            Close Preview
          </button>

          {module.url.startsWith('/') && onNavigate ? (
            <button
              onClick={() => {
                onClose();
                onNavigate(module.url);
              }}
              className="tap-tactile py-2.5 px-5 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Dedicated Clinic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href={module.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-tactile py-2.5 px-5 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Open Dedicated Web App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
