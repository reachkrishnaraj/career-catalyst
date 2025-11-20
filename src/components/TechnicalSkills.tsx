import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import javaTechIcon from "@/assets/tech_icons/Java.png";
import javascriptTechIcon from "@/assets/tech_icons/JavaScript.png";
import typescriptTechIcon from "@/assets/tech_icons/TypeScript.png";
import reactTechIcon from "@/assets/tech_icons/React.png";
import nextjsTechIcon from "@/assets/tech_icons/Next.js.png";
import dockerTechIcon from "@/assets/tech_icons/Docker.png";
import kubernetesTechIcon from "@/assets/tech_icons/kubernetes.svg";
import springTechIcon from "@/assets/tech_icons/Spring.png";
import mysqlTechIcon from "@/assets/tech_icons/MySQL.png";
import postgresTechIcon from "@/assets/tech_icons/PostgresSQL.png";
import mongoTechIcon from "@/assets/tech_icons/MongoDB.png";
import redisTechIcon from "@/assets/tech_icons/Redis.png";
import graphqlTechIcon from "@/assets/tech_icons/GraphQL.png";
import kafkaTechIcon from "@/assets/tech_icons/Apache Kafka.png";
import oauthTechIcon from "@/assets/tech_icons/oauth.svg";
import awsCoreIcon from "@/assets/tech_icons/aws.svg";
import apiGatewayIcon from "@/assets/aws_icons/API Gateway.png";
import amplifyServiceIcon from "@/assets/aws_icons/Amplify.png";
import cloudWatchIcon from "@/assets/aws_icons/CloudWatch.png";
import dynamoDbServiceIcon from "@/assets/aws_icons/DynamoDB.png";
import ec2ServiceIcon from "@/assets/aws_icons/EC2.png";
import kinesisServiceIcon from "@/assets/aws_icons/Kinesis.png";
import rdsServiceIcon from "@/assets/aws_icons/RDS.png";
import s3ServiceIcon from "@/assets/aws_icons/Simple Storage Service.png";
import snsServiceIcon from "@/assets/aws_icons/Simple Notification Service.png";
import sqsServiceIcon from "@/assets/aws_icons/Simple Queue Service.png";
import glueServiceIcon from "@/assets/aws_icons/Glue.png";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

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
      skills: ["Kubernetes", "Docker", "Terraform", "CI/CD Pipelines"],
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

  const techStackIcons = [
    { name: "Java", icon: javaTechIcon },
    { name: "JavaScript", icon: javascriptTechIcon },
    { name: "TypeScript", icon: typescriptTechIcon },
    { name: "React", icon: reactTechIcon },
    { name: "Next.js", icon: nextjsTechIcon },
    { name: "Spring", icon: springTechIcon },
    { name: "Docker", icon: dockerTechIcon },
    { name: "Kubernetes", icon: kubernetesTechIcon },
    { name: "MySQL", icon: mysqlTechIcon },
    { name: "PostgreSQL", icon: postgresTechIcon },
    { name: "MongoDB", icon: mongoTechIcon },
    { name: "Redis", icon: redisTechIcon },
    { name: "GraphQL", icon: graphqlTechIcon },
    { name: "Kafka", icon: kafkaTechIcon },
    { name: "OAuth2", icon: oauthTechIcon },
    { name: "AWS", icon: awsCoreIcon },
  ];

  const awsServices = [
    { name: "EC2", icon: ec2ServiceIcon },
    { name: "S3", icon: s3ServiceIcon },
    { name: "Lambda (via Fargate)", icon: glueServiceIcon },
    { name: "DynamoDB", icon: dynamoDbServiceIcon },
    { name: "RDS", icon: rdsServiceIcon },
    { name: "SQS", icon: sqsServiceIcon },
    { name: "SNS", icon: snsServiceIcon },
    { name: "CloudWatch", icon: cloudWatchIcon },
    { name: "Kinesis", icon: kinesisServiceIcon },
    { name: "API Gateway", icon: apiGatewayIcon },
    { name: "Amplify", icon: amplifyServiceIcon },
  ];

  const domainExpertise = [
    "Payment Processing & Gateways",
    "Billing & Subscription Systems",
    "Healthcare & HIPAA Compliance",
    "Marketplace Platforms",
    "eCommerce & Retail",
    "Fintech & Financial Services",
    "Cloud Architecture & Migration",
    "Microservices Design Patterns",
  ];

  const techIconPairs = chunkArray(techStackIcons, 2);
  const awsServicePairs = chunkArray(awsServices, 2);

  return (
    <section className="container mx-auto px-6 py-12 bg-secondary/20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
          <Code2 className="h-8 w-8 text-primary" />
          Technical Skills & Expertise
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Versatile expertise spanning Individual Contributor (IC) technical excellence and strategic leadership
        </p>
        
        {/* Tech Stack Icons Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {techIconPairs.map((pair, pairIndex) => (
                <CarouselItem
                  key={pairIndex}
                  className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8"
                >
                  <div className="flex flex-col gap-4">
                    {pair.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-4 glass-card rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-full h-full object-contain transition-transform group-hover:scale-110"
                            />
                          </div>
                          <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        {/* Full Stack Highlight */}
        <Card className="p-6 bg-gradient-to-r from-success/20 to-primary/20 border-success/30 mb-8 glow">
          <div className="flex items-center gap-3 mb-3">
            <Layers className="h-8 w-8 text-success" />
            <h3 className="text-2xl font-bold">Full-Stack Infrastructure Expert</h3>
          </div>
          <p className="text-lg mb-4">
            <strong>Built entire tech stacks from ground up</strong> - from infrastructure provisioning to application deployment
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-success font-bold text-xl">✓</span>
              <div>
                <p className="font-semibold">Infrastructure as Code</p>
                <p className="text-sm text-muted-foreground">Terraform, CloudFormation, Kubernetes configs</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success font-bold text-xl">✓</span>
              <div>
                <p className="font-semibold">End-to-End Configuration</p>
                <p className="text-sm text-muted-foreground">CI/CD pipelines, monitoring, alerting, logging</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success font-bold text-xl">✓</span>
              <div>
                <p className="font-semibold">Cloud Native Architecture</p>
                <p className="text-sm text-muted-foreground">Microservices, containers, serverless</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 glass-card">
            <div className="flex items-center gap-3 mb-4">
              <div className={category.color}>{category.icon}</div>
              <h3 className="font-bold text-lg">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <Badge key={skillIdx} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      {/* AWS Services Dedicated Section */}
      <Card className="p-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/20 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Cloud className="h-8 w-8 text-orange-600" />
          <h3 className="text-2xl font-bold">AWS Cloud Services</h3>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {awsServicePairs.map((pair, pairIndex) => (
              <CarouselItem
                key={pairIndex}
                className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8"
              >
                <div className="flex flex-col gap-4">
                  {pair.map((service) => (
                    <div
                      key={service.name}
                      className="p-4 glass-card rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border border-border/50 hover:border-orange-500/50"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 flex items-center justify-center bg-background/50 rounded-lg">
                          <img
                            src={service.icon}
                            alt={service.name}
                            className="w-9 h-9 object-contain transition-transform group-hover:scale-110"
                          />
                        </div>
                        <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                          {service.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </Card>

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
