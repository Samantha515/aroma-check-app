
import React from 'react';
import { LeafIcon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-8 border-b border-stone-200/80 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-center">
        <LeafIcon className="w-8 h-8 text-emerald-600 mr-3" />
        <h1 className="text-2xl font-bold tracking-tight text-stone-800 font-lora">
          Aroma-Numerous Secrets
        </h1>
      </div>
    </header>
  );
};
