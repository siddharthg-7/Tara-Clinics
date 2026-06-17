import { IconCircleCheck } from "@tabler/icons-react";
import aboutImage from "@/assets/imageholder.png";

export function AboutSection() {
  const points = [
    "State-of-the-art medical equipment",
    "Highly experienced and caring specialists",
    "Comprehensive maternal & child care",
    "Advanced orthopedic treatments and surgeries"
  ];

  return (
    <section id="about-us" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
          
          {/* Image/Visual Side */}
          <div className="relative">
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-light to-[#f0f4ff] rounded-3xl transform -rotate-3 scale-105"></div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border-8 border-white shadow-xl flex items-center justify-center">
               <img src={aboutImage} alt="Tara Clinic About Us" className="w-full h-full object-cover" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#eef3f8] flex items-center gap-4">
              <div className="w-[60px] h-[60px] bg-primary text-white rounded-full flex items-center justify-center font-[800] text-[24px]">
                12+
              </div>
              <div>
                <p className="font-[700] text-text leading-tight text-[16px]">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <span className="text-pink font-[700] text-[14px] tracking-wider uppercase mb-3 block">About Us</span>
            <h2 className="text-[36px] md:text-[40px] font-[800] text-text mb-6 leading-[1.1]">
              Dedicated to Providing the Best Healthcare Services
            </h2>
            
            <p className="text-[16px] text-muted font-[500] mb-8 leading-relaxed">
              At Tara Clinics, we believe that high-quality healthcare should be accessible, compassionate, and comprehensive. Founded on the principles of excellence and patient-first care, our clinic brings together highly specialized doctors and advanced medical technology under one roof.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-pink shrink-0" stroke={2} />
                  <span className="text-[16px] font-[600] text-text">{point}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary hover:bg-[#0c3eb5] text-white rounded-[10px] px-8 h-[54px] text-[16px] font-[600] shadow-[0_4px_20px_rgba(15,76,221,0.3)] hover:shadow-[0_15px_30px_rgba(15,76,221,0.15)] hover:-translate-y-[2px] transition-all duration-300">
              Learn More About Us
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
