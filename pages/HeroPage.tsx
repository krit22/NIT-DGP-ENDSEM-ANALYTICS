import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, ChevronDown, Zap } from 'lucide-react';
import HallOfFame from '../components/HallOfFame';

const HeroPage: React.FC = () => {
  return (
    <div className="pb-20 bg-white">
      {/* Minimal Cinematic Intro */}
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden px-4">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="space-y-6 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl mx-auto">
            {/* Live Indicator / Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-4 mx-auto hover:bg-slate-100 transition-colors cursor-default">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-500">
                   Results Out • 1st Semester 2025
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] md:leading-[1.05]">
                NIT Durgapur <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    End Semester Insights.
                </span>
            </h1>

            {/* Hook Statements */}
            <div className="space-y-3 pt-4">
                <p className="text-xl md:text-3xl font-bold text-slate-800">
                    Ready to get the data before your friends?
                </p>
                <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                   The complete breakdown of the 2025 First Semester Examination. 
                   <span className="hidden md:inline"> Outliers, champions, and section wars—decoded.</span>
                </p>
            </div>
        </div>

        {/* CTA Section */}
        <div className="pt-8 z-10 animate-in fade-in zoom-in duration-700 delay-200 flex flex-col items-center gap-4">
            <Link 
            to="/overall" 
            className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-black text-lg md:text-xl shadow-2xl shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
                <span className="tracking-tight relative z-10">Begin Analytics</span>
                <Play className="w-5 h-5 fill-current relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest opacity-60">
                Dive in now • Discover Insights
            </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-slate-300">
            <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Hall Of Fame Teaser */}
      <div className="max-w-6xl mx-auto px-4 mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-center md:text-left border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 bg-amber-50 rounded-2xl text-amber-500 border border-amber-100 shadow-sm">
                    <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-slate-900">Hall of Fame</h3>
                    <p className="text-slate-500 font-medium">Top performers of the batch</p>
                </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Zap className="w-3 h-3 fill-slate-400 text-slate-400" />
                Featured Highlights
            </div>
        </div>
        <HallOfFame />
      </div>
    </div>
  );
};

export default HeroPage;