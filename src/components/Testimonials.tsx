import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Krishna's technical depth and leadership were instrumental in modernizing our payment platform. His architectural decisions significantly improved our scalability and reliability.",
      author: "Engineering Director",
      role: "Director of Engineering",
      company: "Payment Gateway Company"
    },
    {
      quote: "As CTO of TBD Health, Krishna built our entire technology stack with remarkable efficiency. His ability to deliver HIPAA-compliant systems on a startup budget while maintaining high quality was exceptional.",
      author: "TBD Health Stakeholder",
      role: "Co-founder & CEO",
      company: "TBD Health"
    },
    {
      quote: "Krishna's work on the payment reconciliation system at Netflix set new standards for accuracy and reliability. His attention to detail and system thinking were outstanding.",
      author: "Netflix Colleague",
      role: "Engineering Manager",
      company: "Netflix"
    },
    {
      quote: "Working with Krishna at Turo, I was impressed by his ability to tackle complex problems like ATO prevention while mentoring junior engineers. He's a true full-stack leader.",
      author: "Turo Team Member",
      role: "Senior Engineer",
      company: "Turo"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12 bg-secondary/30">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Quote className="h-8 w-8 text-primary" />
        Testimonials & Recommendations
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <Card key={idx} className="p-6 relative">
            <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
            <p className="text-foreground italic mb-4 relative z-10">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-bold text-primary">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-sm font-semibold">{testimonial.company}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8 p-6 bg-accent/10 border-accent/30">
        <p className="text-center text-foreground">
          <span className="font-bold">Note:</span> Additional recommendations and detailed references available upon request. 
          Connect on <a href="https://linkedin.com/in/krishnaraj" className="text-primary font-semibold underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> for verified endorsements.
        </p>
      </Card>
    </section>
  );
};

export default Testimonials;
