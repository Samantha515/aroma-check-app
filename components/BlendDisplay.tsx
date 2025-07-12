
import React from 'react';
import type { AromatherapyBlend } from '../types';

interface BlendDisplayProps {
  blend: AromatherapyBlend;
}

export const BlendDisplay: React.FC<BlendDisplayProps> = ({ blend }) => {
  return (
    <div className="bg-gradient-to-br from-white to-stone-100 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-stone-200 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-lora text-emerald-800 font-semibold">{blend.blendName}</h3>
        <p className="text-stone-600 mt-2 text-lg">{blend.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-200">
          <h4 className="font-semibold text-xl text-emerald-700 mb-4 border-b pb-2 border-emerald-200">Blend Recipe</h4>
          <ul className="space-y-3">
            {blend.oils.map((oil, index) => (
              <li key={index} className="flex justify-between items-center text-stone-700">
                <span className="font-medium">{oil.name}</span>
                <span className="font-mono text-emerald-600 font-bold bg-white px-2 py-1 rounded-md text-sm shadow-sm">{oil.drops} drops</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-stone-50/50 p-6 rounded-xl border border-stone-200">
          <h4 className="font-semibold text-xl text-stone-700 mb-4 border-b pb-2 border-stone-200">How to Use</h4>
          <p className="text-stone-600 leading-relaxed">{blend.instructions}</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-stone-500 bg-stone-100 p-3 rounded-lg">
        <p><strong>Safety First:</strong> {blend.safety_warning}</p>
      </div>
    </div>
  );
};

// Add keyframes for animation in a style tag for broader compatibility as Tailwind config isn't available
const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
`;
document.head.appendChild(style);
