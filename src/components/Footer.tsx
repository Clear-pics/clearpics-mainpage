import React from 'react';
import { DiseaseId } from '../types';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenBooking?: (diseaseId?: DiseaseId) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      {/* Bottom Copyright Bar */}
      <div className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-base text-slate-400">
          <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
            <span>© 2026 ClearPix Healthcare Technologies Inc.</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-6 text-sm sm:text-base font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Care</span>
            <span className="hover:text-white transition-colors cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

