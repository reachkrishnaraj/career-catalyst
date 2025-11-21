import { useState } from "react";
import { Menu, X, Home, Award, Code, Briefcase, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: <Home className="h-4 w-4" />, label: "Home", href: "#summary" },
    { icon: <Award className="h-4 w-4" />, label: "Skills", href: "#skills" },
    { icon: <Code className="h-4 w-4" />, label: "Projects", href: "#projects" },
    { icon: <Briefcase className="h-4 w-4" />, label: "Experience", href: "#experience" },
    { icon: <User className="h-4 w-4" />, label: "About", href: "#personal" },
    { icon: <MessageSquare className="h-4 w-4" />, label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998]">
      {/* Quick Links Menu */}
      {isOpen && (
        <div className="mb-4 bg-background border-2 border-primary/30 rounded-2xl shadow-2xl p-3 animate-scale-in">
          <div className="flex gap-2">
            {links.map((link, idx) => (
              <Button
                key={idx}
                onClick={() => scrollToSection(link.href)}
                variant="ghost"
                size="sm"
                className="flex flex-col items-center gap-1 h-auto py-2 hover:bg-primary/10"
                title={link.label}
              >
                {link.icon}
                <span className="text-xs">{link.label}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full shadow-lg hover:scale-110 transition-all"
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default QuickLinks;
