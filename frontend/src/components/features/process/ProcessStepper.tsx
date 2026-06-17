export function ProcessStepper() {
  const steps = [
    {
      id: "1",
      title: "Book Appointment",
      description: "Schedule your visit easily online or via call.",
      bg: "bg-primary-light",
      text: "text-primary",
      borderColor: "border-primary"
    },
    {
      id: "2",
      title: "Expert Consultation",
      description: "Meet our specialists for a comprehensive evaluation.",
      bg: "bg-pink-light",
      text: "text-pink",
      borderColor: "border-pink"
    },
    {
      id: "3",
      title: "Advanced Diagnostics",
      description: "Get accurate results using state-of-the-art technology.",
      bg: "bg-[#f0f4ff]",
      text: "text-primary",
      borderColor: "border-primary"
    },
    {
      id: "4",
      title: "Personalized Treatment",
      description: "Receive a tailored care plan designed just for you.",
      bg: "bg-pink-light",
      text: "text-pink",
      borderColor: "border-pink"
    },
    {
      id: "5",
      title: "Recovery & Follow-up",
      description: "Continuous monitoring to ensure complete health recovery.",
      bg: "bg-[#eaf4ff]",
      text: "text-primary",
      borderColor: "border-primary"
    }
  ];

  return (
    <section id="journey" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[800] text-text">
            Your Journey to Better Health
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 pb-8">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="flex flex-row lg:flex-col items-center lg:text-center relative group w-full"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                {/* Horizontal connecting line & Arrow (Desktop) */}
                <div className="hidden lg:flex absolute top-[39px] left-[50%] w-full items-center -z-10 group-last:hidden text-[#d1dceb] pr-12">
                  <div className="h-[2px] bg-[#eef3f8] flex-1"></div>
                  <svg className="w-5 h-5 ml-[-2px] text-[#eef3f8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
                
                {/* Vertical connecting line (Mobile) */}
                <div className="block lg:hidden absolute left-[39px] top-[80px] w-[2px] h-[calc(100%+32px)] bg-[#eef3f8] -z-10 group-last:hidden"></div>

                {/* Circle Number */}
                <div className="w-[80px] h-[80px] shrink-0 rounded-full bg-white border-4 border-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] flex items-center justify-center relative lg:mb-6 z-10 mr-6 lg:mr-0 lg:mx-auto">
                  <div className={`w-[64px] h-[64px] rounded-full ${step.bg} ${step.text} flex items-center justify-center text-[24px] font-[800] group-hover:scale-110 transition-transform duration-300`}>
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 text-left lg:text-center mt-2 lg:mt-0">
                  <h3 className="text-[20px] font-[700] text-text mb-2 transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-muted font-[500] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
