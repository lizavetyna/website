import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, this would connect to an API
      setTimeout(() => {
        setSubmitted(true);
        setEmail('');
      }, 500);
    }
  };
  
  return (
    <section className="section bg-navy text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title text-gold">Stay Connected</h2>
        <p className="mb-8 text-white/80">
          Subscribe to our newsletter for exhibition updates, special events, and exclusive content about the intersection of fashion and art.
        </p>
        
        {submitted ? (
          <div className="bg-burgundy/20 p-6 rounded-sm flex flex-col items-center">
            <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center mb-4">
              <Check size={24} className="text-white" />
            </div>
            <h3 className="font-serif text-xl mb-2">Thank You!</h3>
            <p className="text-white/80">
              You've been successfully subscribed to our newsletter.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold text-navy px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-gold/90 transition-colors"
            >
              Subscribe <Send size={16} />
            </button>
          </form>
        )}
        
        <p className="mt-4 text-white/60 text-sm">
          By subscribing, you agree to receive emails from ARTMODE. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};