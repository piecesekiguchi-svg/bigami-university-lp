import React from 'react';
import Section from './ui/Section';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" background="dark" className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-16 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl mb-2 text-white">elan beauty academy</h3>
            <p className="text-cyan-600 text-[10px] uppercase tracking-[0.3em] mb-10">Membership</p>
             
            <div className="mb-2">
               <span className="text-xs text-gray-500 block mb-2">年会費</span>
               <div className="flex items-baseline justify-center gap-2">
                 <span className="text-5xl font-serif text-white font-medium text-glow">¥33,000</span>
                 <span className="text-gray-500 text-xs">(税込)</span>
               </div>
            </div>
             <p className="text-[10px] text-gray-600 mt-2">※いつでも退会可能です</p>
             <p className="text-[10px] text-gray-600">※返金はできません。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 border-t border-b border-white/5 py-8">
             <ul className="space-y-3">
              {[
                "月1回の限定ライブ配信",
                "過去のアーカイブ動画見放題",
                "会員限定のオフラインセミナー優先案内"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
             <ul className="space-y-3">
              {[
                "オリジナル薬剤の会員価格購入",
                "専用インスタアカウントからDMで直接ディスカッションできる特権付き"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-cyan-300 text-sm font-serif tracking-wide -mt-8 mb-12">質問があればどんどんしちゃいましょう！</p>

          <div className="text-center">
             <a 
               href="https://elanhaircare.base.shop/items/151709888" 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block min-w-[280px] bg-white text-black py-4 px-8 text-xs tracking-[0.2em] hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
             >
               入会申し込みはこちら
             </a>
             <p className="text-gray-400 text-xs mt-6 leading-relaxed">
               パスワードが必要です。<br/>
               <span className="text-white tracking-widest">joie1212</span>と入力してお進みください。
             </p>
             <p className="text-gray-500 text-[10px] mt-8 leading-relaxed">
               美容師としての価値を高め、<br className="md:hidden"/>お客様に感動を与える技術を、共に学びましょう。
             </p>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Pricing;