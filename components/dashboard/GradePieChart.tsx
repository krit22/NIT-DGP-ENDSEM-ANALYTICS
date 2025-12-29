import React from 'react';
import { PieChart } from 'lucide-react';

interface Props {
  data: Record<string, number>;
}

interface GradeDataItem {
  key: string;
  value: number;
  color: string;
  label: string;
  order: number;
}

const GradePieChart: React.FC<Props> = ({ data }) => {
  // Define color mapping and sort order
  const rangeConfig: Record<string, { color: string; label: string; order: number }> = {
    '<6': { color: '#f43f5e', label: '< 6.0', order: 0 }, // Rose 500
    '6-7': { color: '#f59e0b', label: '6.0 - 7.0', order: 1 }, // Amber 500
    '7-8': { color: '#6366f1', label: '7.0 - 8.0', order: 2 }, // Indigo 500
    '8-9': { color: '#3b82f6', label: '8.0 - 9.0', order: 3 }, // Blue 500
    '9-10': { color: '#10b981', label: '9.0 - 10.0', order: 4 }, // Emerald 500
  };

  // Convert map to sorted array
  const sortedData: GradeDataItem[] = Object.entries(data)
    .map(([key, value]) => {
      const config = rangeConfig[key];
      // Explicitly construct object to avoid type inference issues with spread of undefined
      return {
        key,
        value: Number(value),
        color: config?.color ?? '#cbd5e1',
        label: config?.label ?? key,
        order: config?.order ?? -1
      };
    })
    .sort((a, b) => b.order - a.order); // High to Low for chart (Emerald first)

  const total = sortedData.reduce((acc, curr) => acc + curr.value, 0);

  // SVG Calculations
  const size = 200;
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0; // Start at top (rotated -90deg via CSS)

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col justify-center h-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <PieChart className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="font-bold text-slate-900 text-lg">Grade Density</h3>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* SVG Donut Chart */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0">
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90 transform">
            {sortedData.map((item) => {
              const safeTotal = total === 0 ? 1 : total;
              const dashArray = (item.value / safeTotal) * circumference;
              const offset = currentOffset;
              currentOffset += dashArray; // Advance offset for next segment

              return (
                <circle
                  key={item.key}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${dashArray} ${circumference}`}
                  strokeDashoffset={-offset} // Negative to move clockwise visually
                  className="transition-all duration-1000 ease-out hover:opacity-90"
                />
              );
            })}
             {/* Fallback grey circle if empty */}
             {total === 0 && (
                 <circle cx={center} cy={center} r={radius} fill="transparent" stroke="#f1f5f9" strokeWidth={strokeWidth} />
             )}
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl md:text-4xl font-black text-slate-900">{total}</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Students</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-1 gap-3">
            {/* Show items in reverse order of config for legend (High grades top) */}
            {sortedData.map((item) => {
                 const safeTotal = total === 0 ? 1 : total;
                 const percent = ((item.value / safeTotal) * 100).toFixed(1);
                 return (
                    <div key={item.key} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-xs md:text-sm font-bold text-slate-600">{item.label}</span>
                        </div>
                        <div className="text-right">
                             <div className="font-black text-slate-900 text-sm">{item.value}</div>
                             <div className="text-[10px] font-bold text-slate-400">{percent}%</div>
                        </div>
                    </div>
                 );
            })}
        </div>
      </div>
    </div>
  );
};

export default GradePieChart;