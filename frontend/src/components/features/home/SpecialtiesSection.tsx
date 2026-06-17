import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Baby, ActivitySquare, Stethoscope, HeartPulse } from "lucide-react";

export function SpecialtiesSection() {
  return (
    <section id="treatments" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-pink-dark uppercase mb-3">Our Specialities & Treatments</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-medical-blue">Comprehensive Care for You and Your Family</h3>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Gynecology - Large Block */}
          <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-pink-50 to-white border-pink-100 hover:shadow-xl transition-shadow group overflow-hidden">
            <CardContent className="p-8 md:p-12 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-dark mb-6 group-hover:scale-110 transition-transform">
                  <Baby className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-medical-blue mb-4">Gynecology & Obstetrics</h4>
                <ul className="space-y-3 mb-8">
                  {["Pregnancy Care", "High-Risk Pregnancy", "PCOS Treatment", "Infertility Care", "Menopause Care"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-pink-400 mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="inline-flex items-center text-pink-dark font-semibold group-hover:underline">
                View All Services <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </CardContent>
          </Card>

          {/* Orthopedics */}
          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-xl transition-shadow group">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <ActivitySquare className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-medical-blue mb-4">Orthopedics & Joint Care</h4>
                <ul className="space-y-2 mb-6">
                  {["Joint Replacement", "Knee & Hip Pain", "Arthroscopy", "Fracture Treatment"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                View All Services <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </CardContent>
          </Card>

          {/* Diagnostics */}
          <Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-xl transition-shadow group">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-medical-blue mb-4">Diagnostics</h4>
                <ul className="space-y-2 mb-6">
                  {["Ultrasound", "Laboratory Tests", "X-Ray", "Pathology"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="inline-flex items-center text-green-600 font-semibold text-sm group-hover:underline">
                View All Services <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </CardContent>
          </Card>

          {/* Surgeries & Treatments - Full Width Bottom Row */}
          <Card className="md:col-span-3 bg-slate-50 border-slate-200 hover:shadow-xl transition-shadow group">
            <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-medical-blue mb-2">Surgeries & Advanced Treatments</h4>
                  <p className="text-slate-600">From minor procedures to complex interventions, performed in state-of-the-art operation theaters.</p>
                </div>
              </div>
              <a href="#" className="inline-flex flex-shrink-0 items-center px-6 py-3 rounded-full bg-medical-blue text-white font-semibold hover:bg-blue-900 transition-colors">
                Explore Treatments <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
