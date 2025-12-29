import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Section } from '../types';
import { SECTION_DATA } from '../constants';
import SectionSelector from '../components/SectionSelector';
import InfographicCard from '../components/InfographicCard';
import StoryFooter from '../components/StoryFooter';
import { Users, Award, TrendingDown } from 'lucide-react';

const SectionAnalysisPage: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  
  const sectionKey = sectionId as Section;
  const data = SECTION_DATA[sectionKey];

  if (!data) {
    return <Navigate to="/sections/A" replace />;
  }

  return (
    <div className="pb-32 animate-in fade-in duration-500">
       {/* Chapter Header */}
       <div className="max-w-4xl mx-auto text-center space-y-3 py-8 md:py-12 px-4">
        <span className="text-amber-500 font-black tracking-widest uppercase text-xs md:text-sm">Chapter 3</span>
        <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">Your Classroom</h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto leading-snug">
           Select section. View <span className="font-bold text-slate-700">specific metrics</span>.
        </p>
      </div>

      <SectionSelector />

      <div className="space-y-8 md:space-y-12">
        {/* Section Header Stats */}
        <div className="bg-slate-900 text-white rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-600/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-4 md:gap-6 mb-2">
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white text-slate-900 flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">
                    {data.section}
                 </div>
                 <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Analysis</h2>
                    <span className="text-slate-400 text-sm md:text-lg font-medium">Performance Metrics</span>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-12 bg-white/10 p-4 md:p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <div className="flex justify-center text-slate-300 mb-1 md:mb-2"><Users className="w-5 h-5 md:w-6 md:h-6" /></div>
                <div className="text-xl md:text-3xl font-black text-white">{data.stats.studentCount}</div>
                <div className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Students</div>
              </div>
               <div className="text-center px-2 md:px-4 border-l border-white/10">
                <div className="flex justify-center text-blue-400 mb-1 md:mb-2"><TrendingDown className="w-5 h-5 md:w-6 md:h-6" /></div>
                <div className="text-xl md:text-3xl font-black text-white">{data.stats.avgGpa}</div>
                <div className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Avg GPA</div>
              </div>
               <div className="text-center px-2 md:px-4 border-l border-white/10">
                <div className="flex justify-center text-amber-400 mb-1 md:mb-2"><Award className="w-5 h-5 md:w-6 md:h-6" /></div>
                <div className="text-xl md:text-3xl font-black text-white">{data.stats.highestGpa}</div>
                <div className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Highest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Infographics List */}
        <div className="grid gap-12 md:gap-16">
            {data.infographics.length === 0 ? (
                <div className="bg-slate-50 rounded-3xl p-10 md:p-20 text-center border border-dashed border-slate-200">
                    <p className="text-slate-400 text-lg">No infographics available for Section {data.section} yet.</p>
                </div>
            ) : (
                data.infographics.map(info => (
                    <InfographicCard key={info.id} data={info} fullWidth />
                ))
            )}
        </div>
      </div>

      <StoryFooter 
        currentChapter={3} 
        totalChapters={3} 
        prevLink="/groups" 
        prevLabel="Groups"
        nextLink={undefined} 
        nextLabel="Finish"
      />
    </div>
  );
};

export default SectionAnalysisPage;