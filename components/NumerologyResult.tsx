import React from 'react';
import type { NumerologyReading } from '../types';
import { SparklesIcon } from './Icon';

interface NumerologyResultProps {
  result: NumerologyReading;
}

export const NumerologyResult: React.FC<NumerologyResultProps> = ({ result }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-3xl border border-indigo-200 animate-fade-in">
      <div className="text-center mb-6">
        <div className="inline-block bg-white/50 rounded-full p-4 mb-4">
            <div className="bg-white rounded-full p-3 shadow-inner">
                <h2 className="text-5xl font-bold font-lora text-indigo-600">{result.lifePathNumber}</h2>
            </div>
        </div>
        <h3 className="text-3xl font-lora text-indigo-800 font-semibold">{result.title}</h3>
        <p className="text-stone-600 mt-2 text-lg max-w-2xl mx-auto">{result.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
        <div className="bg-white/60 p-5 rounded-xl border border-stone-200">
          <h4 className="font-semibold text-xl text-indigo-700 mb-3">Key Strengths</h4>
          <ul className="space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index} className="flex items-start text-stone-700">
                <SparklesIcon className="w-5 h-5 text-indigo-500 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/60 p-5 rounded-xl border border-stone-200">
          <h4 className="font-semibold text-xl text-stone-700 mb-3">Growth Areas</h4>
          <ul className="space-y-2">
            {result.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start text-stone-600">
                <span className="text-indigo-500 mr-2.5 font-bold flex-shrink-0 mt-0.5">&#8226;</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 text-center text-md text-indigo-900/80 bg-indigo-100/70 p-4 rounded-lg italic">
        <p><strong>Motto:</strong> "{result.motto}"</p>
      </div>
    </div>
  );
};
