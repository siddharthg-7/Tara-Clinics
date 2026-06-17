import { useState, useEffect } from 'react';
import { IconMenu2, IconX, IconPhone } from '@tabler/icons-react';
import taraLogo from '@/assets/tara_logo_cropped.svg';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Patient Stories', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#appointment' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#eef3f8] h-[90px] flex items-center ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={taraLogo} alt="Tara Clinics Logo" className="h-[45px] w-auto" />
          <span className="text-[18px] font-[800] text-text whitespace-nowrap">Tara Super Speciality Clinic</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-full">
          <ul className="flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <li key={link.name} className="h-full flex items-center relative">
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-[15px] font-[600] transition-colors ${
                    activeLink === link.name ? 'text-primary' : 'text-text hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
                {activeLink === link.name && (
                  <div className="absolute bottom-[-33px] left-0 right-0 h-[3px] bg-pink rounded-t-md" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-[15px] font-[700] text-text">
            <IconPhone className="w-5 h-5 text-primary" stroke={2} />
            <span>+91 99898 88776</span>
          </div>
          <button className="bg-pink hover:bg-[#e03a83] text-white rounded-[10px] px-6 h-[46px] text-[15px] font-[600] transition-colors shadow-sm">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IconX stroke={2} /> : <IconMenu2 stroke={2} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 right-0 bg-white border-b border-[#eef3f8] shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block text-base font-[600] ${
                    activeLink === link.name ? 'text-pink' : 'text-text hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-4 border-t border-[#eef3f8]">
            <div className="flex items-center gap-2 text-[15px] font-[700] text-text justify-center">
              <IconPhone className="w-5 h-5 text-primary" stroke={2} />
              <span>+91 99898 88776</span>
            </div>
            <button className="bg-pink hover:bg-[#e03a83] text-white rounded-[10px] px-6 h-[46px] text-[15px] font-[600] w-full transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
