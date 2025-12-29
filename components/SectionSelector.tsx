import React from 'react';
import { Section } from '../types';
import { SECTIONS_GROUP_1, SECTIONS_GROUP_2 } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';

const SectionCard: React.FC<{
  sec: Section;
  isActive: boolean;
  onClick: () => void;
}> = ({ sec, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
        relative w-full aspect-square rounded-2xl flex flex-col items-center justify-center font-black text-2xl md:text-3xl transition-all duration-300
        ${isActive 
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105 ring-4 ring-blue-100' 
          : 'bg-white text-slate-300 hover:text-slate-600 hover:bg-slate-50 border-2 border-slate-100 hover:border-slate-300'}
      `}
  >
    {sec}
    {isActive && <span className="absolute bottom-2 text-[10px] font-bold uppercase tracking-widest opacity-80">Viewing</span>}
  </button>
);

const SectionSelector: React.FC = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams<{ sectionId: string }>();

  const isSecActive = (sec: Section) => sec === sectionId;

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100 mb-12">
      <h3 className="text-center text-lg font-bold text-slate-800 mb-8">Change Section</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Group 1 */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Group 1</h4>
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {SECTIONS_GROUP_1.map((sec) => (
              <SectionCard
                key={sec}
                sec={sec}
                isActive={isSecActive(sec)}
                onClick={() => navigate(`/sections/${sec}`)}
              />
            ))}
          </div>
        </div>

        {/* Group 2 */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Group 2</h4>
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {SECTIONS_GROUP_2.map((sec) => (
              <SectionCard
                key={sec}
                sec={sec}
                isActive={isSecActive(sec)}
                onClick={() => navigate(`/sections/${sec}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSelector;