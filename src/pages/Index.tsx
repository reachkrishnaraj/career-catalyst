import Header from "@/components/Header";
import Summary from "@/components/Summary";
import TechnicalSkills from "@/components/TechnicalSkills";
import PaymentExpertise from "@/components/PaymentExpertise";
import AIExpertise from "@/components/AIExpertise";
import Experience from "@/components/Experience";
import ProjectCarousel from "@/components/ProjectCarousel";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import HobbyProjects from "@/components/HobbyProjects";
import PersonalInterests from "@/components/PersonalInterests";
import ContactForm from "@/components/ContactForm";
import AIChatbot from "@/components/AIChatbot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Summary />
      <TechnicalSkills />
      <PaymentExpertise />
      <AIExpertise />
      <HobbyProjects />
      <Experience />
      <ProjectCarousel />
      <Leadership />
      <Testimonials />
      <Education />
      <PersonalInterests />
      <ContactForm />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
