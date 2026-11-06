import React from 'react';
import { ShieldCheck, Award, Clock, ArrowRight, CheckCircle2, Mail } from 'lucide-react';

interface PortalCenterSectionProps {
  onOpenAccessModal: () => void;
}

export const PortalCenterSection: React.FC<PortalCenterSectionProps> = ({ onOpenAccessModal }) => {
  return (
    <section id="about-center" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <div className="bg-white rounded-3xl border border-[#E5DFD5] p-8 sm:p-12 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Text & Credentials (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E5DFD5] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2E6E62]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9E4733]">Daycare Surgical Center</span>
              <span className="text-[#E5DFD5]">·</span>
              <span className="font-mono text-[11px] text-[#52605B]">NABH Accredited Partner</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1F4E46] tracking-tight leading-tight">
                Center for Advanced Daycare Surgery & Clinical Visualization
              </h2>
              <p className="text-xs sm:text-sm text-[#52605B] leading-relaxed font-sans">
                ClearPix and MedAtlas Hub unify precision endovenous laser ablation (1470nm), 3D keyhole laparoscopy, and scarless ultrasound-guided radiofrequency ablation under a zero-hospitalization daycare framework.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6E62] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#1F4E46] block font-serif">4 to 6 Hour Discharge</strong>
                  <span className="text-[#52605B] leading-relaxed">Patients walk out comfortably the same day without prolonged hospital stays.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6E62] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#1F4E46] block font-serif">100% Cashless Pre-Auth</strong>
                  <span className="text-[#52605B] leading-relaxed">Accepted across Star Health, BlueCross, Aetna, Cigna, HDFC ERGO, and all TPAs.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6E62] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#1F4E46] block font-serif">USFDA-Approved Lasers</strong>
                  <span className="text-[#52605B] leading-relaxed">German radial fiber lasers and digital flexible ureteroscopes.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6E62] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#1F4E46] block font-serif">Peer-Reviewed Photographic Vault</strong>
                  <span className="text-[#52605B] leading-relaxed">High-resolution diagnostic plates aligned to international consensus staging.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={onOpenAccessModal}
                className="tap-tactile py-2.5 px-6 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Institutional Partner Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#52605B]">
                <Mail className="w-3.5 h-3.5 text-[#2E6E62] shrink-0" />
                <span>Desk:</span>
                <a
                  href="mailto:clearpix.telerad@gmail.com"
                  className="font-semibold text-[#1F4E46] hover:text-[#9E4733] underline transition-colors"
                >
                  clearpix.telerad@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Authentic Facility Image (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-md group cursor-pointer bg-slate-900">
              <img
                src="/images/about_us_facility.jpg"
                alt="ClearPix Advanced Surgical Facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#FAF7F2] font-semibold">
                  NABH ACCREDITED CENTER
                </span>
                <span className="text-xs font-mono font-bold bg-[#FAF7F2] text-[#1F4E46] px-2.5 py-0.5 rounded-full shadow-xs">
                  Day-Care Unit
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-0.5 text-white">
                <span className="text-xs font-mono text-emerald-300 font-semibold block">Center of Excellence</span>
                <h4 className="font-serif text-sm sm:text-base font-bold">Laminar Airflow Laser Theatres & Patient Lounge</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
