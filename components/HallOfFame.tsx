import React from 'react';
import { Trophy, Medal, Star, Crown, TrendingUp } from 'lucide-react';

const STUDENTS = [
  { rank: 1, name: "ANURAG TEWARY", section: "B", sgpa: 9.78, medal: "Gold" },
  { rank: 1, name: "KARTIKEY KANAUJIYA", section: "G", sgpa: 9.78, medal: "Gold" },
  { rank: 1, name: "KAUSTAV BETAL", section: "E", sgpa: 9.78, medal: "Gold" },
  { rank: 4, name: "ABHIK MAHATO", section: "E", sgpa: 9.67 },
  { rank: 5, name: "ARINDAM CHANDRA", section: "G", sgpa: 9.67 },
  { rank: 6, name: "DARAK ARNAV GIRISH", section: "G", sgpa: 9.67 },
  { rank: 7, name: "PIYUSH PATWARI", section: "G", sgpa: 9.67 },
  { rank: 8, name: "RAJARSHI ROY", section: "F", sgpa: 9.67 },
  { rank: 9, name: "SOMANSHU SAHA", section: "D", sgpa: 9.67 },
  { rank: 10, name: "SUNKARI VAIBHAV", section: "G", sgpa: 9.67 },
  { rank: 11, name: "SWAPNEEL MUKHOPADHYAY", section: "G", sgpa: 9.67 },
  { rank: 12, name: "WASIM MONDAL", section: "G", sgpa: 9.67 },
  { rank: 13, name: "ADITYA RAJ", section: "C", sgpa: 9.56 },
  { rank: 14, name: "ADITYA S BHAT", section: "E", sgpa: 9.56 },
  { rank: 15, name: "KUMAR HARSHRAJ", section: "B", sgpa: 9.56 }
];

const HallOfFame: React.FC = () => {
  return (
    <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800 my-12 transform hover:scale-[1.01] transition-transform duration-500">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-8 h-8 text-amber-400 fill-amber-400" />
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                        Academic Hall of Fame
                    </h2>
                </div>
                <p className="text-slate-400 text-lg">Top Performers of Semester 1</p>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">Live Leaderboard</span>
            </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-amber-400">
                    <Crown className="w-6 h-6 fill-amber-400" />
                    <h3 className="font-bold uppercase tracking-wider text-sm">The Trinity</h3>
                </div>
                <p className="text-3xl font-black text-white mb-1">9.78 SGPA</p>
                <p className="text-sm text-slate-400">Anurag (B), Kartikey (G), Kaustav (E)</p>
            </div>
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-blue-400">
                    <TrendingUp className="w-6 h-6" />
                    <h3 className="font-bold uppercase tracking-wider text-sm">Section G Dominance</h3>
                </div>
                <p className="text-3xl font-black text-white mb-1">7 of Top 15</p>
                <p className="text-sm text-slate-400">The high-performance engine of the batch</p>
            </div>
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-emerald-400">
                    <Star className="w-6 h-6 fill-emerald-400" />
                    <h3 className="font-bold uppercase tracking-wider text-sm">The 9.5+ Club</h3>
                </div>
                <p className="text-3xl font-black text-white mb-1">19 Students</p>
                <p className="text-sm text-slate-400">Scored 9.56 or higher overall</p>
            </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
            {STUDENTS.map((student, index) => {
                const isRank1 = student.rank === 1;
                const isTop10 = student.rank <= 10;
                
                return (
                    <div 
                        key={`${student.name}-${index}`}
                        className={`
                            relative flex items-center justify-between p-4 md:p-5 rounded-xl border transition-all duration-300 group
                            ${isRank1 
                                ? 'bg-gradient-to-r from-amber-500/10 to-transparent border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
                                : 'bg-slate-800/30 border-slate-800/50 hover:bg-slate-800/60'}
                        `}
                    >
                        <div className="flex items-center gap-4 md:gap-8">
                            <div className={`
                                w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full font-black text-sm md:text-lg shrink-0
                                ${isRank1 ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/50' : isTop10 ? 'bg-slate-700 text-slate-300' : 'bg-slate-800 text-slate-500'}
                            `}>
                                {student.rank}
                            </div>
                            <div>
                                <h4 className={`
                                    font-bold text-base md:text-lg tracking-tight
                                    ${isRank1 ? 'text-amber-100' : isTop10 ? 'text-white' : 'text-slate-300'}
                                `}>
                                    {student.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`text-[10px] md:text-xs font-bold px-2 py-0.5 rounded text-slate-900 ${student.section === 'G' ? 'bg-blue-400' : 'bg-slate-400'}`}>
                                        SEC {student.section}
                                    </span>
                                    {isRank1 && <span className="text-xs text-amber-400 font-medium flex items-center gap-1"><Medal className="w-3 h-3" /> Gold Medalist</span>}
                                </div>
                            </div>
                        </div>
                        <div className="text-right pl-4">
                            <div className={`font-black text-xl md:text-2xl ${isRank1 ? 'text-amber-400' : 'text-white'}`}>
                                {student.sgpa}
                            </div>
                            <div className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider group-hover:text-slate-400 transition-colors">SGPA</div>
                        </div>
                    </div>
                );
            })}
        </div>
        
        <div className="mt-8 text-center pt-8 border-t border-slate-800">
             <p className="text-slate-500 italic">
                "Showcasing exceptional academic rigor and consistency across the cohort."
             </p>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;