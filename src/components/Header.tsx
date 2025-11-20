import { Mail, Phone, Linkedin, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnchorLink from "@/components/AnchorLink";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
              Krishna Raj
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-2">
              Architect | Principal Engineer | Engineering Lead
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Austin, Texas</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:reach.krishnaraj@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+14083486083">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/krishnaraj" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://medium.com/@krishnaraj" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Tech Blog
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Netflix Alumni
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            19+ Years Experience
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          US Citizen
          </span>
        </div>
      </div>

      {/* Anchor Navigation */}
      <nav className="border-t border-border mt-6 pt-4">
        <div className="flex flex-wrap justify-center gap-4">
          <AnchorLink href="#summary">Summary</AnchorLink>
          <AnchorLink href="#skills">Skills</AnchorLink>
          <AnchorLink href="#expertise">Expertise</AnchorLink>
          <AnchorLink href="#experience">Experience</AnchorLink>
          <AnchorLink href="#projects">Projects</AnchorLink>
          <AnchorLink href="#leadership">Leadership</AnchorLink>
          <AnchorLink href="#education">Education</AnchorLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
