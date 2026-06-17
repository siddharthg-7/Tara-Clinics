import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/features/home/HeroSection';
import { StatsBar } from '../components/features/home/StatsBar';
import { AboutSection } from '../components/features/about/AboutSection';
import { DoctorsSection } from '../components/features/doctors/DoctorsSection';
import { SpecialtiesSection } from '../components/features/treatments/SpecialtiesSection';
import { ProcessStepper } from '../components/features/process/ProcessStepper';
import { WhyChooseUs } from '../components/features/home/WhyChooseUs';
import { TestimonialCarousel } from '../components/features/testimonials/TestimonialCarousel';
import { ClinicGallery } from '../components/features/gallery/ClinicGallery';
import { AppointmentForm } from '../components/features/appointment/AppointmentForm';
import { Footer } from '../components/layout/Footer';
import { FloatingContactBar } from '../components/layout/FloatingContactBar';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden relative">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <DoctorsSection />
        <SpecialtiesSection />
        <ProcessStepper />
        <WhyChooseUs />
        <TestimonialCarousel />
        <ClinicGallery />
        <AppointmentForm />
      </main>
      
      <Footer />
      <FloatingContactBar />
    </div>
  );
}
