interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const STEPS: ProcessStep[] = [
  { num: "01", title: "Book Appointment", desc: "Schedule your convenient visit via web or phone." },
  { num: "02", title: "Consult Specialist", desc: "Meet our expert doctors for initial checkup." },
  { num: "03", title: "Accurate Diagnosis", desc: "Advanced tests and thorough evaluation." },
  { num: "04", title: "Personalized Treatment", desc: "Tailored treatment plan specifically for you." },
  { num: "05", title: "Better Recovery", desc: "Continuous care and support for healthy life." },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-wider text-pink-dark uppercase mb-3">Your Journey With Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-medical-blue">Our Patient Care Process</h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Static Background Track Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 z-0 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-3xl font-bold text-pink-dark mb-6 transition-transform hover:scale-110">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-medical-blue mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
