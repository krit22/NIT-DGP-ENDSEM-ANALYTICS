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
    <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
        {/* Background Decor */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

      <div className="flex items-center gap-3 mb-8 relative z-10 px-2 pt-2">
        <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Pass Rate</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">With 9+ Scorers (Orbs)</p>
        </div>
      </div>

      <div className="flex items-end justify-between h-72 gap-1 md:gap-4 relative z-10 pt-4 pb-2">
        {data.map((item) => {
          const barHeight = item.passRate; // 0-100
          
          // Orb size and position relative to max toppers
          const orbSize = 24 + (item.toppers / maxToppers) * 24; // Min 24px, Max 48px
          
          return (
            <div key={item.section} className="flex-1 flex flex-col items-center justify-end h-full relative">
              
              {/* Flex container for the bar area */}
              <div className="w-full flex-1 flex items-end justify-center relative">
                  
                  {/* Floating Topper Orb - Always Visible Value */}
                  <div 
                    className="absolute z-20 flex flex-col items-center justify-center transition-transform hover:scale-110"
                    style={{ 
                        bottom: `${barHeight}%`, 
                        marginBottom: '8px',
                        width: `${orbSize}px`,
                        height: `${orbSize}px`
                    }}
                  >
                     <div className="absolute inset-0 bg-amber-400 rounded-full animate-pulse opacity-20" />
                     <div className="relative w-full h-full bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                         <span className="text-[10px] md:text-xs font-black text-amber-900 leading-none">{item.toppers}</span>
                     </div>
                  </div>

                  {/* Pass Rate Bar Track */}
                  <div className="w-full md:w-[70%] h-full bg-slate-50 rounded-t-lg relative overflow-hidden flex items-end justify-center">
                     <div 
                        className="w-full bg-emerald-500 rounded-t-md relative flex items-start justify-center pt-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        style={{ height: `${barHeight}%` }}
                     >
                         {/* Visible Percentage inside bar (Vertical if space is tight, or small text) */}
                         <span className="text-[9px] md:text-[10px] font-black text-emerald-50 bg-emerald-600/30 px-1 py-0.5 rounded backdrop-blur-sm transform -rotate-90 md:rotate-0 mt-4 md:mt-2 whitespace-nowrap">
                             {item.passRate}%
                         </span>
                     </div>
                  </div>
              </div>

              {/* X Axis Label */}
              <div className="h-6 flex items-center justify-center w-full mt-2">
                <span className="text-xs font-black text-slate-500">
                    {item.section}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex items-center gap-4 text-[10px] font-medium border-t border-slate-100 pt-3 px-2">
          <div className="flex items-center gap-1.5 text-slate-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-sm" />
              <span>Pass %</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
              <div className="w-2 h-2 bg-amber-400 rounded-full border border-slate-200" />
              <span>9+ Scorers Count</span>
          </div>
      </div>
    </div>
  );
};

export default PassRateChart;