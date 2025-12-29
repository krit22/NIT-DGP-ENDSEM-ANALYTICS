import React from 'react';
import { SECTION_METRICS_DATA } from '../../constants';
import { Scaling } from 'lucide-react';

const ConsistencyChart: React.FC = () => {
  const data = Object.entries(SECTION_METRICS_DATA).map(([section, d]) => ({
    section,
    min: d.metrics.min_sgpa,
    max: d.metrics.max_sgpa,
    median: d.metrics.median_sgpa,
    avg: d.metrics.average_sgpa
  }));

  // Scale: 5.0 to 10.0
  const MIN_Y = 5.0;
  const MAX_Y = 10.0;
  const RANGE = MAX_Y - MIN_Y;

  const getPos = (val: number) => ((val - MIN_Y) / RANGE) * 100;

  return (
    <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none" />

      <div className="flex items-center gap-3 mb-8 relative z-10 px-2 pt-2">
        <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
          <Scaling className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Grade Spread</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Min • Avg • Max</p>
        </div>
      </div>

      <div className="flex items-end justify-between h-72 gap-1 md:gap-4 relative z-10 pt-4 px-1">
        {data.map((item) => {
          const bottomPos = getPos(item.min);
          const heightPercent = getPos(item.max) - bottomPos;
          const medianPos = getPos(item.median);
          const avgPos = getPos(item.avg);

          return (
            <div key={item.section} className="flex-1 flex flex-col items-center justify-end h-full relative">
               
               {/* Chart Area (Flex-1) */}
               <div className="w-full flex-1 relative">
                    {/* Grid Lines (Subtle) */}
                    <div className="absolute top-0 w-full border-t border-slate-50"></div>
                    <div className="absolute bottom-0 w-full border-b border-slate-50"></div>

                    {/* Range Line (Candlestick Body) */}
                    <div 
                        className="absolute w-1 md:w-1.5 bg-slate-200 left-1/2 -translate-x-1/2 rounded-full"
                        style={{ bottom: `${bottomPos}%`, height: `${heightPercent}%` }}
                    ></div>
                    
                    {/* Max Label */}
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-full mb-1 text-[8px] md:text-[9px] font-bold text-slate-400" style={{ bottom: `${getPos(item.max)}%` }}>
                        {item.max}
                    </div>
                    {/* Max Cap */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 md:w-4 h-0.5 bg-slate-400" style={{ bottom: `${getPos(item.max)}%` }} />


                    {/* Median Marker (Horizontal Line) */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-4 md:w-8 h-0.5 bg-slate-800 z-10"
                        style={{ bottom: `${medianPos}%` }}
                    />

                    {/* Average Marker (Dot) */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-amber-400 border border-white rounded-full shadow-sm z-20"
                        style={{ bottom: `${avgPos}%`, marginBottom: '-4px' }}
                    />
                    
                    {/* Min Cap */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 md:w-4 h-0.5 bg-slate-400" style={{ bottom: `${bottomPos}%` }} />
                    {/* Min Label */}
                    <div className="absolute left-1/2 -translate-x-1/2 translate-y-full mt-1 text-[8px] md:text-[9px] font-bold text-slate-400" style={{ bottom: `${bottomPos}%` }}>
                        {item.min}
                    </div>

               </div>

               {/* Section Label */}
               <div className="h-6 flex items-center justify-center w-full mt-2">
                 <span className="text-xs font-black text-slate-500">
                    {item.section}
                 </span>
               </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-medium border-t border-slate-100 pt-3 justify-center px-2">
        <div className="flex items-center gap-1.5 text-slate-500">
             <div className="w-3 h-0.5 bg-slate-800" />
             <span>Median</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
             <div className="w-2 h-2 bg-amber-400 rounded-full border border-slate-300" />
             <span>Average</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
             <div className="w-1 h-3 bg-slate-300 rounded-sm" />
             <span>Min/Max Range</span>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyChart;