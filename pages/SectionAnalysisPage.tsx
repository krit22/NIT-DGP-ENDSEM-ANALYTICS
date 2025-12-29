import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Section } from '../types';
import { SECTION_DATA } from '../constants';
import SectionSelector from '../components/SectionSelector';
import InfographicCard from '../components/InfographicCard';
import { Users, Award, TrendingDown } from 'lucide-react';

const SectionAnalysisPage: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  
  // Validate section ID
  const sectionKey = sectionId as Section;
  const data = SECTION_DATA[sectionKey];

  if (!data) {
    return <Navigate to="/sections/A" replace />;
  }

  return (
    <div className="pb-20">
      <SectionSelector />

      <div className="space-y-12">
        {/* Section Header Stats */}
        <div className="bg-white rounded-3xl border border-slate-100 p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-2">
                 <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                    {data.section}
                 </div>
                 <div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Section Analysis</h2>
                    <span className="text-slate-500 text-lg font-medium">Detailed performance breakdown</span>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-12">
              <div className="text-center">
                <div className="flex justify-center text-slate-400 mb-2"><Users className="w-6 h-6" /></div>
                <div className="text-3xl font-black text-slate-900">{data.stats.studentCount}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Students</div>
              </div>
               <div className="text-center px-4 border-l border-slate-100">
                <div className="flex justify-center text-blue-500 mb-2"><TrendingDown className="w-6 h-6" /></div>
                <div className="text-3xl font-black text-slate-900">{data.stats.avgGpa}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Avg GPA</div>
              </div>
               <div className="text-center px-4 border-l border-slate-100">
                <div className="flex justify-center text-amber-500 mb-2"><Award className="w-6 h-6" /></div>
                <div className="text-3xl font-black text-slate-900">{data.stats.highestGpa}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Highest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Infographics List */}
        <div className="grid gap-16">
            {data.infographics.length === 0 ? (
                <div className="bg-slate-50 rounded-3xl p-20 text-center border border-dashed border-slate-200">
                    <p className="text-slate-400 text-xl">No infographics added for this section yet.</p>
                </div>
            ) : (
                data.infographics.map(info => (
                    <InfographicCard key={info.id} data={info} fullWidth />
                ))
            )}
        </div>
      </div>
    </div>
  );
};

export default SectionAnalysisPage;