import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, GraduationCap, AlertCircle } from 'lucide-react';
import { SECTIONS_GROUP_1, SECTIONS_GROUP_2 } from '../constants';
import HallOfFame from '../components/HallOfFame';

const HeroPage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="text-center space-y-4 py-10 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Student Performance <span className="text-blue-600">Analytics</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-500">
          A comprehensive breakdown of GPA distribution across 8 sections. 
          Analyzing trends, outliers, and group-wise comparisons to drive academic excellence.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <Link to="/overall" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center gap-2">
            View Overall Analysis <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/groups" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition flex items-center gap-2">
            Compare Groups
          </Link>
        </div>
      </div>

      {/* Hall Of Fame Section */}
      <HallOfFame />

      {/* Quick Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Students</p>
            <h3 className="text-2xl font-bold text-slate-800">884</h3>
            <p className="text-xs text-green-600 font-medium">Active Enrollment</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Batch Avg SGPA</p>
            <h3 className="text-2xl font-bold text-slate-800">8.16</h3>
            <p className="text-xs text-slate-400">Across 8 sections</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Top Performer Score</p>
            <h3 className="text-2xl font-bold text-slate-800">9.78</h3>
            <p className="text-xs text-purple-600">Sections B, E, and G</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Needs Attention</p>
            <h3 className="text-2xl font-bold text-slate-800">Section D</h3>
            <p className="text-xs text-amber-600">Lowest Avg SGPA: 7.90</p>
          </div>
        </div>
      </div>

      {/* Structure Preview */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Group 1 Structure</h3>
          <div className="flex gap-4">
            {SECTIONS_GROUP_1.map(sec => (
              <div key={sec} className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-slate-600 shadow-sm">
                {sec}
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Comprises the first four sections. Historically shows consistent performance with lower variance.
          </p>
        </div>
        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Group 2 Structure</h3>
          <div className="flex gap-4">
            {SECTIONS_GROUP_2.map(sec => (
              <div key={sec} className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-slate-600 shadow-sm">
                {sec}
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Comprises the latter four sections. Contains both the highest individual outliers and widest spread in scores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;