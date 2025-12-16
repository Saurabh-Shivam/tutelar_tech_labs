import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { PartnersSection } from './components/PartnersSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactCTASection } from './components/ContactCTASection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { FloatingShield } from './components/FloatingShield';
import { GlobalGrid } from './components/GlobalGrid';
import { FloatingLocks } from './components/FloatingLocks';
import { MatrixRain } from './components/MatrixRain';
import { NetworkGrid } from './components/NetworkGrid';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen dark:bg-black dark:text-white bg-white text-black overflow-x-hidden relative">
      <GlobalGrid />
      <MatrixRain />
      <NetworkGrid />
      <FloatingLocks />
      <FloatingShield />
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <PartnersSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactCTASection />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
