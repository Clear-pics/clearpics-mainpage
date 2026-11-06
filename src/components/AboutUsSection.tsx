import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutUsSectionProps {
  onKnowMore: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onKnowMore }) => {
  return (
    <section id="about-us" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-10 lg:p-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Playable video requested by user */}
          <div className="lg:col-span-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Bv-J4XSRLx4?autoplay=1&mute=1&loop=1&playlist=Bv-J4XSRLx4&playsinline=1&rel=0"
                title="ClearPix Teleradiology Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column: Copy and Button styled to match current UI colors */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Kicker */}
            <div>
              <span className="text-sm sm:text-base font-bold text-teal-700 uppercase tracking-wider block">
                About
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-1.5 sm:mt-2">
                About ClearPix Teleradiology Pvt. Ltd.
              </h2>
            </div>

            {/* Exact Company Description - Justified Word Document Alignment */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal text-justify [text-align:justify] [text-justify:inter-word]">
              ClearPix aims to build a sustainable, patient-focused healthcare business through reliable hospital partnerships, efficient coordination, professional service standards, and technology-driven operations. Its core focus is surgical healthcare, including specialist consultations, hospital identification, treatment planning support, cost and financial coordination, pre-operative assistance, and post-operative follow-ups. The platform prioritises understanding patient needs, providing transparent information, respecting individual choices, protecting medical information, and maintaining clear communication. By establishing standard operating procedures, strengthening specialist networks, and expanding services based on demand, ClearPix seeks to improve healthcare accessibility while ensuring that all medical decisions and treatments remain under qualified healthcare professionals.
            </p>

            {/* Know More Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="button"
                onClick={onKnowMore}
                className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-teal-700 hover:bg-teal-800 active:scale-95 transition-all shadow-md shadow-teal-900/10 cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
