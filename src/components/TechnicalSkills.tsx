import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
import javaTechIcon from "@/assets/tech_icons/Java.png?url";
import javascriptTechIcon from "@/assets/tech_icons/JavaScript.png?url";
import typescriptTechIcon from "@/assets/tech_icons/TypeScript.png?url";
import reactTechIcon from "@/assets/tech_icons/React.png?url";
import nextjsTechIcon from "@/assets/tech_icons/Next.js.png?url";
import dockerTechIcon from "@/assets/tech_icons/Docker.png?url";
import kubernetesTechIcon from "@/assets/tech_icons/kubernetes.svg";
import springTechIcon from "@/assets/tech_icons/Spring.png?url";
import mysqlTechIcon from "@/assets/tech_icons/MySQL.png?url";
import postgresTechIcon from "@/assets/tech_icons/PostgresSQL.png?url";
import mongoTechIcon from "@/assets/tech_icons/MongoDB.png?url";
import redisTechIcon from "@/assets/tech_icons/Redis.png?url";
import graphqlTechIcon from "@/assets/tech_icons/GraphQL.png?url";
import kafkaTechIcon from "@/assets/tech_icons/Apache Kafka.png?url";
import oauthTechIcon from "@/assets/tech_icons/oauth.svg";
import awsCoreIcon from "@/assets/tech_icons/aws.svg";
import apiGatewayIcon from "@/assets/aws_icons/API Gateway.png?url";
import amplifyServiceIcon from "@/assets/aws_icons/Amplify.png?url";
import cloudWatchIcon from "@/assets/aws_icons/CloudWatch.png?url";
import cognitoServiceIcon from "@/assets/aws_icons/Cognito.png?url";
import comprehendServiceIcon from "@/assets/aws_icons/Comprehend.png?url";
import dynamoDbServiceIcon from "@/assets/aws_icons/DynamoDB.png?url";
import ec2ServiceIcon from "@/assets/aws_icons/EC2.png?url";
import eksServiceIcon from "@/assets/aws_icons/EKS Cloud.png?url";
import eventBridgeServiceIcon from "@/assets/aws_icons/EventBridge.png?url";
import fargateServiceIcon from "@/assets/aws_icons/Fargate.png?url";
import glueServiceIcon from "@/assets/aws_icons/Glue.png?url";
import healthLakeServiceIcon from "@/assets/aws_icons/HealthLake.png?url";
import kmsServiceIcon from "@/assets/aws_icons/Key Management Service.png?url";
import kinesisServiceIcon from "@/assets/aws_icons/Kinesis.png?url";
import memoryDbServiceIcon from "@/assets/aws_icons/MemoryDB for Redis.png?url";
import networkFirewallServiceIcon from "@/assets/aws_icons/Network Firewall.png?url";
import quickSightServiceIcon from "@/assets/aws_icons/QuickSight.png?url";
import rdsServiceIcon from "@/assets/aws_icons/RDS.png?url";
import secretsManagerServiceIcon from "@/assets/aws_icons/Secrets Manager.png?url";
import s3ServiceIcon from "@/assets/aws_icons/Simple Storage Service.png?url";
import snsServiceIcon from "@/assets/aws_icons/Simple Notification Service.png?url";
import sqsServiceIcon from "@/assets/aws_icons/Simple Queue Service.png?url";

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
    { name: "Lambda (via Fargate)", icon: fargateServiceIcon },
    { name: "RDS", icon: rdsServiceIcon },
    { name: "SNS", icon: snsServiceIcon },
    { name: "Kinesis", icon: kinesisServiceIcon },
    { name: "Amplify", icon: amplifyServiceIcon },
    { name: "S3", icon: s3ServiceIcon },
    { name: "DynamoDB", icon: dynamoDbServiceIcon },
    { name: "SQS", icon: sqsServiceIcon },
    { name: "CloudWatch", icon: cloudWatchIcon },
    { name: "API Gateway", icon: apiGatewayIcon },
    { name: "Cognito", icon: cognitoServiceIcon },
    { name: "Comprehend", icon: comprehendServiceIcon },
    { name: "EKS", icon: eksServiceIcon },
    { name: "EventBridge", icon: eventBridgeServiceIcon },
    { name: "Glue", icon: glueServiceIcon },
    { name: "HealthLake", icon: healthLakeServiceIcon },
    { name: "KMS", icon: kmsServiceIcon },
    { name: "MemoryDB for Redis", icon: memoryDbServiceIcon },
    { name: "Network Firewall", icon: networkFirewallServiceIcon },
    { name: "QuickSight", icon: quickSightServiceIcon },
    { name: "Secrets Manager", icon: secretsManagerServiceIcon },
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

  const chunkedTechStack = chunkArray(techStackIcons, 2);
  const chunkedAwsServices = chunkArray(awsServices, 2);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-6 glass-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge key={skillIdx} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Core Technology Stack</h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true })]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {chunkedTechStack.map((chunk, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="flex flex-col gap-3">
                    {chunk.map((tech, techIdx) => (
                       <Card key={techIdx} className="p-4 glass-card flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className="max-h-12 max-w-12 object-contain group-hover:drop-shadow-lg"
                          />
                        </div>
                        <span className="font-semibold text-sm">{tech.name}</span>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* AWS Services Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">AWS Services Expertise</h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {chunkedAwsServices.map((chunk, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="flex flex-col gap-3">
                    {chunk.map((service, serviceIdx) => (
                       <Card key={serviceIdx} className="p-4 glass-card flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <img 
                            src={service.icon} 
                            alt={service.name}
                            className="max-h-12 max-w-12 object-contain group-hover:drop-shadow-lg"
                          />
                        </div>
                        <span className="font-semibold text-sm">{service.name}</span>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Domain Expertise */}
        <div className="mt-16">
          <Card className="p-8 glass-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" />
              Domain Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {domainExpertise.map((domain, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="font-medium">{domain}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
