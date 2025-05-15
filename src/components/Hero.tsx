import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../i18n';

type HeroProps = {
  language: 'EN' | 'RU';
};

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];
  return (
    <section className="min-h-screen bg-hero-pattern bg-cover bg-[80%_center] flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-navy/40"></div>
      <div className="container mx-auto px-6 relative z-10 py-24 md:py-0">
        <div className="max-w-3xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-4 animate-fade-in">
            Haute Couture <br /><span className="text-gold">Meets Fine Art</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl animate-fade-in delay-200">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
            <a href="#details" className="btn btn-primary">
              {t.heroVisit}
            </a>
            <a href="#about" className="btn btn-secondary flex items-center justify-center gap-2">
              {t.heroLearn} <ArrowRight size={16} />
            </a>
            {/*<a href="https://buy.stripe.com/test_eVq00lfaQ76md7R8kN8so00" 
            className="btn btn-secondary flex items-center justify-center gap-2"
            target="_blank">
              {t.heroPay} <ArrowRight size={16} />
            </a>*/}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
          <ArrowRight size={18} className="text-white/80 rotate-90" />
        </div>
      </div>
    </section>
  );
};