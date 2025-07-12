import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const SunIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" /><path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.142" />
    <path d="M18 13a3 3 0 1 0-4.472 2.5" />
    <path d="M12 5a3 3 0 1 1 5.993.142" />
    <path d="M6 13a3 3 0 1 1 4.472 2.5" />
    <path d="M14.536 15.5A3 3 0 0 1 12 19a3 3 0 0 1-2.536-3.5" />
    <path d="M12 19v2" />
    <path d="M12 5V3" />
    <path d="m4.5 10.5-2-1" />
    <path d="m19.5 10.5 2-1" />
    <path d="M6.007 5.142A3 3 0 0 0 9 5a3 3 0 0 0-2.993.142" />
    <path d="M14.993 5.142A3 3 0 0 1 15 5a3 3 0 0 1 2.993.142" />
  </svg>
);

export const BoltIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <polyline points="13 2 13 9 20 9 11 22 11 15 4 15 13 2" transform="translate(-1, -1)" />
    </svg>
);


export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const LeafIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 20A7 7 0 0 1 4 13a7 7 0 0 1 7-7c0-3 2.39-4.5 4.5-4.5C17.71 1.5 21 4.29 21 8.5c0 2.37-1.12 4.4-2.5 5.5" />
    <path d="M11 20v-8" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.93 2.55a1 1 0 0 0-1.86 0L6.5 6.5l-3.95 1.57a1 1 0 0 0 0 1.86L6.5 11.5l1.58 3.95a1 1 0 0 0 1.86 0L11.5 11.5l3.95-1.57a1 1 0 0 0 0-1.86L11.5 6.5Z" />
        <path d="M18 6.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z" />
        <path d="M21.5 12.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z" />
    </svg>
);
