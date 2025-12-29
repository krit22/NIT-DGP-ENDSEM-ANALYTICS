import React from 'react';
import { Section } from '../types';
import { SECTIONS_GROUP_1, SECTIONS_GROUP_2 } from '../constants';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SectionCard: React.FC<{
  sec: Section;
  isActive: boolean;
  onClick: () => void;
}> = ({ sec, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
        relative w-full aspect-square rounded-2xl flex flex-col items-center justify-center font-black text-2xl md:text-4xl transition-all duration-300
        ${isActive 
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105 ring-4 ring-blue-100 z-10' 
          : 'bg-white text-slate-300 hover:text-slate-600 hover:bg-slate-50 border-2 border-slate-100 hover:border-slate-300'}
      `}
  >
    {sec}
    {isActive && <span className="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest opacity-80">Active</span>}
  </button>
);

const SectionSelector: React.FC = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams<{ sectionId: string }>();
  
  // Determine current section and group
  const currentSection = sectionId as Section;
  const isGroup1 = SECTIONS_GROUP_1.includes(currentSection);
  
  // Filter options based on the alliance
  const displayedSections = isGroup1 ? SECTIONS_GROUP_1 : SECTIONS_GROUP_2;
  const groupName = isGroup1 ? "Group 1" : "Group 2";

  const isSecActive = (sec: Section) => sec === sectionId;

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100 mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
            <h3 className="text-xl font-bold text-slate-900">Select Section</h3>
            <p className="text-slate-400 text-sm font-medium">Viewing {groupName} Classes</p>
        </div>
        <Link to="/groups" className="text-xs font-bold text-slate-400 hover:text-blue-600 flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Change Group
        </Link>
      </div>
      
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {displayedSections.map((sec) => (
            <SectionCard
            key={sec}
            sec={sec}
            isActive={isSecActive(sec)}
            onClick={() => navigate(`/sections/${sec}`)}
            />
        ))}
      </div>
    </div>
  );
};

export default SectionSelector;