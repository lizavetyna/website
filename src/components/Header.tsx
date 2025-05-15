import React, { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { translations } from '../i18n'; 

type HeaderProps = {
  language: 'EN' | 'RU';
  setLanguage: (lang: 'EN' | 'RU') => void;
};

export const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'RU' : 'EN');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 text-navy shadow-md py-3' 
          : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl md:text-3xl tracking-wider">
          ART<span className="font-bold">MODE</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 text-sm tracking-wider">
            <a href="#about" className="hover:text-gold transition-colors">{t.about}</a>
            <a href="#gallery" className="hover:text-gold transition-colors">{t.gallery}</a>
            <a href="#timeline" className="hover:text-gold transition-colors">{t.timeline}</a>
            <a href="#details" className="hover:text-gold transition-colors">{t.visit}</a>
</nav>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-sm hover:text-gold transition-colors"
          >
            <Globe size={16} />
            <span>{language}</span>
          </button>
        </div>
        
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy text-white absolute top-full left-0 right-0 p-6 shadow-lg">
          <nav className="flex flex-col space-y-4 text-sm tracking-wider">
            <a 
              href="#about" 
              className="py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#gallery" 
              className="py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </a>
            <a 
              href="#timeline" 
              className="py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              TIMELINE
            </a>
            <a 
              href="#details" 
              className="py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              VISIT
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 py-2 hover:text-gold transition-colors"
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};