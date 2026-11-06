import React from 'react';
import {
  Stethoscope,
  Building2,
  CalendarCheck,
  CreditCard,
  FileCheck2,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Scale,
  Sparkles,
  TrendingUp,
  Lock,
  MessageSquareHeart,
  Eye,
  UserCheck,
  Compass,
  Mail
} from 'lucide-react';
import { DiseaseId } from '../types';

interface CompanyMissionSectionsProps {
  onOpenBooking?: (diseaseId?: DiseaseId) => void;
  variant?: 'light' | 'meridian';
}

export const CompanyMissionSections: React.FC<CompanyMissionSectionsProps> = ({
  onOpenBooking,
  variant = 'light'
}) => {
  const isMeridian = variant === 'meridian';

  return (
    <div className="space-y-24">

      {/* =========================================================================
          SECTION 1: OUR CORE BUSINESS FOCUS
         ========================================================================= */}
      <section id="core-focus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-14 shadow-xs">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
              <span>Operational Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Core Business Focus
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our principal focus is surgical healthcare and the services surrounding it.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Depending on the nature of our hospital and medical partnerships, our activities are structured to streamline the clinical and administrative journey for patients:
            </p>
          </div>

          {/* 6 Core Activities Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Surgical consultation and coordination */}
            <div className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/40 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 shadow-2xs group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Surgical Consultation & Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Helping patients arrange consultations with appropriate specialists and understand the steps involved in seeking a surgical opinion.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-teal-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Specialist Matching & Triage</span>
              </div>
            </div>

            {/* 2. Hospital identification and coordination */}
            <div className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/40 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-700 shadow-2xs group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Hospital Identification & Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Assisting patients in identifying suitable healthcare facilities based on their medical requirements, location, preferences, and available options.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-cyan-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Accredited Partner Facilities</span>
              </div>
            </div>

            {/* 3. Treatment planning support */}
            <div className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/40 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-2xs group-hover:scale-105 transition-transform">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Treatment Planning Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Helping patients coordinate consultations, investigations, documentation, hospital admission, and other practical requirements as advised by their treating medical team.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>End-to-End Logistical Care</span>
              </div>
            </div>

            {/* 4. Cost and financial coordination */}
            <div className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/40 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shadow-2xs group-hover:scale-105 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Cost & Financial Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Facilitating access to available treatment estimates and helping patients understand the administrative aspects of insurance, cashless facilities, and payment procedures, subject to the policies of the respective hospitals and insurers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Cashless TPA & Estimates</span>
              </div>
            </div>

            {/* 5. Pre-operative assistance */}
            <div className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/40 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-700 shadow-2xs group-hover:scale-105 transition-transform">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  Pre-Operative Assistance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Supporting patients with appointment schedules, documentation, investigations prescribed by their doctors, and hospital admission formalities.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-sky-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Paperless Fast-Track Admission</span>
              </div>
            </div>

            {/* 6. Post-operative coordination */}
            <div className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/40 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-700 shadow-2xs group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  Post-Operative Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Helping patients arrange follow-up appointments, obtain discharge instructions from their treating team, and coordinate recommended rehabilitation or home-care services where available.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-purple-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Recovery Follow-Up & Discharge</span>
              </div>
            </div>

          </div>

          {/* Clinical Governance Callout */}
          <div className="mt-8 p-6 rounded-2xl bg-teal-50/60 border border-teal-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-[13px] font-semibold text-teal-950">
                  Clinical Governance & Professional Responsibility
                </p>
                <p className="text-xs text-teal-900/80 mt-0.5 leading-relaxed">
                  Our role is to support the process and improve coordination. Medical decisions, surgical recommendations, and clinical treatment remain the responsibility of qualified healthcare professionals.
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs font-mono text-teal-900">
                  <Mail className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Clinical Records & Enquiries:</span>
                  <a
                    href="mailto:clearpix.telerad@gmail.com"
                    className="font-bold underline text-teal-950 hover:text-teal-800"
                  >
                    clearpix.telerad@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {onOpenBooking && (
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 active:scale-95 transition-all shadow-sm shrink-0 whitespace-nowrap"
              >
                Connect with Coordinator
              </button>
            )}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: THE PATIENT COMES FIRST
         ========================================================================= */}
      <section id="patient-first" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#FAF7F2] via-white to-slate-50 rounded-3xl border border-slate-200/90 p-8 sm:p-14 shadow-xs">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E4733] bg-[#9E4733]/10 px-3.5 py-1.5 rounded-full border border-[#9E4733]/20 mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-[#9E4733]" />
              <span>Ethical Patient Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The Patient Comes First
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Every patient has a different requirement. Some patients know exactly which specialist they want to consult, while others are unsure about where to begin.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We want to make it easier for patients to understand their available options without creating unnecessary pressure or confusion.
            </p>
          </div>

          {/* 8 Practical Principles Grid */}
          <div className="space-y-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.14em] font-semibold text-slate-500 block mb-2">
              Our Practical Guiding Principles:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Principle 1 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Active Listening
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Listen carefully to the patient's requirements.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Clear Information
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide clear information about available services.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Patient Autonomy
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Respect the patient's choice of doctor and hospital.
                </p>
              </div>

              {/* Principle 4 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Cost Transparency
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Communicate costs and administrative requirements as transparently as possible.
                </p>
              </div>

              {/* Principle 5 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  05
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Data Protection
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protect personal and medical information with strict confidentiality.
                </p>
              </div>

              {/* Principle 6 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-slate-900 leading-snug">
                  Clinical Honesty
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avoid making promises or guarantees about surgical outcomes.
                </p>
              </div>

              {/* Principle 7 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  07
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Medical Opinions
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Encourage patients to seek appropriate medical opinions before making important treatment decisions.
                </p>
              </div>

              {/* Principle 8 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  08
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Ongoing Contact
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintain continuous communication throughout the entire coordination process.
                </p>
              </div>

            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Lock className="w-4 h-4 text-teal-700 shrink-0" />
            <span>
              We believe compassionate healthcare starts with uncompromised clarity, patient dignity, and clinical neutrality.
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: BUILDING A SUSTAINABLE HEALTHCARE BUSINESS
         ========================================================================= */}
      <section id="sustainable-business" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-14 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Scale className="w-3.5 h-3.5 text-teal-700" />
                <span>Long-Term Value Creation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building a Sustainable Healthcare Business
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                A healthcare company must balance patient service with operational discipline and financial sustainability.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Our approach is to develop a business model that can grow through dependable hospital relationships, efficient coordination, professional service standards, and a clear understanding of patient requirements.
                </p>
                <p>
                  We intend to focus on building the right partnerships, establishing standard operating procedures, developing a reliable service team, and using appropriate technology to manage enquiries, appointments, documentation, and follow-ups.
                </p>
                <p>
                  As the business develops, we will evaluate opportunities to expand our geographical presence, strengthen our specialist network, and introduce additional services based on demonstrated demand.
                </p>
              </div>

              {/* Belief Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-50/80 to-emerald-50/50 border border-teal-200 text-teal-950 font-medium text-xs sm:text-sm leading-relaxed shadow-2xs">
                "We believe that sustainable growth in healthcare comes from delivering value consistently and building credibility over time."
              </div>

            </div>

            {/* Right Column: 4 Strategic Tenets (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.14em] font-semibold text-slate-400 block">
                Foundational Pillars
              </span>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Building2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Dependable Hospital Alliances</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Forging close, mutually accountable relationships with accredited medical centers and super-specialist surgical departments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <FileCheck2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Standard Operating Procedures</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formalizing uniform quality standards across patient triage, admission logistics, and clinical documentation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <TrendingUp className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Appropriate Technology Layer</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leveraging digital portals to orchestrate inquiries, appointments, cashless pre-authorization, and post-op care.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Compass className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Demand-Driven Prudent Expansion</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Expanding surgical specialties and geographical footprint strictly where validated patient need and medical excellence align.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
