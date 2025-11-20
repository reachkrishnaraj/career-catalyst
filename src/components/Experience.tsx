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
    <Card className={`p-6 glass-card ${highlight ? 'border-l-4 border-l-accent glow' : ''}`}>
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
      company: "TBD Health",
      role: "Chief Technology Officer (CTO) / Architect",
      period: "Apr 2022 - Jul 2024",
      location: "Austin, TX",
      achievements: [
        "Built Entire Tech Stack from Ground Up: Led complete technology transformation post-seed funding, building HIPAA-compliant platform serving thousands of patients. Managed engineering team, vendor relationships, and full-stack delivery on frugal budget",
        "Platform Migration: Architected and executed migration from Shopify to self-hosted HIPAA-compliant eCommerce platform using Saleor headless CMS, NextJS frontend, and Spring Boot backend",
        "EMR System: Developed in-house Electronic Medical Records system with ReactJS, integrated Photon Health e-prescription system in <2 weeks",
        "AWS Infrastructure: Implemented complete cloud infrastructure including 3-tier architecture, load balancing, ECS, RDS, DynamoDB, SQS with HIPAA compliance and security standards",
        "Payment Integration: Integrated multiple payment gateways (ApplePay, PayPal, Authorize.net, Square, CashApp, GooglePay) and subscription management for recurring billing",
        "Automation & AI: Built contactless check-in flow, automated identity verification using AWS Rekognition, clinician transcription using AWS Transcribe, and automated test result release pipelines",
        "Marketing & Analytics: Implemented SEO optimization, Amplitude analytics, abandoned cart recovery, email automation (Mailgun, AWS Pinpoint, Klaviyo), improving conversion rates by 40%",
        "Team Leadership: Built and managed engineering team, conducted vendor selection, managed deliverables and sprint planning"
      ],
      technologies: ["Java", "Spring Boot", "React", "NextJS", "AWS", "DynamoDB", "Saleor", "Cal.com", "HIPAA", "Python"],
      highlight: true
    },
    {
      company: "Paysafe (via Altimetrik)",
      role: "Consultant Architect",
      period: "Jul 2024 - Sep 2024",
      achievements: [
        "Led platform modernization for major Canadian payment gateway, designing scalable solutions to improve reliability, compliance, and transaction processing capabilities",
        "Architectural Leadership: Designed and implemented modernization strategy for legacy payment processing systems",
        "Scalability Solutions: Improved platform reliability and scalability for high-volume transaction processing",
        "Compliance: Ensured PCI-DSS compliance and security standards across payment infrastructure"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Microservices", "Payment Gateway", "PCI-DSS"],
      highlight: true
    },
    {
      company: "Turo",
      role: "Staff Software Engineer",
      period: "Oct 2018 - Mar 2020",
      location: "San Francisco, CA",
      achievements: [
        "Protected Millions of Users & Expanded Revenue Streams: Led critical security and revenue expansion initiatives affecting millions of Turo customers and millions in incremental revenue",
        "Account Takeover Prevention: Designed and implemented comprehensive ATO prevention system with anomaly detection, 2FA, and account freezing capabilities, protecting millions of customers from fraud",
        "Revenue Expansion: Led initiative to expand rentals to 18-20 year old drivers, navigating complex legacy systems while balancing risk and time-to-market",
        "Search Performance: Improved Apache Solr vehicle search performance by 30%, implemented dynamic failover to secondary, enhanced stability during bot attacks",
        "Business Rules Engine: Architected Java Easy Rules-based engine for pricing logic (service fees, young driver fees, host rates), enabling data-driven configuration with zero-code deployments",
        "Technical Leadership: Mentored team on microservices patterns, refactored complex legacy code for maintainability and extensibility"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Apache Solr", "AWS", "Kubernetes", "Microservices"],
      highlight: true
    },
    {
      company: "Netflix",
      role: "Senior Software Engineer",
      period: "Mar 2016 - May 2018",
      location: "Los Gatos, CA",
      achievements: [
        "Built Systems Processing 150M+ Monthly Transactions: Architected and delivered mission-critical payment systems serving Netflix's global subscriber base, ensuring zero revenue leakage and maximum resilience",
        "Payment Reconciliation System: Built single source of truth for 150M+ monthly orders, ensuring every authorized transaction is settled, detecting duplicate charges, maintaining integrity between billing and payments platforms",
        "Dynamic Processor Failover: Architected intelligent routing logic with health monitoring and circuit breakers, achieving zero failures during processor outages for millions of daily transactions",
        "Big Data Pipeline: Created ETL workflows, Kibana dashboards, Tableau visualizations for financial reporting, month/quarter closing, and anomaly detection",
        "Production Excellence: Owned end-to-end delivery including sandbox testing, canary analysis, Hystrix tuning, production validation, and on-call support",
        "Global Scale: Processed payments across multiple processors (Paymentech, Adyen, WorldPay, Vantiv) and regions (EMEA, Asia, LATAM, North America)"
      ],
      technologies: ["Java", "Spring Cloud", "Cassandra", "MySQL", "Kafka", "AWS", "gRPC", "Big Data"],
      highlight: true
    },
    {
      company: "Walmart eCommerce Labs",
      role: "Lead Engineer",
      period: "Jun 2013 - Mar 2016",
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
        "Foundation in Payments & Fintech: Established deep expertise in payments architecture across multiple critical initiatives over 5+ years",
        "Service API Automation: Built comprehensive test automation frameworks for payment APIs",
        "Core Payments: Contributed to payments platform refactoring and migration initiatives",
        "Risk & Global Payments: Worked on fraud detection and international payment processing systems",
        "Became Subject Matter Expert (SME) in payments processing, transaction lifecycle, and PCI compliance"
      ],
      technologies: ["Java", "Payments", "Risk Management", "Testing", "PCI Compliance"]
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
