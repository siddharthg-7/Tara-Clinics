import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { 
  IconShieldCheck, 
  IconCalendar, 
  IconPhone
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
      className="relative overflow-hidden font-sans pt-32 lg:pt-40"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%)" }}
    >
      <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[720px] max-w-[1400px] mx-auto relative z-10">
        
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
              </div>
              
              {/* Hero Statistics */}
              <div className="gsap-stats grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 lg:pt-16">
                <div>
                  <h3 className="text-[32px] font-[800] text-primary">12+</h3>
                  <p className="text-[15px] text-muted font-medium">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="text-[32px] font-[800] text-primary">50+</h3>
                  <p className="text-[15px] text-muted font-medium">Specialized Doctors</p>
                </div>
                <div>
                  <h3 className="text-[32px] font-[800] text-primary">1,000+</h3>
                  <p className="text-[15px] text-muted font-medium">Happy Patients</p>
                </div>
                <div>
                  <h3 className="text-[32px] font-[800] text-primary">20+</h3>
                  <p className="text-[15px] text-muted font-medium">Advanced Treatments</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Right Visual - 55% */}
        <div className="gsap-visual w-full lg:w-[55%] relative flex items-center justify-center h-[450px] md:h-[600px] lg:h-[800px] overflow-visible z-10">
          
          {/* Layer 1 — Main Ellipse Parallax */}
          <Tilt 
            className="absolute right-[-30px] top-[50px] w-[850px] h-[600px] z-0 hidden lg:block pointer-events-none"
            trackOnWindow={true}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full bg-[#e9f4ff] blur-sm" />
          </Tilt>

          {/* Layer 7 — Soft Medical Glow Pulse */}
          <motion.div 
            className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 blur-[150px] rounded-full z-[5] pointer-events-none"
            animate={{ scale: [1, 1.03, 1], opacity: [0.18, 0.22, 0.18] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Main Image with Floating animation */}
          <div className="relative z-[20] w-full flex justify-center lg:justify-end">
            <motion.img
              src="/assests/image.png"
              alt="Tara Clinics Medical Team"
              className="w-[120%] md:w-[130%] lg:w-[1150px] max-w-none object-contain relative right-[-80px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
