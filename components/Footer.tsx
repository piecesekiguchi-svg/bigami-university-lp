import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif tracking-widest mb-2">美髪大学</h2>
          <p className="text-stone-500 text-xs">BIGAMI UNIVERSITY</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-stone-400 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center md:text-right text-xs text-stone-500 space-y-2">
          <p>© 2024 Bigami University. All rights reserved.</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="hover:text-stone-300">特定商取引法に基づく表記</a>
            <a href="#" className="hover:text-stone-300">プライバシーポリシー</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;