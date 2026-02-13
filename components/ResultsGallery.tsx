import React from 'react';
import Section from './ui/Section';

const ResultsGallery: React.FC = () => {
  const results = [
    {
      title: "Natural Straight",
      category: "縮毛矯正",
      // Optimization: fm=webp for format, q=80 for high quality but low size
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=750&auto=format&fit=crop&fm=webp&q=80"
    },
    {
      title: "Glossy Finish",
      category: "髪質改善トリートメント",
      url: "https://images.unsplash.com/photo-1522337360788-8b13df772ec2?w=600&h=750&auto=format&fit=crop&fm=webp&q=80"
    },
    {
      title: "Time Efficiency",
      category: "時短カラー＆矯正",
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=750&auto=format&fit=crop&fm=webp&q=80"
    }
  ];

  return (
    <Section background="dark" className="border-t border-white/5 content-visibility-auto">
      <div className="text-center mb-20">
        <span className="text-cyan-500 tracking-[0.3em] text-[10px] uppercase block mb-4">Visual Results</span>
        <h2 className="font-serif text-3xl text-white tracking-widest">技術が生み出す、圧倒的な美。</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-1">
        {results.map((item, index) => (
          <div key={index} className="relative aspect-[4/5] overflow-hidden group bg-brand-gray">
            <img 
              src={item.url} 
              alt={item.title}
              width="600"
              height="750"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-cyan-400 text-[10px] tracking-widest mb-1">{item.category}</p>
              <h3 className="text-white font-serif text-xl tracking-widest">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm font-serif italic">サロンワークで実際に生まれている、リアルな変化。</p>
      </div>
    </Section>
  );
};

export default ResultsGallery;