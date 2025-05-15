import React, { useRef, useEffect, useState } from 'react';
import { translations } from '../i18n';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  language: 'EN' | 'RU';
}

export const Timeline: React.FC<TimelineProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const t = translations[language];
  
  const timelineEvents: TimelineEvent[] = t.timelineEvents;

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.6) {
            setActiveIndex(index);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="section">
      <h2 className="section-title">Fashion & Art Through Time</h2>
      <p className="section-subtitle">
        Explore the evolution of the relationship between haute couture and artistic movements from the early 20th century to the present day.
      </p>
      
      <div className="relative" ref={timelineRef}>
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-burgundy/20 transform -translate-x-1/2"></div>
        
        {timelineEvents.map((event, index) => (
          <div 
            key={index}
            className={`timeline-item relative mb-16 last:mb-0 ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 pl-12'
            } ${index === activeIndex ? 'active' : ''}`}
          >
            {/* Line connector and dot */}
            <div className={`absolute top-0 ${
              index % 2 === 0 
                ? 'md:right-0 left-0 md:left-auto' 
                : 'left-0'
            } flex items-center`}>
              <div className="w-12 h-0.5 bg-burgundy/20"></div>
              <div className={`w-4 h-4 rounded-full border-2 border-burgundy ${
                index === activeIndex ? 'bg-burgundy' : 'bg-white'
              } transition-colors duration-300 ease-in-out`}></div>
              {index % 2 === 0 && (
                <div className="md:block hidden w-12 h-0.5 bg-burgundy/20"></div>
              )}
            </div>
            
            {/* Content */}
            <div className={`md:w-1/2 ${
              index % 2 === 0 
                ? 'md:ml-auto ml-12' 
                : 'md:mr-auto ml-12'
            }`}>
              <div className={`bg-cream border-l-4 border-burgundy p-6 rounded-r-sm transition-all duration-300 ${
                index === activeIndex ? 'shadow-md -translate-y-1' : ''
              }`}>
                <span className="inline-block px-3 py-1 bg-burgundy text-white text-sm mb-3 rounded-sm">
                  {event.year}
                </span>
                <h3 className="font-serif text-xl text-navy mb-2">{event.title}</h3>
                <p className="text-navy/70 leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};