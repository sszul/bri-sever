
import React from 'react';
import { Convention } from '../types';

interface Props {
  convention: Convention;
  onEdit: (convention: Convention) => void;
  onDelete: (id: string) => void;
}

const ConventionCard: React.FC<Props> = ({ convention, onEdit, onDelete }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Açış': return 'text-blue-600 bg-blue-50';
      case 'Cevap': return 'text-emerald-600 bg-emerald-50';
      case 'Slam': return 'text-purple-600 bg-purple-50';
      case 'Defans': return 'text-orange-600 bg-orange-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group overflow-hidden relative">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getCategoryColor(convention.category)}`}>
          {convention.category}
        </span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <button onClick={() => onEdit(convention)} className="text-slate-300 hover:text-blue-500 p-1"><i className="fa-solid fa-pen"></i></button>
          <button onClick={() => onDelete(convention.id)} className="text-slate-300 hover:text-red-500 p-1"><i className="fa-solid fa-trash"></i></button>
        </div>
      </div>

      <h3 className="text-xl font-black text-slate-800 mb-2 leading-tight">{convention.name}</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-6 font-medium leading-relaxed italic opacity-80">
        "{convention.shortDescription}"
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1">
            {convention.exampleSequence.map((s, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black border-2 border-white text-slate-700">
                {s}
              </span>
            ))}
          </div>
        </div>

        {convention.pointsNeeded && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold">
            <i className="fa-solid fa-bolt-lightning"></i>
            {convention.pointsNeeded}
          </div>
        )}
      </div>

      <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-[0.03]">
         <i className="fa-solid fa-spade text-6xl rotate-12"></i>
      </div>
    </div>
  );
};

export default ConventionCard;
