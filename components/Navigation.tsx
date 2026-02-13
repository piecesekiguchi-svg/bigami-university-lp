import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'お悩み', href: '#problem' },
    { label: 'ストーリー', href: '#story' },
    { label: 'カリキュラム', href: '#curriculum' },
    { label: '入会案内', href: '#pricing' },
  ];

  // Using the thumbnail API which is often more reliable for direct embedding without authentication issues if shared properly
  const logoUrl = "https://drive.google.com/thumbnail?id=1_IDgtVCG_5hpGW75XYU0lrNHFBXqM1UU&sz=w200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center h-12">
           <img 
             src={logoUrl} 
             alt="美髪大学" 
             width="48"
             height="48"
             className="h-full w-auto object-contain" 
             // Fallback to text if image fails to load
             onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
             }}
           />
           <span className="hidden text-white font-serif text-lg tracking-widest ml-2 whitespace-nowrap">美髪大学</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest uppercase text-gray-300 hover:text-white hover:text-glow transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="border border-white/30 px-6 py-2 text-xs tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            お申し込み
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col items-center py-12 space-y-8 h-screen">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-sm font-serif tracking-widest"
            >
              {link.label}
            </a>
          ))}
           <a
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-white text-black px-8 py-3 text-xs tracking-widest"
          >
            お申し込み
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;