import { useState } from "react";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 relative overflow-hidden bg-[#0b1b42]">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0b1b42]"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0"></div>
      
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[40px] font-[800] text-white">
            Book Your Appointment
          </h2>
        </motion.div>

        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Info */}
          <motion.div 
            className="lg:col-span-2 space-y-8 relative z-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[28px] font-[700] text-white mb-6 leading-tight">
              Schedule Your<br/>Appointment Today
            </h3>
            <p className="text-[16px] text-blue-100/80 leading-relaxed font-[500]">
              We are here to provide you the best care. Fill out the form and our team will get back to you shortly.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <IconPhone className="w-6 h-6 text-pink" stroke={1.5} />
                </div>
                <div>
                  <p className="text-[14px] text-blue-200/60 mb-1 font-[500]">Call Us</p>
                  <p className="text-[18px] font-[600] text-white">+91 72079 05599</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <IconMail className="w-6 h-6 text-pink" stroke={1.5} />
                </div>
                <div>
                  <p className="text-[14px] text-blue-200/60 mb-1 font-[500]">Email Us</p>
                  <p className="text-[18px] font-[600] text-white">taraclinicnlg@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <IconMapPin className="w-6 h-6 text-pink" stroke={1.5} />
                </div>
                <div>
                  <p className="text-[14px] text-blue-200/60 mb-1 font-[500]">Visit Us</p>
                  <p className="text-[18px] font-[600] text-white leading-tight">Nallagandla, Serilingampally,<br/>Hyderabad, Telangana - 500019</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            className="lg:col-span-3 relative z-20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-[24px] p-8 md:p-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-[#eef3f8]">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-[#eaf4ff] border border-primary/20 text-primary rounded-xl font-[500]">
                  Your appointment request has been received. We will contact you shortly!
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      required id="name" name="name" value={formData.name} onChange={handleChange} 
                      type="text" placeholder=" " 
                      className="peer w-full h-[56px] px-5 pt-4 pb-1 rounded-xl border border-[#eef3f8] bg-[#f8fbff] focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] text-text" 
                    />
                    <label htmlFor="name" className="absolute text-[14px] text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input 
                      required id="phone" name="phone" value={formData.phone} onChange={handleChange} 
                      type="tel" placeholder=" " 
                      className="peer w-full h-[56px] px-5 pt-4 pb-1 rounded-xl border border-[#eef3f8] bg-[#f8fbff] focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] text-text" 
                    />
                    <label htmlFor="phone" className="absolute text-[14px] text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      id="email" name="email" value={formData.email} onChange={handleChange} 
                      type="email" placeholder=" " 
                      className="peer w-full h-[56px] px-5 pt-4 pb-1 rounded-xl border border-[#eef3f8] bg-[#f8fbff] focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] text-text" 
                    />
                    <label htmlFor="email" className="absolute text-[14px] text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Email Address (Optional)
                    </label>
                  </div>
                  <div className="relative">
                    <select 
                      required id="service" name="service" value={formData.service} onChange={handleChange} 
                      className="peer w-full h-[56px] px-5 pt-4 pb-1 rounded-xl border border-[#eef3f8] bg-[#f8fbff] focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] text-text appearance-none"
                    >
                      <option value="" disabled className="hidden"></option>
                      <option value="gynecology">Gynecology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="diagnostics">Diagnostics</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <label htmlFor="service" className={`absolute text-[14px] text-muted duration-300 transform z-10 origin-[0] left-5 pointer-events-none ${formData.service ? 'top-4 -translate-y-3 scale-75' : 'top-1/2 -translate-y-1/2 scale-100'}`}>
                      Select Service
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      required id="date" name="date" value={formData.date} onChange={handleChange} 
                      type="date" placeholder=" "
                      className="peer w-full h-[56px] px-5 pt-4 pb-1 rounded-xl border border-[#eef3f8] bg-[#f8fbff] focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] text-text" 
                    />
                    <label htmlFor="date" className="absolute text-[14px] text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Preferred Date
                    </label>
                  </div>
                  <div className="relative">
                    <input 
                      required id="time" name="time" value={formData.time} onChange={handleChange} 
                      type="time" placeholder=" "
                      className="peer w-full h-[56px] px-5 pt-4 pb-1 rounded-xl border border-[#eef3f8] bg-[#f8fbff] focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] text-text" 
                    />
                    <label htmlFor="time" className="absolute text-[14px] text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Preferred Time
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full h-[56px] mt-2 rounded-xl bg-primary hover:bg-[#0c3eb5] text-white text-[16px] font-[600] transition-colors shadow-[0_4px_20px_rgba(15,76,221,0.3)] hover:shadow-[0_15px_30px_rgba(15,76,221,0.15)]"
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
