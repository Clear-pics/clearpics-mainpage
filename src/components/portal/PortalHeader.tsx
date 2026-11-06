import React, { useState } from 'react';
import {
  Activity,
  Layers,
  FileText,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

interface PortalHeaderProps {
  onOpenAccessModal: () => void;
  onOpenDocModal: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigate?: (path: string) => void;
  modulesCount: number;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({
  onOpenAccessModal,
  onOpenDocModal,
  activeSection,
  onNavigateSection,
  onNavigate,
  modulesCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FBF9F5]/90 border-b border-[#E5DFD5] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Left: Vascular Logo mark & Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-[#1F4E46] p-2 flex items-center justify-center text-white shadow-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <path d="M6 4c0 0 2 6 7 9s7 7 7 7" stroke="#FAF7F2" />
              <circle cx="6" cy="4" r="2" fill="#9E4733" />
              <circle cx="20" cy="20" r="2" fill="#9E4733" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold tracking-tight text-[#1F4E46]">
                MedAtlas <span className="text-[#9E4733] font-normal italic">Hub</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-[0.12em] font-semibold bg-[#9E4733]/10 text-[#9E4733] border border-[#9E4733]/20">
                Clinical Directory
              </span>
            </div>
            <p className="text-[11px] text-[#52605B] font-medium hidden xs:block font-sans">
              Indian Clinical Reference & Condition Visualizers
            </p>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#52605B] bg-white p-1 rounded-full border border-[#E5DFD5] shadow-2xs">
          <button
            onClick={() => handleNavClick('conditions-grid')}
            className={`tap-tactile px-4 py-2 rounded-full transition-all ${
              activeSection === 'conditions-grid'
                ? 'bg-[#1F4E46] text-white shadow-xs font-bold'
                : 'hover:text-[#1F4E46] hover:bg-[#FAF7F2]'
            }`}
          >
            Conditions Directory ({modulesCount})
          </button>
          <button
            onClick={() => handleNavClick('visual-atlas-preview')}
            className={`tap-tactile px-4 py-2 rounded-full transition-all ${
              activeSection === 'visual-atlas-preview'
                ? 'bg-[#1F4E46] text-white shadow-xs font-bold'
                : 'hover:text-[#1F4E46] hover:bg-[#FAF7F2]'
            }`}
          >
            Visual Atlas & CEAP
          </button>
          {onNavigate && (
            <button
              onClick={() => onNavigate('/surgical')}
              className="tap-tactile px-4 py-2 rounded-full text-[#1F4E46] bg-[#FAF7F2] hover:bg-[#1F4E46] hover:text-white transition-all font-semibold flex items-center gap-1.5"
            >
              <span>Surgical Care</span>
              <span className="text-[10px] text-[#9E4733] font-mono font-bold">6 Clinics</span>
            </button>
          )}
          <button
            onClick={onOpenDocModal}
            className="tap-tactile px-4 py-2 rounded-full hover:text-[#1F4E46] hover:bg-[#FAF7F2] transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#52605B]" />
            <span>Documentation</span>
          </button>
        </nav>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenAccessModal}
            className="hidden sm:inline-flex tap-tactile items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#1F4E46] hover:bg-[#073028] text-white rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FAF7F2]" />
            <span>Request Access / Feedback</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1F4E46] hover:bg-[#FAF7F2] rounded-full border border-[#E5DFD5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#E5DFD5] px-6 py-4 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('conditions-grid')}
              className="text-left py-2 px-3 rounded-xl text-xs font-semibold text-[#1F4E46] hover:bg-white flex items-center justify-between"
            >
              <span>Conditions Directory</span>
              <span className="text-[10px] font-mono bg-[#FAF7F2] text-[#1F4E46] border border-[#E5DFD5] px-2 py-0.5 rounded-full">{modulesCount} Modules</span>
            </button>
            <button
              onClick={() => handleNavClick('visual-atlas-preview')}
              className="text-left py-2 px-3 rounded-xl text-xs font-semibold text-[#1F4E46] hover:bg-white"
            >
              Visual Atlas & CEAP Progression
            </button>
            {onNavigate && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/surgical');
                }}
                className="text-left py-2 px-3 rounded-xl text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 flex items-center justify-between"
              >
                <span>ClearPix Surgical Care Overview</span>
                <span className="text-[10px] font-mono text-teal-700 font-bold">Daycare</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocModal();
              }}
              className="text-left py-2 px-3 rounded-xl text-xs font-semibold text-[#1F4E46] hover:bg-white"
            >
              Clinical Grading Systems & Docs
            </button>
            <div className="pt-2 border-t border-[#E5DFD5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccessModal();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold bg-[#1F4E46] text-white rounded-full shadow-xs flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Request Access & Clinical Feedback</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
