import React from 'react';
import { Activity, ShieldCheck, ExternalLink, Mail } from 'lucide-react';
import { PORTAL_MODULES } from '../../data/portalData';

interface PortalFooterProps {
  onOpenAccessModal: () => void;
  onOpenDocModal: () => void;
  onScrollToTop: () => void;
}

export const PortalFooter: React.FC<PortalFooterProps> = ({
  onOpenAccessModal,
  onOpenDocModal,
  onScrollToTop
}) => {
  return (
    <footer className="bg-[#1A2421] text-[#A3B0AA] border-t border-[#2A3834] mt-20 text-xs">
      
      {/* Top Advisory Bar */}
      <div className="border-b border-[#2A3834] bg-[#141C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-300 text-xs">
            <div className="w-8 h-8 rounded-xl bg-[#2E6E62]/20 border border-[#2E6E62]/40 flex items-center justify-center text-[#FAF7F2] shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#FAF7F2]" />
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">Peer-Reviewed Staging Standards</p>
              <p className="text-[11px] text-[#A3B0AA] font-mono">CEAP, Wells, Wagner, Fontaine, and TI-RADS clinical grading</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={onOpenDocModal}
              className="text-[#FAF7F2] hover:text-[#9E4733] font-semibold transition-colors cursor-pointer"
            >
              Clinical Grading Index →
            </button>
            <span className="text-[#3A4A45]">|</span>
            <button
              onClick={onOpenAccessModal}
              className="text-[#A3B0AA] hover:text-white font-semibold transition-colors cursor-pointer"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Purpose */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#2E6E62] flex items-center justify-center text-white shadow-xs">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                <path d="M6 4c0 0 2 6 7 9s7 7 7 7" stroke="#FAF7F2" />
                <circle cx="6" cy="4" r="2" fill="#9E4733" />
                <circle cx="20" cy="20" r="2" fill="#9E4733" />
              </svg>
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-tight">
              MedAtlas <span className="text-[#9E4733] font-normal italic">Hub</span>
            </span>
          </div>

          <p className="text-xs text-[#A3B0AA] leading-relaxed max-w-md font-sans">
            MedAtlas Hub aggregates high-resolution clinical visual guides, stage visualizers, and evidence-based diagnostic rubrics into an open educational repository for clinicians, residents, and healthcare educators.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-[#A3B0AA]">
            <Mail className="w-4 h-4 text-[#2E6E62] shrink-0" />
            <span>Official Clinical Inbox:</span>
            <a
              href="mailto:clearpix.telerad@gmail.com"
              className="text-white hover:text-emerald-300 underline font-semibold transition-colors"
            >
              clearpix.telerad@gmail.com
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-[#141C1A] border border-[#2A3834] text-[11px] text-[#A3B0AA] leading-relaxed">
            <strong className="text-white block mb-0.5 font-serif font-bold">Clinical Disclaimer:</strong>
            For informational and educational reference only. Not intended as a substitute for professional clinical diagnosis or direct medical consultation.
          </div>
        </div>

        {/* Directory Modules Index */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-white mb-3">
            Active Visual Atlases
          </h4>
          <ul className="space-y-2 text-[11px]">
            {PORTAL_MODULES.slice(0, 5).map((m) => (
              <li key={m.id}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate mr-2">{m.title}</span>
                  <ExternalLink className="w-3 h-3 text-[#52605B] group-hover:text-[#FAF7F2] shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Resources & Docs */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-white mb-3">
            Resources & Access
          </h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button
                onClick={onOpenDocModal}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                CEAP Staging Breakdown
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDocModal}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Wells Score & DVT Algorithm
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDocModal}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Wagner Diabetic Ulcer Matrix
              </button>
            </li>
            <li>
              <button
                onClick={() => document.getElementById('core-focus')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Our Core Business Focus
              </button>
            </li>
            <li>
              <button
                onClick={() => document.getElementById('patient-first')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                The Patient Comes First
              </button>
            </li>
            <li>
              <button
                onClick={() => document.getElementById('sustainable-business')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Sustainable Healthcare Business
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-[#2A3834] bg-[#121A17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A3B0AA] font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 MedAtlas Hub · Clinical Condition Directory</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenDocModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Clinical Guidelines
            </button>
            <button
              onClick={onOpenAccessModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy & Data Ethics
            </button>
            <button
              onClick={onScrollToTop}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer font-semibold"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
