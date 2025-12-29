import React from 'react';
import { OVERALL_INFOGRAPHICS } from '../constants';
import InfographicCard from '../components/InfographicCard';

const OverallAnalysisPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Overall Analysis</h2>
        <p className="text-slate-500 text-xl max-w-3xl mx-auto">
          Comparative metrics across the entire cohort (Sections A-H).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 pb-20">
        {OVERALL_INFOGRAPHICS.map((item, index) => (
          <InfographicCard key={item.id} data={item} fullWidth={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default OverallAnalysisPage;