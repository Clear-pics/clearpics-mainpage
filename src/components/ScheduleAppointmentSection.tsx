import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  FileText,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Video,
  FileCheck
} from 'lucide-react';
import { DISEASES } from '../data/diseases';
import { DiseaseId } from '../types';
import { WHATSAPP_PHONE_NUMBER } from './WhatsAppChat';

interface ScheduleAppointmentSectionProps {
  onSuccessBooking?: (bookingId: string) => void;
}

export const ScheduleAppointmentSection: React.FC<ScheduleAppointmentSectionProps> = ({
  onSuccessBooking
}) => {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseId>('varicose-veins');
  const [consultType, setConsultType] = useState<'in-clinic' | 'video' | 'second-opinion'>('in-clinic');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:30 AM');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  const diseaseList = Object.values(DISEASES);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:45 AM',
    '02:00 PM',
    '04:30 PM',
    '06:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `CP-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBookingId(generatedId);
      setIsSubmitting(false);
      if (onSuccessBooking) {
        onSuccessBooking(generatedId);
      }
    }, 600);
  };

  const getWhatsAppBookingUrl = () => {
    const selectedDiseaseName = DISEASES[selectedDisease]?.name || 'Specialty Care';
    const msg = `Hello ClearPix Healthcare Desk,\nI would like to schedule an appointment.\n` +
      `Specialty: ${selectedDiseaseName}\n` +
      `Consultation Type: ${consultType}\n` +
      (patientName ? `Patient Name: ${patientName}\n` : '') +
      (city ? `City: ${city}\n` : '') +
      (preferredDate ? `Preferred Date: ${preferredDate} (${preferredTime})\n` : '') +
      (notes ? `Query: ${notes}\n` : '');
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="schedule-appointment" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="px-4 sm:px-12 pt-6 pb-4 sm:pt-10 sm:pb-8 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold text-teal-700 uppercase tracking-wider block mb-1">
              Direct Specialist Booking
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Schedule Your Appointment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 sm:mt-2 leading-relaxed text-justify [text-align:justify] [text-justify:inter-word]">
              Book an in-person clinical consultation, video teleconsult, or secondary opinion with our specialist medical network.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-12">
          {confirmedBookingId ? (
            /* Confirmation State */
            <div className="max-w-xl mx-auto text-center py-6 sm:py-10 space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7 sm:w-9 sm:h-9" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Appointment Request Received
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 sm:mt-2 leading-relaxed">
                  Your appointment request has been logged. Our clinical coordinator will contact you shortly to confirm doctor availability.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 sm:space-y-2 font-mono">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-bold text-slate-900">{confirmedBookingId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Specialty:</span>
                  <span className="font-bold text-teal-800">{DISEASES[selectedDisease]?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Mode:</span>
                  <span className="capitalize text-slate-900">{consultType.replace('-', ' ')}</span>
                </div>
                {patientName && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Patient:</span>
                    <span className="text-slate-900">{patientName}</span>
                  </div>
                )}
                {preferredDate && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Requested Slot:</span>
                    <span className="text-slate-900">{preferredDate} at {preferredTime}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Notify via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setConfirmedBookingId(null)}
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>

              <p className="text-[10px] sm:text-[11px] text-slate-500">
                Official Email: <a href="mailto:clearpix.telerad@gmail.com" className="text-teal-700 underline font-medium">clearpix.telerad@gmail.com</a>
              </p>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8 max-w-4xl mx-auto">
              
              {/* Step 1: Select Disease / Specialty (Strict 6 diseases in order) */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 sm:mb-3">
                  1. Select Clinical Specialty
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {diseaseList.map((disease) => {
                    const isSelected = selectedDisease === disease.id;
                    return (
                      <button
                        type="button"
                        key={disease.id}
                        onClick={() => setSelectedDisease(disease.id)}
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-teal-700 bg-teal-50/80 text-teal-950 font-bold ring-2 ring-teal-600 shadow-xs'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold truncate">{disease.name}</div>
                        <div className="text-xs text-slate-500 truncate mt-0.5">{disease.medicalTerm}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Consultation Format */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 sm:mb-3">
                  2. Consultation Format
                </label>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    {
                      id: 'in-clinic',
                      title: 'In-Clinic',
                      fullTitle: 'In-Clinic Consultation',
                      desc: 'Physical examination & ultrasound diagnostic check',
                      icon: Stethoscope
                    },
                    {
                      id: 'video',
                      title: 'Video Consult',
                      fullTitle: 'Video Teleconsultation',
                      desc: 'Convenient online video consultation with doctor',
                      icon: Video
                    },
                    {
                      id: 'second-opinion',
                      title: 'Second Opinion',
                      fullTitle: 'Second Opinion',
                      desc: 'Scan, Doppler, & surgical plan assessment',
                      icon: FileCheck
                    }
                  ].map((item) => {
                    const isSelected = consultType === item.id;
                    const Icon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setConsultType(item.id as typeof consultType)}
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-teal-700 bg-teal-50/80 text-teal-950 font-bold ring-2 ring-teal-600 shadow-xs'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-teal-700' : 'text-slate-500'}`} />
                            <span className="text-xs sm:text-sm font-bold truncate">{item.title}</span>
                          </div>
                          <p className="hidden sm:block text-xs text-slate-500 mt-1 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    3. Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/40 focus:border-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/40 focus:border-teal-600 cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Patient Details */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  4. Patient Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Patient Name *"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/40 focus:border-teal-600"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="Contact Phone *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/40 focus:border-teal-600"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="City / Location"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/40 focus:border-teal-600"
                    />
                  </div>
                </div>

                <div className="mt-3 relative">
                  <FileText className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={2}
                    placeholder="Brief description of symptoms, previous investigations, or specific requests (Optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm sm:text-base text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/40 focus:border-teal-600 resize-none"
                  />
                </div>
              </div>

              {/* Actions & Official Contacts */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 w-full sm:w-auto">
                  <a
                    href="mailto:clearpix.telerad@gmail.com"
                    className="flex items-center gap-2 hover:text-teal-800 transition-colors font-semibold"
                  >
                    <Mail className="w-5 h-5 text-teal-700" />
                    <span>clearpix.telerad@gmail.com</span>
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Instant WhatsApp Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-teal-800 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Confirming...' : 'Schedule Appointment'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
