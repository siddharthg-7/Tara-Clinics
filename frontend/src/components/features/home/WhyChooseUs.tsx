import { 
  IconUserCheck, 
  IconBuildingHospital, 
  IconMicroscope, 
  IconAmbulance, 
  IconHeart, 
  IconWallet 
} from "@tabler/icons-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Doctors",
      description: "Highly qualified & compassionate team",
      icon: <IconUserCheck className="w-8 h-8 text-primary" stroke={1.5} />
    },
    {
      title: "Advanced Infrastructure",
      description: "Modern clinic with latest technology",
      icon: <IconBuildingHospital className="w-8 h-8 text-pink" stroke={1.5} />
    },
    {
      title: "Accurate Diagnostics",
      description: "Precise tests for better treatment",
      icon: <IconMicroscope className="w-8 h-8 text-primary" stroke={1.5} />
    },
    {
      title: "Emergency Care",
      description: "Prompt care when you need it",
      icon: <IconAmbulance className="w-8 h-8 text-pink" stroke={1.5} />
    },
    {
      title: "Patient Focused",
      description: "Your health & comfort are our priority",
      icon: <IconHeart className="w-8 h-8 text-primary" stroke={1.5} />
    },
    {
      title: "Affordable Care",
      description: "Quality treatment at reasonable cost",
      icon: <IconWallet className="w-8 h-8 text-pink" stroke={1.5} />
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-section">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[800] text-text">
            Why Choose Tara Clinic
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {reasons.map((reason, idx) => {
            const isPink = idx % 2 !== 0;
            const bgIcon = isPink ? "bg-pink-light" : "bg-primary-light";
            return (
              <div 
                key={idx} 
                className="bg-white border border-[#eef3f8] rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
              >
                <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mb-6 ${bgIcon}`}>
                  {reason.icon}
                </div>
                <h3 className="text-[20px] font-[700] text-text mb-2">{reason.title}</h3>
                <p className="text-[16px] text-muted font-[500] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
