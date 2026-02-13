import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-serif tracking-widest mb-2 text-white/90">美髪大学</h2>
          <p className="text-gray-600 text-xs tracking-widest">BIGAMI UNIVERSITY</p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/akira_hair.st" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center md:text-right text-xs text-gray-600 space-y-2">
          <p>© 2024 Bigami University. All rights reserved.</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="hover:text-gray-400">特定商取引法に基づく表記</a>
            <a href="#" className="hover:text-gray-400">プライバシーポリシー</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;