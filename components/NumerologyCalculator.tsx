import React, { useState, useCallback } from 'react';
import { generateNumerologyReading } from '../services/geminiService';
import type { NumerologyReading } from '../types';
import { Loader } from './Loader';
import { NumerologyResult } from './NumerologyResult';

const calculateLifePathNumber = (dateString: string): number => {
  if (!dateString) return 0;
  // Sum all digits from YYYY-MM-DD
  const sum = dateString
    .replace(/-/g, '')
    .split('')
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);

  // Reduce the sum to a single digit or a master number (11, 22)
  let finalSum = sum;
  while (finalSum > 9 && finalSum !== 11 && finalSum !== 22) {
    finalSum = String(finalSum)
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  }
  return finalSum;
};


export const NumerologyCalculator: React.FC = () => {
    const [date, setDate] = useState('');
    const [result, setResult] = useState<NumerologyReading | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!date) {
            setError('Please enter your date of birth.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const lifePathNumber = calculateLifePathNumber(date);
            if(lifePathNumber === 0) {
              throw new Error("Invalid date provided.");
            }
            const reading = await generateNumerologyReading(lifePathNumber);
            setResult(reading);
        } catch (e) {
            console.error(e);
            setError('Failed to generate your numerology profile. Please check the date or try again.');
        } finally {
            setIsLoading(false);
        }
    }, [date]);

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    aria-label="Date of birth"
                    className="px-4 py-3 rounded-full border-2 border-stone-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition w-full sm:w-auto text-lg"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                    {isLoading ? 'Calculating...' : 'Reveal My Profile'}
                </button>
            </form>
            
            <div className="mt-8 flex items-center justify-center min-h-[20rem]">
                {isLoading && <Loader text="Unlocking your life path..." />}
                {!isLoading && error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>}
                {!isLoading && result && <NumerologyResult result={result} />}
            </div>
        </>
    );
};
