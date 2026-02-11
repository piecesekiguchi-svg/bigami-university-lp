import React from 'react';
import Section from './ui/Section';
import { CheckCircle2, Clock, Sparkles, UserCheck } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      title: "1から矯正を学びたい",
      desc: "基礎知識に自信がない、薬剤選定が怖いと感じる方へ。感覚ではなく「理論」に基づいた確実な技術をお伝えします。",
      icon: <Sparkles className="w-5 h-5 text-sage-500" />
    },
    {
      title: "アシスタントでも簡単に",
      desc: "難しいアイロン操作や複雑な薬剤調合を排除。誰がやっても同じ結果が出る「再現性」の高いマニュアル化された技術。",
      icon: <UserCheck className="w-5 h-5 text-sage-500" />
    },
    {
      title: "カラーや矯正の時短施術",
      desc: "長時間の施術は失客の原因に。クオリティを上げながら、無駄な工程を削ぎ落とし、圧倒的な生産性を実現します。",
      icon: <Clock className="w-5 h-5 text-sage-500" />
    }
  ];

  return (
    <Section id="problem" background="white">
      <div className="text-center mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-6">
          こんな<span className="text-sage-600 border-b border-sage-200 pb-1">悩み</span>はありませんか？
        </h2>
        <p className="text-gray-400 text-sm tracking-wide">
          技術への不安、時間の壁、教育の悩み。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {problems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 border border-gray-100 hover:border-sage-200 hover:bg-sage-50/30 transition-all duration-500"
          >
            <div className="mb-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="font-serif text-lg text-gray-800 mb-4 pb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-7 font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-sage-50 p-12 md:p-20 text-center relative overflow-hidden rounded-sm">
         <div className="relative z-10 max-w-3xl mx-auto">
           <h3 className="font-serif text-2xl md:text-3xl mb-8 text-sage-900">
             「感覚」から「論理」へ。
           </h3>
           <p className="text-sage-800/70 leading-relaxed mb-10 font-serif">
             なんとなく薬剤を選んでいませんか？<br/>
             なんとなくアイロンを入れていませんか？<br/>
             その「なんとなく」を卒業し、<br/>プロフェッショナルとしての確信を手に入れましょう。
           </p>
           <CheckCircle2 className="w-8 h-8 text-sage-400 mx-auto opacity-80" />
         </div>
      </div>
    </Section>
  );
};

export default ProblemSolution;