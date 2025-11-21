import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "You have demonstrated a very complete and well thought out design. You have also shared appropriate knowledge with the team. Continue handling future projects the way you have handled ProcessFailOver.",
      author: "Manager",
      role: "Manager",
      company: "Netflix Payments Engineering"
    },
    {
      quote: "You are the hardest worker in the team and you care deeply about making things better for our team operationally. You also take great ownership of your work and is quick to jump on any issues related to your changes.",
      author: "Senior Engineer",
      role: "Senior Engineer",
      company: "Netflix Payments Engineering"
    },
    {
      quote: "Very impressed with the thoroughness of processor failover feature you developed recently. I think you are generally very thorough in anything you take and are eager to take up interesting problems.",
      author: "Engineer",
      role: "Engineer",
      company: "Netflix Payments Engineering"
    },
    {
      quote: "You continue to demonstrate enthusiasm and willingness to take things on for the team, often pick up things that are broken and fix them. You worked on the Settlement project and the fact that I don't hear much about it after it went live means it is working quite well which means you did a really good job.",
      author: "Engineering Manager",
      role: "Engineering Manager",
      company: "Netflix Payments Engineering"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="container mx-auto px-6 py-12 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
        <Quote className="h-8 w-8 text-primary" />
        Peer Testimonials & Recommendations
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        What colleagues say about working with Krishna
      </p>
      
      {/* Featured Testimonial Carousel */}
      <Card className="p-8 mb-8 relative glass-card min-h-[250px]">
        <Quote className="h-16 w-16 text-primary/20 absolute top-4 right-4" />
        <div className="relative z-10 animate-fade-in" key={currentIndex}>
          <p className="text-foreground italic mb-6 text-lg leading-relaxed">
            "{currentTestimonial.quote}"
          </p>
          <div className="border-t border-border pt-4">
            <p className="font-bold text-primary text-xl">{currentTestimonial.author}</p>
            <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
            <p className="text-sm font-semibold text-primary">{currentTestimonial.company}</p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button onClick={goToPrevious} variant="outline" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoRotating(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
          
          <Button onClick={goToNext} variant="outline" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </Card>
      
      <Card className="mt-8 p-6 bg-accent/10 border-accent/30">
        <p className="text-center text-foreground">
          <span className="font-bold">Note:</span> Additional recommendations and detailed references available upon request. 
          Connect on <a href="https://www.linkedin.com/in/krajs/" className="text-primary font-semibold underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> for verified endorsements.
        </p>
      </Card>
    </section>
  );
};

export default Testimonials;
