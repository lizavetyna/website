import React from 'react';
import { Calendar, MapPin, Clock, Ticket, Info } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section id="details" className="section bg-burgundy/10">
      <h2 className="section-title">Exhibition Details</h2>
      <p className="section-subtitle">
        Plan your visit to the ARTMODE exhibition exploring the fascinating intersection of haute couture and fine art.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Event details */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-burgundy text-white p-3 rounded-sm">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-navy mb-1">Dates</h3>
              <p className="text-navy/70">May 24 2025, 15:00,</p>
              <p className="text-navy/70">June 10, 2025,</p>
              <p className="text-navy/70">June 25, 2025 </p>
              <p className="text-navy/70">July 20, 2025 </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-burgundy text-white p-3 rounded-sm">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-navy mb-1">Location</h3>
              <p className="text-navy/70">Palais de la Mode</p>
              <p className="text-navy/70">8 Avenue Montaigne, 75008 Paris, France</p>
            </div>
          </div>
          
        {/*   <div className="flex items-start gap-4">
            <div className="bg-burgundy text-white p-3 rounded-sm">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-navy mb-1">Hours</h3>
              <p className="text-navy/70">Tuesday - Sunday: 10:00 AM - 7:00 PM</p>
              <p className="text-navy/70">Late nights on Thursdays until 9:30 PM</p>
              <p className="text-navy/70">Closed on Mondays</p>
            </div> 
          </div> */}
          
          <div className="flex items-start gap-4">
            <div className="bg-burgundy text-white p-3 rounded-sm">
              <Ticket size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-navy mb-1">Admission</h3>
              <p className="text-navy/70">General: €30</p>
              <p className="text-navy/70 mt-2">
                <a href="#" className="text-burgundy hover:underline">Admission to the exhibition is not included in the ticket price and must be paid for separately.
Purchase online in advance to avoid queues.</a> 
              </p>
            </div>
          </div>
        </div>
        
        
        {/* Map and special events */}
        {/* <div>
          <div className="bg-white p-4 rounded-sm shadow-sm mb-6">
            <img 
              src="https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Exhibition Location Map" 
              className="w-full h-48 object-cover rounded-sm mb-4"
            />
            <a href="#" className="text-burgundy hover:underline text-sm flex justify-center gap-1 items-center">
              <MapPin size={14} /> Get directions
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-sm shadow-sm">
            <h3 className="font-serif text-lg text-navy mb-4 flex items-center gap-2">
              <Info size={18} className="text-burgundy" />
              Special Events
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-navy">Guided Tours with Liza</h4>
                <p className="text-navy/70 text-sm">Every Thursday at 6:30 PM</p>
                <p className="text-navy/70 text-sm">Limited to 15 participants</p>
              </div>
              
              <div>
                <h4 className="font-medium text-navy">Fashion Designer Workshops</h4>
                <p className="text-navy/70 text-sm">Saturdays at 2:00 PM</p>
                <p className="text-navy/70 text-sm">Registration required</p>
              </div>
              
              <div>
                <h4 className="font-medium text-navy">Film Screenings: Fashion in Cinema</h4>
                <p className="text-navy/70 text-sm">First Sunday of each month at 4:00 PM</p>
                <p className="text-navy/70 text-sm">Free with exhibition ticket</p>
              </div>
              
              <div className="pt-2">
                <a href="#" className="text-burgundy hover:underline text-sm">
                  View full events calendar
                </a>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      {/*
       <div className="bg-white p-6 rounded-sm shadow-sm">
        <h3 className="font-serif text-xl text-navy mb-4">Accessibility & Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-navy mb-2">Accessibility</h4>
            <ul className="text-navy/70 text-sm space-y-1">
              <li>• Wheelchair accessible</li>
              <li>• Audio guides available</li>
              <li>• Tactile exhibits for visually impaired</li>
              <li>• Accessible restrooms</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-navy mb-2">Services</h4>
            <ul className="text-navy/70 text-sm space-y-1">
              <li>• Coat check</li>
              <li>• Gift shop</li>
              <li>• Café and restaurant</li>
              <li>• Free WiFi</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-navy mb-2">Groups</h4>
            <ul className="text-navy/70 text-sm space-y-1">
              <li>• Discounted rates for groups of 10+</li>
              <li>• Private tours available</li>
              <li>• School programs</li>
              <li>• Corporate events</li>
            </ul> 
          </div>
        </div> 
      </div>*/}
    </section>
  );
};