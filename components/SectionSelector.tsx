import React from 'react';
import { Section } from '../types';
import { SECTIONS_GROUP_1, SECTIONS_GROUP_2 } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';

const SectionButton: React.FC<{
  sec: Section;
  isActive: boolean;
  onClick: () => void;
}> = ({ sec, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
        w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all
        ${isActive 
          ? 'bg-blue-600 text-white shadow-lg scale-110' 
          : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}
      `}
  >
    {sec}
  </button>
);

const SectionSelector: React.FC = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams<{ sectionId: string }>();

  const isSecActive = (sec: Section) => sec === sectionId;

  return (
    <div className="flex flex-col items-center gap-6 py-6 px-4 bg-slate-50 border-y border-slate-200 mb-8">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Select Section</h3>
      <div className="flex gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium text-slate-500">Group 1</span>
          <div className="flex gap-2 md:gap-4">
            {SECTIONS_GROUP_1.map((sec) => (
              <SectionButton
                key={sec}
                sec={sec}
                isActive={isSecActive(sec)}
                onClick={() => navigate(`/sections/${sec}`)}
              />
            ))}
          </div>
        </div>
        
        <div className="w-px bg-slate-300 h-12 self-end mb-2"></div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium text-slate-500">Group 2</span>
          <div className="flex gap-2 md:gap-4">
            {SECTIONS_GROUP_2.map((sec) => (
              <SectionButton
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