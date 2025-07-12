
import type { Mood } from './types';
import { SunIcon, MoonIcon, BrainCircuitIcon, BoltIcon, HeartIcon, LeafIcon } from './components/Icon';

export const MOODS: Mood[] = [
  { id: 'uplift', name: 'Uplifting', icon: SunIcon, color: 'amber' },
  { id: 'focus', name: 'Focus', icon: BrainCircuitIcon, color: 'sky' },
  { id: 'relax', name: 'Relaxation', icon: MoonIcon, color: 'indigo' },
  { id: 'energy', name: 'Energy', icon: BoltIcon, color: 'lime' },
  { id: 'romance', name: 'Romance', icon: HeartIcon, color: 'rose' },
  { id: 'clarity', name: 'Clarity', icon: LeafIcon, color: 'emerald' },
];
