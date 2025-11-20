import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import TechnicalSkills from "@/components/TechnicalSkills";
import KeyProjects from "@/components/KeyProjects";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import PersonalInterests from "@/components/PersonalInterests";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Summary />
      <Experience />
      <TechnicalSkills />
      <KeyProjects />
      <Leadership />
      <Testimonials />
      <Education />
      <PersonalInterests />
      <Footer />
    </div>
  );
};

export default Index;
