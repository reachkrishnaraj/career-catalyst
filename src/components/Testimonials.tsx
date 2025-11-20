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

  return (
    <section className="container mx-auto px-6 py-12 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
        <Quote className="h-8 w-8 text-primary" />
        Peer Testimonials & Recommendations
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        What colleagues say about working with Krishna
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <Card key={idx} className="p-6 relative glass-card hover:glow transition-all hover:-translate-y-1">
            <Quote className="h-12 w-12 text-primary/20 absolute top-4 right-4" />
            <p className="text-foreground italic mb-4 relative z-10 text-base leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-border pt-4 mt-4">
              <p className="font-bold text-primary text-lg">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-sm font-semibold text-accent">{testimonial.company}</p>
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
