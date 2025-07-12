import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { MoodSelector } from './components/MoodSelector';
import { BlendDisplay } from './components/BlendDisplay';
import { AromaSecret } from './components/AromaSecret';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import { generateAromatherapyBlend, generateAromaSecret } from './services/geminiService';
import { MOODS } from './constants';
import type { AromatherapyBlend } from './types';
import { LeafIcon } from './components/Icon';
import { NumerologyCalculator } from './components/NumerologyCalculator';

const App: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [currentBlend, setCurrentBlend] = useState<AromatherapyBlend | null>(null);
  const [aromaSecret, setAromaSecret] = useState<string | null>(null);
  const [isLoadingBlend, setIsLoadingBlend] = useState(false);
  const [isLoadingSecret, setIsLoadingSecret] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelectMood = useCallback(async (moodId: string) => {
    if (isLoadingBlend) return;

    const mood = MOODS.find(m => m.id === moodId);
    if (!mood) return;
    
    setSelectedMood(moodId);
    setIsLoadingBlend(true);
    setCurrentBlend(null);
    setError(null);
    
    try {
      const blend = await generateAromatherapyBlend(mood.name);
      setCurrentBlend(blend);
    } catch (e) {
      console.error(e);
      setError('Failed to generate a blend. Please try again.');
    } finally {
      setIsLoadingBlend(false);
    }
  }, [isLoadingBlend]);

  const handleDiscoverSecret = useCallback(async () => {
    if (isLoadingSecret) return;

    setIsLoadingSecret(true);
    setAromaSecret(null);
    setError(null);
    
    try {
      const secret = await generateAromaSecret();
      setAromaSecret(secret);
    } catch (e) {
      console.error(e);
      setError('Failed to discover a secret. Please try again.');
    } finally {
      setIsLoadingSecret(false);
    }
  }, [isLoadingSecret]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <section id="generator" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-lora text-stone-700 mb-2">Craft Your Atmosphere</h2>
          <p className="max-w-2xl mx-auto text-stone-500 mb-8">Select a mood to instantly generate a unique essential oil blend, curated by AI.</p>
          <MoodSelector 
            moods={MOODS} 
            selectedMood={selectedMood} 
            onSelectMood={handleSelectMood} 
            disabled={isLoadingBlend}
          />
        </section>

        <section id="results" className="mb-12 md:mb-16 min-h-[30rem] flex items-center justify-center">
          {isLoadingBlend && <Loader text="Crafting your blend..." />}
          {!isLoadingBlend && currentBlend && <BlendDisplay blend={currentBlend} />}
          {!isLoadingBlend && !currentBlend && (
            <div className="text-center text-stone-400">
              <LeafIcon className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Your personal aromatherapy blend will appear here.</p>
            </div>
          )}
        </section>
        
        {error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg mb-12">{error}</div>}
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent my-12 md:my-16"></div>

        <section id="numerology" className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-lora text-stone-700 mb-2">Unlock Your Life Path</h2>
            <p className="max-w-2xl mx-auto text-stone-500 mb-8">Enter your date of birth to reveal your Life Path number and the unique personality traits associated with it, powered by AI.</p>
            <NumerologyCalculator />
        </section>

        <section id="secret" className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-stone-200">
          <AromaSecret 
            secret={aromaSecret}
            onDiscover={handleDiscoverSecret}
            isLoading={isLoadingSecret}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
