import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DiseaseData } from '../types';

interface DiseaseCardProps {
  disease: DiseaseData;
  onSelect: (route: string) => void;
  onQuickBook: (id: DiseaseData['id']) => void;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({
  disease,
  onSelect,
  onQuickBook
}) => {
  // Render authentic clinical visuals
  const renderVisual = () => {
    switch (disease.id) {
      case 'piles':
        return (
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src="/images/piles_patient.jpg"
              alt="Hemorrhoids and piles discomfort symptoms"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="font-semibold text-rose-200">Clinical Presentation</span>
              <span className="text-[10px] text-white/95 bg-rose-950/80 border border-rose-500/40 px-2 py-0.5 rounded font-medium">
                Acute Discomfort
              </span>
            </div>
          </div>
        );
      case 'gallbladder-stones':
        return (
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src="/images/gallbladder_stones.webp"
              alt="Gallbladder stone symptoms and acute biliary colic"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="font-semibold text-amber-200">Clinical Presentation</span>
              <span className="text-[10px] text-white/95 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded font-medium">
                Biliary Colic
              </span>
            </div>
          </div>
        );
      case 'hernia':
        return (
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src="/images/hernia_repair.webp"
              alt="Lower abdominal muscle strain and hernia bulge discomfort"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="font-semibold text-emerald-200">Clinical Presentation</span>
              <span className="text-[10px] text-white/95 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded font-medium">
                Groin & Wall Strain
              </span>
            </div>
          </div>
        );
      case 'thyroid-ablation':
        return (
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src="/images/thyroid_ablation.jpg"
              alt="Woman touching throat tonsils and thyroid nodule discomfort"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="font-semibold text-cyan-200">Clinical Presentation</span>
              <span className="text-[10px] text-white/95 bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 rounded font-medium">
                Throat & Swallowing Strain
              </span>
            </div>
          </div>
        );
      case 'kidney-stones':
        return (
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src="/images/kidney_stones.webp"
              alt="Symptoms of kidney stones and acute flank renal colic"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="font-semibold text-sky-200">Clinical Presentation</span>
              <span className="text-[10px] text-white/95 bg-sky-950/80 border border-sky-500/40 px-2 py-0.5 rounded font-medium">
                Renal Colic & Flank Pain
              </span>
            </div>
          </div>
        );
      case 'varicose-veins':
        return (
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src="/images/varicose_veins.webp"
              alt="Varicose veins on leg and chronic venous insufficiency"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="font-semibold text-teal-200">Clinical Presentation</span>
              <span className="text-[10px] text-white/95 bg-teal-950/80 border border-teal-500/40 px-2 py-0.5 rounded font-medium">
                Venous Reflux & Bulge
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onSelect(disease.route)}
      className="group relative bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-lg hover:-translate-y-1 cursor-pointer select-none"
    >
      {/* Decorative Top Accent Strip */}
      <div className={`h-1 w-full ${disease.accentBg}`} />

      {/* Card Header & Metadata */}
      <div className="p-4 sm:p-7 space-y-2.5 sm:space-y-4">
        {/* Unboxed Metadata: Discipline Rule */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
          <span className="text-teal-700 font-bold">{disease.specialty}</span>
          <span aria-hidden="true">·</span>
          <span>{disease.stats[0]?.value}</span>
          <span aria-hidden="true">·</span>
          <span>Daycare</span>
        </div>

        {/* Primary Title */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-0.5 sm:mb-1 group-hover:text-teal-700 transition-colors">
            {disease.name}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-500">
            {disease.medicalTerm}
          </p>
        </div>

        {/* Visual Graphic Theater - Comfortable height on mobile */}
        <div className="w-full h-32 sm:h-38 rounded-xl border border-slate-100 flex items-center justify-center relative overflow-hidden transition-colors p-0 bg-slate-900 shadow-xs">
          <div className="w-full h-full">
            {renderVisual()}
          </div>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-2 sm:line-clamp-3 text-justify [text-align:justify] [text-justify:inter-word]">
          {disease.summary}
        </p>

        {/* Core Advantages List - Shown on laptop / desktop */}
        <div className="hidden sm:block space-y-1.5 pt-1 border-t border-slate-100">
          {disease.overviewPoints.slice(0, 2).map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
              <span className="line-clamp-1">{pt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors group-hover:translate-x-0.5 duration-200">
          <span>Explore Clinic</span>
          <ArrowRight className="w-4 h-4" />
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickBook(disease.id);
          }}
          className="px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:text-slate-900 rounded-lg sm:rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          Book Slot
        </button>
      </div>
    </div>
  );
};
