import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, ChevronDown } from 'lucide-react';
import HallOfFame from '../components/HallOfFame';

const HeroPage: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Cinematic Intro */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="space-y-4 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold tracking-widest uppercase border border-blue-100">
                Semester 1 Recap
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9]">
            The Data <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Story.</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-2xl text-slate-500 leading-relaxed font-medium pt-4">
            A journey through the grades, the outliers, and the champions of the batch.
            </p>
        </div>

        <div className="pt-8 z-10 animate-in fade-in zoom-in duration-700 delay-200">
            <Link 
            to="/overall" 
            className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl shadow-blue-900/20 hover:shadow-blue-600/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
            <span>Begin Analysis</span>
            <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white text-slate-900 transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            </Link>
            <p className="mt-4 text-sm text-slate-400 font-medium">Chapter 1: The Overall Picture</p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-slate-300">
            <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Hall Of Fame Teaser */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900">The Hall of Fame</h3>
                <p className="text-slate-500">Highlighting exceptional performances</p>
            </div>
        </div>
        <HallOfFame />
      </div>
    </div>
  );
};

export default HeroPage;