import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Timeline } from './components/Timeline';
import { EventDetails } from './components/EventDetails';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'EN' | 'RU'>('EN');

  return (
    <div className="min-h-screen bg-cream text-navy font-sans">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Gallery language={language} />
        <Timeline language={language} />
        <EventDetails language={language} />
        <Newsletter language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;