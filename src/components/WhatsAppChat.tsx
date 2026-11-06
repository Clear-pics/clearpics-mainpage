import React, { useState } from 'react';
import { X, Send, Check, CheckCheck, Phone, ShieldCheck, ChevronRight, Mail } from 'lucide-react';
import { DiseaseId } from '../types';

export const WHATSAPP_PHONE_NUMBER = '917619590444';
export const OFFICIAL_EMAIL_ADDRESS = 'raghunandana.mg@gmail.com';

interface WhatsAppChatProps {
  preselectedDiseaseId?: DiseaseId;
}

export const WhatsAppChat: React.FC<WhatsAppChatProps> = ({ preselectedDiseaseId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedQuickQuery, setSelectedQuickQuery] = useState<string | null>(null);

  const quickQueries = [
    { label: '🩺 Book Surgical Consultation', text: 'Hi ClearPix, I would like to schedule a specialist consultation for day-care surgery.' },
    { label: '💳 Check Cashless Insurance', text: 'Hi ClearPix, I want to check cashless health insurance coverage and pre-authorization for surgery.' },
    { label: '🦵 Varicose Veins Laser / EVLA', text: 'Hi, I need details on Varicose Veins EVLA laser ablation, consultation slots, and insurance.' },
    { label: '🪨 Gallbladder Stones Keyhole', text: 'Hi, I am looking for 3D keyhole laparoscopic surgery for gallbladder stones.' },
    { label: '🛡️ Hernia 3D Mesh Repair', text: 'Hi, I would like to know about laparoscopic 3D mesh repair for hernia.' },
    { label: '🦋 Thyroid RFA Scarless Ablation', text: 'Hi, I want to consult for scarless ultrasound-guided thyroid nodule ablation.' },
    { label: '⚡ Kidney Stones Laser RIRS', text: 'Hi, I want to consult a urologist regarding no-cut laser RIRS stone dusting.' },
    { label: '🩹 Piles Laser Treatment', text: 'Hi, I would like information regarding 1470nm laser treatment for piles and recovery timeline.' },
    { label: '📋 Share Ultrasound / Doppler Reports', text: 'Hi ClearPix team, I have ultrasound/Doppler scan reports that I would like a doctor to review.' }
  ];

  const handleSelectQuery = (text: string) => {
    setSelectedQuickQuery(text);
    setMessage(text);
  };

  const getWhatsAppUrl = (customText?: string) => {
    const textToSend = customText || message || 'Hello ClearPix Healthcare, I would like to inquire about day-care surgery.';
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(textToSend)}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent('ClearPix Healthcare Consultation Inquiry');
    const body = encodeURIComponent(message || 'Hello ClearPix Healthcare,\n\nI would like to inquire regarding specialist consultation and day-care surgery.');
    return `mailto:${OFFICIAL_EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Floating Action Buttons (WhatsApp & Mail Beside Each Other) */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        {/* Circular WhatsApp Action Launcher Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer relative overflow-hidden border-2 border-white/90 bg-[#25D366] hover:bg-[#20bd5a] hover:scale-105 shadow-[#25D366]/40 ${
            isOpen ? 'rotate-90' : ''
          }`}
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          title="Chat with ClearPix on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* WhatsApp SVG Icon */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
                <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.3-.4.3-.7.1a9.5 9.5 0 0 1-2.8-1.7 10.5 10.5 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.3 17.3 0 0 0 6.6 5.8c.8.4 1.5.6 2 .8a4.8 4.8 0 0 0 2.2.1 3.6 3.6 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.1-.3-.2-.6-.4z"/>
              </svg>
              {/* Online indicator dot */}
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full animate-pulse shadow-xs" />
            </div>
          )}
        </button>

        {/* Circular Mail Button Placed Beside WhatsApp */}
        <a
          href={getMailtoUrl()}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer relative overflow-hidden border-2 border-white/90 bg-teal-700 hover:bg-teal-800 hover:scale-105 shadow-teal-900/30 group"
          title={`Email Us: ${OFFICIAL_EMAIL_ADDRESS}`}
          aria-label={`Email ClearPix Healthcare at ${OFFICIAL_EMAIL_ADDRESS}`}
        >
          <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-cyan-300 border-2 border-white rounded-full shadow-xs" />
        </a>
      </div>

      {/* WhatsApp Chat Pop-up Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[550px] max-h-[82vh] bg-[#ECE5DD] rounded-3xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
          
          {/* WhatsApp Header */}
          <div className="px-4 py-3.5 bg-[#075E54] text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075E54] font-bold shadow-xs">
                {/* Coordinator Avatar */}
                <span className="text-base font-extrabold text-[#075E54]">CP</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold tracking-tight text-white leading-none">
                    ClearPix Care Desk
                  </h3>
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#25D366] text-white text-[9px] font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100 font-medium mt-0.5">
                  Verified Surgical Care Desk • Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-emerald-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Info Top Bar */}
          <div className="bg-[#128C7E] px-4 py-1.5 text-[11px] text-emerald-50 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Direct WhatsApp Care Coordination</span>
            </span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
              &lt; 5m reply
            </span>
          </div>

          {/* Chat Messages Body with WhatsApp pattern */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]">
            
            {/* Timestamp Badge */}
            <div className="text-center my-1">
              <span className="text-[10px] font-semibold bg-white/80 text-slate-600 px-2.5 py-0.5 rounded-md shadow-2xs font-mono uppercase">
                TODAY
              </span>
            </div>

            {/* Coordinator Welcome Message */}
            <div className="flex flex-col items-start">
              <div className="bg-white rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-800 shadow-sm max-w-[90%] space-y-2 border border-slate-100">
                <p className="font-semibold text-slate-900 leading-snug">
                  👋 Hello! Welcome to ClearPix Healthcare.
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  I am your dedicated surgical coordinator. Messages sent here connect directly to our care team on WhatsApp.
                </p>
                <div className="pt-1 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <p className="font-medium text-slate-800">We assist you with:</p>
                  <ul className="space-y-0.5 text-slate-600 list-disc list-inside">
                    <li>Varicose Veins, Gallbladder, Hernia, Thyroid, Kidney Stones, Piles</li>
                    <li>100% Cashless Insurance Verification</li>
                    <li>Doctor availability & instant appointment booking</li>
                    <li>Diagnostic Doppler / Ultrasound review</li>
                  </ul>
                </div>
                <div className="text-[9px] text-right text-slate-400 flex items-center justify-end gap-1 pt-0.5 font-mono">
                  <span>Just now</span>
                  <CheckCheck className="w-3.5 h-3.5 text-sky-500" />
                </div>
              </div>
            </div>

            {/* Quick-Prompt Question Chips */}
            <div className="space-y-1.5 pt-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
                Frequently Inquired Topics:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickQueries.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectQuery(q.text)}
                    className="text-[11px] text-left bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 px-2.5 py-1.5 rounded-xl border border-slate-200/90 shadow-2xs transition-colors cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Chat Input Bar */}
          <div className="p-3 bg-[#F0F2F5] border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message to WhatsApp..."
                className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] text-slate-900 placeholder:text-slate-400"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    const link = document.createElement('a');
                    link.href = getWhatsAppUrl();
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.click();
                  }
                }}
              />

              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href={getMailtoUrl()}
                  className="p-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white transition-colors cursor-pointer shadow-sm flex items-center justify-center"
                  title={`Send via Email to ${OFFICIAL_EMAIL_ADDRESS}`}
                  aria-label="Send via Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors cursor-pointer shadow-sm flex items-center justify-center"
                  title="Send message to WhatsApp"
                  aria-label="Send to WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-600">
              <a
                href={getMailtoUrl()}
                className="text-teal-800 hover:text-teal-950 font-bold underline flex items-center gap-1"
              >
                <Mail className="w-3 h-3 text-teal-700" />
                <span>{OFFICIAL_EMAIL_ADDRESS}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#075E54] hover:text-[#128C7E] font-bold underline flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
