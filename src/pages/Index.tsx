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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Summary />
      <TechnicalSkills />
      <PaymentExpertise />
      <AIExpertise />
      <Experience />
      <ProjectCarousel />
      <Leadership />
      <Testimonials />
      <Education />
      <HobbyProjects />
      <PersonalInterests />
      <Footer />
    </div>
  );
};

export default Index;
