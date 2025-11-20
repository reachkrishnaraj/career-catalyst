import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cloud, 
  Layers, 
  Terminal, 
  Network,
  Shield,
  Settings,
  Zap
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const TechnicalSkills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "Python", "TypeScript"],
      color: "text-blue-600"
    },
    {
      title: "Backend Frameworks",
      icon: <Layers className="h-6 w-6" />,
      skills: ["Spring Boot", "Spring Cloud", "Spring Data", "Node.js", "Hibernate", "MyBatis"],
      color: "text-green-600"
    },
    {
      title: "Frontend",
      icon: <Zap className="h-6 w-6" />,
      skills: ["ReactJS", "NextJS", "Bootstrap", "Tailwind CSS", "Redux"],
      color: "text-cyan-600"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "Cassandra", "MongoDB", "Oracle"],
      color: "text-purple-600"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS (EC2, Lambda, S3, RDS, SQS, SNS, CloudFront)", "Kubernetes", "Docker", "Terraform"],
      color: "text-orange-600"
    },
    {
      title: "Big Data & Analytics",
      icon: <Network className="h-6 w-6" />,
      skills: ["Spark", "Hive", "Presto", "Kafka", "Kinesis", "Tableau", "AWS QuickSight", "Amplitude"],
      color: "text-amber-600"
    },
    {
      title: "Microservices & APIs",
      icon: <Settings className="h-6 w-6" />,
      skills: ["gRPC", "REST", "GraphQL", "Swagger/OpenAPI", "Apache Camel", "Netflix OSS (Hystrix, Eureka, Zuul)"],
      color: "text-indigo-600"
    },
    {
      title: "Testing & Quality",
      icon: <Shield className="h-6 w-6" />,
      skills: ["JUnit", "Mockito", "Selenium", "TestNG", "Cucumber", "Appium", "PowerMock"],
      color: "text-red-600"
    },
    {
      title: "CI/CD & Tools",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Gradle", "CircleCI", "Jenkins", "GitHub Actions", "Spinnaker", "TeamCity", "Harness"],
      color: "text-teal-600"
    },
    {
      title: "Monitoring & Observability",
      icon: <Zap className="h-6 w-6" />,
      skills: ["New Relic", "Datadog", "Sumologic", "Sentry", "Google Analytics", "CloudWatch"],
      color: "text-pink-600"
    },
    {
      title: "Search & Caching",
      icon: <Network className="h-6 w-6" />,
      skills: ["Elasticsearch", "Apache Solr", "Redis", "Memcached"],
      color: "text-lime-600"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      skills: ["OAuth2.0", "JWT", "SSL/TLS", "RSA", "HIPAA Compliance", "PCI Compliance", "Vanta"],
      color: "text-rose-600"
    }
  ];

  const domainExpertise = [
    "Payment Processing & Gateways",
    "Billing & Subscription Systems",
    "Healthcare & HIPAA Compliance",
    "Marketplace Platforms",
    "eCommerce & Retail",
    "Fintech & Financial Services",
    "Cloud Architecture & Migration",
    "Microservices Design Patterns"
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Code2 className="h-8 w-8 text-primary" />
        Technical Skills & Expertise
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className={category.color}>{category.icon}</div>
              <h3 className="font-bold text-lg">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <Badge key={skillIdx} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="p-8 bg-primary/5 border-primary/20">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Layers className="h-6 w-6 text-primary" />
          Domain Expertise
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {domainExpertise.map((domain, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
              <span className="font-medium">{domain}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default TechnicalSkills;
