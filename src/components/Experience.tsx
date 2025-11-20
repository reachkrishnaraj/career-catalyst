import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import linkedinLogo from "@/assets/company_icons/InBug-White.png";
import paypalLogo from "@/assets/company_icons/PayPal-Logo-Black-RGB.png";
import altimetrikLogo from "@/assets/company_icons/altimetrik_logo.webp";
import netflixLogo from "@/assets/company_icons/Netflix_Logo_PMS.png";
import turoLogo from "@/assets/company_icons/logo-white.png";
import walmartLogo from "@/assets/company_icons/walmart_labs.svg";
import htcLogo from "@/assets/company_icons/htc_global_services.png";
import tbdHealthKit from "@/assets/work_artifact/tbd_health/tbd_health_kit.jpg";
import tbdHealthKit2 from "@/assets/work_artifact/tbd_health/tbd_health_kit2.webp";
import tbdClinicFront from "@/assets/work_artifact/tbd_health/tbd_las_vegas_clinic_front.jpg";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  technologies: string[];
  highlight?: boolean;
  companyLogo?: string;
}

const ExperienceItem = ({ 
  company, 
  role, 
  period, 
  location, 
  achievements, 
  technologies,
  highlight,
  companyLogo 
}: ExperienceItemProps) => {
  return (
    <Card className={`p-6 glass-card ${highlight ? 'border-l-4 border-l-accent glow' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {companyLogo ? (
              <img src={companyLogo} alt={`${company} logo`} className="h-8 w-auto object-contain" />
            ) : (
              <Building2 className="h-5 w-5 text-primary" />
            )}
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState<Set<number>>(new Set());
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    nodeRefs.current.forEach((node, index) => {
      if (node) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleNodes((prev) => new Set(prev).add(index));
                }, index * 100); // Stagger animation by 100ms per node
              }
            });
          },
          { threshold: 0.2 }
        );
        
        observer.observe(node);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const workArtifacts = [
    { src: tbdHealthKit, alt: "TBD Health Kit" },
    { src: tbdHealthKit2, alt: "TBD Health Kit 2" },
    { src: tbdClinicFront, alt: "TBD Las Vegas Clinic" }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
      highlight: true,
      companyLogo: linkedinLogo
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
      highlight: true,
      companyLogo: altimetrikLogo
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
      highlight: true,
      companyLogo: turoLogo
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
      highlight: true,
      companyLogo: netflixLogo
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
      technologies: ["Java", "Spring", "MySQL", "Solr", "REST APIs", "Microservices"],
      companyLogo: walmartLogo
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
      technologies: ["Java", "Payments", "Risk Management", "Testing", "PCI Compliance"],
      companyLogo: paypalLogo
    },
    {
      company: "Various Companies - Starting Software Engineer",
      role: "Software Engineer",
      period: "2003 - 2006",
      location: "India & USA",
      achievements: [
        "Started career as a Software Engineer at HCL Technologies and HTC Global Services",
        "Built foundation in software development, working on enterprise applications",
        "Developed expertise in Java, J2EE, and web technologies",
        "Contributed to multiple client projects across different industries",
        "Learned software engineering best practices and agile methodologies"
      ],
      technologies: ["Java", "J2EE", "SQL", "Web Development", "Enterprise Applications"],
      companyLogo: htcLogo
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            15+ years building scalable systems at top tech companies
          </p>
        </div>

        {/* Work Artifacts Carousel */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Work
            </h3>
            <p className="text-muted-foreground">Real products and systems I've built</p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {workArtifacts.map((artifact, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div className="group relative">
                    <Card 
                      className="overflow-hidden cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20" 
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={artifact.src}
                          alt={artifact.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-semibold text-sm">{artifact.alt}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
        
        <div className="relative">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              ref={(el) => (nodeRefs.current[idx] = el)}
              className="relative pb-8 last:pb-0"
            >
              {/* Timeline rail - subtle vertical line */}
              {idx < experiences.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10" />
              )}
              
              {/* Timeline node with scroll animation */}
              <div 
                className={`absolute left-0 top-6 flex items-center transition-all duration-700 ${
                  visibleNodes.has(idx) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative">
                  {/* Minimalist outer ring */}
                  <div className="w-12 h-12 rounded-full border-2 border-black/30 dark:border-white/30 bg-background flex items-center justify-center shadow-md">
                    {/* Inner dot */}
                    <div className="w-4 h-4 rounded-full bg-black dark:bg-white" />
                  </div>
                  
                  {/* Subtle railroad ties */}
                  {idx < experiences.length - 1 && (
                    <>
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-3 bg-black/15 dark:bg-white/15" />
                      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-3 bg-black/10 dark:bg-white/10" />
                      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-3 bg-black/5 dark:bg-white/5" />
                    </>
                  )}
                </div>
              </div>
              
              {/* Experience card with animation */}
              <div 
                className={`ml-20 transition-all duration-700 ${
                  visibleNodes.has(idx)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${idx * 100 + 200}ms` }}
              >
                <ExperienceItem {...exp} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={workArtifacts}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default Experience;
