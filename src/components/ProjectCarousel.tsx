import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, TrendingUp } from "lucide-react";

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string[];
  technologies: string[];
  architectureImage?: string;
}

const ProjectCarousel = () => {
  const projects: Project[] = [
    {
      title: "HIPAA-Compliant Healthcare Platform",
      company: "TBD Health",
      description: "Built complete healthcare technology stack from ground up including eCommerce, EMR system, patient portal, and automated workflows.",
      impact: [
        "Served thousands of patients with 99.9% uptime",
        "Achieved full HIPAA compliance within 6 months",
        "Reduced operational costs by 40% through automation",
        "Improved booking conversion by 35%"
      ],
      technologies: ["ReactJS", "NextJS", "AWS", "Saleor", "DynamoDB", "Spring Boot"],
      architectureImage: "/placeholder-architecture.jpg"
    },
    {
      title: "Netflix Payment Reconciliation System",
      company: "Netflix",
      description: "Designed and built the single source of truth for payment reconciliation serving internal reporting and analytics for 100M+ global subscribers.",
      impact: [
        "Processed millions of transactions daily with 99.99% accuracy",
        "Reduced reconciliation time from days to hours",
        "Enabled real-time payment analytics and reporting",
        "Improved payment routing resiliency by 25%"
      ],
      technologies: ["Java", "Cassandra", "Spring Boot", "Netflix OSS", "AWS"],
      architectureImage: "/placeholder-architecture.jpg"
    },
    {
      title: "Account Takeover Prevention System",
      company: "Turo",
      description: "Led development of comprehensive ATO prevention platform protecting user accounts and platform integrity.",
      impact: [
        "Reduced fraudulent activities by 60%",
        "Protected millions in potential losses",
        "Improved user trust and platform security",
        "Enhanced detection accuracy using ML models"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Machine Learning", "Datadog"],
      architectureImage: "/placeholder-architecture.jpg"
    },
    {
      title: "Payment Gateway Modernization",
      company: "Confidential Payment Gateway",
      description: "Architected modernization strategy for legacy payment platform serving Canadian market.",
      impact: [
        "Improved system scalability by 3x",
        "Reduced payment processing latency by 40%",
        "Enhanced compliance and security posture",
        "Enabled support for modern payment methods"
      ],
      technologies: ["Architecture", "Cloud Migration", "Microservices", "API Design"],
      architectureImage: "/placeholder-architecture.jpg"
    },
    {
      title: "Dynamic Pricing & Fee Engine",
      company: "Turo",
      description: "Designed and implemented flexible business rules engine for real-time pricing computation.",
      impact: [
        "Enabled A/B testing of pricing strategies",
        "Improved pricing accuracy and revenue optimization",
        "Reduced pricing errors to near zero",
        "Supported complex fee structures across markets"
      ],
      technologies: ["Java", "Spring Boot", "Apache Solr", "MySQL", "AWS"],
      architectureImage: "/placeholder-architecture.jpg"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12 bg-secondary/30">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Award className="h-8 w-8 text-primary" />
        Featured Projects & Architecture
      </h2>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {projects.map((project, idx) => (
            <CarouselItem key={idx}>
              <Card className="p-8 glass-card hover:glow transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{project.company}</p>
                  </div>
                </div>
                
                <p className="text-foreground mb-4 text-lg">{project.description}</p>
                
                {/* Placeholder for architecture image */}
                <div className="bg-muted/30 rounded-lg h-64 mb-6 flex items-center justify-center border-2 border-dashed border-primary/20">
                  <div className="text-center">
                    <p className="text-muted-foreground font-semibold">Architecture Diagram</p>
                    <p className="text-sm text-muted-foreground mt-2">Image placeholder - Add your architecture diagram here</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-success" />
                    Impact & Results
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.impact.map((item, impactIdx) => (
                      <li key={impactIdx} className="flex items-start gap-2">
                        <span className="text-success font-bold mt-0.5">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <p className="text-center text-muted-foreground mt-6 text-sm">
        💡 Tip: Use arrow keys or navigation buttons to explore different projects
      </p>
    </section>
  );
};

export default ProjectCarousel;
