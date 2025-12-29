import React from 'react';
import StoryFooter from '../components/StoryFooter';
import ToughestSubjects from '../components/ToughestSubjects';
import AvgSgpaChart from '../components/dashboard/AvgSgpaChart';
import PassRateChart from '../components/dashboard/PassRateChart';
import ConsistencyChart from '../components/dashboard/ConsistencyChart';

const OverallAnalysisPage: React.FC = () => {
  return (
    <div className="pb-32 animate-in fade-in duration-500">
      {/* Chapter Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 py-10 md:py-20 px-4">
        <span className="text-blue-600 font-black tracking-widest uppercase text-xs md:text-sm">Chapter 1</span>
        <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">Batch Overview</h2>
        <p className="text-slate-500 text-lg md:text-2xl max-w-xl mx-auto leading-snug">
          <span className="font-bold text-slate-700">Collective performance</span> analysis of the entire cohort.
        </p>
      </div>

      {/* Interactive Dashboard Grid */}
      <div className="space-y-12 md:space-y-16 mb-16 max-w-7xl mx-auto">
        
        {/* Card 1: Average SGPA */}
        <AvgSgpaChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Card 2: Pass Rate & Excellence */}
            <PassRateChart />
            
            {/* Card 3: Consistency & Spread */}
            <ConsistencyChart />
        </div>

      </div>

      {/* Section: Toughest Subjects */}
      <ToughestSubjects />

      {/* Narrative Bridge */}
      <div className="max-w-2xl mx-auto text-center mt-16 md:mt-24 px-6 py-8 bg-slate-50 rounded-3xl border border-slate-100">
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            "Batch performance is strong. But how do the <span className="text-blue-600 font-bold">Groups</span> compare?"
        </p>
      </div>

      <StoryFooter 
        currentChapter={1} 
        totalChapters={3} 
        nextLink="/groups" 
        nextLabel="Next: Groups"
        prevLink="/"
        prevLabel="Home"
      />
    </div>
  );
};

export default OverallAnalysisPage;