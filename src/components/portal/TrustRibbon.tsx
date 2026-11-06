import React from 'react';
import { ShieldCheck, BookOpenCheck, Layers, Award } from 'lucide-react';
import { TRUST_STATS } from '../../data/portalData';

export const TrustRibbon: React.FC = () => {
  const icons = [
    <BookOpenCheck className="w-5 h-5 text-[#1F4E46]" />,
    <Layers className="w-5 h-5 text-[#2E6E62]" />,
    <ShieldCheck className="w-5 h-5 text-[#9E4733]" />,
    <Award className="w-5 h-5 text-[#1F4E46]" />
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="bg-white rounded-3xl border border-[#E5DFD5] p-6 sm:p-7 shadow-2xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E5DFD5]">
          {TRUST_STATS.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-center justify-center shrink-0 shadow-2xs">
                {icons[index % icons.length]}
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#1F4E46] tracking-tight tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-[#1A2421] leading-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#52605B] font-medium hidden sm:block">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
