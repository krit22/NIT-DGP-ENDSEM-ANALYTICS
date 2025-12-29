import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  currentChapter: number;
  totalChapters: number;
  prevLink?: string;
  nextLink?: string;
  nextLabel?: string;
  prevLabel?: string;
}

const StoryFooter: React.FC<Props> = ({ 
  currentChapter, 
  totalChapters, 
  prevLink, 
  nextLink, 
  nextLabel = "Next Chapter",
  prevLabel = "Back"
}) => {
  const progress = (currentChapter / totalChapters) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 z-40 px-4 py-4 md:py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        
        {/* Previous Button */}
        <div className="flex-1">
          {prevLink ? (
            <Link to={prevLink} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors text-sm md:text-base">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden md:inline">{prevLabel}</span>
            </Link>
          ) : <div />}
        </div>

        {/* Progress Indicator */}
        <div className="flex-1 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Chapter {currentChapter} of {totalChapters}
            </span>
            <div className="w-24 md:w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>

        {/* Next Button */}
        <div className="flex-1 flex justify-end">
          {nextLink ? (
            <Link to={nextLink} className="group inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-blue-600 hover:shadow-blue-500/30 transition-all active:scale-95 text-sm md:text-base">
              <span>{nextLabel}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link to="/" className="group inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all active:scale-95 text-sm md:text-base">
              <span>Back Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryFooter;