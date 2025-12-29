import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowLeft, Code, Database, Layout as LayoutIcon, Coffee } from 'lucide-react';
import Footer from '../components/Footer';

const AboutDeveloperPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold mb-12 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
            </Link>

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20">
                <div className="relative group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform opacity-20"></div>
                    <div className="w-48 h-48 md:w-72 md:h-72 bg-slate-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500 border-4 border-white">
                        {/* Avatar Image */}
                        <img 
                            src="https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/WhatsApp%20Image%202025-12-29%20at%2011.37.20%20PM.jpeg?raw=true" 
                            alt="Krit"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Krit.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-lg leading-relaxed mb-8">
                        I turn boring spreadsheets into <span className="text-slate-900 font-bold">interactive stories</span>.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <a href="https://www.linkedin.com/in/krit-kumar-9980a8319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0077b5]/10 text-[#0077b5] rounded-2xl font-bold hover:bg-[#0077b5] hover:text-white transition-all hover:scale-105 active:scale-95">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/krit20071?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-pink-500/10 text-pink-600 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition-all hover:scale-105 active:scale-95">
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* The Story */}
            <div className="space-y-8">
                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Coffee className="w-7 h-7 text-amber-500" />
                        Why I built this?
                    </h2>
                    <div className="prose prose-slate text-slate-600 leading-relaxed text-lg md:text-xl space-y-6">
                        <p>
                            When the college released the semester results as a massive Excel sheet, I saw more than just rows and columns. I saw patterns, outliers, and stories waiting to be told.
                        </p>
                        <p>
                            Scrolling through a massive PDF to find your rank or compare sections is tedious and outdated. I wanted to build something that gives every student a <span className="font-bold text-slate-900">clear, visual understanding</span> of where they stand.
                        </p>
                        <p>
                            This dashboard is my <span className="font-bold text-blue-600">Proof of Work</span>—demonstrating that data analytics doesn't have to be boring. It can be beautiful, interactive, and insightful.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Mini Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <Code className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Modern React</h3>
                        <p className="text-slate-500 leading-relaxed">Built with React 18, TypeScript, and Tailwind CSS for max performance.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <LayoutIcon className="w-10 h-10 text-indigo-500 mb-4" />
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Responsive UI</h3>
                        <p className="text-slate-500 leading-relaxed">Mobile-first design ensuring it looks great on any device.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <Database className="w-10 h-10 text-emerald-500 mb-4" />
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Data Driven</h3>
                        <p className="text-slate-500 leading-relaxed">Processed hundreds of student records into meaningful metrics.</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* We do not need the Footer component here as it is in Layout, 
            but the Layout adds it globally. 
            However, on this specific page, we might want to avoid the recursive footer link?
            Currently Layout adds footer to all pages. It's fine.
        */}
    </div>
  );
};

export default AboutDeveloperPage;