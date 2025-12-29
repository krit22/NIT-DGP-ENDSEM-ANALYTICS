import React from 'react';
import { GROUP_METRICS } from '../../constants';
import { Crown } from 'lucide-react';

const GroupExcellenceWidget: React.FC = () => {
  const { group1, group2 } = GROUP_METRICS;
  
  // Calculate ratios for visual bars
  const total9 = group1.toppers9 + group2.toppers9;
  const g1Percent9 = (group1.toppers9 / total9) * 100;
  
  const total95 = group1.toppers95 + group2.toppers95;
  const g1Percent95 = (group1.toppers95 / total95) * 100;

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
        <div className="p-3 bg-amber-50 rounded-2xl text-amber-500">
          <Crown className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900">The Elite League</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Top Performers Count</p>
        </div>
      </div>

       {/* Column Headers - Permanently Visible */}
       <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-left pl-2 border-l-4 border-blue-500">
                <div className="text-blue-600 font-black text-lg uppercase tracking-tight">Group 1</div>
                <div className="text-slate-400 text-[10px] font-bold">Sec A-D</div>
            </div>
            <div className="text-right pr-2 border-r-4 border-indigo-500">
                <div className="text-indigo-600 font-black text-lg uppercase tracking-tight">Group 2</div>
                <div className="text-slate-400 text-[10px] font-bold">Sec E-H</div>
            </div>
        </div>

      <div className="space-y-8 flex-1">
         {/* 9.0+ Section */}
         <div className="bg-slate-50 rounded-2xl p-4">
            <div className="text-center mb-3">
                 <span className="text-xs font-black text-slate-600 uppercase tracking-widest bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">Scored 9.0+</span>
            </div>
            
            <div className="flex justify-between items-end mb-2 px-2">
                <div className="text-blue-600 font-black text-4xl leading-none">{group1.toppers9}</div>
                <div className="text-indigo-600 font-black text-4xl leading-none">{group2.toppers9}</div>
            </div>
            
            <div className="w-full h-4 bg-white rounded-full overflow-hidden flex shadow-inner border border-slate-100">
                <div className="h-full bg-blue-400" style={{ width: `${g1Percent9}%` }} />
                <div className="h-full bg-indigo-500" style={{ width: `${100 - g1Percent9}%` }} />
            </div>
            <div className="flex justify-between px-1 mt-1 text-[10px] font-bold text-slate-400">
                 <span>{Math.round(g1Percent9)}%</span>
                 <span>{Math.round(100 - g1Percent9)}%</span>
            </div>
         </div>

         {/* 9.5+ Section */}
         <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100">
            <div className="text-center mb-3">
                 <span className="text-xs font-black text-amber-700 uppercase tracking-widest bg-white px-3 py-1 rounded-lg border border-amber-200 shadow-sm">Scored 9.5+</span>
            </div>

            <div className="flex justify-between items-end mb-2 px-2">
                <div className="text-blue-600 font-black text-4xl leading-none">{group1.toppers95}</div>
                <div className="text-indigo-600 font-black text-4xl leading-none">{group2.toppers95}</div>
            </div>
            
            <div className="w-full h-4 bg-white rounded-full overflow-hidden flex shadow-inner border border-amber-100">
                <div className="h-full bg-blue-400" style={{ width: `${g1Percent95}%` }} />
                <div className="h-full bg-indigo-500" style={{ width: `${100 - g1Percent95}%` }} />
            </div>
            
            <div className="flex justify-between px-1 mt-1 text-[10px] font-bold text-slate-400">
                 <span>{Math.round(g1Percent95)}%</span>
                 <span>{Math.round(100 - g1Percent95)}%</span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default GroupExcellenceWidget;