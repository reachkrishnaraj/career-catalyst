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
      icon: <Code2 className="h-5 w-5 stroke-[1.5]" />,
      skills: ["Java", "JavaScript", "Python", "TypeScript"]
    },
    {
      title: "Backend Frameworks",
      icon: <Layers className="h-5 w-5 stroke-[1.5]" />,
      skills: ["Spring Boot", "Spring Cloud", "Spring Data", "Node.js", "Hibernate", "MyBatis"]
    },
    {
      title: "Frontend",
      icon: <Zap className="h-5 w-5 stroke-[1.5]" />,
      skills: ["ReactJS", "NextJS", "Bootstrap", "Tailwind CSS", "Redux"]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 stroke-[1.5]" />,
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "Cassandra", "MongoDB", "Oracle"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5 stroke-[1.5]" />,
      skills: ["Kubernetes", "Docker", "Terraform", "CI/CD Pipelines"]
    },
    {
      title: "Big Data & Analytics",
      icon: <Network className="h-5 w-5 stroke-[1.5]" />,
      skills: ["Spark", "Hive", "Presto", "Kafka", "Kinesis", "Tableau", "AWS QuickSight", "Amplitude"]
    },
    {
      title: "Microservices & APIs",
      icon: <Settings className="h-5 w-5 stroke-[1.5]" />,
      skills: ["gRPC", "REST", "GraphQL", "Swagger/OpenAPI", "Apache Camel", "Netflix OSS (Hystrix, Eureka, Zuul)"]
    },
    {
      title: "Testing & Quality",
      icon: <Shield className="h-5 w-5 stroke-[1.5]" />,
      skills: ["JUnit", "Mockito", "Selenium", "TestNG", "Cucumber", "Appium", "PowerMock"]
    },
    {
      title: "CI/CD & Tools",
      icon: <Terminal className="h-5 w-5 stroke-[1.5]" />,
      skills: ["Gradle", "CircleCI", "Jenkins", "GitHub Actions", "Spinnaker", "TeamCity", "Harness"]
    },
    {
      title: "Monitoring & Observability",
      icon: <Zap className="h-5 w-5 stroke-[1.5]" />,
      skills: ["New Relic", "Datadog", "Sumologic", "Sentry", "Google Analytics", "CloudWatch"]
    },
    {
      title: "Search & Caching",
      icon: <Network className="h-5 w-5 stroke-[1.5]" />,
      skills: ["Elasticsearch", "Apache Solr", "Redis", "Memcached"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-5 w-5 stroke-[1.5]" />,
      skills: ["OAuth2.0", "JWT", "SSL/TLS", "RSA", "HIPAA Compliance", "PCI Compliance", "Vanta"]
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
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-8 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-foreground/60">
                {category.icon}
                <h3 className="text-base font-semibold">{category.title}</h3>
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

        {/* Technology Stack Section */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-center mb-12">Core Technology Stack</h3>
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
                       <Card key={techIdx} className="p-4 flex items-center gap-4 hover:shadow-sm transition-all duration-300 group">
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className="max-h-6 max-w-6 object-contain opacity-70"
                          />
                        </div>
                        <span className="font-medium text-sm">{tech.name}</span>
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
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-center mb-12">AWS Services Expertise</h3>
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
                       <Card key={serviceIdx} className="p-4 flex items-center gap-4 hover:shadow-sm transition-all duration-300 group">
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <img 
                            src={service.icon} 
                            alt={service.name}
                            className="max-h-6 max-w-6 object-contain opacity-70"
                          />
                        </div>
                        <span className="font-medium text-sm">{service.name}</span>
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
        <div>
          <Card className="p-8 border">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <Layers className="h-5 w-5 text-foreground/60 stroke-[1.5]" />
              Domain Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {domainExpertise.map((domain, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/40"></div>
                  <span className="font-normal text-sm">{domain}</span>
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
