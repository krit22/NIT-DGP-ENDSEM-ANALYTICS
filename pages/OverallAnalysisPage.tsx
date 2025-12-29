import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

      {/* Narrative Bridge & CTA */}
      <div className="max-w-3xl mx-auto text-center mt-16 md:mt-24 px-6 py-12 bg-gradient-to-b from-slate-50 to-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-blue-200/50 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 space-y-8">
            <p className="text-xl md:text-3xl text-slate-700 font-bold leading-relaxed">
                "Batch performance is strong. <br className="hidden md:block"/>But how do the <span className="text-blue-600 font-black">Groups</span> compare?"
            </p>
            
            <Link 
                to="/groups"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-lg shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
            >
                <span>Analyze Groups</span>
                <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
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