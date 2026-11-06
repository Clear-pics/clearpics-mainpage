import React from 'react';
import { X, BookOpen } from 'lucide-react';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationModal: React.FC<DocumentationModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const stagingCheatSheets = [
    {
      system: 'CEAP Classification (Venous Disease)',
      governingBody: 'American Venous Forum & European Venous Forum',
      description: 'The global standard for describing chronic venous disorders, stratified from C0 (subclinical) to C6 (active venous ulceration).',
      levels: [
        'C0: No visible or palpable signs of venous disease',
        'C1: Telangiectasias or reticular veins (< 3mm)',
        'C2: Varicose veins (≥ 3mm in upright standing position)',
        'C3: Venous edema without skin changes',
        'C4a/b: Pigmentation, eczema, lipodermatosclerosis, atrophie blanche',
        'C5: Healed venous ulceration with cicatrix',
        'C6: Active, open chronic venous leg ulcer'
      ]
    },
    {
      system: 'Wells Clinical Scoring (DVT)',
      governingBody: 'American College of Chest Physicians (ACCP)',
      description: 'Pretest probability model for suspected lower extremity deep vein thrombosis, prioritizing bilateral duplex ultrasound.',
      levels: [
        'Active cancer treatment within 6 months (+1 pt)',
        'Paralysis, paresis, or recent limb plaster cast (+1 pt)',
        'Bedridden > 3 days or major surgery within 12 weeks (+1 pt)',
        'Localized tenderness along deep venous system (+1 pt)',
        'Entire leg swollen (+1 pt)',
        'Calf swelling > 3cm compared to asymptomatic side (+1 pt)',
        'Alternative diagnosis at least as likely as DVT (-2 pts)'
      ]
    },
    {
      system: 'Wagner-Meggitt Classification (Diabetic Wounds)',
      governingBody: 'International Working Group on the Diabetic Foot',
      description: 'Assesses depth and presence of osteomyelitis/gangrene for diabetic foot ulcerations.',
      levels: [
        'Grade 0: Intact skin with bony deformity or hyperkeratosis',
        'Grade 1: Superficial ulceration not involving subcutaneous tissue',
        'Grade 2: Deep ulcer penetration to tendon, joint capsule or ligament',
        'Grade 3: Deep ulcer with cellulitis, abscess, or osteomyelitis',
        'Grade 4: Forefoot gangrene (dry or wet)',
        'Grade 5: Extensive foot gangrene requiring major amputation'
      ]
    },
    {
      system: 'Fontaine Staging (Peripheral Artery Disease)',
      governingBody: 'Society for Vascular Surgery (SVS)',
      description: 'Stratifies lower limb ischemia from silent stenosis to critical limb-threatening ischemia.',
      levels: [
        'Stage I: Asymptomatic arterial stenosis with reduced pulse index',
        'Stage IIa: Intermittent claudication walking distance > 200m',
        'Stage IIb: Disabling claudication walking distance < 200m',
        'Stage III: Ischemic rest pain, especially during recumbency',
        'Stage IV: Ulceration, tissue necrosis, or gangrenous breakdown'
      ]
    }
  ];

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
            <div className="w-10 h-10 rounded-2xl bg-[#1F4E46] flex items-center justify-center text-white shadow-2xs">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] font-semibold text-[#9E4733] block">
                Clinical Reference Guide
              </span>
              <h2 className="font-serif text-base sm:text-lg font-bold text-[#1F4E46] tracking-tight">
                Validated Clinical Staging Standards
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-xs text-[#52605B] leading-relaxed font-sans">
            All clinical atlases hosted within <strong>MedAtlas Hub</strong> are calibrated strictly against peer-reviewed international consensus guidelines. Here is an index of the primary diagnostic rubrics incorporated:
          </p>

          <div className="space-y-4">
            {stagingCheatSheets.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-serif text-sm font-bold text-[#1F4E46]">{item.system}</h3>
                  <span className="text-[11px] font-mono text-[#9E4733] font-semibold">
                    {item.governingBody}
                  </span>
                </div>
                <p className="text-xs text-[#52605B] leading-relaxed">{item.description}</p>
                <ul className="space-y-1.5 pt-2 border-t border-[#E5DFD5]">
                  {item.levels.map((lvl, lIdx) => (
                    <li key={lIdx} className="text-xs text-[#1A2421] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E46] shrink-0 mt-1.5" />
                      <span>{lvl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] text-xs text-[#52605B] space-y-1">
            <span className="font-mono font-semibold text-[#9E4733] uppercase text-[10px] tracking-wider block">Educational Disclaimer</span>
            <p className="text-[11px] leading-relaxed">
              The grading rubrics and photography in this visual directory are intended solely for healthcare professional reference, medical trainees, and patient clinical counseling.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#E5DFD5] flex items-center justify-end">
          <button
            onClick={onClose}
            className="tap-tactile py-2.5 px-6 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] transition-colors cursor-pointer shadow-xs"
          >
            Close Documentation
          </button>
        </div>

      </div>
    </div>
  );
};
