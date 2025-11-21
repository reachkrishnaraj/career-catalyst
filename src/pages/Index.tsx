import Header from "@/components/Header";
import Summary from "@/components/Summary";
import StatsOverview from "@/components/StatsOverview";
import TechnicalSkills from "@/components/TechnicalSkills";
import PaymentExpertise from "@/components/PaymentExpertise";
import AIExpertise from "@/components/AIExpertise";
import ProjectCarousel from "@/components/ProjectCarousel";
import CareerTimeline from "@/components/CareerTimeline";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import HobbyProjects from "@/components/HobbyProjects";
import PersonalInterests from "@/components/PersonalInterests";
import ContactForm from "@/components/ContactForm";
import AIChatbot from "@/components/AIChatbot";
import FloatingResumeDownload from "@/components/FloatingResumeDownload";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // C for Contact
      if (e.key === 'c' || e.key === 'C') {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }
      // T for Top
      if (e.key === 't' || e.key === 'T') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Summary />
      <StatsOverview />
      <TechnicalSkills />
      <PaymentExpertise />
      <AIExpertise />
      <HobbyProjects />
      <CareerTimeline />
      <ProjectCarousel />
      <Leadership />
      <Testimonials />
      <Education />
      <PersonalInterests />
      <ContactForm />
      <Footer />
      <FloatingResumeDownload />
      <QuickLinks />
      <BackToTop />
      <AIChatbot />
    </div>
  );
};

export default Index;
