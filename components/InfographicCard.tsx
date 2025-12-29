import React, { useState } from 'react';
import { InfographicData } from '../types';
import { Sparkles, Maximize2 } from 'lucide-react';
import ImageViewer from './ImageViewer';

interface Props {
  data: InfographicData;
  fullWidth?: boolean;
}

// Enhanced highlighter for "skimmable" mobile reading
const highlightText = (text: string) => {
  const regex = /(\bSection [A-H]\b|\bGroup [12]\b|\d+(?:\.\d+)?%?|\b(?:High|Low|Top|Best|Most|Dominates|Outliers|Consistent|Pass|Fail|Average|Median|Spread)\b)/gi;
  
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (!part) return null;
    
    const lower = part.toLowerCase();

    // Sections & Groups (Bold Dark)
    if (part.match(/^(Section [A-H]|Group [12])$/i)) {
      return <span key={i} className="text-slate-900 font-black">{part}</span>;
    }
    
    // Numbers (Vibrant Blue)
    if (part.match(/^\d+(?:\.\d+)?%?$/)) {
      return <span key={i} className="text-blue-600 font-black">{part}</span>;
    }

    // Positive Keywords (Green)
    if (['high', 'top', 'best', 'most', 'dominates', 'consistent', 'pass'].includes(lower)) {
        return <span key={i} className="text-emerald-600 font-bold">{part}</span>;
    }
    
    // Negative/Caution Keywords (Rose/Orange)
    if (['low', 'fail', 'outliers', 'spread'].includes(lower)) {
        return <span key={i} className="text-rose-500 font-bold">{part}</span>;
    }
    
    // Neutral/Technical Keywords (Slate Darker)
    if (['average', 'median'].includes(lower)) {
         return <span key={i} className="text-slate-600 font-bold">{part}</span>;
    }

    // Default Text (Lighter for contrast)
    return <span key={i} className="text-slate-400 font-medium">{part}</span>;
  });
};

const InfographicCard: React.FC<Props> = ({ data, fullWidth = false }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <div className={`group bg-white md:rounded-[2rem] shadow-sm md:hover:shadow-2xl border-y md:border border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${fullWidth ? 'col-span-full' : ''} mb-8 md:mb-0`}>
        {/* Image Container */}
        <div 
          className="relative bg-slate-50/50 border-b border-slate-100 p-0 md:p-8 cursor-pointer overflow-hidden"
          onClick={() => setIsViewerOpen(true)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
          
          <img 
            src={data.imageUrl} 
            alt={data.title} 
            className="relative w-full h-auto object-cover md:object-contain max-h-[500px] md:max-h-[650px] mx-auto md:rounded-xl shadow-none md:shadow-sm transform md:group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10">
            <button className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs md:text-sm font-bold px-3 py-2 md:px-4 md:py-2.5 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 hover:bg-blue-50 transition-colors group-hover:scale-105 active:scale-95">
                <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
                <span className="hidden md:inline">Tap to Expand</span>
                <span className="md:hidden">Expand</span>
            </button>
          </div>
        </div>
        
        {/* Content - Optimized for Mobile */}
        <div className="p-5 md:p-12 bg-white relative">
          <div className="flex flex-col gap-2 md:gap-6 max-w-5xl">
              <h3 className="text-xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                  {data.title}
              </h3>

              <div className="flex gap-3 md:gap-5 items-start mt-2 md:mt-0">
                  <div className="flex-shrink-0 mt-1 p-1.5 md:p-2 bg-blue-50 rounded-full ring-2 md:ring-4 ring-blue-50/50">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                      <span className="block md:hidden text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Insight</span>
                      <span className="hidden md:block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Key Insight</span>
                      <p className="text-base md:text-2xl leading-relaxed md:leading-relaxed">
                          {highlightText(data.description)}
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <ImageViewer 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
        imageUrl={data.imageUrl} 
        title={data.title} 
      />
    </>
  );
};

export default InfographicCard;