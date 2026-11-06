import React, { useState } from 'react';
import { AboutUsSection } from '../components/AboutUsSection';
import { FounderDetailsView } from '../components/FounderDetailsView';
import { DiseaseCard } from '../components/DiseaseCard';
import { ServicesOfferedSection } from '../components/ServicesOfferedSection';
import { GallerySection } from '../components/GallerySection';
import { LocationMapSection } from '../components/LocationMapSection';
import { ScheduleAppointmentSection } from '../components/ScheduleAppointmentSection';
import { DISEASES } from '../data/diseases';
import { DiseaseId } from '../types';
import { ArrowDown, Calendar } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (diseaseId?: DiseaseId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [showAboutFounder, setShowAboutFounder] = useState(false);

  // 6 diseases strictly in order: Varicose veins first, down to Piles last
  const diseaseList = Object.values(DISEASES);

  const scrollToSchedule = () => {
    const el = document.getElementById('schedule-appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
  };

  // If user clicked "Know More" or navigated to About Founder details view
  if (showAboutFounder) {
    return (
      <FounderDetailsView
        onBackToHome={() => {
          setShowAboutFounder(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={onOpenBooking}
      />
    );
  }

  return (
    <div className="space-y-8 sm:space-y-20 pb-12 sm:pb-24">
      
      {/* =========================================================================
          SECTION 1 & 2: 
          1. Company Name and Space for Logo
          2. Tagline: "Simplifying Speciality Care Through Digital Healthcare Solutions"
         ========================================================================= */}
      <section className="relative pt-4 sm:pt-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div 
          className="relative rounded-2xl sm:rounded-3xl border border-teal-500/30 py-10 sm:py-28 px-4 sm:px-12 shadow-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/doctor_portal_bg.jpg'), url('https://i.pinimg.com/736x/43/82/63/43826303f06f149fa2d63d1e29815d56.jpg')` }}
        >
          
          {/* Balanced gradient overlay so 3D stethoscope, heart, microscope, and pills pop while text stays crisp */}
          <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-slate-950/35 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-3.5 sm:space-y-6">
            
            {/* 1. Company Name */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                ClearPix Healthcare
              </h1>
            </div>

            {/* 2. Tagline: Exactly as requested */}
            <div className="pt-1 sm:pt-2 max-w-3xl mx-auto">
              <p className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-teal-300 tracking-tight leading-tight text-balance drop-shadow-sm">
                “Simplifying Speciality Care Through Digital Healthcare Solutions”
              </p>
            </div>

            {/* Navigation Anchor Triggers - Sized bigger for mobile clarity */}
            <div className="pt-3 sm:pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="#about-us"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>About Us</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#services-offered"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Services</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#specialized-surgeries"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Specialties</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#gallery-section"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Gallery</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#locations"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Locations</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>

              <button
                onClick={scrollToSchedule}
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-500 active:scale-95 transition-all shadow-lg shadow-teal-950/40 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Appointment</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: About Us (ClearPix Teleradiology Pvt. Ltd.)
          Placed strictly before Services Offered
         ========================================================================= */}
      <AboutUsSection onKnowMore={() => {
        onNavigate('/about-us');
      }} />

      {/* =========================================================================
          SECTION 3: Services Offered Section
         ========================================================================= */}
      <ServicesOfferedSection onScheduleClick={scrollToSchedule} />

      {/* =========================================================================
          SECTION 4: Actual Disease Section
          (Strictly 6 diseases: Varicose veins first, down to Piles last)
         ========================================================================= */}
      <section id="diseases" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="mb-4 sm:mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-slate-200/70">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-0.5 sm:mb-1">
              Clinical Conditions
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Surgical Specialties
            </h2>
            <p className="text-[11px] sm:text-sm text-slate-600 mt-0.5 sm:mt-1 max-w-xl">
              Specialized day-care clinical portals with full diagnostic criteria, advanced laser and laparoscopic options, and doctor consultations.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>6 Conditions</span>
            <span>•</span>
            <span>Day-Care Capable</span>
          </div>
        </div>

        {/* 6 Cards Grid (Varicose veins on top, down to Piles last) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {diseaseList.map((disease) => (
            <DiseaseCard
              key={disease.id}
              disease={disease}
              onSelect={onNavigate}
              onQuickBook={(id) => {
                const el = document.getElementById('schedule-appointment');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenBooking(id);
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Doctor & Clinical Photo Gallery Section
         ========================================================================= */}
      <GallerySection />

      {/* =========================================================================
          SECTION 6: Hospital Locations & Google Maps GPS Reference
         ========================================================================= */}
      <LocationMapSection />

      {/* =========================================================================
          SECTION 7: Finally Schedule Appointment Section
         ========================================================================= */}
      <ScheduleAppointmentSection
        onSuccessBooking={(bookingId) => {
          // Success handled in section
        }}
      />

    </div>
  );
};
