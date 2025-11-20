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
import turoAtoProject from "@/assets/work_artifact/turo/turo_ato_project.png";
import turoRuleEngine from "@/assets/work_artifact/turo/turo_rule_engine_project.png";
import turoSearchImprovement from "@/assets/work_artifact/turo/turo_search_improvement_project.png";
import turoYoungDriver from "@/assets/work_artifact/turo/turo_young_driver_project.png";

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
      description: "Architected and led development of a comprehensive ATO prevention platform using advanced ML models and real-time risk scoring to protect user accounts and platform integrity across millions of transactions.",
      impact: [
        "Reduced fraudulent account takeovers by 60% in first 6 months",
        "Protected millions in potential financial losses",
        "Achieved 99.5% detection accuracy with ML-based risk scoring",
        "Improved user trust metrics by 45% through enhanced security"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Machine Learning", "Redis", "Datadog"],
      architectureImage: turoAtoProject
    },
    {
      title: "Young Driver Risk Assessment Platform",
      company: "Turo",
      description: "Designed and implemented ML-powered risk assessment system for young drivers, enabling data-driven decisions on driver eligibility and insurance pricing while maintaining platform safety.",
      impact: [
        "Enabled safe onboarding of 18-21 age segment worth $50M+ annually",
        "Reduced young driver incident rate by 35% through intelligent screening",
        "Improved risk prediction accuracy to 92% using ensemble ML models",
        "Increased platform revenue by 12% through new market segment access"
      ],
      technologies: ["Java", "Spring Boot", "Python", "Scikit-learn", "AWS SageMaker", "PostgreSQL"],
      architectureImage: turoYoungDriver
    },
    {
      title: "Search Ranking Optimization Engine",
      company: "Turo",
      description: "Revolutionized search experience by implementing ML-based ranking system that optimizes for both user preferences and business metrics, significantly improving booking conversion rates.",
      impact: [
        "Increased search-to-booking conversion rate by 28%",
        "Improved user engagement time by 40% through personalized results",
        "Enhanced revenue per search by 22% via optimized ranking signals",
        "Reduced search abandonment rate from 45% to 18%"
      ],
      technologies: ["Java", "Apache Solr", "Elasticsearch", "Python", "TensorFlow", "A/B Testing"],
      architectureImage: turoSearchImprovement
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
      description: "Architected and built a sophisticated business rules engine enabling real-time dynamic pricing computation across multiple markets. System supports complex fee structures, location-based pricing, and A/B testing for optimization strategies.",
      impact: [
        "Enabled real-time A/B testing of pricing strategies across 50+ markets",
        "Improved pricing accuracy and revenue optimization by 18%",
        "Reduced pricing calculation errors from 2.3% to near-zero (0.02%)",
        "Supported 200+ configurable fee types across different geographic markets"
      ],
      technologies: ["Java", "Spring Boot", "Apache Solr", "MySQL", "Redis", "AWS"],
      architectureImage: turoRuleEngine
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-12 bg-secondary/30">
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
                
                {/* Architecture/Project Image */}
                {project.architectureImage && (
                  <div className="rounded-lg overflow-hidden mb-6 border border-border/50">
                    <img 
                      src={project.architectureImage} 
                      alt={`${project.title} architecture`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
                
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
