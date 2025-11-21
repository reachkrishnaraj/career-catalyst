import { Mail, Phone, Linkedin, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Krishna Raj</h3>
            <p className="text-muted-foreground mb-4">
              Architect | Principal Engineer | Engineering Lead
            </p>
            <p className="text-sm text-muted-foreground">
              Building scalable systems and leading high-performance teams for 19+ years.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Contact</h4>
            <div className="space-y-2">
              <a href="mailto:reach.krishnaraj@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                reach.krishnaraj@gmail.com
              </a>
              <a href="tel:+14083486083" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +1 (408) 348-6083
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Connect & Learn More</h4>
            <div className="space-y-2">
              <a href="https://www.linkedin.com/in/krajs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
              <a href="https://medium.com/@reach.krishnaraj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <FileText className="h-4 w-4" />
                Tech Blog
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Krishna Raj. All rights reserved. | Available for consulting and full-time opportunities.
          </p>
          
          <Button variant="default" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF Resume
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
