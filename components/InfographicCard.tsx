import React from 'react';
import { InfographicData } from '../types';
import { Sparkles } from 'lucide-react';

interface Props {
  data: InfographicData;
  fullWidth?: boolean;
}

// Helper to highlight key terms (Section X, numbers, percentages)
const highlightText = (text: string) => {
  const parts = text.split(/(\bSection [A-H]\b|\d+\.?\d*%?)/g);
  return parts.map((part, i) => {
    if (part.match(/\bSection [A-H]\b/)) {
      return <span key={i} className="text-blue-600 font-black">{part}</span>;
    }
    if (part.match(/\d+\.?\d*%?/)) {
      return <span key={i} className="text-amber-500 font-black">{part}</span>;
    }
    return part;
  });
};

const InfographicCard: React.FC<Props> = ({ data, fullWidth = false }) => {
  return (
    <div className={`group bg-white md:rounded-[2rem] shadow-sm md:hover:shadow-2xl border-y md:border border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${fullWidth ? 'col-span-full' : ''} mb-8 md:mb-0`}>
      {/* Image Container - No padding on mobile for maximum width */}
      <div className="relative bg-slate-50/50 border-b border-slate-100 p-0 md:p-8">
        {/* Subtle pattern background for image area */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        
        <img 
          src={data.imageUrl} 
          alt={data.title} 
          className="relative w-full h-auto object-cover md:object-contain max-h-[500px] md:max-h-[650px] mx-auto md:rounded-xl shadow-none md:shadow-sm transform md:group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
      
      {/* Text Content - Compact on mobile */}
      <div className="p-5 md:p-12 bg-white relative">
        <div className="flex flex-col gap-3 md:gap-6 max-w-5xl">
            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-[1.15] group-hover:text-blue-700 transition-colors">
                {data.title}
            </h3>

            {/* Description / Insight */}
            <div className="flex gap-3 md:gap-5 items-start">
                <div className="flex-shrink-0 mt-1 md:mt-2 p-1.5 md:p-2 bg-blue-50 rounded-full ring-2 md:ring-4 ring-blue-50/50">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600 fill-blue-600" />
                </div>
                <div className="space-y-1 md:space-y-2">
                    <span className="hidden md:block text-xs font-bold text-blue-600 uppercase tracking-widest">Key Insight</span>
                    <p className="text-lg md:text-2xl font-bold md:font-medium text-slate-700 md:text-slate-600 leading-snug md:leading-relaxed">
                        {highlightText(data.description)}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicCard;