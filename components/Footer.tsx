import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Heart, Code2, Play } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-32 md:pb-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Main Branding */}
        <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
                <span>Built by Krit with</span>
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-500 fill-rose-500 animate-pulse" />
            </h2>
            <p className="text-slate-400 font-bold italic text-sm md:text-lg tracking-wide opacity-70">"NIT Durgapur"</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/krit-kumar-9980a8319" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg text-slate-400 hover:text-blue-700 transition-all border border-slate-100 hover:-translate-y-1">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/krit20071?hl=en" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg text-slate-400 hover:text-pink-600 transition-all border border-slate-100 hover:-translate-y-1">
                    <Instagram className="w-6 h-6" />
                </a>
            </div>
            
            {/* Begin Analytics Button */}
            <Link to="/overall" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-sm md:text-base shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/30 transition-all transform hover:-translate-y-1 active:scale-95">
                <span>Begin Analytics</span>
                <Play className="w-5 h-5 fill-current" />
            </Link>

            {/* Developer Button */}
             <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm md:text-base shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:shadow-slate-900/20 transition-all transform hover:-translate-y-1 active:scale-95">
                <Code2 className="w-5 h-5" />
                <span>Meet the Builder</span>
            </Link>
        </div>

        <div className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
            Academic Analytics Dashboard • {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;