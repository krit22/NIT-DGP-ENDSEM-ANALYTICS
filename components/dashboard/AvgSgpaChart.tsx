import React from 'react';
import { SECTION_METRICS_DATA } from '../../constants';
import { BarChart3 } from 'lucide-react';

const AvgSgpaChart: React.FC = () => {
  const data = Object.entries(SECTION_METRICS_DATA).map(([section, d]) => ({
    section,
    avg: d.metrics.average_sgpa
  }));

  // Visual scaling: We focus the graph between 7.0 and 9.0 to show differences
  const MIN_Y = 7.0;
  const MAX_Y = 9.0;
  const RANGE = MAX_Y - MIN_Y;
  
  // Y-Axis Ticks
  const ticks = [9.0, 8.5, 8.0, 7.5, 7.0];

  return (
    <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-6 md:mb-8 relative z-10 px-2 pt-2">
        <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Average SGPA</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Performance by Section</p>
        </div>
      </div>

      {/* Chart Layout with Y-Axis */}
      <div className="flex gap-4 relative z-10">
          {/* Y-Axis Scale */}
          <div className="flex flex-col justify-between h-64 py-4 text-[10px] font-bold text-slate-400 border-r border-slate-100 pr-3 shrink-0 select-none">
              {ticks.map(tick => (
                  <div key={tick} className="flex items-center justify-end h-4">
                      {tick.toFixed(1)}
                  </div>
              ))}
          </div>

          {/* Bars Container */}
          <div className="flex-1 flex items-end justify-between h-64 gap-1 md:gap-4 relative pt-4">
            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none opacity-30">
                 {ticks.map(tick => (
                    <div key={tick} className="w-full h-px bg-slate-200 border-t border-dashed border-slate-300"></div>
                 ))}
            </div>

            {data.map((item) => {
              // Calculate percentage height
              const rawPercent = ((item.avg - MIN_Y) / RANGE) * 100;
              const heightPercent = Math.max(5, Math.min(100, rawPercent)); // Min 5% to show something if low
              
              return (
                <div key={item.section} className="flex-1 flex flex-col items-center justify-end h-full relative group/bar z-10">
                  
                  {/* Value Label (Always Visible) */}
                  <div 
                    className="mb-1 text-[9px] md:text-[10px] font-bold text-slate-700 bg-white/80 backdrop-blur-sm px-1 rounded shadow-sm border border-slate-100 transform -translate-y-1"
                  >
                    {item.avg.toFixed(2)}
                  </div>

                  {/* Bar Track (Flex-1 fills available vertical space above label) */}
                  <div className="w-full flex-1 flex items-end justify-center bg-transparent relative overflow-visible">
                    {/* The Bar */}
                    <div 
                      className="w-full md:w-[80%] bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-md md:rounded-t-xl relative shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                      style={{ height: `${heightPercent}%` }}
                    >
                       {/* Shine Effect */}
                       <div className="absolute top-0 left-0 w-full h-1 bg-white/30" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="h-6 flex items-center justify-center w-full mt-1">
                    <span className="text-xs font-black text-slate-500">
                        {item.section}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      
      <div className="mt-4 flex justify-between text-[10px] text-slate-400 font-medium border-t border-slate-100 pt-3 px-2">
         <span>Values are Average SGPA</span>
         <span>Highest: Section G</span>
      </div>
    </div>
  );
};

export default AvgSgpaChart;