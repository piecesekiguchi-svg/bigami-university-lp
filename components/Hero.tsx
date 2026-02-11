import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Minimal decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-sage-100"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-10">
        
        <div className="space-y-12">
          <div className="flex flex-col items-center gap-4">
            <span className="inline-block py-1 px-3 border border-sage-200 text-sage-600 text-[10px] tracking-[0.3em] uppercase">
              Online Salon
            </span>
            <div className="h-12 w-[1px] bg-sage-200"></div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 font-medium">
            <span className="block text-xl md:text-2xl mb-6 text-gray-400 font-normal tracking-widest">
              本質を学ぶ、美髪の道
            </span>
            迷いを捨て、<br/>
            <span className="text-sage-700">確信</span>の技術へ。
          </h1>
          
          <p className="text-gray-500 leading-loose max-w-lg mx-auto font-serif text-sm md:text-base">
            縮毛矯正を1から学びたい。<br/>
            アシスタントでも再現可能なシンプルさを。<br/>
            そして、劇的な時短施術を。<br/>
            <br/>
            <span className="text-xs text-sage-500 tracking-widest uppercase mt-4 block">Bigami University</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a 
              href="#pricing" 
              className="group bg-sage-50 text-sage-800 border border-sage-200 px-10 py-4 flex items-center justify-center gap-3 hover:bg-sage-100 hover:border-sage-300 transition-all duration-500"
            >
              <span className="tracking-[0.2em] text-xs">今すぐ入会する</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform opacity-50" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Minimal footer gradient/fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;