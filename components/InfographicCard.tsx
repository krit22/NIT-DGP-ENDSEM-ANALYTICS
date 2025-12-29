import React from 'react';
import { InfographicData } from '../types';
import { Sparkles } from 'lucide-react';

interface Props {
  data: InfographicData;
  fullWidth?: boolean;
}

const InfographicCard: React.FC<Props> = ({ data, fullWidth = false }) => {
  return (
    <div className={`group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl border border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${fullWidth ? 'col-span-full' : ''}`}>
      {/* Image Container */}
      <div className="relative bg-slate-50/50 border-b border-slate-100 p-6 md:p-8">
        {/* Subtle pattern background for image area */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        
        <img 
          src={data.imageUrl} 
          alt={data.title} 
          className="relative w-full h-auto object-contain max-h-[650px] mx-auto rounded-xl shadow-sm transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
      
      {/* Text Content */}
      <div className="p-8 md:p-12 bg-white relative">
        <div className="flex flex-col gap-6 max-w-5xl">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15] group-hover:text-blue-700 transition-colors">
                {data.title}
            </h3>

            {/* Description / Insight */}
            <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 mt-2 p-2 bg-blue-50 rounded-full ring-4 ring-blue-50/50">
                    <Sparkles className="w-5 h-5 text-blue-600 fill-blue-600" />
                </div>
                <div className="space-y-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Key Insight</span>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicCard;