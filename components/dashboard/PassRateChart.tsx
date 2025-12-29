import React from 'react';
import { SECTION_METRICS_DATA } from '../../constants';
import { ShieldCheck } from 'lucide-react';

const PassRateChart: React.FC = () => {
  const data = Object.entries(SECTION_METRICS_DATA).map(([section, d]) => ({
    section,
    passRate: d.performance.pass_percentage,
    toppers: d.performance.toppers_9_plus_count
  }));

  const maxToppers = Math.max(...data.map(d => d.toppers));

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
        {/* Background Decor */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Pass Rate vs. Excellence</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Pass % (Bar) • 9+ Scorer Count (Orb)</p>
        </div>
      </div>

      <div className="flex items-end justify-between h-64 gap-2 md:gap-4 relative z-10 pt-12">
        {data.map((item) => {
          const barHeight = item.passRate; // 0-100
          
          // Orb size and position relative to max toppers
          const orbSize = 24 + (item.toppers / maxToppers) * 20; // Min 24px, Max 44px
          
          return (
            <div key={item.section} className="flex-1 flex flex-col items-center justify-end h-full group/item relative">
              
              {/* Bar Track Container (flex-1) */}
              <div className="w-full flex-1 flex items-end justify-center relative">
                  
                  {/* Floating Topper Orb */}
                  <div 
                    className="absolute transition-all duration-500 z-20 flex items-center justify-center shadow-lg hover:scale-110 cursor-help"
                    style={{ 
                        bottom: `${barHeight}%`, 
                        marginBottom: '10px',
                        width: `${orbSize}px`,
                        height: `${orbSize}px`
                    }}
                  >
                     <div className="absolute inset-0 bg-amber-400 rounded-full animate-pulse opacity-20" />
                     <div className="relative w-full h-full bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                         <span className="text-[10px] md:text-xs font-black text-amber-900">{item.toppers}</span>
                     </div>

                     {/* Tooltip for Orb */}
                     <div className="absolute bottom-full mb-2 opacity-0 group-hover/item:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap pointer-events-none">
                        {item.toppers} scored 9+
                     </div>
                  </div>

                  {/* Pass Rate Bar Track */}
                  <div className="w-full md:w-[60%] h-full bg-slate-50 rounded-t-xl relative overflow-hidden flex items-end justify-center">
                     <div 
                        className="w-full bg-emerald-500 rounded-t-lg transition-all duration-1000 ease-out relative group-hover/item:bg-emerald-400"
                        style={{ height: `${barHeight}%` }}
                     >
                     </div>
                  </div>
                  
                  {/* Pass Rate Label (Hover) */}
                   <div className="absolute bottom-10 opacity-0 group-hover/item:opacity-100 transition-all text-[10px] font-bold text-white z-20">
                        {item.passRate}%
                   </div>
              </div>

              {/* X Axis Label */}
              <div className="h-8 flex items-center justify-center w-full">
                <span className="text-sm font-black text-slate-300 group-hover/item:text-emerald-600 transition-colors">
                    {item.section}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 flex items-center gap-4 text-xs font-medium border-t border-slate-100 pt-3">
          <div className="flex items-center gap-1.5 text-slate-500">
              <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
              <span>Pass Percentage</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
              <div className="w-3 h-3 bg-amber-400 rounded-full border border-slate-200" />
              <span>9+ Scorers (Size = Count)</span>
          </div>
      </div>
    </div>
  );
};

export default PassRateChart;