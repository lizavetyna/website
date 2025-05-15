import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="font-serif text-2xl text-white tracking-wider mb-4 inline-block">
              ART<span className="font-bold">MODE</span>
            </a>
            <p className="mb-6">
              Exploring the fascinating intersection between haute couture and fine art in our exclusive Paris exhibition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About the Exhibition</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">Gallery Preview</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-gold transition-colors">Fashion & Art Timeline</a>
              </li>
              <li>
                <a href="#details" className="hover:text-gold transition-colors">Visit Information</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Book Tickets</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Press & Media</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="text-gold">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@artmode-exhibition.com" className="hover:text-gold transition-colors">
                  info@artmode-exhibition.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-gold">
                  <Phone size={18} />
                </div>
                <a href="tel:+33123456789" className="hover:text-gold transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <p className="mt-6 text-white/60">
                  Palais de la Mode<br />
                  8 Avenue Montaigne<br />
                  75008 Paris, France
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-sm">
          <p>&copy; 2025 ARTMODE Exhibition. All rights reserved.</p>
          <div className="mt-3 space-x-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};