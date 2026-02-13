import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'transparent' | 'blue-gradient' | 'dark';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'transparent' }) => {
  const bgClasses = {
    transparent: 'bg-transparent',
    'blue-gradient': 'bg-gradient-to-br from-blue-900 to-cyan-900',
    dark: 'bg-black',
  };

  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 ${bgClasses[background]} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;