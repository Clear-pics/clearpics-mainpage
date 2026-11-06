import React from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  HeartHandshake,
  Building2,
  Stethoscope,
  Mail,
  Clock,
  CheckCircle2,
  CalendarCheck,
  CreditCard,
  FileText,
  UserCheck,
  Activity,
  Layers,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface FounderDetailsViewProps {
  onBackToHome: () => void;
  onOpenBooking?: () => void;
}

export const FounderDetailsView: React.FC<FounderDetailsViewProps> = ({
  onBackToHome,
  onOpenBooking
}) => {
  const patientPrinciples = [
    "Listen carefully to the patient's requirements.",
    "Provide clear information about available services.",
    "Respect the patient's choice of doctor and hospital.",
    "Communicate costs and administrative requirements as transparently as possible.",
    "Protect personal and medical information.",
    "Avoid making promises about surgical outcomes.",
    "Encourage patients to seek appropriate medical opinions before making important treatment decisions.",
    "Maintain communication throughout the coordination process."
  ];

  const coreFocusAreas = [
    {
      title: 'Surgical Consultation & Coordination',
      icon: Stethoscope,
      color: 'teal',
      description:
        'Helping patients arrange consultations with appropriate specialists and understand the steps involved in seeking a surgical opinion.'
    },
    {
      title: 'Hospital Identification & Coordination',
      icon: Building2,
      color: 'blue',
      description:
        'Assisting patients in identifying suitable healthcare facilities based on their medical requirements, location, preferences, and available options.'
    },
    {
      title: 'Treatment Planning Support',
      icon: FileText,
      color: 'indigo',
      description:
        'Helping patients coordinate consultations, investigations, documentation, hospital admission, and other practical requirements as advised by their treating medical team.'
    },
    {
      title: 'Cost & Financial Coordination',
      icon: CreditCard,
      color: 'emerald',
      description:
        'Facilitating access to available treatment estimates and helping patients understand the administrative aspects of insurance, cashless facilities, and payment procedures, subject to the policies of the respective hospitals and insurers.'
    },
    {
      title: 'Pre-Operative Assistance',
      icon: CalendarCheck,
      color: 'cyan',
      description:
        'Supporting patients with appointment schedules, documentation, investigations prescribed by their doctors, and hospital admission formalities.'
    },
    {
      title: 'Post-Operative Coordination',
      icon: Activity,
      color: 'rose',
      description:
        'Helping patients arrange follow-up appointments, obtain discharge instructions from their treating team, and coordinate recommended rehabilitation or home-care services where available.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8 sm:space-y-12">
      
      {/* Breadcrumb Navigation: Home >> About Us */}
      <nav aria-label="Breadcrumb" className="pb-3 border-b border-slate-200/80">
        <ol className="flex items-center gap-2 text-sm sm:text-base font-bold">
          <li>
            <button
              onClick={onBackToHome}
              className="text-slate-600 hover:text-teal-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </button>
          </li>
          <li className="text-slate-400">
            <span className="font-bold text-slate-400">»</span>
          </li>
          <li className="text-teal-700 font-extrabold">
            About Us
          </li>
        </ol>
      </nav>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            <span>ClearPix Healthcare · About Us</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Building a Sustainable, Patient-Centric Healthcare Business
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal">
            At ClearPix, we connect patients to world-class surgical expertise, dependable hospital networks, and end-to-end clinical care coordination with 100% transparency.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onBackToHome}
              className="px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm sm:text-base transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm sm:text-base transition-all shadow-md cursor-pointer active:scale-95"
              >
                Schedule Consultation
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: Building a Sustainable Healthcare Business */}
      <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-teal-700 uppercase tracking-wider block">
              Our Vision & Foundation
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Building a Sustainable Healthcare Business
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p className="font-medium text-slate-900">
            A healthcare company must balance patient service with operational discipline and financial sustainability.
          </p>

          <p>
            Our approach is to develop a business model that can grow through dependable hospital relationships, efficient coordination, professional service standards, and a clear understanding of patient requirements.
          </p>

          <p>
            We intend to focus on building the right partnerships, establishing standard operating procedures, developing a reliable service team, and using appropriate technology to manage enquiries, appointments, documentation, and follow-ups.
          </p>

          <p>
            As the business develops, we will evaluate opportunities to expand our geographical presence, strengthen our specialist network, and introduce additional services based on demonstrated demand.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span>
              We believe that sustainable growth in healthcare comes from delivering value consistently and building credibility over time.
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Patient Comes First */}
      <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider block">
              Patient Care Philosophy
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The Patient Comes First
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Every patient has a different requirement. Some patients know exactly which specialist they want to consult, while others are unsure about where to begin.
          </p>

          <p>
            We want to make it easier for patients to understand their available options without creating unnecessary pressure or confusion.
          </p>

          <p className="font-semibold text-slate-900 pt-2">
            Our approach is guided by a few practical principles:
          </p>

          {/* 8 Practical Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {patientPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3 hover:bg-teal-50/50 hover:border-teal-200 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-sm font-medium text-slate-800 leading-snug">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Core Business Focus */}
      <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-indigo-700 uppercase tracking-wider block">
              Services & Activities
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Business Focus
            </h2>
          </div>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p className="text-base sm:text-lg font-semibold text-slate-900">
            Our principal focus is surgical healthcare and the services surrounding it.
          </p>
          <p>
            Depending on the nature of our hospital and medical partnerships, our activities may include:
          </p>
        </div>

        {/* 6 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFocusAreas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Disclaimer Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex items-start gap-3.5">
          <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            <strong>Important Clinical Responsibility Note:</strong> Our role is to support the process and improve coordination. Medical decisions, surgical recommendations, and clinical treatment remain the responsibility of qualified healthcare professionals.
          </p>
        </div>
      </section>

      {/* Leadership & Entity Information Footer Card */}
      <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Building2 className="w-5 h-5 text-teal-400" />
            <h4 className="text-lg font-bold text-white">ClearPix Healthcare</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Specialised Surgical Care Coordination & Daycare Surgeries
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <a href="mailto:raghunandana.mg@gmail.com" className="hover:text-white underline">
                raghunandana.mg@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 76195 90444</span>
            </span>
            <span className="flex items-center gap-1.5">
              <a
                href="https://maps.app.goo.gl/nrL6qanr2h8FqGcX8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 underline flex items-center gap-1"
              >
                <span>Kanakapura Rd, Bengaluru (Maps)</span>
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Return to Home
          </button>
          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
            >
              Consult a Specialist
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
