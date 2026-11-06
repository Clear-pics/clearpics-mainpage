import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ClipboardCheck,
  Stethoscope
} from 'lucide-react';
import { DiseaseId } from '../../types';

interface VeinAssessmentProps {
  onOpenBooking: (diseaseId?: DiseaseId) => void;
}

export const VeinAssessment: React.FC<VeinAssessmentProps> = ({ onOpenBooking }) => {
  const [sensations, setSensations] = useState<string[]>(['heaviness']);
  const [veinAppearance, setVeinAppearance] = useState<'spider' | 'reticular' | 'bulging' | 'none'>('bulging');
  const [swelling, setSwelling] = useState<'none' | 'evening' | 'persistent'>('evening');
  const [skinChanges, setSkinChanges] = useState<'none' | 'pigment' | 'eczema' | 'ulcer'>('none');
  const [standingTime, setStandingTime] = useState<'low' | 'moderate' | 'high'>('high');

  const toggleSensation = (item: string) => {
    if (sensations.includes(item)) {
      setSensations(sensations.filter((s) => s !== item));
    } else {
      setSensations([...sensations, item]);
    }
  };

  // Compute CEAP Clinical Stage
  const calculateResult = () => {
    if (skinChanges === 'ulcer') {
      return {
        stage: 'Stage C6 (Active Venous Ulcer)',
        severity: 'High Clinical Urgency',
        description: 'Advanced chronic venous hypertension causing cutaneous skin breakdown. Immediate wound care and endovenous laser closure are advised to prevent recurrent infection.',
        riskLevel: 'Severe',
        badgeColor: 'text-red-700 bg-red-50 border-red-200',
        testRecommended: 'Urgent Duplex Doppler Ultrasound & Wound Bed Prep'
      };
    }
    if (skinChanges === 'pigment' || skinChanges === 'eczema') {
      return {
        stage: 'Stage C4 (Trophic Skin Changes / Lipodermatosclerosis)',
        severity: 'Significant Venous Insufficiency',
        description: 'RBC extravasation into subcutaneous tissue causing hemosiderin pigmentation. Laser ablation halts progressive skin hardening.',
        riskLevel: 'Moderate to High',
        badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
        testRecommended: 'Bilateral Venous Duplex Doppler Examination'
      };
    }
    if (swelling === 'persistent' || swelling === 'evening') {
      return {
        stage: 'Stage C3 (Venous Edema)',
        severity: 'Moderate Venous Reflux',
        description: 'Incompetent saphenous valves allowing retrograde pressure transmission into lower leg capillaries, producing fluid accumulation.',
        riskLevel: 'Moderate',
        badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
        testRecommended: 'Lower Extremity Venous Reflux Study'
      };
    }
    if (veinAppearance === 'bulging') {
      return {
        stage: 'Stage C2 (True Varicose Veins)',
        severity: 'Definite Venous Valve Failure',
        description: 'Dilated, tortuous superficial veins greater than 3mm diameter with documented saphenofemoral or saphenopopliteal valve incompetence.',
        riskLevel: 'Moderate',
        badgeColor: 'text-teal-700 bg-teal-50 border-teal-200',
        testRecommended: 'Duplex Ultrasound Vein Mapping'
      };
    }
    if (veinAppearance === 'reticular' || veinAppearance === 'spider') {
      return {
        stage: 'Stage C1 (Telangiectasias / Reticular Veins)',
        severity: 'Early Superficial Reflux',
        description: 'Small spider veins (less than 1mm) or blue subdermal reticular networks (1-3mm). Highly responsive to foam sclerotherapy.',
        riskLevel: 'Low to Mild',
        badgeColor: 'text-teal-700 bg-teal-50 border-teal-200',
        testRecommended: 'Screening Ultrasound & Foam Sclerotherapy Eval'
      };
    }
    return {
      stage: 'Stage C0 (No Visible Venous Disease)',
      severity: 'Functional Symptomatology',
      description: 'Symptoms of venous fatigue without overt structural vein dilatation. Conservative measures and calf pump exercises recommended.',
      riskLevel: 'Low',
      badgeColor: 'text-slate-700 bg-slate-50 border-slate-200',
      testRecommended: 'Clinical Evaluation by Vascular Specialist'
    };
  };

  const result = calculateResult();

  const handleReset = () => {
    setSensations(['heaviness']);
    setVeinAppearance('bulging');
    setSwelling('evening');
    setSkinChanges('none');
    setStandingTime('high');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-teal-700 font-semibold uppercase tracking-wider mb-1">
            <ClipboardCheck className="w-4 h-4" />
            <span>CEAP Clinical Assessment Tool</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Preliminary Venous Insufficiency Assessment
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            Answer 5 clinical markers to estimate your CEAP classification stage and understand whether laser ablation or diagnostic ultrasound is clinically indicated.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 self-start"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Values</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Question 1: Sensation */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              1. Physical Sensations (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'heaviness', label: 'Tired, heavy aching legs' },
                { id: 'cramps', label: 'Night calf muscle cramps' },
                { id: 'restless', label: 'Restless legs at bedtime' },
                { id: 'throbbing', label: 'Throbbing or burning feeling' }
              ].map((item) => {
                const active = sensations.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleSensation(item.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      active
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="block">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2: Vein Appearance */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              2. Visual Appearance of Veins
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'none', label: 'No Visible Veins', sub: 'Smooth skin' },
                { id: 'spider', label: 'Spider Veins', sub: '< 1mm red/purple' },
                { id: 'reticular', label: 'Reticular Veins', sub: '1-3mm flat blue' },
                { id: 'bulging', label: 'Bulging Cords', sub: '> 3mm raised twisted' }
              ].map((opt) => {
                const active = veinAppearance === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setVeinAppearance(opt.id as any)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      active
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3: Swelling */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              3. Lower Leg / Ankle Swelling
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'none', label: 'None', sub: 'No puffiness' },
                { id: 'evening', label: 'Evening Swelling', sub: 'Relieved overnight' },
                { id: 'persistent', label: 'Persistent Edema', sub: 'Present all day' }
              ].map((opt) => {
                const active = swelling === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSwelling(opt.id as any)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      active
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 4: Skin Alterations */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              4. Skin Changes Around Ankle / Lower Calf
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'none', label: 'Normal Skin', sub: 'No color change' },
                { id: 'pigment', label: 'Brown Staining', sub: 'Hemosiderin deposit' },
                { id: 'eczema', label: 'Stasis Eczema', sub: 'Dry itchy scaling' },
                { id: 'ulcer', label: 'Skin Ulceration', sub: 'Open sore / break' }
              ].map((opt) => {
                const active = skinChanges === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSkinChanges(opt.id as any)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      active
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 5: Standing hours */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              5. Daily Standing or Stationary Sitting Duration
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'low', label: '< 2 Hours / day' },
                { id: 'moderate', label: '2 to 6 Hours / day' },
                { id: 'high', label: '> 6 Hours / day' }
              ].map((opt) => {
                const active = standingTime === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setStandingTime(opt.id as any)}
                    className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                      active
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between h-full space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Clinical Scorecard
                </span>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-md font-semibold border ${result.badgeColor}`}>
                  {result.riskLevel} Risk
                </span>
              </div>

              <div>
                <div className="text-base font-bold text-slate-900 tracking-tight">
                  {result.stage}
                </div>
                <div className="text-xs text-teal-700 font-medium mt-0.5">
                  {result.severity}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {result.description}
              </p>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                  <span>Recommended Diagnostic Next Step:</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {result.testRecommended}
                </p>
              </div>

              {/* CEAP Guidance Reference */}
              <div className="text-[10px] text-slate-400 space-y-1 border-t border-slate-200/60 pt-3">
                <p className="font-semibold text-slate-500">About CEAP Classification:</p>
                <p>
                  Standardized international classification recognized by the American Venous Forum (AVF) and European Venous Forum (EVF).
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('varicose-veins')}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book Doppler Ultrasound Consult</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
