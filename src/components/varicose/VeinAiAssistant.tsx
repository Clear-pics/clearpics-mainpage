import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  Bot,
  User,
  ShieldCheck,
  HelpCircle,
  Stethoscope,
  RefreshCw
} from 'lucide-react';
import { DiseaseId } from '../../types';

interface VeinAiAssistantProps {
  onOpenBooking: (diseaseId?: DiseaseId) => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  citations?: string[];
}

export const VeinAiAssistant: React.FC<VeinAiAssistantProps> = ({ onOpenBooking }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am ClearPix's specialized Vein Care Clinical Assistant. I can answer your questions regarding varicose vein symptoms, Endovenous Laser Ablation (EVLA), VenaSeal medical adhesive, recovery timelines, or insurance coverage. How can I help you today?",
      time: 'Just now',
      citations: ['NICE Guidelines CG168', 'American Venous Forum Standards']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Suggested prompt chips
  const suggestedPrompts = [
    'Is EVLA laser treatment painful?',
    'How soon can I walk after surgery?',
    'EVLA vs VenaSeal medical glue?',
    'Will health insurance cover laser treatment?',
    'Can varicose veins recur after laser?',
    'What happens if left untreated?'
  ];

  // Clinical answers dictionary
  const knowledgeBase: Record<string, { answer: string; citations: string[] }> = {
    'pain': {
      answer: "Endovenous Laser Ablation (EVLA) is performed under localized tumescent anesthesia. This means the entire treated vein is surrounded with a chilled numbing fluid barrier. You will not feel heat or pain during the 30-minute procedure. Mild tightness or a bruised sensation is common for 24-48 hours post-procedure, easily managed with simple over-the-counter pain relievers.",
      citations: ['Society for Vascular Surgery (SVS) Guidelines', 'Journal of Vascular Surgery']
    },
    'walk': {
      answer: "Walking is not only permitted—it is mandatory immediately after the procedure! Patients walk in the recovery lounge within 15 minutes of completion. Walking activates the calf muscle pump and ensures excellent deep venous return. You can return to desk work and routine non-strenuous daily activities the very next morning.",
      citations: ['European Venous Forum Guidelines', 'ClearPix Clinical Protocol']
    },
    'venaseal': {
      answer: "Both are gold-standard treatments. EVLA uses 1470nm laser thermal energy to collapse the vein, requiring local tumescent numbing and post-op compression stockings for 5-7 days. VenaSeal uses a medical bio-adhesive glue that seals the vein cold without heat, eliminating tumescent injections and requiring NO post-operative compression stockings at all.",
      citations: ['VeClose 5-Year Clinical Trial', 'USFDA Premarket Approval']
    },
    'insurance': {
      answer: "Yes, in over 95% of cases! When duplex Doppler ultrasound demonstrates documented venous reflux (blood flowing backwards > 0.5 seconds) accompanied by physical symptoms (swelling, aching, heaviness, or skin changes), the procedure is classified as medically necessary vascular surgery, NOT cosmetic. ClearPix coordinates 100% cashless insurance claims.",
      citations: ['ClearPix Insurance TPA Desk', 'Standard Health Policy Terms']
    },
    'recur': {
      answer: "The treated saphenous vein is permanently obliterated and absorbed by your body, so that specific vein can never reopen. The long-term recurrence rate after 1470nm radial laser ablation is under 2.3% across 5 years. Maintaining healthy weight and regular walking prevents new, unrelated veins from dilating in the future.",
      citations: ['5-Year Cochrane Systematic Review on Endovenous Ablation']
    },
    'untreated': {
      answer: "Varicose veins are a progressive vascular disease. Left untreated, chronic venous hypertension leads to worsening leg swelling, nocturnal cramps, brown skin staining (hemosiderin deposits), irreversible skin thickening (lipodermatosclerosis), and ultimately painful, non-healing venous leg ulcers (CEAP Stage C6).",
      citations: ['American College of Phlebology Consensus', 'NICE Clinical Guideline 168']
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulated medical reasoning latency
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matched = knowledgeBase['pain'];

      if (lower.includes('walk') || lower.includes('recovery') || lower.includes('downtime')) {
        matched = knowledgeBase['walk'];
      } else if (lower.includes('venaseal') || lower.includes('glue') || lower.includes('difference')) {
        matched = knowledgeBase['venaseal'];
      } else if (lower.includes('insurance') || lower.includes('cost') || lower.includes('cover') || lower.includes('cashless')) {
        matched = knowledgeBase['insurance'];
      } else if (lower.includes('recur') || lower.includes('back') || lower.includes('again')) {
        matched = knowledgeBase['recur'];
      } else if (lower.includes('untreated') || lower.includes('risk') || lower.includes('worse') || lower.includes('delay')) {
        matched = knowledgeBase['untreated'];
      } else {
        matched = {
          answer: `Regarding your query about "${text}": ClearPix protocol emphasizes non-invasive duplex venous ultrasound mapping first to identify reflux points in the Great or Small Saphenous Vein. Our senior vascular surgeons then customize either 1470nm radial laser ablation (EVLA) or VenaSeal adhesive closure. Both procedures take 30-40 minutes and require no hospitalization. Would you like to schedule an ultrasound evaluation?`,
          citations: ['ClearPix Vascular Clinical Guidelines', 'AVF Practice Recommendations']
        };
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: matched.answer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: matched.citations
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-teal-700 font-semibold uppercase tracking-wider mb-1">
            <Bot className="w-4 h-4" />
            <span>Interactive Vascular Consultant</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            ClearPix Vein AI Assistant
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            Ask any clinical question regarding laser ablation, symptoms, anesthesia, recovery, or insurance coverage.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200 self-start">
          <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
          <span>Evidence-Based Guidance</span>
        </div>
      </div>

      {/* Suggested Chips Bar */}
      <div>
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
          Frequently Inquired Topics:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {suggestedPrompts.map((prompt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(prompt)}
              className="text-xs bg-slate-50 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Frame */}
      <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed space-y-2 shadow-2xs ${
                m.sender === 'user'
                  ? 'bg-slate-900 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
              }`}
            >
              <p>{m.text}</p>

              {m.citations && m.citations.length > 0 && (
                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-teal-600 shrink-0" />
                  <span>Clinical References: {m.citations.join(' · ')}</span>
                </div>
              )}

              <div
                className={`text-[9px] text-right ${
                  m.sender === 'user' ? 'text-slate-400' : 'text-slate-400'
                }`}
              >
                {m.time}
              </div>
            </div>

            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-none p-3 border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
              <span>Synthesizing vascular clinical guidance...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputValue);
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question about varicose veins, EVLA laser, recovery..."
          className="flex-1 text-xs px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className="px-5 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-teal-700 disabled:opacity-40 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Footer Disclaimer & Booking Trigger */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
        <p>
          AI Demo Assistant for educational orientation. Does not constitute an official prescription.
        </p>
        <button
          onClick={() => onOpenBooking('varicose-veins')}
          className="text-teal-700 hover:text-teal-800 font-semibold whitespace-nowrap"
        >
          Speak with a Vascular Surgeon →
        </button>
      </div>

    </div>
  );
};
