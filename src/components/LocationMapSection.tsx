import React from 'react';
import {
  MapPin,
  Navigation,
  Mail,
  ExternalLink,
  Building2
} from 'lucide-react';
import { WHATSAPP_PHONE_NUMBER } from './WhatsAppChat';

export const OFFICIAL_CONTACT_EMAIL = 'raghunandana.mg@gmail.com';
export const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/nrL6qanr2h8FqGcX8';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="locations" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-10 lg:p-12 shadow-sm space-y-8 sm:space-y-10 overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs sm:text-sm font-bold text-teal-700 uppercase tracking-wider block">
                Hospital Network & Locations
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Location on Google Maps
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed text-justify [text-align:justify] [text-justify:inter-word]">
              ClearPix coordinates specialized daycare surgical procedures and consultations at our headquarters and partner facilities.
            </p>
          </div>

          {/* Header Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Mail beside WhatsApp */}
            <a
              href={`mailto:${OFFICIAL_CONTACT_EMAIL}?subject=ClearPix%20Location%20and%20Consultation%20Inquiry`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-teal-200 bg-teal-50 hover:bg-teal-100 text-teal-900 font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4 text-teal-700" />
              <span>Email: {OFFICIAL_CONTACT_EMAIL}</span>
            </a>

            {/* Direct Google Maps Link */}
            <a
              href={GOOGLE_MAPS_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Navigation className="w-4 h-4 text-teal-300" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Main 2-Column Grid: Google Maps Iframe & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column (7 cols): Embedded Live Google Maps */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-[360px] sm:h-[420px] lg:h-full w-full bg-slate-100 relative group">
              <iframe
                title="ClearPix Bengaluru Headquarters on Google Maps"
                src="https://maps.google.com/maps?q=12.8839687,77.5514194&hl=en&z=16&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Direct Overlay Action */}
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href={GOOGLE_MAPS_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg border border-slate-200 transition-all cursor-pointer active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-700" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Location Details & Contact Us */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Primary Address & Care Desk Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white border border-slate-800 shadow-lg space-y-5 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase font-bold text-teal-400 tracking-wider">
                    Company Headquarters & Care Desk
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-mono font-bold">
                    Verified Location
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    ClearPix Healthcare Technologies
                  </h3>
                  <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                    Kanakapura Road, Narayana Nagar, Bengaluru, Karnataka 560062
                  </p>
                  
                  <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-teal-300 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      <span>GPS: 12.8839687° N, 77.5514194° E</span>
                    </span>
                    <a
                      href={GOOGLE_MAPS_LOCATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors shadow-xs"
                    >
                      <span>Open Maps Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Additional Facilities Badge */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-teal-300 font-semibold">
                    <Building2 className="w-4 h-4" />
                    <span>Specialized Surgical Care Coordination</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify [text-align:justify] [text-justify:inter-word]">
                    Consultations, diagnostics, pre-authorization, and post-op follow-ups across partner network centres.
                  </p>
                </div>
              </div>

              {/* Direct Mail & WhatsApp Beside Each Other */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5 text-xs">
                
                {/* 1. Official Email */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block font-medium">Official Contact Email</span>
                      <a
                        href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
                        className="text-xs font-bold text-white hover:text-teal-300 underline block truncate"
                      >
                        {OFFICIAL_CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
                    className="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-[10px] font-bold shrink-0 transition-colors"
                  >
                    Email Us
                  </a>
                </div>

                {/* 2. Official WhatsApp */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
                        <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.3-.4.3-.7.1a9.5 9.5 0 0 1-2.8-1.7 10.5 10.5 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.3 17.3 0 0 0 6.6 5.8c.8.4 1.5.6 2 .8a4.8 4.8 0 0 0 2.2.1 3.6 3.6 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.1-.3-.2-.6-.4z"/>
                      </svg>
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block font-medium">WhatsApp Helpline</span>
                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=Hello%20ClearPix%2C%20I%20would%20like%20to%20inquire%20about%20hospital%20locations.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-white hover:text-emerald-300 underline block truncate"
                      >
                        +91 76195 90444
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=Hello%20ClearPix%2C%20I%20would%20like%20to%20inquire%20about%20hospital%20locations.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-lg text-[10px] font-bold shrink-0 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
