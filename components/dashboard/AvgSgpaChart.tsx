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

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Average SGPA</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Performance by Section</p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="flex items-end justify-between h-64 gap-2 md:gap-4 relative z-10 pt-4">
        {data.map((item) => {
          // Calculate percentage height
          const rawPercent = ((item.avg - MIN_Y) / RANGE) * 100;
          const heightPercent = Math.max(5, Math.min(100, rawPercent)); // Min 5% to show something if low
          
          return (
            <div key={item.section} className="flex-1 flex flex-col items-center justify-end h-full group/bar relative">
              
              {/* Tooltip */}
              <div className="absolute top-0 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 pointer-events-none bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap z-20 -translate-y-full mb-2">
                {item.avg.toFixed(3)}
              </div>

              {/* Bar Track (Flex-1 fills available vertical space above label) */}
              <div className="w-full flex-1 flex items-end justify-center bg-slate-50 rounded-t-2xl relative overflow-hidden">
                {/* The Bar */}
                <div 
                  className="w-full md:w-[80%] bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg md:rounded-t-xl transition-all duration-700 ease-out group-hover/bar:bg-blue-500 relative shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  style={{ height: `${heightPercent}%` }}
                >
                   {/* Shine Effect */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-white/30" />
                </div>
              </div>

              {/* Label */}
              <div className="h-8 flex items-center justify-center w-full">
                <span className="text-sm font-black text-slate-300 group-hover/bar:text-blue-600 transition-colors">
                    {item.section}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 flex justify-between text-xs text-slate-400 font-medium border-t border-slate-100 pt-3">
         <span>Scale: {MIN_Y.toFixed(1)} - {MAX_Y.toFixed(1)}</span>
         <span>Highest: Section G ({SECTION_METRICS_DATA['G']?.metrics?.average_sgpa?.toFixed(2) || 'N/A'})</span>
      </div>
    </div>
  );
};

export default AvgSgpaChart;