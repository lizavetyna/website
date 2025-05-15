import React, { useEffect, useState } from 'react';
import { translations } from '../i18n';

type AboutProps = {
  language: 'EN' | 'RU';
};

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language];
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">About the Exhibition</h2>
          <p className="mb-6 text-navy/80 leading-relaxed">{t.aboutParagraph1}</p>
          <p className="mb-6 text-navy/80 leading-relaxed">{t.aboutParagraph2}</p>
          <p className="mb-6 text-navy/80 leading-relaxed">{t.aboutParagraph3}</p>
          <p className="text-navy/80 leading-relaxed">{t.aboutParagraph4}</p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <video
              src="/videos/about.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover rounded-sm"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute -bottom-8 -left-8 bg-burgundy text-white p-4 md:p-6 rounded-sm max-w-xs hidden md:block">
              <p className="italic font-serif text-lg">
              </p>
              <p className="text-right mt-2 text-sm"></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24">
        <h2 className="section-title">Meet Your Guide</h2>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <img 
              src="/images/GUIDE.JPG" 
              alt="Liza - Fashion and Art Expert" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4 text-navy">Liza Vetyna</h3>
            <p className="mb-4 text-navy/80 leading-relaxed">{t.guideParagraph1}</p>
            <p className="mb-4 text-navy/80 leading-relaxed">{t.guideParagraph2}</p>
            <p className="text-navy/80 leading-relaxed">{t.guideParagraph3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};