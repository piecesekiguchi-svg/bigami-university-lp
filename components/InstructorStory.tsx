import React from 'react';
import Section from './ui/Section';

const InstructorStory: React.FC = () => {
  return (
    <Section id="story" background="dark" className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="text-cyan-500 tracking-[0.3em] text-[10px] uppercase block mb-4 glow-text">The Story</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-relaxed">
            凡人だからこそ、<br/>
            辿り着けた理論がある。
          </h2>
        </div>

        <div className="space-y-8 text-gray-400 leading-loose font-light font-serif text-justify md:px-12 bg-white/5 p-8 md:p-12 border border-white/10 relative">
           {/* Decorative corner accents */}
           <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500/50"></div>
           <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500/50"></div>

          <div>
            <p className="mb-6">
              <span className="text-4xl float-left mr-3 mt-[-6px] text-cyan-700 font-serif">20</span>
              歳で美容師として働き始め、25歳までは売り上げ30万もいかないくらいの雇われ美容師でした。
            </p>

            <div className="pl-6 border-l-2 border-cyan-900/50 italic text-white/80 my-8 space-y-2">
              <p>『このままじゃダメだ』</p>
              <p>『何も得意分野、武器がない』</p>
              <p>『これじゃ周りに埋もれてしまう』</p>
            </div>

            <p>
              そう思い、批判も受けながら周りがやっている事と<span className="text-white border-b border-cyan-500/30">逆の事</span>をしようと決意しました。
            </p>
          </div>
          
          <p>
            最初は髪質改善や縮毛矯正を打ち出してるサロンはあまりありませんでした。<br/>
            縮毛矯正はみんな苦手だからです。<br/>
            「髪質改善」なんて言葉はその時はなく、批判の嵐でした。
          </p>

          <p className="text-white font-medium tracking-widest border-l-2 border-cyan-500 pl-6 my-8">
            それを10年続けた結果、今の自分がいます。
          </p>

          <p>
            28歳で縮毛矯正にさらに深く目覚め、29歳でオンラインサロンを開講。<br/>
            今では年間20〜30回のオフラインセミナーを実施し、全国の美容師様に技術をお伝えしています。
          </p>
          
          <div className="pt-8 border-t border-white/5 mt-8">
            <p>
              私が変われたように、あなたも変われる。<br/>
              お客様だけでなく、その先にいる美容師さんのお客様まで綺麗になってもらいたい。<br/>
              そんな思いで、私が勉強してきた全てを全力でお伝えします。
            </p>
          </div>

          <div className="pt-12 text-right">
            <p className="font-serif text-2xl text-white mb-2 tracking-widest">Akira</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Founder / Hair Specialist</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InstructorStory;