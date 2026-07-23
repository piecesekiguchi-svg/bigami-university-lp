import React from 'react';
import Section from './ui/Section';

const ProblemSolution: React.FC = () => {
  return (
    <Section id="problem" background="blue-gradient" className="relative overflow-hidden content-visibility-auto contain-content">
      {/* Decorative overlay for the gradient texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="space-y-12 font-serif text-white/90 leading-loose">
            
            <div className="border-l-2 border-cyan-400 pl-6">
                <p className="text-lg md:text-xl mb-4">
                    今、美容師は「技術」と聞くと、どのようなイメージを持つだろうか。<br/>
                    「教育」と聞くと、どのようなイメージを持つだろうか。
                </p>
            </div>

            <p className="text-sm md:text-base text-cyan-100">
                縮毛矯正には無限の可能性がある。<br/>
                そして、技術に携わる美容師自身の思考や感性を表現すること自体がArtである。<br/>
                古い慣習からの重圧、他者からの価値観、根拠なき思い込みから解放されることで、あなたらしい技術をデザインしていってほしい。
            </p>

            {/* Emphasized Section */}
            <div className="relative mt-12 p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                {/* Decorative border accent */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                
                <div className="text-center mb-10">
                    <p className="font-serif text-xl md:text-2xl text-white tracking-widest leading-relaxed">
                        elan beauty academyは<br className="md:hidden" />3つのコンテンツを軸に<br className="md:hidden" />本質をお届けする。
                    </p>
                </div>

                <ul className="space-y-8 text-sm md:text-base">
                    <li className="flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                        <span className="text-cyan-400 font-serif text-2xl font-bold shrink-0 tracking-widest">01.</span>
                        <div className="flex-1">
                            <strong className="text-white text-lg block mb-2 border-b border-cyan-500/30 pb-1 inline-block tracking-wide">1から矯正を学びたい</strong>
                            <p className="text-gray-300 leading-relaxed">
                                基礎知識に自信がない、薬剤選定が怖いと感じる方へ。感覚ではなく「理論」に基づいた確実な技術を提供します。
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                        <span className="text-cyan-400 font-serif text-2xl font-bold shrink-0 tracking-widest">02.</span>
                        <div className="flex-1">
                            <strong className="text-white text-lg block mb-2 border-b border-cyan-500/30 pb-1 inline-block tracking-wide">アシスタントでも簡単に</strong>
                            <p className="text-gray-300 leading-relaxed">
                                難しいアイロン操作や複雑な薬剤調合を排除。誰がやっても同じ結果が出る「再現性」の高いマニュアルを完備。
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                        <span className="text-cyan-400 font-serif text-2xl font-bold shrink-0 tracking-widest">03.</span>
                        <div className="flex-1">
                            <strong className="text-white text-lg block mb-2 border-b border-cyan-500/30 pb-1 inline-block tracking-wide">カラーや矯正の時短施術</strong>
                            <p className="text-gray-300 leading-relaxed">
                                クオリティを上げながら、無駄な工程を削ぎ落とし、圧倒的な生産性を実現する「時短術」を伝授します。
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="pt-8 text-center md:text-left border-t border-white/10 md:border-none">
                <p className="text-xl md:text-3xl font-serif tracking-widest text-white mt-8">
                    美の未知を、進め。<br/>
                    <span className="text-cyan-400 text-sm md:text-base mt-3 block tracking-[0.3em]">BEAUTY IS SCIENCE</span>
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSolution;