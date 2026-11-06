import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ShieldAlert,
  CalendarCheck,
  PhoneCall,
  Clock,
  ArrowRight,
  Maximize2,
  Minimize2,
  ChevronRight,
  RotateCcw,
  Stethoscope,
  ExternalLink,
  AlertTriangle,
  HeartPulse,
  Activity
} from 'lucide-react';
import { DiseaseId } from '../types';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
  isStreaming?: boolean;
  isEmergency?: boolean;
  suggestedRoute?: string;
  suggestedAction?: 'booking' | 'navigation' | 'emergency';
}

interface ChatBotProps {
  onOpenBooking: (diseaseId?: DiseaseId) => void;
  onNavigate: (route: string) => void;
}

const INITIAL_GREETING = "Hello! Welcome to ClearPix. I'm your AI healthcare assistant. I can help you explore our specialities, understand common health conditions, and find the right consultation pathway. How can I help you today?";

const SUGGESTED_STARTERS = [
  'Explore ClearPix Specialities',
  'I have a health-related question',
  'Learn about a medical condition',
  'Help me find the right speciality',
  'How do I book an appointment?'
];

const SPECIALITY_ROUTES: Record<string, { name: string; route: string; id: DiseaseId; description: string }> = {
  '/piles': {
    name: 'Piles (Haemorrhoids)',
    route: '/piles',
    id: 'piles',
    description: 'German 1470nm Laser Hemorrhoidoplasty with intact sphincter preservation.'
  },
  '/gallbladder-stones': {
    name: 'Gallbladder Stones',
    route: '/gallbladder-stones',
    id: 'gallbladder-stones',
    description: '3D Keyhole Laparoscopic Cholecystectomy with same-day walking.'
  },
  '/hernia': {
    name: 'Hernia',
    route: '/hernia',
    id: 'hernia',
    description: '3D Laparoscopic Anatomical Contoured Mesh Repair (TEP/TAPP).'
  },
  '/thyroid-ablation': {
    name: 'Thyroid Ablation',
    route: '/thyroid-ablation',
    id: 'thyroid-ablation',
    description: 'Scarless Ultrasound-Guided Radiofrequency Ablation (RFA).'
  },
  '/kidney-stones': {
    name: 'Kidney Stones',
    route: '/kidney-stones',
    id: 'kidney-stones',
    description: 'No-cut Laser RIRS Holmium stone dusting through natural urinary tract.'
  },
  '/varicose-veins': {
    name: 'Varicose Veins',
    route: '/varicose-veins',
    id: 'varicose-veins',
    description: 'Endovenous Laser Ablation (EVLA) & VenaSeal medical adhesive.'
  }
};

// Formats inline Markdown bold (**text**), italics (*text*), links ([label](url)), headings (###)
const renderFormattedText = (text: string, onNavigate: (route: string) => void, onOpenBooking: (id?: DiseaseId) => void) => {
  // Split into paragraphs
  const paragraphs = text.split('\n\n');

  return (
    <div className="space-y-2.5">
      {paragraphs.map((para, pIdx) => {
        // Heading 3
        if (para.startsWith('### ')) {
          return (
            <h4 key={pIdx} className="font-bold text-slate-900 text-sm tracking-tight border-b border-slate-100 pb-1 mt-1">
              {para.replace('### ', '')}
            </h4>
          );
        }

        // Bullet lines
        if (para.includes('\n• ') || para.startsWith('• ') || para.includes('\n- ') || para.startsWith('- ')) {
          const lines = para.split('\n');
          return (
            <ul key={pIdx} className="space-y-1.5 my-1 pl-1">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();
                if (!cleanLine) return null;
                return (
                  <li key={lIdx} className="flex items-start gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span className="flex-1 leading-relaxed">
                      {parseInlineFormatting(cleanLine, onNavigate, onOpenBooking)}
                    </span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Numbered list
        if (/^\d+\.\s/.test(para)) {
          const lines = para.split('\n');
          return (
            <div key={pIdx} className="space-y-1.5 my-1 pl-1">
              {lines.map((line, lIdx) => (
                <div key={lIdx} className="flex items-start gap-2 text-slate-700">
                  <span className="font-semibold text-teal-700 text-xs shrink-0 mt-0.5">
                    {line.match(/^\d+\./)?.[0] || '•'}
                  </span>
                  <span className="flex-1 leading-relaxed">
                    {parseInlineFormatting(line.replace(/^\d+\.\s*/, ''), onNavigate, onOpenBooking)}
                  </span>
                </div>
              ))}
            </div>
          );
        }

        // Standard paragraph
        return (
          <p key={pIdx} className="leading-relaxed text-slate-700">
            {parseInlineFormatting(para, onNavigate, onOpenBooking)}
          </p>
        );
      })}
    </div>
  );
};

// Helper for bold, italic, and inline markdown links
const parseInlineFormatting = (
  text: string,
  onNavigate: (route: string) => void,
  onOpenBooking: (id?: DiseaseId) => void
) => {
  // Regex to match markdown links [label](url), bold **text**, and code/italics
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    // Markdown link: [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1];
      const url = linkMatch[2];
      const isInternal = url.startsWith('/');
      return (
        <button
          key={index}
          onClick={(e) => {
            e.preventDefault();
            if (isInternal) {
              onNavigate(url);
            } else {
              window.open(url, '_blank', 'noopener,noreferrer');
            }
          }}
          className="inline-flex items-center gap-1 font-semibold text-teal-700 underline decoration-teal-400 hover:text-teal-900 hover:decoration-teal-600 transition-colors mx-0.5 cursor-pointer"
        >
          <span>{label}</span>
          <ExternalLink className="w-3 h-3 inline-block" />
        </button>
      );
    }

    // Bold **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic *text*
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={index} className="italic text-slate-600">
          {part.slice(1, -1)}
        </em>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export const ChatBot: React.FC<ChatBotProps> = ({ onOpenBooking, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-greeting',
      role: 'assistant',
      content: INITIAL_GREETING,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  // Detect specialities or emergency in bot responses to render smart contextual action buttons
  const detectActions = (text: string) => {
    const lower = text.toLowerCase();
    let detectedRoute: string | undefined;
    let detectedEmergency = false;

    if (
      lower.includes('emergency') ||
      lower.includes('chest pain') ||
      lower.includes('breathing difficulty') ||
      lower.includes('call 911') ||
      lower.includes('dvt warning')
    ) {
      detectedEmergency = true;
    }

    for (const route of Object.keys(SPECIALITY_ROUTES)) {
      if (lower.includes(route) || lower.includes(SPECIALITY_ROUTES[route].name.toLowerCase())) {
        detectedRoute = route;
        break;
      }
    }

    return { detectedRoute, detectedEmergency };
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMessageId = `user-${Date.now()}`;
    const userMessage: Message = {
      id: userMessageId,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputText('');
    setIsLoading(true);

    const botMessageId = `assistant-${Date.now()}`;
    const placeholderBotMessage: Message = {
      id: botMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true
    };

    setMessages((prev) => [...prev, placeholderBotMessage]);

    try {
      // Build history for API
      const apiMessages = updatedHistory.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, stream: true })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      if (!res.body) {
        throw new Error('No readable stream available in response.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') {
              continue;
            }
            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.text) {
                accumulatedContent += parsed.text;
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, content: accumulatedContent, isStreaming: true }
                      : msg
                  )
                );
              }
            } catch {
              // Non-JSON SSE string
            }
          }
        }
      }

      // Finalize message and evaluate contextual actions
      const { detectedRoute, detectedEmergency } = detectActions(accumulatedContent);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: accumulatedContent || "I'm here to help. Could you please specify your question or symptoms?",
                isStreaming: false,
                isEmergency: detectedEmergency,
                suggestedRoute: detectedRoute
              }
            : msg
        )
      );
    } catch (err) {
      console.error('Chat request error:', err);
      // Fallback response with helpful healthcare navigation
      const fallbackContent =
        "Thank you for reaching out. ClearPix offers dedicated minimally invasive day-care surgery for:\n\n• **Piles (Haemorrhoids)**: [/piles](/piles)\n• **Gallbladder Stones**: [/gallbladder-stones](/gallbladder-stones)\n• **Hernia**: [/hernia](/hernia)\n• **Thyroid Ablation**: [/thyroid-ablation](/thyroid-ablation)\n• **Kidney Stones**: [/kidney-stones](/kidney-stones)\n• **Varicose Veins**: [/varicose-veins](/varicose-veins)\n\nAll procedures feature 100% cashless insurance pre-authorization and discharge within hours. Would you like to schedule a consultation with our specialist faculty?";

      const { detectedRoute } = detectActions(fallbackContent);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: fallbackContent,
                isStreaming: false,
                suggestedRoute: detectedRoute
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `greeting-${Date.now()}`,
        role: 'assistant',
        content: INITIAL_GREETING,
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* 1. FLOATING LAUNCHER (BOTTOM-RIGHT) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Teaser pill button for quick engagement */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-teal-200/80 shadow-xl text-xs font-semibold text-slate-800 hover:text-teal-800 hover:border-teal-400 hover:shadow-teal-900/10 transition-all duration-200 cursor-pointer animate-in fade-in slide-in-from-right-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-slate-900 leading-tight">YOUR AI</span>
              <span className="text-[10px] text-teal-700 font-medium leading-none">Your Healthcare Guide</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
          </button>
        )}

        {/* Circular Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer relative overflow-hidden border-2 border-white/90 ${
            isOpen
              ? 'bg-slate-900 rotate-90 hover:bg-slate-800'
              : 'bg-teal-700 hover:bg-teal-800 hover:scale-105 shadow-teal-900/30'
          }`}
          aria-label={isOpen ? 'Close ClearPix YOUR AI Assistant' : 'Open ClearPix YOUR AI Assistant'}
          title="YOUR AI - Your Healthcare Guide, Anytime"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/images/chatbot_icon.jpg"
                alt="YOUR AI Assistant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback icon if image doesn't load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-teal-700/80 -z-10">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              {/* Online status indicator */}
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full z-10 shadow-xs" />
            </div>
          )}
        </button>
      </div>

      {/* 2. CONVERSATIONAL CHATBOT WINDOW */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-6 fade-in ${
            isExpanded
              ? 'inset-3 sm:inset-6 max-w-4xl mx-auto h-[calc(100vh-24px)] sm:h-[calc(100vh-48px)]'
              : 'bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[440px] h-[620px] max-h-[84vh]'
          }`}
        >
          {/* Header */}
          <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center shrink-0 bg-teal-800 shadow-xs">
                <img
                  src="/images/chatbot_icon.jpg"
                  alt="YOUR AI Icon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-white">YOUR AI</h3>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-400/30 px-1.5 py-0.5 rounded-full font-mono font-medium">
                    ClearPix Assistant
                  </span>
                </div>
                <p className="text-[11px] text-teal-100/90 font-medium leading-none mt-0.5">
                  Your Healthcare Guide, Anytime.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Reset Chat */}
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Expand / Minimize */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Minimize' : 'Expand full view'}
                className="hidden sm:inline-flex p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Starters Carousel (visible when few messages) */}
          {messages.length <= 3 && (
            <div className="p-2.5 bg-teal-50/60 border-b border-teal-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px] shrink-0">
              <span className="text-[10px] uppercase font-bold text-teal-800 px-1 tracking-wider shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-teal-600" />
                Suggested:
              </span>
              {SUGGESTED_STARTERS.map((starter, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(starter)}
                  disabled={isLoading}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-teal-600 text-slate-700 hover:text-white border border-teal-200/80 hover:border-teal-600 whitespace-nowrap shrink-0 transition-all font-medium cursor-pointer shadow-2xs active:scale-95 disabled:opacity-50"
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          {/* Message Stream Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] p-4 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                    msg.role === 'user'
                      ? 'bg-slate-900 text-white rounded-br-xs'
                      : msg.isEmergency
                      ? 'bg-rose-50/90 text-rose-950 border border-rose-300 rounded-bl-xs'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                  }`}
                >
                  {/* Emergency Banner if emergency warning flags are triggered */}
                  {msg.isEmergency && (
                    <div className="flex items-center gap-2 p-2.5 mb-3 rounded-xl bg-rose-100/80 border border-rose-300/80 text-rose-900 font-bold text-xs">
                      <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Immediate Clinical Attention Advised</span>
                    </div>
                  )}

                  {/* Render content */}
                  {msg.content ? (
                    renderFormattedText(msg.content, onNavigate, onOpenBooking)
                  ) : msg.isStreaming ? (
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  ) : null}

                  {/* Contextual Action Buttons */}
                  {msg.role === 'assistant' && !msg.isStreaming && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                      {/* Speciality Route Button */}
                      {msg.suggestedRoute && SPECIALITY_ROUTES[msg.suggestedRoute] && (
                        <button
                          onClick={() => {
                            onNavigate(msg.suggestedRoute!);
                            if (!isExpanded) setIsOpen(false);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 rounded-xl font-semibold text-xs transition-colors cursor-pointer active:scale-95"
                        >
                          <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
                          <span>View {SPECIALITY_ROUTES[msg.suggestedRoute].name} Section</span>
                          <ArrowRight className="w-3 h-3 text-teal-600" />
                        </button>
                      )}

                      {/* Book Consultation Button */}
                      <button
                        onClick={() => {
                          const diseaseKey = msg.suggestedRoute
                            ? SPECIALITY_ROUTES[msg.suggestedRoute]?.id
                            : undefined;
                          onOpenBooking(diseaseKey);
                          if (!isExpanded) setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-teal-700 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs cursor-pointer active:scale-95"
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Book Consultation</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Message Timestamp */}
                <span className="text-[10px] text-slate-400 mt-1 px-1.5">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* General Typing Indicator */}
            {isLoading && !messages[messages.length - 1]?.isStreaming && (
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl rounded-bl-xs w-28 shadow-2xs">
                <Activity className="w-3.5 h-3.5 text-teal-600 animate-spin" />
                <span className="text-[11px] text-slate-500 font-medium">Thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200/90 shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about symptoms, our 6 specialities, or surgery..."
                disabled={isLoading}
                className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all text-slate-900 placeholder:text-slate-400 disabled:opacity-60"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isLoading}
                className="p-3 rounded-2xl bg-teal-700 hover:bg-teal-800 disabled:opacity-40 disabled:hover:bg-teal-700 text-white transition-all cursor-pointer shrink-0 shadow-md active:scale-95"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Medical Disclaimer Note */}
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" />
                <span>Educational guide only · Not a medical diagnosis</span>
              </span>
              <span>100% Cashless TPA Support</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
