import React from 'react';
import { GROUP_METRICS } from '../../constants';
import { Swords } from 'lucide-react';

const GroupBattleCard: React.FC = () => {
  const { group1, group2 } = GROUP_METRICS;

  const MetricRow = ({ 
    label, 
    val1, 
    val2, 
    format = (v: number) => v.toString(), 
    unit = '',
    reverse = false // if true, lower is better
  }: { 
    label: string, 
    val1: number, 
    val2: number, 
    format?: (v: number) => string,
    unit?: string,
    reverse?: boolean
  }) => {
    const isG1Win = reverse ? val1 < val2 : val1 > val2;
    const isG2Win = reverse ? val2 < val1 : val2 > val1;
    const diff = Math.abs(val1 - val2);

    return (
      <div className="py-5 border-b border-slate-50 last:border-0">
        {/* Metric Label - Central and Visible */}
        <div className="text-center mb-3">
             <span className="text-sm font-black text-slate-700 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">{label}</span>
        </div>

        <div className="grid grid-cols-7 items-center gap-2">
            {/* Group 1 Value */}
            <div className={`col-span-2 text-center md:text-right md:pr-4 ${isG1Win ? 'text-blue-600' : 'text-slate-400'}`}>
                <span className={`text-2xl md:text-3xl font-black block leading-none ${isG1Win ? 'scale-110' : 'opacity-70'}`}>
                    {format(val1)}{unit}
                </span>
            </div>

            {/* Visual Comparison Bar */}
            <div className="col-span-3 relative flex items-center h-full px-1">
                <div className="w-full h-2 bg-slate-100 rounded-full flex overflow-hidden shadow-inner relative">
                    {/* Center Marker */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white z-10" />
                    
                    {/* Left Bar (Group 1) */}
                    <div className={`h-full transition-all duration-500 ${isG1Win ? 'bg-blue-500' : 'bg-blue-300/50'}`} style={{ width: '50%' }} />
                    
                    {/* Right Bar (Group 2) */}
                    <div className={`h-full transition-all duration-500 ${isG2Win ? 'bg-indigo-500' : 'bg-indigo-300/50'}`} style={{ width: '50%' }} />
                </div>
                
                {/* Diff Badge */}
                 <div className={`absolute left-1/2 -translate-x-1/2 -bottom-5 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border ${
                     isG1Win ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                 }`}>
                    {isG1Win ? '◀' : ''} +{format(diff)}{unit} {isG2Win ? '▶' : ''}
                 </div>
            </div>

            {/* Group 2 Value */}
            <div className={`col-span-2 text-center md:text-left md:pl-4 ${isG2Win ? 'text-indigo-600' : 'text-slate-400'}`}>
                <span className={`text-2xl md:text-3xl font-black block leading-none ${isG2Win ? 'scale-110' : 'opacity-70'}`}>
                    {format(val2)}{unit}
                </span>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
            <div className="p-3 bg-rose-50 rounded-2xl text-rose-500">
                <Swords className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-black text-slate-900">Head to Head</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Comparison</p>
            </div>
        </div>

        {/* Column Headers - Permanently Visible */}
        <div className="grid grid-cols-2 gap-4 mb-4 px-2">
            <div className="text-center p-2 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-blue-600 font-black text-sm md:text-base uppercase tracking-wider">Group 1</div>
                <div className="text-blue-400 text-[10px] font-bold">Sections A-D</div>
            </div>
            <div className="text-center p-2 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="text-indigo-600 font-black text-sm md:text-base uppercase tracking-wider">Group 2</div>
                <div className="text-indigo-400 text-[10px] font-bold">Sections E-H</div>
            </div>
        </div>

        <div className="space-y-2 mt-6">
            <MetricRow 
                label="Average SGPA" 
                val1={group1.avg} 
                val2={group2.avg} 
                format={(v) => v.toFixed(2)}
            />
            <MetricRow 
                label="Median SGPA" 
                val1={group1.median} 
                val2={group2.median} 
                format={(v) => v.toFixed(2)}
            />
            <MetricRow 
                label="Pass Rate" 
                val1={group1.passRate} 
                val2={group2.passRate} 
                unit="%"
                format={(v) => Math.round(v).toString()}
            />
        </div>
    </div>
  );
};

export default GroupBattleCard;