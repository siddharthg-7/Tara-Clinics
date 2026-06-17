import { Button } from "@/components/ui/button";

export interface GalleryImage {
  id: string;
  url: string;
  category: "Infrastructure" | "Consultation" | "Cabin" | "Equipment" | "Patient Care";
  alt: string;
}

const mockGallery: GalleryImage[] = [
  { id: "1", url: "", category: "Infrastructure", alt: "Clinic Exterior" },
  { id: "2", url: "", category: "Consultation", alt: "Waiting Area" },
  { id: "3", url: "", category: "Cabin", alt: "Doctor's Cabin" },
  { id: "4", url: "", category: "Equipment", alt: "Advanced Diagnostics" },
  { id: "5", url: "", category: "Patient Care", alt: "Patient Ward" }
];

export function ClinicGallery() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-dark font-bold text-sm tracking-wider uppercase mb-2 block">Clinic Gallery</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-medical-blue">
            Our Clinic Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto mb-10">
          {mockGallery.map((img, idx) => (
            <div 
              key={img.id} 
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 aspect-[4/3] md:aspect-auto ${idx < 2 ? 'md:col-span-1 lg:col-span-1 xl:col-span-2 xl:aspect-video' : 'xl:aspect-[4/5]'}`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 group-hover:scale-110 transition-transform duration-500">
                <span className="text-sm font-medium text-slate-400">Placeholder<br/>{img.category}</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <span className="text-xs font-bold text-pink-300 uppercase tracking-wider mb-1 block">{img.category}</span>
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-medical-blue hover:bg-blue-900 text-white rounded-full px-8 py-6">
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}
