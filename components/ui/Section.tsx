import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-stone-50',
    dark: 'bg-stone-900 text-white',
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