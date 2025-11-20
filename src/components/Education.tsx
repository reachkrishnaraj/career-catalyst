import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary" />
        Education & Certifications
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-l-4 border-l-primary">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-bold">Bachelor of Engineering</h3>
              <p className="text-primary font-semibold">Electrical and Electronics</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-2">University of Madras</p>
          <p className="text-sm text-muted-foreground">Graduated: 2003</p>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-accent">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-accent" />
            <div>
              <h3 className="text-xl font-bold">Certifications & Training</h3>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>AWS Certified Solutions Architect</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Certified Spring Professional</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>HIPAA Compliance Training</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>PCI DSS Compliance</span>
            </li>
          </ul>
        </Card>
      </div>
      
      <Card className="mt-6 p-6 bg-secondary">
        <div className="flex items-start gap-3">
          <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold mb-2">Continuous Learning</h3>
            <p className="text-foreground">
              Actively engaged in continuous professional development through technical blogs, conferences, 
              and hands-on experimentation with emerging technologies. Regular contributor to tech community 
              through <a href="https://medium.com/@krishnaraj" className="text-primary underline font-semibold" target="_blank" rel="noopener noreferrer">Medium tech blog</a>, 
              sharing insights on software architecture, payments, and cloud technologies.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Education;
