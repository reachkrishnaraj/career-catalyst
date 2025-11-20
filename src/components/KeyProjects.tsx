import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Award } from "lucide-react";

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string[];
  technologies: string[];
}

const KeyProjects = () => {
  const projects: Project[] = [
    {
      title: "HIPAA-Compliant Healthcare Platform",
      company: "TBD Health",
      description: "Built complete healthcare technology stack from ground up including eCommerce, EMR system, patient portal, and automated workflows.",
      impact: [
        "Served thousands of patients with 99.9% uptime",
        "Achieved full HIPAA compliance within 6 months",
        "Reduced operational costs by 40% through automation",
        "Improved booking conversion by 35% through funnel optimization"
      ],
      technologies: ["ReactJS", "NextJS", "AWS", "Saleor", "DynamoDB", "Spring Boot", "OAuth2.0"]
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
      technologies: ["Java", "Cassandra", "Spring Boot", "Netflix OSS", "AWS", "Big Data"]
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
      technologies: ["Java", "Spring Boot", "AWS", "Machine Learning", "Datadog"]
    },
    {
      title: "Payment Gateway Modernization",
      company: "Confidential Client",
      description: "Architected modernization strategy for legacy payment platform serving Canadian market.",
      impact: [
        "Improved system scalability by 3x",
        "Reduced payment processing latency by 40%",
        "Enhanced compliance and security posture",
        "Enabled support for modern payment methods"
      ],
      technologies: ["Architecture", "Cloud Migration", "Microservices", "API Design"]
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
      technologies: ["Java", "Spring Boot", "Apache Solr", "MySQL", "AWS"]
    },
    {
      title: "Walmart eCommerce Fulfillment Platform",
      company: "Walmart Labs",
      description: "Built scalable fulfillment system integrating inventory, logistics, and customer delivery.",
      impact: [
        "Handled millions of orders during peak seasons",
        "Improved fulfillment accuracy by 30%",
        "Reduced delivery time through optimized routing",
        "Integrated with 1000+ store locations"
      ],
      technologies: ["Java", "Spring", "MySQL", "Microservices", "REST APIs"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12 bg-secondary/30">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Lightbulb className="h-8 w-8 text-primary" />
        Key Projects & Accomplishments
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{project.company}</p>
              </div>
            </div>
            
            <p className="text-foreground mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                Impact & Results
              </h4>
              <ul className="space-y-1">
                {project.impact.map((item, impactIdx) => (
                  <li key={impactIdx} className="flex items-start gap-2 text-sm">
                    <span className="text-success font-bold mt-0.5">✓</span>
                    <span>{item}</span>
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
        ))}
      </div>
    </section>
  );
};

export default KeyProjects;
