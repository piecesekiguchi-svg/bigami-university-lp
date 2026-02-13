import React from 'react';
import Section from './ui/Section';
import { BookOpen, Video, Users, MessageCircle } from 'lucide-react';

const Curriculum: React.FC = () => {
  const contents = [
    {
      title: "基礎理論マスター",
      desc: "毛髪科学に基づいた薬剤知識を完全網羅。なぜその薬を使うのか？が100%理解できるようになります。",
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "実技動画見放題",
      desc: "塗布のハケ使いからアイロンの角度まで。編集された高画質動画で、細かな手元の動きを何度でも復習できます。",
      icon: <Video className="w-6 h-6 text-purple-400" />
    },
    {
      title: "時短ワークフロー",
      desc: "サロンワークで即実践できる「時短術」を公開。カウンセリングから仕上げまで、無駄を削ぎ落とした最短ルート。",
      icon: <Users className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Q&A サポート",
      desc: "日々のサロンワークで起きた失敗や疑問を直接質問可能。孤独な悩みを解消し、翌日のサロンワークに活かせます。",
      icon: <MessageCircle className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <Section id="curriculum" background="dark">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
          <span className="text-cyan-500">明日から使える</span><br/>実践的カリキュラム
        </h2>
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          Curriculum
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {contents.map((item, index) => (
          <div key={index} className="group bg-white/5 p-10 flex flex-col md:flex-row items-start gap-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10">
            <div className="shrink-0 p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-white mb-3 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Curriculum;