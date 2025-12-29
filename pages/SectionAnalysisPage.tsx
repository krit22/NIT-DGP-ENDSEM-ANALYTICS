import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Section } from '../types';
import { SECTION_DATA } from '../constants';
import SectionSelector from '../components/SectionSelector';
import StoryFooter from '../components/StoryFooter';
import GradePieChart from '../components/dashboard/GradePieChart';
import { Users, Award, AlertTriangle, Activity, Zap, Medal } from 'lucide-react';

const SectionAnalysisPage: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const sectionKey = sectionId as Section;
  const data = SECTION_DATA[sectionKey];

  if (!data) {
    return <Navigate to="/sections/A" replace />;
  }

  // Helper for sorting branch battle
  const sortedBranches = Object.entries(data.branch_battle)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5); // Top 5

  return (
    <div className="pb-32 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      
      {/* 1. Header & Navigation */}
      <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-12">
        <div className="text-center space-y-3 mb-12">
            <span className="text-amber-500 font-black tracking-widest uppercase text-xs md:text-sm">Chapter 3</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                Classroom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intel.</span>
            </h2>
            <p className="text-slate-500 font-medium">Deep dive into Section {sectionKey}'s DNA.</p>
        </div>
        <SectionSelector />
      </div>

      {/* 2. Hero Dashboard (Summary) */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="relative bg-slate-900 rounded-[2.5rem] p-6 md:p-12 overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-center">
                
                {/* Identity */}
                <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-4 shadow-lg">
                        <span className="text-5xl md:text-7xl font-black text-white block leading-none">{sectionKey}</span>
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mt-1">Section</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                        <Zap className="w-3 h-3 fill-current" />
                        {data.summary.tag}
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="md:col-span-3 grid grid-cols-3 gap-4">
                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
                        <div className="flex justify-center text-blue-400 mb-2"><Activity className="w-6 h-6" /></div>
                        <div className="text-2xl md:text-5xl font-black text-white mb-1">{data.summary.average_sgpa}</div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Avg SGPA</div>
                     </div>
                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
                        <div className="flex justify-center text-amber-400 mb-2"><Users className="w-6 h-6" /></div>
                        <div className="text-2xl md:text-5xl font-black text-white mb-1">{data.summary.strength}</div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Strength</div>
                     </div>
                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
                        <div className="flex justify-center text-emerald-400 mb-2"><Award className="w-6 h-6" /></div>
                         {/* Calculating highest from Hall of Fame for display */}
                        <div className="text-2xl md:text-5xl font-black text-white mb-1">
                            {Math.max(...data.hall_of_fame.map(s => s.SGPA))}
                        </div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Highest</div>
                     </div>
                </div>
            </div>
        </div>
      </div>

      {/* 3. Main Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Widget: Hall of Fame - Top Left - Span 4 */}
        <div className="md:col-span-4 bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col h-full">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
             
             <div className="flex items-center gap-2 mb-6 relative z-10">
                <div className="p-2 bg-amber-500/20 rounded-lg"><Medal className="w-5 h-5 text-amber-400" /></div>
                <h3 className="font-bold text-white text-lg">Hall of Fame</h3>
            </div>

            <div className="space-y-4 relative z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-[300px] md:max-h-[350px]">
                {data.hall_of_fame.map((student, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-black text-sm shrink-0">
                            {idx + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-white text-sm truncate">{student.NAME}</h4>
                            <p className="text-xs text-slate-400 truncate">{student.Program}</p>
                        </div>
                        <div className="font-black text-amber-400 text-sm">
                            {student.SGPA}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Widget: Grade Distribution Pie Chart - Top Right - Span 8 */}
        <div className="md:col-span-8">
            <GradePieChart data={data.grade_density} />
        </div>
        
        {/* Widget: Performance Radar (Indices) - Bottom Left (Under Hall of Fame) - Span 4 */}
        <div className="md:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-indigo-50 rounded-lg"><Activity className="w-5 h-5 text-indigo-600" /></div>
                <h3 className="font-bold text-slate-900 text-lg">Performance DNA</h3>
            </div>
            
            <div className="space-y-6">
                {Object.entries(data.radar_scores).map(([key, value]) => (
                    <div key={key}>
                        <div className="flex justify-between text-sm mb-1.5">
                            <span className="font-medium text-slate-500 capitalize">{key.replace('_', ' ')}</span>
                            <span className="font-black text-slate-900">{value}</span>
                        </div>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${key === 'Elite_Index' ? 'bg-amber-500' : 'bg-indigo-600'}`}
                                style={{ width: `${key === 'Elite_Index' ? Math.min(value * 3, 100) : value}%` }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium">
                *Elite Index normalized for display.
            </div>
        </div>

        {/* Widget: Branch Battle - Bottom Middle - Span 4 */}
        <div className="md:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
             <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-emerald-50 rounded-lg"><Award className="w-5 h-5 text-emerald-600" /></div>
                <h3 className="font-bold text-slate-900 text-lg">Branch Battle</h3>
            </div>
            <div className="space-y-3">
                {sortedBranches.map(([branch, gpa], idx) => (
                    <div key={branch} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx === 0 ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-500'}`}>
                                {idx + 1}
                            </div>
                            <span className="font-bold text-slate-700 text-sm">{branch}</span>
                        </div>
                        <span className="font-black text-slate-900 text-sm">{gpa}</span>
                    </div>
                ))}
                <div className="text-center mt-2">
                    <span className="text-xs text-slate-400 font-medium">+ {Object.keys(data.branch_battle).length - 5} more branches</span>
                </div>
            </div>
        </div>

        {/* Widget: Local Hurdles (Backlogs) - Bottom Right - Span 4 */}
        <div className="md:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
             <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-rose-50 rounded-lg"><AlertTriangle className="w-5 h-5 text-rose-500" /></div>
                <h3 className="font-bold text-slate-900 text-lg">Subject Backlogs</h3>
            </div>
            <div className="space-y-4">
                {Object.entries(data.local_hurdles).sort(([,a], [,b]) => b-a).map(([subject, count], idx) => (
                     <div key={subject} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                             <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-rose-500 animate-pulse' : 'bg-slate-300'}`}></div>
                             <span className={`font-bold text-sm ${idx === 0 ? 'text-rose-600' : 'text-slate-600'}`}>{subject}</span>
                        </div>
                        <div className="text-sm font-black text-slate-900 bg-slate-100 px-2 py-1 rounded">
                            {count}
                        </div>
                     </div>
                ))}
            </div>
            <div className="mt-6 p-3 bg-rose-50 rounded-xl text-xs text-rose-700 font-medium leading-relaxed">
                Subjects with the highest backlog count in this section.
            </div>
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