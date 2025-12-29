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
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none" />

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
          <Scaling className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Grade Consistency</h3>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Spread (Min-Max) • Median • Average</p>
        </div>
      </div>

      <div className="flex items-end justify-between h-64 gap-2 md:gap-4 relative z-10 pt-4 px-2">
        {data.map((item) => {
          const bottomPos = getPos(item.min);
          const heightPercent = getPos(item.max) - bottomPos;
          const medianPos = getPos(item.median);
          const avgPos = getPos(item.avg);

          return (
            <div key={item.section} className="flex-1 flex flex-col items-center justify-end h-full relative group/stick">
               
               {/* Invisible Hover Area (Tooltip) */}
               <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-center opacity-0 group-hover/stick:opacity-100 pointer-events-none transition-opacity">
                    <div className="bg-slate-900/90 text-white text-[10px] p-2 rounded-lg backdrop-blur-sm shadow-xl space-y-1">
                        <div className="flex justify-between gap-3"><span>Max:</span> <span className="font-bold">{item.max}</span></div>
                        <div className="flex justify-between gap-3 text-amber-300"><span>Avg:</span> <span className="font-bold">{item.avg}</span></div>
                        <div className="flex justify-between gap-3"><span>Med:</span> <span className="font-bold">{item.median}</span></div>
                        <div className="flex justify-between gap-3 text-slate-400"><span>Min:</span> <span className="font-bold">{item.min}</span></div>
                    </div>
               </div>

               {/* Chart Area (Flex-1) */}
               <div className="w-full flex-1 relative">
                    {/* Grid Lines (Subtle) */}
                    <div className="absolute top-0 w-full border-t border-slate-50"></div>
                    <div className="absolute bottom-0 w-full border-b border-slate-50"></div>

                    {/* Range Line (Candlestick Body) */}
                    <div 
                        className="absolute w-1.5 md:w-2 bg-slate-200 left-1/2 -translate-x-1/2 rounded-full transition-colors group-hover/stick:bg-indigo-100"
                        style={{ bottom: `${bottomPos}%`, height: `${heightPercent}%` }}
                    ></div>
                    
                    {/* Range Caps (Min/Max) */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 md:w-6 h-0.5 bg-slate-300" style={{ bottom: `${bottomPos}%` }} />
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 md:w-6 h-0.5 bg-slate-300" style={{ bottom: `${getPos(item.max)}%` }} />

                    {/* Median Marker (Horizontal Line) */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-6 md:w-10 h-1 bg-slate-800 shadow-sm z-10 rounded-full"
                        style={{ bottom: `${medianPos}%` }}
                    />

                    {/* Average Marker (Dot) */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-amber-400 border-2 border-white rounded-full shadow-md z-10"
                        style={{ bottom: `${avgPos}%`, marginBottom: '-6px' }} // Center vertically on point
                    />
               </div>

               {/* Label */}
               <div className="h-8 flex items-center justify-center w-full">
                 <span className="text-sm font-black text-slate-300 group-hover/stick:text-indigo-600 transition-colors">
                    {item.section}
                 </span>
               </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium border-t border-slate-100 pt-3 justify-center md:justify-start">
        <div className="flex items-center gap-1.5 text-slate-500">
             <div className="w-3 h-1 bg-slate-800 rounded-full" />
             <span>Median</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
             <div className="w-2.5 h-2.5 bg-amber-400 rounded-full border border-slate-300" />
             <span>Average</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
             <div className="w-1 h-3 bg-slate-300 rounded-sm" />
             <span>Range (Min-Max)</span>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyChart;