import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

import { 
  IconShieldCheck, 
  IconCalendar, 
  IconPhone,
  IconPlus,
  IconDiamond,
  IconBrandWhatsapp
} from "@tabler/icons-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".gsap-badge", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out" }, 0.2)
        .from(".gsap-headline", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out" }, 0.4)
        .from(".gsap-desc", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out" }, 0.6)
        .from(".gsap-btns", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out" }, 0.8)
        .from(".gsap-stats", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out" }, 1.0)
        .from(".gsap-visual", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out" }, 1.2)
        .from(".gsap-card", { y: 20, opacity: 0, duration: 1.5, ease: "power3.out", stagger: 0.15 }, 1.4);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden font-sans pt-32 lg:pt-40 z-0"
      style={{ background: "linear-gradient(180deg, #f9fbff 0%, #eef6ff 100%)" }}
    >
      <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[720px] max-w-[1400px] mx-auto relative z-10">
        {/* Layer 9 — Decorative Medical Symbols */}
        <IconPlus className="absolute top-[15%] left-[3%] text-primary opacity-15 w-8 h-8 z-0 hidden lg:block" stroke={1.5} />
        <IconDiamond className="absolute top-[10%] right-[12%] text-primary opacity-15 w-6 h-6 z-0 hidden lg:block" stroke={1.5} />
        <IconPlus className="absolute bottom-[10%] left-[48%] text-pink opacity-15 w-7 h-7 z-0 hidden lg:block" stroke={1.5} />
        <IconDiamond className="absolute top-[40%] right-[42%] text-primary opacity-15 w-5 h-5 z-0 hidden lg:block" stroke={1.5} />

        {/* Layer 4 — Dotted Pattern */}
        <div 
          className="absolute top-0 right-0 w-[400px] h-[400px] z-0 opacity-60 pointer-events-none hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(#d9e7ff 2px, transparent 2px)",
            backgroundSize: "24px 24px",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)"
          }}
        />
        
        {/* Left Content - 45% */}
        <div className="w-full lg:w-[45%] flex items-center relative z-20">
          <div className="w-full px-6 md:px-12 lg:pl-[60px] lg:pr-10 py-12 lg:py-0">
            <div className="w-full max-w-[580px] mx-auto lg:mx-0 space-y-7">
              
              {/* Trust Badge */}
              <div className="gsap-badge inline-flex items-center gap-2 px-4 h-[36px] rounded-full bg-primary-light border border-[#d1e6fb]">
                <IconShieldCheck className="w-[18px] h-[18px] text-primary" stroke={2} />
                <span className="text-[13px] font-[600] text-primary tracking-wide">
                  Trusted Care. Advanced Treatment. Better Tomorrow.
                </span>
              </div>
              
              {/* Headline - 64px / 800 / 1.05 */}
              <h1 className="gsap-headline text-[40px] md:text-[52px] lg:text-[64px] font-[800] leading-[1.05] tracking-[-0.02em] text-[#12284C]">
                Comprehensive<br />
                Women's Health &<br />
                Orthopedic Care<br />
                <span className="text-pink">Under One Roof</span>
              </h1>
              
              {/* Description - 18px */}
              <p className="gsap-desc text-[18px] text-muted leading-[1.6]">
                Expert care in Gynecology, Obstetrics, Orthopedics, Joint Replacement and advanced diagnostics.
              </p>
              
              {/* CTA Buttons */}
              <div className="gsap-btns flex flex-col sm:flex-row gap-4 pt-2">
                <button className="bg-primary hover:bg-[#0c3eb5] text-white rounded-[10px] px-8 h-[54px] text-[16px] font-[600] shadow-[0_4px_20px_rgba(15,76,221,0.3)] hover:shadow-[0_15px_30px_rgba(15,76,221,0.15)] hover:-translate-y-[2px] transition-all duration-250 flex items-center justify-center gap-2.5">
                  <IconCalendar className="w-5 h-5" stroke={2} />
                  Book Appointment
                </button>
                <button className="bg-white hover:bg-section text-[#12284C] border border-[#E8EEF7] hover:border-primary rounded-[10px] px-8 h-[54px] text-[16px] font-[600] transition-all flex items-center justify-center gap-2.5 shadow-sm">
                  <IconPhone className="w-5 h-5 text-primary" stroke={2} />
                  Call Now
                </button>
                <button className="bg-white hover:bg-[#e8fce8] text-[#12284C] border border-[#E8EEF7] hover:border-[#25D366] rounded-[10px] px-8 h-[54px] text-[16px] font-[600] transition-all flex items-center justify-center gap-2.5 shadow-sm">
                  <IconBrandWhatsapp className="w-5 h-5 text-[#25D366]" stroke={2} />
                  WhatsApp
                </button>
              </div>
              
              <div className="gsap-stats pt-4 text-muted font-medium text-[16px]">
                Call or WhatsApp: <span className="text-primary font-[800] tracking-wide">72079 05599</span>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Right Visual - 55% */}
        <div className="gsap-visual w-full lg:w-[55%] relative flex items-center justify-center h-[450px] md:h-[600px] lg:h-[800px] overflow-visible z-10">
          
          {/* Decorative Blobs Behind Image */}
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[120px] -z-10"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-pink-100/40 blur-[120px] -z-10"></div>

          {/* Layer 5 & 6 — Main Characters Image */}
          <div className="relative z-[30] w-full flex justify-center lg:justify-end">
            <motion.img
              src="/assests/image.png"
              alt="Tara Clinics Medical Team"
              className="w-full sm:w-[95%] md:w-[130%] lg:w-[1200px] max-w-full md:max-w-none object-contain relative right-0 md:right-[-60px] lg:right-[-100px] mx-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
