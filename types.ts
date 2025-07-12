import type React from 'react';

export interface Oil {
  name: string;
  drops: number;
}

export interface AromatherapyBlend {
  blendName: string;
  description: string;
  oils: Oil[];
  instructions: string;
  safety_warning: string;
}

export interface Mood {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export interface NumerologyReading {
  lifePathNumber: number;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  motto: string;
}
