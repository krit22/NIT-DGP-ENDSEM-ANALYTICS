import React from 'react';
import { GROUP_METRICS } from '../../constants';
import { Scale } from 'lucide-react';

const GroupConsistencyWidget: React.FC = () => {
  const { group1, group2 } = GROUP_METRICS;

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Stability & Range</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Spread & Volatility</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
          
          {/* Group 1 Card */}
          <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 text-center">
             <h4 className="text-blue-900 font-bold mb-1">Group 1</h4>
             <div className="text-xs text-blue-400 font-medium mb-4">Sec A-D</div>
             
             {/* Range */}
             <div className="mb-4">
                 <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Grade Range</div>
                 <div className="text-lg font-black text-slate-800">{group1.min} - {group1.max}</div>
                 <div className="text-xs font-bold text-slate-400">Spread: {(group1.max - group1.min).toFixed(2)}</div>
             </div>

             {/* SD */}
             <div>
                 <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Volatility (SD)</div>
                 <div className="text-xl font-black text-blue-600">{group1.stdDev}</div>
             </div>
          </div>

          {/* Group 2 Card */}
          <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 text-center">
             <h4 className="text-indigo-900 font-bold mb-1">Group 2</h4>
             <div className="text-xs text-indigo-400 font-medium mb-4">Sec E-H</div>
             
             {/* Range */}
             <div className="mb-4">
                 <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Grade Range</div>
                 <div className="text-lg font-black text-slate-800">{group2.min} - {group2.max}</div>
                 <div className="text-xs font-bold text-slate-400">Spread: {(group2.max - group2.min).toFixed(2)}</div>
             </div>

             {/* SD */}
             <div>
                 <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Volatility (SD)</div>
                 <div className="text-xl font-black text-indigo-600">{group2.stdDev}</div>
             </div>
          </div>
      </div>

      <div className="mt-4 text-[10px] text-slate-400 font-medium text-center">
         *Lower Volatility (Standard Deviation) indicates more consistent performance across students.
      </div>
       <div className="mt-2 text-xs text-center font-bold text-emerald-600">
         Group 2 is more consistent.
      </div>
    </div>
  );
};

export default GroupConsistencyWidget;