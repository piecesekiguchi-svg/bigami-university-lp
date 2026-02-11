import React from 'react';
import Section from './ui/Section';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-gray-100 shadow-sm md:p-16 p-8 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-sage-200"></div>

          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl mb-2 text-gray-900">美髪大学</h3>
            <p className="text-sage-500 text-[10px] uppercase tracking-[0.3em] mb-10">Membership</p>
             
            <div className="mb-2">
               <span className="text-xs text-gray-400 block mb-2">月額会費</span>
               <div className="flex items-baseline justify-center gap-2">
                 <span className="text-5xl font-serif text-gray-800 font-medium">¥3,300</span>
                 <span className="text-gray-400 text-xs">(税込)</span>
               </div>
            </div>
             <p className="text-[10px] text-gray-400 mt-2">※いつでも退会可能です</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 border-t border-b border-gray-50 py-8">
             <ul className="space-y-3">
              {[
                "週1回の限定ライブ配信",
                "過去のアーカイブ動画見放題",
                "会員限定のオフラインセミナー優先案内"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sage-400 shrink-0" />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
             <ul className="space-y-3">
              {[
                "オリジナル薬剤の会員価格購入",
                "質問し放題のチャットグループ参加権",
                "スタイリスト交流会への参加"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sage-400 shrink-0" />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
             <a 
               href="#" 
               className="inline-block min-w-[280px] bg-gray-800 text-white py-4 px-8 text-xs tracking-[0.2em] hover:bg-sage-600 transition-colors duration-300"
             >
               入会申し込みはこちら
             </a>
             <p className="text-gray-400 text-[10px] mt-8 leading-relaxed">
               美容師としての価値を高め、<br className="md:hidden"/>お客様に感動を与える技術を、共に学びましょう。
             </p>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Pricing;