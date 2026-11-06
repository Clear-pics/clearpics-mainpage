import React, { useState } from 'react';
import {
  ShieldCheck,
  Clock,
  ArrowRight,
  AlertTriangle,
  ChevronDown,
  CheckCircle2,
  Stethoscope,
  Building,
  HeartPulse,
  Sparkles,
  PhoneCall,
  Activity,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { DiseaseData, DiseaseId } from '../types';
import { getDoctorsForDisease } from '../data/doctors';
import { VeinAssessment } from '../components/varicose/VeinAssessment';
import { VeinMediaUploader } from '../components/varicose/VeinMediaUploader';
import { VeinAiAssistant } from '../components/varicose/VeinAiAssistant';

interface DiseasePageProps {
  disease: DiseaseData;
  onOpenBooking: (diseaseId?: DiseaseId) => void;
  onNavigate: (path: string) => void;
}

export const DiseasePage: React.FC<DiseasePageProps> = ({
  disease,
  onOpenBooking,
  onNavigate
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [symptomFilter, setSymptomFilter] = useState<'all' | 'mild' | 'moderate' | 'severe'>('all');
  const [varicoseTab, setVaricoseTab] = useState<'assessment' | 'media' | 'ai'>('assessment');

  const doctors = getDoctorsForDisease(disease.id);

  const filteredSymptoms = disease.symptoms.filter((s) => {
    if (symptomFilter === 'all') return true;
    return s.severity === symptomFilter;
  });

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Header Section */}
      <section className="relative pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 mb-4 font-semibold">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-teal-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-bold">{disease.name} Dedicated Clinic</span>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-14 shadow-sm relative overflow-hidden">
          
          <div className="max-w-3xl space-y-5">
            {/* Clean Specialty Tag */}
            <div className="flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700">
              <span>{disease.specialty}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              {disease.headline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal text-justify [text-align:justify] [text-justify:inter-word]">
              {disease.subheadline}
            </p>

            {/* Core Stats Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-100">
              {disease.stats.map((stat, i) => (
                <div key={i} className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                  <span className="font-mono text-lg sm:text-xl font-bold text-slate-900 block tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBooking(disease.id)}
                className="px-7 py-3.5 sm:py-4 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-teal-700 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Specialist Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('treatments');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 sm:py-4 rounded-full text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs text-center cursor-pointer"
              >
                View Laser & Minimally Invasive Options
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Special Varicose Veins Diagnostic Suite: Assessment + Photo Upload + AI Assistant */}
      {disease.id === 'varicose-veins' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            
            {/* Suite Header with Segmented Tab Control */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
                  Interactive Clinical Suite
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Preliminary Evaluation, Media Scan & AI Assistant
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  Assess clinical severity, inspect leg vein imaging with simulated computer vision, or consult the interactive vascular AI assistant.
                </p>
              </div>

              {/* Functional Segmented Controls (Interactive buttons) */}
              <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200 self-start sm:self-auto">
                <button
                  onClick={() => setVaricoseTab('assessment')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    varicoseTab === 'assessment'
                      ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  1. Symptom Assessment (CEAP)
                </button>
                <button
                  onClick={() => setVaricoseTab('media')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    varicoseTab === 'media'
                      ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  2. Photo/Video Upload
                </button>
                <button
                  onClick={() => setVaricoseTab('ai')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    varicoseTab === 'ai'
                      ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  3. Vein AI Assistant
                </button>
              </div>
            </div>

            {/* Active Sub-Module */}
            <div className="transition-all">
              {varicoseTab === 'assessment' && <VeinAssessment onOpenBooking={onOpenBooking} />}
              {varicoseTab === 'media' && <VeinMediaUploader onOpenBooking={onOpenBooking} />}
              {varicoseTab === 'ai' && <VeinAiAssistant onOpenBooking={onOpenBooking} />}
            </div>

          </div>
        </section>
      )}

      {/* Clinical Overview & Anatomy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">
              Clinical Mechanism
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Understanding {disease.name}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed text-justify [text-align:justify] [text-justify:inter-word]">
              {disease.summary}
            </p>

            {disease.id === 'piles' && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/piles_patient.jpg"
                  alt="Patient suffering from hemorrhoid pain and sitting discomfort"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-rose-200">Patient Discomfort Profile</span>
                  <span className="text-[10px] text-white/90 bg-rose-950/80 px-2.5 py-0.5 rounded border border-rose-500/30">
                    Sitting & Straining Pain
                  </span>
                </div>
              </div>
            )}

            {disease.id === 'gallbladder-stones' && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/gallbladder_stones.webp"
                  alt="Patient suffering from gallbladder stone symptoms and upper abdominal pain"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-200">Patient Discomfort Profile</span>
                  <span className="text-[10px] text-white/90 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-500/30">
                    Biliary Colic & Right Rib Pain
                  </span>
                </div>
              </div>
            )}

            {disease.id === 'hernia' && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/hernia_repair.webp"
                  alt="Handyman holding lower abdomen due to muscle strain and hernia protrusion"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-200">Patient Discomfort Profile</span>
                  <span className="text-[10px] text-white/90 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    Lower Abdominal & Groin Strain
                  </span>
                </div>
              </div>
            )}

            {disease.id === 'thyroid-ablation' && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/thyroid_ablation.jpg"
                  alt="Woman touching throat tonsils due to thyroid nodule and compressive symptoms"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-cyan-200">Patient Discomfort Profile</span>
                  <span className="text-[10px] text-white/90 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    Neck Lump & Swallowing Strain
                  </span>
                </div>
              </div>
            )}

            {disease.id === 'kidney-stones' && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/kidney_stones.webp"
                  alt="Patient experiencing acute kidney stone renal colic and flank pain"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-sky-200">Patient Discomfort Profile</span>
                  <span className="text-[10px] text-white/90 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-500/30">
                    Renal Colic & Severe Flank Pain
                  </span>
                </div>
              </div>
            )}

            {disease.id === 'varicose-veins' && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/varicose_veins.webp"
                  alt="Patient suffering from bulging varicose veins and chronic venous insufficiency"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-teal-200">Patient Discomfort Profile</span>
                  <span className="text-[10px] text-white/90 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-500/30">
                    Venous Reflux & Bulging Cords
                  </span>
                </div>
              </div>
            )}

            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100/90 text-xs text-teal-900 space-y-2">
              <span className="font-semibold block text-teal-950">
                ClearPix Minimally Invasive Advantage:
              </span>
              <p className="text-[11px] leading-relaxed text-teal-800">
                Rather than extensive open surgical resection, our super-specialists employ localized energy delivery—leaving surrounding healthy tissue, sphincters, and fascia intact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {disease.overviewPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-teal-700 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Symptoms & Clinical Presentation with Interactive Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
                Clinical Presentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Recognizing Symptoms
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Symptoms vary significantly by anatomical grade and progression. Filter by clinical severity to identify where you stand.
              </p>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
              {(['all', 'mild', 'moderate', 'severe'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSymptomFilter(lvl)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors capitalize ${
                    symptomFilter === lvl
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Symptoms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredSymptoms.map((sym, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                    {sym.category}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded capitalize ${
                      sym.severity === 'severe'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : sym.severity === 'moderate'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-teal-50 text-teal-700 border border-teal-200'
                    }`}
                  >
                    {sym.severity} severity
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900">{sym.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sym.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Causes & Etiology Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
            Etiology & Risk Factors
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            What causes {disease.name.toLowerCase()}?
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Understanding underlying mechanical, anatomical, and lifestyle triggers that foster disease progression.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {disease.causes.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5"
            >
              <div className="font-mono text-xs font-bold text-teal-700">0{i + 1}.</div>
              <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Red Flags Section: When to Seek Medical Attention */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50/50 border border-red-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2.5 text-red-800">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              When to Seek Immediate Medical Attention
            </h2>
          </div>
          <p className="text-xs text-red-900/80 max-w-2xl leading-relaxed">
            Do not postpone medical review if you notice any of these clinical danger signs. Immediate surgical triage prevents severe secondary vascular or visceral complications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {disease.redFlags.map((rf, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-red-200/80 space-y-2 shadow-2xs"
              >
                <div className="text-xs font-bold text-red-900">{rf.sign}</div>
                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Risk: </span>
                  {rf.risk}
                </div>
                <div className="text-[11px] text-teal-800 bg-teal-50/70 p-2 rounded-lg font-medium">
                  <span className="font-bold">Protocol: </span>
                  {rf.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments & Surgical Modalities Section */}
      <section id="treatments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
            Gold-Standard Surgical Modalities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Minimally Invasive Treatment Options
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            ClearPix utilizes cutting-edge surgical platforms designed for outpatient day-care discharge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {disease.treatments.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded font-semibold">
                    {t.technology}
                  </span>
                  {t.isDaycare && (
                    <span className="text-[10px] text-slate-500 font-medium">
                      Daycare Protocol
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{t.fullName}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.description}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold text-slate-800 block">Key Clinical Advantages:</span>
                  {t.advantages.map((adv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Recovery Time</span>
                  <span className="text-xs font-semibold text-slate-800">{t.recoveryTime}</span>
                </div>
                <button
                  onClick={() => onOpenBooking(disease.id)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-teal-700 text-white text-xs font-semibold transition-colors"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated Specialists Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
              Super-Specialist Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Surgeons Specializing in {disease.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Board-certified specialists with dedicated fellowship credentials and thousands of successful procedures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 font-bold flex items-center justify-center text-sm shadow-2xs">
                    {doc.name.split(' ')[1]?.[0] || 'D'}
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-slate-900 block tabular-nums">
                      {doc.surgeriesCount}+
                    </span>
                    <span className="text-[10px] text-slate-400">Total Surgeries</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900">{doc.name}</h3>
                <p className="text-xs text-teal-700 font-medium">{doc.specialty}</p>
                <p className="text-xs text-slate-500 mt-0.5">{doc.qualifications}</p>
                <p className="text-xs text-slate-400 mt-2">{doc.hospital}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">{doc.experienceYears}+ years</span>
                  <span> · Rating: </span>
                  <span className="font-bold text-teal-700">{doc.rating} / 5</span>
                </div>
                <button
                  onClick={() => onOpenBooking(disease.id)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-teal-700 text-white text-xs font-semibold transition-all shadow-2xs"
                >
                  Book with {doc.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
            Clinical Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Clear, transparent answers from our clinical board regarding surgery, pain, recovery, and insurance.
          </p>
        </div>

        <div className="space-y-3">
          {disease.faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Sticky-style Consultation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Consult a Senior {disease.specialty} Surgeon
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
              Get an accurate diagnostic opinion, explore daycare laser treatment, and check 100% cashless insurance coverage.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking(disease.id)}
            className="py-3 px-6 rounded-full text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-md whitespace-nowrap shrink-0"
          >
            Book Appointment
          </button>
        </div>
      </section>

    </div>
  );
};
