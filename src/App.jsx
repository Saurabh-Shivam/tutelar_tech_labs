import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { OurStorySection } from "./components/OurStorySection";
import { PartnersSection } from "./components/PartnersSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ProcessSection } from "./components/ProcessSection";
import { AboutSection } from "./components/AboutSection";
import { StatsSection } from "./components/StatsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactCTASection } from "./components/ContactCTASection";
import { MapSection } from "./components/MapSection";
import { Footer } from "./components/Footer";
import { FloatingShield } from "./components/FloatingShield";
import { GlobalGrid } from "./components/GlobalGrid";
import { FloatingLocks } from "./components/FloatingLocks";
import { MatrixRain } from "./components/MatrixRain";
import { NetworkGrid } from "./components/NetworkGrid";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TTLSupportServices } from "./components/TTLSupportServices";
import { ToastContainer } from "react-toastify";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash;
    let targetId = null;

    if (hash) {
      targetId = hash.slice(1);
    } else if (path !== "/") {
      // Remove leading slash to get ID (e.g. "/about" -> "about")
      targetId = path.slice(1);
    }

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
      {/* <ServicesSection /> */}
      <TTLSupportServices />
      <WhyChooseSection />
      <ProcessSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactCTASection />
      <MapSection />
      <Footer />
      <ScrollToTop />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
