import React from 'react';
import { DOCTORS } from '../../data/doctors';
import { Award, ShieldCheck, Stethoscope, Star } from 'lucide-react';

interface PortalFacultySectionProps {
  onOpenBooking: () => void;
}

export const PortalFacultySection: React.FC<PortalFacultySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="faculty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24">
      
      {/* Section Header matching Meridian Vascular */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.14em] font-semibold text-[#9E4733] mb-1">
            <Stethoscope className="w-3.5 h-3.5 text-[#9E4733]" />
            <span>Clinical Faculty & Editorial Advisory</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F4E46] tracking-tight">
            Consultant Surgical Specialists
          </h2>
          <p className="text-xs sm:text-sm text-[#52605B] mt-1.5 max-w-2xl font-sans leading-relaxed">
            Clinical curators and fellowship-trained surgical leads overseeing photographic validation, CEAP mapping, and diagnostic criteria across all modules.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#52605B]">
          <span className="w-2 h-2 rounded-full bg-[#2E6E62]" />
          <span>5 Board-Certified Faculty</span>
        </div>
      </div>

      {/* Grid of Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOCTORS.map((doc) => (
          <div
            key={doc.id}
            className="group bg-white rounded-3xl border border-[#E5DFD5] p-5 shadow-2xs hover:shadow-md hover:border-[#2E6E62]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Doctor Photo Container with Hover Zoom */}
              <div className="relative w-full aspect-[4/4.5] overflow-hidden rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] mb-4">
                {doc.imageUrl ? (
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#FAF7F2] text-[#1F4E46]">
                    <Stethoscope className="w-12 h-12 opacity-40" />
                  </div>
                )}

                {/* Ambient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-[#1F4E46] shadow-xs">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{doc.rating}</span>
                </div>

                {/* Surgery Count Tag */}
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono drop-shadow-xs">
                  <span className="text-emerald-300 font-bold">{doc.surgeriesCount}+</span>
                  <span className="text-white/80 text-[11px] ml-1">Procedures</span>
                </div>
              </div>

              {/* Name & Qualifications */}
              <div className="space-y-1 mb-3">
                <h3 className="font-serif text-lg font-bold text-[#1F4E46] leading-tight group-hover:text-[#2E6E62] transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs font-semibold text-[#9E4733] font-sans">
                  {doc.specialty}
                </p>
                <p className="text-[11px] text-[#52605B] font-mono leading-relaxed">
                  {doc.qualifications}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5DFD5] text-[11px] text-[#52605B] flex items-center justify-between font-mono mb-4">
                <span>{doc.hospital}</span>
                <span className="text-[#1F4E46] font-semibold">{doc.experienceYears}y exp</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={onOpenBooking}
              className="tap-tactile w-full py-2.5 px-4 rounded-full text-xs font-semibold text-[#1F4E46] bg-[#FAF7F2] hover:bg-[#1F4E46] hover:text-white border border-[#E5DFD5] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <span>Consultation Briefing</span>
              <span>→</span>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};
