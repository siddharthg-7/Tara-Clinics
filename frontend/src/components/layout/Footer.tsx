import { IconMapPin, IconPhone, IconMail, IconArrowRight, IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

import taraLogo from '@/assets/tara_logo_cropped.svg';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#0b1b42] to-[#0a1532] text-slate-300 pt-20 pb-10 border-t border-blue-900/30">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <img src={taraLogo} alt="Tara Clinics Logo" className="h-[45px] w-auto" />
            </div>
            <p className="text-[15px] leading-relaxed font-[500] text-slate-400">
              Providing quality healthcare in Gynecology, Obstetrics, Orthopedics and comprehensive medical care with compassion and excellence.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink hover:text-white transition-all hover:-translate-y-1">
                <IconBrandFacebook className="w-5 h-5" stroke={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink hover:text-white transition-all hover:-translate-y-1">
                <IconBrandInstagram className="w-5 h-5" stroke={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink hover:text-white transition-all hover:-translate-y-1">
                <IconBrandWhatsapp className="w-5 h-5" stroke={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-[700] text-[18px] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Doctors', 'Treatments', 'Patient Stories', 'Gallery', 'Contact'].map((item) => {
                const linkId = item === 'Home' ? 'home' : item === 'About Us' ? 'about-us' : item === 'Patient Stories' ? 'testimonials' : item === 'Contact' ? 'appointment' : item.toLowerCase();
                return (
                  <li key={item}>
                    <a href={`#${linkId}`} className="text-[15px] font-[500] text-slate-400 hover:text-pink transition-colors inline-flex items-center group">
                      <IconArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-pink" stroke={2} />
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services & Hours */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-[700] text-[18px] mb-6">Our Services</h3>
              <ul className="space-y-4">
                {['Gynecology', 'Obstetrics', 'Orthopedics', 'Diagnostics', 'Surgeries & Treatments', 'Physiotherapy'].map((item) => (
                  <li key={item}>
                    <a href="#treatments" className="text-[15px] font-[500] text-slate-400 hover:text-pink transition-colors inline-flex items-center group">
                      <IconArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-pink" stroke={2} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info & Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-[700] text-[18px] mb-6">Working Hours</h3>
              <div className="space-y-3 text-[15px] font-[500] border-b border-white/10 pb-5 mb-5">
                <div className="flex justify-between text-slate-400">
                  <span>Mon - Sat</span>
                  <span className="text-white font-[600]">9:00 AM - 10:30 PM</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sun</span>
                  <span className="text-white font-[600]">10:00 AM - 10:30 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-[700] text-[18px] mb-6">Find Us</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-[15px] font-[500] text-slate-400">
                  <IconMapPin className="w-5 h-5 text-pink shrink-0 mt-0.5" stroke={1.5} />
                  <span>Nallagandla, Serilingampally,<br />Hyderabad, Telangana - 500019</span>
                </li>
                <li className="flex items-center gap-4 text-[15px] font-[500] text-slate-400">
                  <IconPhone className="w-5 h-5 text-pink shrink-0" stroke={1.5} />
                  <span>72079 05599</span>
                </li>
                <li className="flex items-center gap-4 text-[15px] font-[500] text-slate-400">
                  <IconMail className="w-5 h-5 text-pink shrink-0" stroke={1.5} />
                  <span>taraclinicnlg@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] font-[500] text-slate-500">
          <p>© {new Date().getFullYear()} Tara Super Speciality Clinic. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
