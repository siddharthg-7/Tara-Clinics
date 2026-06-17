import { IconWoman, IconBone, IconMicroscope, IconBed, IconCheck, IconArrowRight } from "@tabler/icons-react";

export function SpecialtiesSection() {
  const specialties = [
    {
      id: "gynae",
      title: "Gynecology & Obstetrics",
      desc: "Complete women's healthcare from adolescence to menopause.",
      icon: <IconWoman className="w-8 h-8 text-pink" stroke={1.5} />,
      bg: "bg-pink-light",
      services: [
        "Pregnancy & Maternity Care",
        "High-Risk Pregnancy Management",
        "PCOS & Infertility Treatment",
        "Menopause Care",
        "Advanced Laparoscopic Surgeries"
      ]
    },
    {
      id: "ortho",
      title: "Orthopedics & Joint Care",
      desc: "Advanced care for bones, joints, ligaments, and mobility issues.",
      icon: <IconBone className="w-8 h-8 text-primary" stroke={1.5} />,
      bg: "bg-primary-light",
      services: [
        "Total Knee & Hip Replacement",
        "Arthroscopy & Sports Injuries",
        "Fracture & Trauma Care",
        "Spine & Back Pain Treatment",
        "Pediatric Orthopedics"
      ]
    },
    {
      id: "diag",
      title: "Advanced Diagnostics",
      desc: "State-of-the-art diagnostic imaging and pathology services.",
      icon: <IconMicroscope className="w-8 h-8 text-primary" stroke={1.5} />,
      bg: "bg-[#f0f4ff]",
      services: [
        "Digital X-Ray & Ultrasound",
        "Fetal Medicine & Scans",
        "Comprehensive Blood Tests",
        "Pathology Laboratory",
        "ECG & Cardiac Screening"
      ]
    },
    {
      id: "surg",
      title: "Surgeries & Procedures",
      desc: "Minimally invasive and highly successful surgical interventions.",
      icon: <IconBed className="w-8 h-8 text-pink" stroke={1.5} />,
      bg: "bg-[#fff0f5]",
      services: [
        "Minimally Invasive Surgeries",
        "Day Care Procedures",
        "Post-Surgical Rehabilitation",
        "Emergency Trauma Care",
        "Pain Management Clinic"
      ]
    }
  ];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-section">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[800] text-text">
            Comprehensive Specialities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {specialties.map((spec) => (
            <div 
              key={spec.id} 
              className="bg-white border border-[#eef3f8] rounded-[24px] p-8 lg:p-[32px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className={`w-[64px] h-[64px] rounded-full ${spec.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                {spec.icon}
              </div>
              
              <h3 className="text-[24px] font-[700] text-text mb-2">
                {spec.title}
              </h3>
              
              <p className="text-[16px] text-muted mb-6">
                {spec.desc}
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {spec.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-pink-light p-1 shrink-0">
                      <IconCheck className="w-3 h-3 text-pink" stroke={3} />
                    </div>
                    <span className="text-[14px] font-[500] text-text">{service}</span>
                  </li>
                ))}
              </ul>
              
              <a href={`#${spec.id}`} className="inline-flex items-center text-[15px] font-[700] text-pink hover:text-[#e03a83] transition-colors mt-auto">
                Learn More <IconArrowRight className="ml-2 w-4 h-4" stroke={2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
