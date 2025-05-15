import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  designer: string;
  year: string;
  description: string;
  artisticInfluence: string;
}

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/images/Versace.jpg",
      title: "Collection prêt-à-porter Automne/Hiver 2002-2003",
      designer: "Donatella Versace",
      year: "2002",
      description: "This iconic dress pays homage to the Dutch painter Piet Mondrian's geometric abstractions, translating his distinctive style into wearable art.",
      artisticInfluence: "De Stijl Movement, Piet Mondrian",
    },
    {
      id: 2,
      image: "/images/Vivienne Westwood.jpg",
      title: "Collection 'London', prêt-à-porter Automne/Hiver 2012-2013",
      designer: "Vivienne Westwood",
      year: "2012",
      description: "Schiaparelli's collaboration with Salvador Dalí produced surrealist designs that blurred the line between fashion and art, challenging conventional notions of design.",
      artisticInfluence: "Surrealism, Salvador Dalí",
    },
    {
      id: 3,
      image: "/images/Thom Browne.jpg",
      title: "Collection prêt-à-porter Femme Printemps/Ete 2020",
      designer: "Thom Browne",
      year: "2020",
      description: "Rei Kawakubo's avant-garde designs challenge traditional silhouettes with geometric forms that recall the fragmented perspectives of Cubist art.",
      artisticInfluence: "Cubism, Pablo Picasso, Georges Braque",
    },
    {
      id: 4,
      image: "/images/Charles De Vilmorin.jpg",
      title: "Collection Haute Couture Automne/Hiver2024-2025",
      designer: "Charles De Vilmorin",
      year: "2024",
      description: "This garden-inspired collection echoes the light, color, and natural beauty central to Impressionist painting, translating Monet's water lilies into flowing fabric forms.",
      artisticInfluence: "Impressionism, Claude Monet",
    },
    {
      id: 5,
      image: "/images/Thom Browne 2.jpg",
      title: "Collection prêt-à-porter Homme Printemps/Ete 2020",
      designer: "Thom Browne",
      year: "2020",
      description: "McQueen's dramatic silhouettes and rich embellishments draw from Renaissance art's grandeur, reinterpreting historical portraiture for the contemporary runway.",
      artisticInfluence: "Renaissance Art, Sandro Botticelli",
    },
    {
      id: 6,
      image: "/images/Cristian Dior.jpg",
      title: "Collection Haute Couture Printemps/Ete 2005",
      designer: "John Galliano",
      year: "2005",
      description: "Miyake's innovative pleating techniques create dynamic, sculptural forms that evoke the energy and spontaneity of Abstract Expressionist painting.",
      artisticInfluence: "Abstract Expressionism, Jackson Pollock",
    },
  ];

  return (
    <section id="gallery" className="section bg-navy text-white">
      <h2 className="section-title text-gold">Exhibition Gallery</h2>
      <p className="section-subtitle text-white/80">
        Explore our curated collection showcasing the intricate relationship between haute couture and artistic movements throughout history.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="overflow-hidden rounded-sm">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="font-serif text-xl text-white">{item.title}</h3>
              <p className="text-gold text-sm">{item.designer}, {item.year}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal for detailed view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-navy/95 z-50 flex items-center justify-center p-6">
          <div className="max-w-4xl bg-white text-navy p-6 rounded-sm relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-navy/60 hover:text-burgundy"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-burgundy mb-2">{selectedItem.title}</h3>
                <p className="text-navy/70 text-sm mb-4">
                  {selectedItem.designer}, {selectedItem.year}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-navy mb-2">Description</h4>
                  <p className="text-navy/80 leading-relaxed">{selectedItem.description}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-navy mb-2">Artistic Influence</h4>
                  <p className="text-navy/80 leading-relaxed">{selectedItem.artisticInfluence}</p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-navy/10">
                  <p className="text-sm text-navy/60 italic">
                    This piece is part of the "Haute Couture Meets Fine Art" exhibition,
                    showcasing the symbiotic relationship between fashion design and artistic movements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};