import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGES = [
  { src: "/assests/tara-clinicsexterior.png", alt: "Clinic Entrance" },
  { src: "/assests/tara-clinicsinterior.png", alt: "Consultation Room" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80", alt: "Advanced Equipment" },
  { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80", alt: "Patient Ward" },
  { src: "https://images.unsplash.com/photo-1504813184591-01572f98c85e?w=800&q=80", alt: "Waiting Area" },
];

export function GallerySection() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[800] text-text">
            Clinic Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-[1200px] mx-auto mb-12">
          {IMAGES.map((img, i) => (
            <div 
              key={i} 
              className={`relative rounded-[20px] overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              onClick={() => openLightbox(i)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center backdrop-blur-[0px] group-hover:backdrop-blur-[2px]">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-[600] text-[16px] tracking-wide bg-white/20 px-6 py-2 rounded-full border border-white/50">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={IMAGES.map(img => ({ src: img.src }))}
        />

      </div>
    </section>
  );
}
