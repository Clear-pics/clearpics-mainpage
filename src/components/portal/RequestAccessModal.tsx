import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, ShieldCheck, Building } from 'lucide-react';
import { AccessFeedbackForm } from '../../types/portal';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<AccessFeedbackForm>({
    name: '',
    email: '',
    role: 'Vascular Surgeon',
    institution: '',
    moduleOfInterest: 'Varicose Veins Visual Guide',
    feedbackText: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid professional email';
    }
    if (!formData.institution.trim()) {
      errs.institution = 'Enter your hospital, clinic, or university affiliation';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD5] overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E5DFD5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1F4E46] flex items-center justify-center text-white shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#FAF7F2]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] font-semibold text-[#9E4733] block">
                Clinical Feedback & Institutional Access
              </span>
              <h2 className="font-serif text-base sm:text-lg font-bold text-[#1F4E46] tracking-tight">
                {isSubmitted ? 'Request Transmitted' : 'Request Access / Submit Feedback'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#52605B] hover:text-[#1A2421] rounded-full hover:bg-white border border-transparent hover:border-[#E5DFD5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#2E6E62] flex items-center justify-center mx-auto border border-[#E5DFD5] shadow-2xs animate-in zoom-in duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#1F4E46]">
                Thank you, Dr. {formData.name || 'Colleague'}
              </h3>
              <p className="text-xs text-[#52605B] max-w-sm mx-auto leading-relaxed font-sans">
                Your feedback and institutional request for <strong>{formData.moduleOfInterest}</strong> have been logged. Our clinical editorial team will review your submission promptly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] text-xs text-[#52605B] max-w-sm mx-auto font-mono">
              <span>Confirmation sent to: </span>
              <strong className="text-[#1F4E46]">{formData.email}</strong>
            </div>

            <button
              onClick={handleReset}
              className="tap-tactile py-2.5 px-6 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] transition-colors shadow-xs"
            >
              Return to MedAtlas Hub
            </button>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] text-xs text-[#52605B] leading-relaxed flex items-center justify-between gap-3">
              <span>
                Direct institutional queries, DICOM scans, or case files can also be sent directly to our clinical desk at{' '}
                <a href="mailto:clearpix.telerad@gmail.com" className="font-semibold text-[#1F4E46] underline">
                  clearpix.telerad@gmail.com
                </a>
              </span>
            </div>
            <p className="text-xs text-[#52605B] leading-relaxed font-sans">
              We welcome clinical feedback from practitioners, requests for departmental institutional white-labeling, and suggestions for future condition atlases.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A2421] mb-1 font-sans">
                  Full Name / Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Sarah Jenkins, MD"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6E62]/20 focus:border-[#2E6E62] text-[#1A2421]"
                />
                {errors.name && <p className="text-[11px] text-[#9E4733] mt-1 font-mono">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2421] mb-1 font-sans">
                  Professional Email *
                </label>
                <input
                  type="email"
                  placeholder="name@hospital.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6E62]/20 focus:border-[#2E6E62] text-[#1A2421]"
                />
                {errors.email && <p className="text-[11px] text-[#9E4733] mt-1 font-mono">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A2421] mb-1 font-sans">
                  Clinical Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6E62]/20 focus:border-[#2E6E62] text-[#1A2421]"
                >
                  <option value="Vascular Surgeon">Vascular Surgeon</option>
                  <option value="General Surgeon">General Surgeon</option>
                  <option value="Resident / Fellow">Resident / Fellow</option>
                  <option value="Medical Student">Medical Student</option>
                  <option value="Patient Educator">Patient Educator</option>
                  <option value="Other">Other Healthcare Specialist</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2421] mb-1 font-sans">
                  Hospital / University Affiliation *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Johns Hopkins / AIIMS / Apollo"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6E62]/20 focus:border-[#2E6E62] text-[#1A2421]"
                />
                {errors.institution && <p className="text-[11px] text-[#9E4733] mt-1 font-mono">{errors.institution}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A2421] mb-1 font-sans">
                Primary Module of Interest
              </label>
              <select
                value={formData.moduleOfInterest}
                onChange={(e) => setFormData({ ...formData, moduleOfInterest: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6E62]/20 focus:border-[#2E6E62] text-[#1A2421]"
              >
                <option value="Varicose Veins Visual Guide">Varicose Veins Visual Guide (Live Link)</option>
                <option value="Deep Vein Thrombosis (DVT) Guide">Deep Vein Thrombosis (DVT) Guide</option>
                <option value="Peripheral Artery Disease (PAD)">Peripheral Artery Disease (PAD)</option>
                <option value="Diabetic Ulcer & Wound Care">Diabetic Ulcer & Wound Care</option>
                <option value="Lymphedema Atlas">Lymphedema Atlas</option>
                <option value="Proctology Laser Portal">Laser Proctology & Anorectal Portal</option>
                <option value="General MedAtlas Hub Access">General Institutional MedAtlas Hub</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A2421] mb-1 font-sans">
                Feedback, Staging Suggestions or Inquiries
              </label>
              <textarea
                rows={3}
                placeholder="Share your thoughts on photographic resolution, staging criteria, or integration into clinical workflow..."
                value={formData.feedbackText}
                onChange={(e) => setFormData({ ...formData, feedbackText: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6E62]/20 focus:border-[#2E6E62] text-[#1A2421] resize-none"
              />
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-[#E5DFD5] flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="tap-tactile px-4 py-2 text-xs font-semibold text-[#52605B] hover:bg-[#FAF7F2] rounded-full transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="tap-tactile py-2.5 px-6 rounded-full text-xs font-semibold text-white bg-[#1F4E46] hover:bg-[#073028] shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Clinical Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
