import React from 'react';
import { AlertCircle, ShieldAlert, Zap } from 'lucide-react';

const SUBJECTS = [
  { rank: 1, code: "XEC01", instances: 65, impact: "7.35%", status: "Critical" },
  { rank: 2, code: "MAC01", instances: 27, impact: "3.05%", status: "Moderate" },
  { rank: 3, code: "PHC01", instances: 25, impact: "2.83%", status: "Moderate" },
  { rank: 4, code: "XEC02", instances: 19, impact: "2.15%", status: "Low-Moderate" }
];

const ToughestSubjects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 md:my-24 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="relative bg-rose-50/50 border border-rose-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-900/5">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 md:p-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 md:mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-rose-200">
                            Backlog Ranking
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.95] tracking-tight">
                        Subject <span className="text-rose-600">Backlogs.</span>
                    </h3>
                    <p className="mt-3 text-slate-500 font-medium max-w-md">
                        Subjects with the highest number of backlogs. <span className="text-rose-600 font-bold">XEC01</span> has the most.
                    </p>
                </div>
                <div className="hidden md:block p-3 bg-white rounded-2xl shadow-sm border border-rose-100">
                     <ShieldAlert className="w-8 h-8 text-rose-500" />
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {SUBJECTS.map((sub) => {
                    const isCritical = sub.status === 'Critical';
                    
                    return (
                        <div 
                            key={sub.code}
                            className={`
                                group relative flex items-center justify-between p-4 md:p-6 rounded-2xl transition-all duration-300
                                ${isCritical 
                                    ? 'bg-white border-2 border-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.15)] md:scale-105 z-10' 
                                    : 'bg-white border border-rose-100 hover:border-rose-300 shadow-sm'}
                            `}
                        >
                            {/* Left: Rank & Code */}
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className={`
                                    w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl font-black text-lg md:text-xl
                                    ${isCritical ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30' : 'bg-slate-100 text-slate-500'}
                                `}>
                                    {sub.rank}
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-2xl font-black text-slate-800 leading-none mb-1">
                                        {sub.code}
                                        {isCritical && <span className="hidden md:inline-block ml-3 text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 uppercase align-middle">Most Backlogs</span>}
                                    </h4>
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-500">
                                        <span className={isCritical ? 'text-rose-600 font-bold' : ''}>{sub.instances} Backlogs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Impact & Badge */}
                            <div className="text-right">
                                <div className="text-lg md:text-2xl font-black text-slate-800">
                                    {sub.impact}
                                </div>
                                <div className={`
                                    text-[10px] font-bold uppercase tracking-wider mt-0.5
                                    ${isCritical ? 'text-rose-600 flex items-center justify-end gap-1' : 'text-slate-400'}
                                `}>
                                    {isCritical && <Zap className="w-3 h-3 fill-rose-600 animate-pulse" />}
                                    Failure Rate
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Insight Footer */}
             <div className="mt-8 pt-6 border-t border-rose-200/60 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <p className="text-sm text-rose-900/70 font-medium leading-relaxed">
                    <span className="font-bold text-rose-700">Insight:</span> XEC01 accounts for more backlogs than the next two subjects combined.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ToughestSubjects;