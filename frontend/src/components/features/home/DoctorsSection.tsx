import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Activity } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  credentials: string;
  specialization: string;
  experience: string;
  satisfaction: string;
  stories: string;
  hours: string;
  imagePlaceholder: string;
}

const DOCTORS: Doctor[] = [
  {
    id: "dr-dimple",
    name: "Dr. Dimple Mishra",
    credentials: "MBBS, DNB - Obstetrics & Gynecology, MD",
    specialization: "Gynecologist & Obstetrician",
    experience: "12+ Years Experience",
    satisfaction: "99%",
    stories: "37+",
    hours: "Mon - Sat, 9:00 AM - 10:30 PM",
    imagePlaceholder: "bg-pink-100",
  },
  {
    id: "dr-akanksh",
    name: "Dr. Akanksh Dubey",
    credentials: "MS - Orthopedics, MBBS",
    specialization: "Orthopedic Surgeon",
    experience: "12+ Years Experience",
    satisfaction: "88%",
    stories: "40+",
    hours: "Mon - Sun, 10:00 AM - 10:30 PM",
    imagePlaceholder: "bg-blue-100",
  }
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-pink-dark uppercase mb-3">Our Specialists</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-medical-blue">Meet Our Expert Doctors</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="transition-transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <Card className="overflow-hidden border-slate-200 shadow-md hover:shadow-2xl transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                    
                    {/* Image */}
                    <div className={`w-32 h-32 rounded-full flex-shrink-0 ${doc.imagePlaceholder} border-4 border-white shadow-lg overflow-hidden`}>
                       {/* Placeholder for actual image */}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-medical-blue">{doc.name}</h4>
                        <p className="text-xs text-slate-500 font-medium mt-1">{doc.credentials}</p>
                        <p className="text-pink-dark font-semibold mt-2">{doc.specialization}</p>
                        <p className="text-sm font-medium text-slate-700 mt-1">{doc.experience}</p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1 text-pink-dark">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold text-sm">{doc.satisfaction}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Satisfaction</span>
                        </div>
                        <div className="flex flex-col gap-1 border-l border-slate-100 pl-3">
                          <div className="flex items-center gap-1 text-medical-blue">
                            <Activity className="w-4 h-4" />
                            <span className="font-bold text-sm">{doc.stories}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Stories</span>
                        </div>
                        <div className="flex flex-col gap-1 border-l border-slate-100 pl-3">
                          <div className="flex items-center gap-1 text-slate-700">
                            <Clock className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-slate-500 leading-tight">{doc.hours}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4">
                        <Button variant="outline" className="flex-1 rounded-full border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white transition-colors">
                          View Profile
                        </Button>
                        <Button className="flex-1 rounded-full bg-pink-dark hover:bg-[#c2185b] text-white">
                          Book Now
                        </Button>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
