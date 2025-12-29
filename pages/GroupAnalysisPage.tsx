import React, { useRef } from 'react';
import { GROUP_COMPARISON_INFOGRAPHICS } from '../constants';
import InfographicCard from '../components/InfographicCard';
import StoryFooter from '../components/StoryFooter';
import { ArrowDown, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GroupAnalysisPage: React.FC = () => {
  const choiceRef = useRef<HTMLDivElement>(null);

  const scrollToChoice = () => {
    choiceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-32 animate-in fade-in duration-500">
      
      {/* Chapter Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 py-10 md:py-20 px-4">
        <span className="text-indigo-600 font-black tracking-widest uppercase text-xs md:text-sm">Chapter 2</span>
        <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">Group vs Group</h2>
        <p className="text-slate-500 text-lg md:text-2xl max-w-xl mx-auto leading-snug">
          The academic standoff. <span className="font-bold text-slate-700">Comparative metrics</span>.
        </p>
      </div>

      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-12">
            {GROUP_COMPARISON_INFOGRAPHICS.map((item) => (
                <InfographicCard key={item.id} data={item} fullWidth />
            ))}
        </div>
      </div>

      {/* Narrative Interlude */}
      <div className="py-16 text-center space-y-4 px-4">
          <h3 className="text-2xl font-bold text-slate-900">Go Deeper</h3>
          <p className="text-slate-500 text-base max-w-md mx-auto">
              Explore specific section data.
          </p>
          <button 
            onClick={scrollToChoice}
            className="animate-bounce inline-flex flex-col items-center gap-1 text-blue-600 font-bold pt-2"
          >
            <span className="text-sm">Select Group</span>
            <ArrowDown className="w-4 h-4" />
          </button>
      </div>

      {/* Interactive Choice Section */}
      <div ref={choiceRef} className="scroll-mt-24 px-4 md:px-0">
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.3)_0%,transparent_70%)] pointer-events-none" />
             
             <h3 className="text-2xl md:text-5xl font-black text-white mb-8 md:mb-12 relative z-10">Choose Alliance</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto relative z-10">
                {/* Group 1 Card */}
                <Link to="/sections/A" className="group bg-white/10 active:bg-white/20 hover:bg-white/20 border border-white/10 rounded-2xl p-6 md:p-8 transition-all cursor-pointer text-left flex items-center md:block gap-4">
                    <div className="bg-blue-500/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center md:mb-6 text-blue-400 shrink-0">
                        <Users className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Group 1</h4>
                        <p className="text-slate-400 text-sm md:text-base mb-0 md:mb-6">Sections A - D</p>
                        <div className="hidden md:flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                            Explore <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>

                {/* Group 2 Card */}
                 <Link to="/sections/E" className="group bg-white/10 active:bg-white/20 hover:bg-white/20 border border-white/10 rounded-2xl p-6 md:p-8 transition-all cursor-pointer text-left flex items-center md:block gap-4">
                    <div className="bg-indigo-500/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center md:mb-6 text-indigo-400 shrink-0">
                        <Users className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Group 2</h4>
                        <p className="text-slate-400 text-sm md:text-base mb-0 md:mb-6">Sections E - H</p>
                        <div className="hidden md:flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                            Explore <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>
             </div>
        </div>
      </div>

      <StoryFooter 
        currentChapter={2} 
        totalChapters={3} 
        prevLink="/overall" 
        prevLabel="Overall"
        nextLink="/sections/A"
        nextLabel="Find Section"
      />
    </div>
  );
};

export default GroupAnalysisPage;