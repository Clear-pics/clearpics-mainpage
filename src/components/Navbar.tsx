import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { DiseaseId } from '../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (diseaseId?: DiseaseId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Varicose Veins', path: '/varicose-veins' },
    { label: 'Gallbladder', path: '/gallbladder-stones' },
    { label: 'Hernia', path: '/hernia' },
    { label: 'Thyroid', path: '/thyroid-ablation' },
    { label: 'Kidney', path: '/kidney-stones' },
    { label: 'Piles', path: '/piles' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="group flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity cursor-pointer"
        >
          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white text-lg font-black shadow-md">
            C
          </span>
          <span className="font-extrabold tracking-tight">ClearPix</span>
        </button>

        {/* Zone 2: Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleLinkClick('/')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPath === '/' || currentPath === '/surgical' ? 'text-teal-700 font-bold border-b-2 border-teal-600' : 'hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleLinkClick('/about-us')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPath === '/about-us' ? 'text-teal-700 font-bold border-b-2 border-teal-600' : 'hover:text-slate-900'
            }`}
          >
            About Us
          </button>
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                  isActive ? 'text-teal-700 font-bold border-b-2 border-teal-600' : 'hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              if (currentPath !== '/') {
                handleLinkClick('/');
                setTimeout(() => document.getElementById('services-offered')?.scrollIntoView({ behavior: 'smooth' }), 100);
              } else {
                document.getElementById('services-offered')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="whitespace-nowrap shrink-0 transition-colors py-1 hover:text-slate-900 cursor-pointer"
          >
            Services Offered
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile WhatsApp Quick Action */}
          <a
            href="https://wa.me/917619590444?text=Hello%20ClearPix%20Healthcare%2C%20I%20would%20like%20to%20inquire%20about%20daycare%20surgery."
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#25D366] hover:bg-emerald-500/20 active:scale-95 transition-all shadow-xs"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.3-.4.3-.7.1a9.5 9.5 0 0 1-2.8-1.7 10.5 10.5 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.3 17.3 0 0 0 6.6 5.8c.8.4 1.5.6 2 .8a4.8 4.8 0 0 0 2.2.1 3.6 3.6 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.1-.3-.2-.6-.4z"/>
            </svg>
          </a>

          {/* Desktop WhatsApp Direct Chat Pill */}
          <a
            href="https://wa.me/917619590444?text=Hello%20ClearPix%20Healthcare%2C%20I%20would%20like%20to%20inquire%20about%20daycare%20surgery."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-full transition-all shadow-xs whitespace-nowrap shrink-0"
            title="Chat on WhatsApp"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>WhatsApp</span>
          </a>

          {/* Desktop Email Direct Pill Beside WhatsApp */}
          <a
            href="mailto:raghunandana.mg@gmail.com?subject=ClearPix%20Healthcare%20Consultation%20Inquiry"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-full transition-all shadow-xs whitespace-nowrap shrink-0"
            title="Email: raghunandana.mg@gmail.com"
          >
            <Mail className="w-3.5 h-3.5 text-teal-700" />
            <span>Email</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-teal-700 active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger toggle with prominent touch area */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 sm:px-6 py-6 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('/')}
              className={`text-left py-3 px-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                currentPath === '/' || currentPath === '/surgical' ? 'text-teal-800 bg-teal-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Overview & All 6 Conditions
            </button>
            <button
              onClick={() => handleLinkClick('/about-us')}
              className={`text-left py-3 px-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                currentPath === '/about-us' ? 'text-teal-800 bg-teal-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us (Founder Details)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPath !== '/') {
                  handleLinkClick('/');
                  setTimeout(() => document.getElementById('services-offered')?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else {
                  document.getElementById('services-offered')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left py-3 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Services Offered
            </button>
            <div className="h-px bg-slate-200 my-2" />
            <div className="text-xs uppercase tracking-wider text-slate-500 font-bold px-3 mb-1">
              Specialized Care Portals
            </div>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-left py-2.5 px-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  currentPath === item.path ? 'text-teal-800 bg-teal-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">View Clinic →</span>
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 text-center text-base font-bold text-white bg-teal-700 rounded-xl hover:bg-teal-800 shadow-md active:scale-98 transition-all cursor-pointer"
              >
                Book Priority Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
