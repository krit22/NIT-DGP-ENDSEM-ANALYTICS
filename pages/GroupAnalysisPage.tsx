import React from 'react';
import { GROUP_ONE_INFOGRAPHICS, GROUP_TWO_INFOGRAPHICS } from '../constants';
import InfographicCard from '../components/InfographicCard';

const GroupAnalysisPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <div className="text-center max-w-4xl mx-auto space-y-4 pt-8">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Group Comparative Analysis</h2>
        <p className="text-xl text-slate-500">
          Evaluating performance differentials between the two primary sub-groups.
        </p>
      </div>

      <div className="grid xl:grid-cols-2 gap-12">
        {/* Group 1 Column */}
        <div className="space-y-8">
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm sticky top-24 z-10 backdrop-blur-md bg-white/90">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Group 1</h3>
            <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">Sections A-D</span>
                <span className="text-slate-400 text-sm">Aggregate Analysis</span>
            </div>
          </div>
          <div className="space-y-12">
            {GROUP_ONE_INFOGRAPHICS.map((item) => (
              <InfographicCard key={item.id} data={item} />
            ))}
          </div>
        </div>

        {/* Group 2 Column */}
        <div className="space-y-8">
           <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm sticky top-24 z-10 backdrop-blur-md bg-white/90">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Group 2</h3>
            <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">Sections E-H</span>
                <span className="text-slate-400 text-sm">Aggregate Analysis</span>
            </div>
          </div>
          <div className="space-y-12">
            {GROUP_TWO_INFOGRAPHICS.map((item) => (
              <InfographicCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAnalysisPage;