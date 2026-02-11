import React from 'react';
import Section from './ui/Section';

const InstructorStory: React.FC = () => {
  return (
    <Section id="story" className="overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sage-500 tracking-[0.3em] text-[10px] uppercase block mb-4">The Story</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-relaxed">
            凡人だからこそ、<br/>
            辿り着けた理論がある。
          </h2>
        </div>

        <div className="space-y-8 text-gray-600 leading-loose font-light font-serif text-justify md:px-12">
          <p>
            <span className="text-4xl float-left mr-3 mt-[-6px] text-sage-300 font-serif">20</span>
            歳で美容師として働き始め、25歳までは売り上げ30万もいかないくらいの雇われ美容師でした。
            「これじゃ人生つまらない」そう思い、周りがやっている事と逆の事をしようと決意しました。
          </p>
          <p className="text-center py-4 text-sage-800 font-medium">
            そうして選んだのが、ヘアケアの道です。
          </p>
          <p>
            全く知識もなかったため、自分自身に1年間で投資しまくりました。
            28歳で縮毛矯正に目覚め、29歳でオンラインサロンを開講。
            今では年間20〜30回のオフラインセミナーを実施し、全国の美容師様に技術をお伝えしています。
          </p>
          
          <div className="py-10 flex justify-center">
            <div className="w-px h-16 bg-sage-200"></div>
          </div>

          <p>
            私が変われたように、あなたも変われる。<br/>
            お客様だけでなく、その先にいる美容師さんのお客様まで綺麗になってもらいたい。<br/>
            そんな思いで、私が勉強してきた全てを全力でお伝えします。
          </p>

          <div className="pt-12 text-center">
             <p className="font-serif text-xl text-gray-900 mb-2">Akira</p>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">美髪大学 Founder / Hair Specialist</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InstructorStory;