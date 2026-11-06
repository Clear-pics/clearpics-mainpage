import React, { useState } from 'react';
import {
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  MessageCircle,
  FileText,
  User,
  HeartHandshake,
  Mail
} from 'lucide-react';
import { WHATSAPP_PHONE_NUMBER } from './WhatsAppChat';
import { DISEASES } from '../data/diseases';
import { DiseaseId } from '../types';

export const WhatsAppSection: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseId | 'insurance' | 'general'>('varicose-veins');
  const [patientName, setPatientName] = useState('');
  const [patientCity, setPatientCity] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');

  const conditionLabels: Record<string, string> = {
    'varicose-veins': 'Varicose Veins (EVLA Laser & Glue)',
    'gallbladder-stones': 'Gallbladder Stones (3D Keyhole)',
    'hernia': 'Hernia Repair (3D Mesh Keyhole)',
    'thyroid-ablation': 'Thyroid Ablation (Scarless RFA)',
    'kidney-stones': 'Kidney Stones (No-Cut Laser RIRS)',
    'piles': 'Piles (Laser Hemorrhoidoplasty)',
    'insurance': 'Cashless Insurance & Pre-Auth',
    'general': 'Doctor Consultation & General Inquiry'
  };

  const getGeneratedMessage = () => {
    let msg = `Hello ClearPix Surgical Desk,\n`;
    if (patientName.trim()) {
      msg += `My Name: ${patientName.trim()}\n`;
    }
    if (patientCity.trim()) {
      msg += `Location: ${patientCity.trim()}\n`;
    }
    msg += `Inquiry Topic: ${conditionLabels[selectedDisease] || 'Surgical Care'}\n`;
    if (customQuestion.trim()) {
      msg += `Details: ${customQuestion.trim()}\n`;
    } else {
      msg += `Details: I would like to schedule a specialist consultation and understand the daycare laser procedure & cashless insurance process.\n`;
    }
    return msg;
  };

  const currentMessage = getGeneratedMessage();
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(currentMessage)}`;

  return (
    <section id="whatsapp-desk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-gradient-to-br from-[#075E54] via-[#0b6b60] to-[#128C7E] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        
        {/* Ambient WhatsApp Background Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: WhatsApp Introduction (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-200">
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-[#25D366]" aria-hidden="true">
                <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.3-.4.3-.7.1a9.5 9.5 0 0 1-2.8-1.7 10.5 10.5 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.3 17.3 0 0 0 6.6 5.8c.8.4 1.5.6 2 .8a4.8 4.8 0 0 0 2.2.1 3.6 3.6 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.1-.3-.2-.6-.4z"/>
              </svg>
              <span>Instant WhatsApp Coordination</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Connect Directly with our Surgical Desk on WhatsApp
              </h2>
              <p className="mt-3 text-sm text-emerald-100 leading-relaxed font-normal">
                Skip long call queues. Chat directly with a surgical care coordinator on our verified WhatsApp line for immediate guidance.
              </p>
            </div>

            {/* Key Advantages */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Fast Response Guarantee</strong>
                  <span className="text-emerald-100/90">Typically answered in under 5 minutes by our medical coordination team.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Confidential Report Sharing</strong>
                  <span className="text-emerald-100/90">Send ultrasound scans, Doppler studies, or past prescriptions securely.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Instant Cashless Verification</strong>
                  <span className="text-emerald-100/90">Share your health insurance card for same-day pre-authorization.</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp and Email Callout Beside Each Other */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 transition-all shadow-lg hover:shadow-emerald-900/40 cursor-pointer"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-slate-950" aria-hidden="true">
                  <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.3-.4.3-.7.1a9.5 9.5 0 0 1-2.8-1.7 10.5 10.5 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.3 17.3 0 0 0 6.6 5.8c.8.4 1.5.6 2 .8a4.8 4.8 0 0 0 2.2.1 3.6 3.6 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.1-.3-.2-.6-.4z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:raghunandana.mg@gmail.com?subject=ClearPix%20Consultation%20Inquiry"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold text-white bg-slate-950/60 hover:bg-slate-950 border border-emerald-300/40 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>Email: raghunandana.mg@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Composer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-white/20 space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#075E54]">
                    <MessageCircle className="w-4 h-4 text-[#075E54]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-none">
                      Interactive WhatsApp Message Composer
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Connected to: <strong className="text-emerald-700">ClearPix Surgical Desk</strong>
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                  Ready to send
                </span>
              </div>

              {/* Step 1: Select Condition */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  1. Select Condition or Inquiry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(conditionLabels).map(([key, label]) => {
                    const isSelected = selectedDisease === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedDisease(key as any)}
                        className={`text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#075E54] bg-[#075E54] text-white font-semibold shadow-xs'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/70 hover:bg-slate-50'
                        }`}
                      >
                        <span className="block truncate font-medium">{label.split('(')[0]}</span>
                        <span className={`text-[10px] block truncate ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                          {label.includes('(') ? label.split('(')[1].replace(')', '') : 'Inquiry'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Patient Name & City (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    2. Patient Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Your name"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Location (Optional)
                  </label>
                  <input
                    type="text"
                    value={patientCity}
                    onChange={(e) => setPatientCity(e.target.value)}
                    placeholder="e.g. Bangalore, Delhi, Mumbai"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366]"
                  />
                </div>
              </div>

              {/* Step 3: Specific Question */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  3. Your Question or Symptom (Optional)
                </label>
                <textarea
                  rows={2}
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="e.g. Can I walk immediately after surgery? Does Star Health cover laser piles treatment?"
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] resize-none"
                />
              </div>

              {/* Message Preview Box */}
              <div className="p-3.5 rounded-xl bg-[#ECE5DD] border border-[#d5ccbf] text-xs font-sans space-y-1 relative">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>WhatsApp Message Preview:</span>
                  <span className="text-[#075E54] font-semibold">Recipient: ClearPix Surgical Desk</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-slate-800 text-[11px] leading-relaxed shadow-2xs font-mono whitespace-pre-wrap border border-slate-200">
                  {currentMessage}
                </div>
              </div>

              {/* Submit / Open WhatsApp Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 text-center sm:text-left">
                  Clicking will open WhatsApp app or web directly with pre-filled text.
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
