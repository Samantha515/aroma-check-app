
import React from 'react';
import type { Mood } from '../types';

interface MoodSelectorProps {
  moods: Mood[];
  selectedMood: string | null;
  onSelectMood: (moodId: string) => void;
  disabled: boolean;
}

const colorClasses = {
  amber: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'hover:border-amber-400', selected: 'border-amber-500 bg-amber-200' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-800', border: 'hover:border-sky-400', selected: 'border-sky-500 bg-sky-200' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'hover:border-indigo-400', selected: 'border-indigo-500 bg-indigo-200' },
  lime: { bg: 'bg-lime-100', text: 'text-lime-800', border: 'hover:border-lime-400', selected: 'border-lime-500 bg-lime-200' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-800', border: 'hover:border-rose-400', selected: 'border-rose-500 bg-rose-200' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'hover:border-emerald-400', selected: 'border-emerald-500 bg-emerald-200' },
};

export const MoodSelector: React.FC<MoodSelectorProps> = ({ moods, selectedMood, onSelectMood, disabled }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {moods.map((mood) => {
        const Icon = mood.icon;
        const colors = colorClasses[mood.color as keyof typeof colorClasses] || colorClasses.emerald;
        const isSelected = selectedMood === mood.id;

        return (
          <button
            key={mood.id}
            onClick={() => onSelectMood(mood.id)}
            disabled={disabled}
            className={`
              flex items-center gap-3 px-4 py-2.5 rounded-full border-2 transition-all duration-300
              font-medium text-lg transform hover:-translate-y-1
              ${colors.bg} ${colors.text} ${colors.border}
              ${isSelected ? colors.selected : 'border-transparent'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'shadow-sm hover:shadow-md'}
            `}
          >
            <Icon className="w-6 h-6" />
            <span>{mood.name}</span>
          </button>
        );
      })}
    </div>
  );
};
