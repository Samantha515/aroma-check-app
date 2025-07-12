
import React from 'react';
import { Loader } from './Loader';

interface AromaSecretProps {
  secret: string | null;
  onDiscover: () => void;
  isLoading: boolean;
}

export const AromaSecret: React.FC<AromaSecretProps> = ({ secret, onDiscover, isLoading }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-lora text-stone-700 mb-4">Aroma-Numerous Secret</h3>
      <div className="min-h-[6rem] flex items-center justify-center p-4 bg-stone-50 rounded-lg mb-6 border border-stone-200">
        {isLoading && <Loader text="Unveiling a secret..." />}
        {!isLoading && secret && (
          <p className="text-stone-600 text-lg md:text-xl italic leading-relaxed animate-fade-in">{secret}</p>
        )}
        {!isLoading && !secret && (
          <p className="text-stone-400">Click the button below to reveal a fun fact!</p>
        )}
      </div>
      <button
        onClick={onDiscover}
        disabled={isLoading}
        className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 disabled:bg-emerald-400 disabled:cursor-not-allowed"
      >
        Discover a New Secret
      </button>
    </div>
  );
};

// Re-using the animation keyframes defined in BlendDisplay
