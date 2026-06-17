import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AppointmentForm() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
      
      tl.from(".appointment-badge", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".appointment-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".appointment-desc", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".appointment-contact-item", { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }, "-=0.4")
        .from(".appointment-form", { x: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="appointment" 
      ref={sectionRef}
      className="bg-primary py-20 lg:py-32 text-white relative overflow-hidden"
    >
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] rounded-l-[100px] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <div>
            <span className="appointment-badge text-pink-300 font-bold text-sm tracking-wider uppercase mb-2 block">Book Appointment</span>
            <h2 className="appointment-title text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Schedule Your <br/>Appointment Today
            </h2>
            <p className="appointment-desc text-blue-100 text-lg mb-10">
              We are here to provide you the best care. Fill out the form and our team will get back to you shortly.
            </p>
            
            <div className="space-y-6">
              <div className="appointment-contact-item flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-pink-300" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="font-bold text-lg">+91 99898 88776</p>
                </div>
              </div>
              
              <div className="appointment-contact-item flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-pink-300" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email Us</p>
                  <p className="font-bold text-lg">taraclinicnlg@gmail.com</p>
                </div>
              </div>
              
              <div className="appointment-contact-item flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-pink-300" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Visit Us</p>
                  <p className="font-bold text-base leading-tight">
                    Nallagandla, Serilingampally,<br/>
                    Hyderabad, Telangana - 500019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="appointment-form bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <form className="space-y-6 text-foreground">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all" required />
                </div>
                <div className="space-y-2">
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all appearance-none bg-white" required defaultValue="">
                    <option value="" disabled>Select Doctor</option>
                    <option value="dimple">Dr. Dimple Mishra (Gynecology)</option>
                    <option value="akanksh">Dr. Akanksh Dubey (Orthopedics)</option>
                  </select>
                </div>
                <div className="space-y-2 relative">
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all text-muted-foreground" required />
                </div>
              </div>

              <div className="space-y-2">
                <textarea rows={4} placeholder="Message (Optional)" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <Button className="w-full bg-pink-dark hover:bg-[#c2185b] text-white py-6 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Book Appointment Now
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
