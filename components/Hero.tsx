import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark contain-paint">
      {/* Background Glow Effects - Optimized using radial gradients instead of blur filters for better mobile performance */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(220,38,38,0.15)_0%,transparent_70%)] mix-blend-screen animate-pulse transform-gpu will-change-transform"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] mix-blend-screen animate-pulse delay-1000 transform-gpu will-change-transform"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_70%)] mix-blend-screen transform-gpu"></div>

      {/* Decorative Light Beams */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0,0 C30,20 70,20 100,0" stroke="url(#grad1)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
           <path d="M0,100 C30,80 70,80 100,100" stroke="url(#grad2)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
               <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
               <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
             </linearGradient>
             <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
               <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
             </linearGradient>
           </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20">
        
        {/* Main Title Area */}
        <div className="text-center mb-16 md:mb-20">
            <p className="text-xs tracking-[0.4em] text-white/60 mb-4 uppercase">Online Salon</p>
            <h1 className="text-4xl md:text-6xl font-serif tracking-widest text-white mb-2 text-glow transform-gpu">
              BIGAMI <span className="font-thin mx-2 text-white/50">|</span> UNIVERSITY
            </h1>
        </div>

        {/* Four Circles Layout - Text Only */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-center justify-center max-w-6xl mx-auto">
            
            {/* Circle 1: Logic */}
            <div className="relative group">
                <div className="aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/10 circle-glow">
                    <div className="absolute inset-0 rounded-full border border-pink-500/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <p className="font-serif text-xs text-white/60 mb-2">矯正 / 再現</p>
                    <h3 className="text-lg md:text-xl font-serif tracking-wider text-white mb-1">理論構築</h3>
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase">Logic</p>
                </div>
            </div>

            {/* Circle 2: Education */}
            <div className="relative group lg:mt-12">
                <div className="aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/10 circle-glow">
                    <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <p className="font-serif text-xs text-white/60 mb-2">教育 / 簡単</p>
                    <h3 className="text-lg md:text-xl font-serif tracking-wider text-white mb-1">即戦力化</h3>
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase">Education</p>
                </div>
            </div>

            {/* Circle 3: Time */}
            <div className="relative group">
                <div className="aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/10 circle-glow">
                    <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <p className="font-serif text-xs text-white/60 mb-2">時短 / 生産性</p>
                    <h3 className="text-lg md:text-xl font-serif tracking-wider text-white mb-1">時間革命</h3>
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase">Speed</p>
                </div>
            </div>

            {/* Circle 4: Field Theory */}
            <div className="relative group lg:mt-12">
                <div className="aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/10 circle-glow">
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <p className="font-serif text-xs text-white/60 mb-2">独自 / 現場</p>
                    <h3 className="text-lg md:text-xl font-serif tracking-wider text-white mb-1">現場理論</h3>
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase">Original</p>
                </div>
            </div>

        </div>

        <div className="text-center mt-20">
           <p className="text-white/60 tracking-[0.3em] text-sm animate-pulse">#美容の力を未来へ</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;