import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  technologies: string[];
  highlight?: boolean;
}

const ExperienceItem = ({ 
  company, 
  role, 
  period, 
  location, 
  achievements, 
  technologies,
  highlight 
}: ExperienceItemProps) => {
  return (
    <Card className={`p-6 ${highlight ? 'border-l-4 border-l-accent shadow-md' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold">{company}</h3>
          </div>
          <p className="text-lg font-semibold text-primary mb-2">{role}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {period}
            </span>
            {location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {location}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 mb-4">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-accent font-bold mt-1">•</span>
            <span className="text-foreground">{achievement}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      company: "Confidential Payment Gateway (Canadian)",
      role: "Consultant Architect",
      period: "July 2024 - Sep 2024",
      achievements: [
        "Led tech platform modernization initiatives for major payment gateway",
        "Designed scalable architecture solutions improving system reliability and compliance",
        "Provided strategic technical guidance for platform evolution"
      ],
      technologies: ["Architecture", "Payments", "Modernization", "Consulting"],
      highlight: true
    },
    {
      company: "TBD Health",
      role: "Architect / CTO",
      period: "April 2022 - July 2024",
      location: "Austin, TX",
      achievements: [
        "Built entire tech stack and engineering team from ground up on frugal seed funding budget",
        "Architected and implemented HIPAA-compliant healthcare platform serving thousands of patients",
        "Migrated from Shopify to self-hosted Saleor eCommerce platform for compliance and cost optimization",
        "Designed and developed custom EMR system with ReactJS, Node, AWS Amplify, and OAuth2.0",
        "Integrated multiple payment gateways (ApplePay, PayPal, Authorize.Net, Square) and lab providers",
        "Implemented passwordless authentication using Magic Link (Cognito, Lambda, DynamoDB)",
        "Built automated patient workflows: identity verification (AWS Rekognition), test result release, booking system",
        "Delivered SEO optimization, analytics integration (Amplitude, Google Analytics), and marketing automation (Klaviyo)",
        "Created innovative clinician transcribe solution using AWS Transcribe to optimize facility capacity"
      ],
      technologies: ["Java", "ReactJS", "NextJS", "AWS", "Spring Boot", "DynamoDB", "Saleor", "Cal.com", "HIPAA", "OAuth2.0", "Python"],
      highlight: true
    },
    {
      company: "Turo",
      role: "Staff Software Engineer / Architect",
      period: "Oct 2018 - March 2020",
      location: "San Francisco, CA",
      achievements: [
        "Led Account Takeover (ATO) prevention initiative protecting platform from fraudulent activities",
        "Architected and implemented payment optimization system improving transaction success rates",
        "Enhanced search performance using Apache Solr, significantly improving user experience",
        "Designed business rules engine for dynamic pricing and fee computation",
        "Built robust insurance and payments platform processing millions in transactions"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Apache Solr", "AWS", "Kubernetes", "Hibernate", "Kinesis", "Datadog"],
      highlight: true
    },
    {
      company: "Netflix",
      role: "Senior Software Engineer / Architect",
      period: "March 2016 - May 2018",
      location: "Los Gatos, CA",
      achievements: [
        "Built Payment Reconciliation System - single source of truth for global payment reporting",
        "Designed and implemented payment routing optimization for improved resiliency and success rates",
        "Architected high-throughput platform processing millions of global transactions daily",
        "Enhanced payment processing reliability and operational robustness for 100M+ subscribers",
        "Contributed to Netflix OSS ecosystem with production-grade microservices"
      ],
      technologies: ["Java", "Spring Boot", "Cassandra", "AWS", "Hystrix", "Eureka", "Zuul", "Archaius", "Netflix OSS"],
      highlight: true
    },
    {
      company: "Walmart eCommerce Labs",
      role: "Lead Engineer",
      period: "June 2013 - March 2016",
      location: "San Francisco, CA",
      achievements: [
        "Led development of critical eCommerce platform features serving millions of daily customers",
        "Architected scalable fulfillment system integrating with supply chain operations",
        "Optimized catalog management and search functionality for improved product discovery",
        "Mentored team of engineers in best practices for large-scale distributed systems"
      ],
      technologies: ["Java", "Spring", "MySQL", "Solr", "REST APIs", "Microservices"]
    },
    {
      company: "PayPal",
      role: "Software Engineer",
      period: "Aug 2006 - Nov 2011",
      location: "San Jose, CA",
      achievements: [
        "Developed core payment processing features handling billions in transaction volume",
        "Contributed to Service API automation and payments platform refactoring",
        "Built risk management and global payments services ensuring transaction security",
        "Established expertise in fintech architecture and payment systems",
        "Worked on critical compliance and regulatory requirements"
      ],
      technologies: ["Java", "Spring", "Oracle", "Web Services", "Security", "Payments"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12 bg-gradient-to-b from-background to-secondary/30">
      <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
        <Briefcase className="h-8 w-8 text-primary" />
        Professional Experience
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        19+ years of progressive experience across payments, healthcare, marketplace, and eCommerce domains
      </p>
      
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
