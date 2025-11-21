import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import netflixLogo from "@/assets/company_icons/Netflix_Logo_PMS.png";
import paypalLogo from "@/assets/company_icons/PayPal-Logo-Black-RGB.png";
import walmartLogo from "@/assets/company_icons/walmart_labs.svg";
import altimetrikLogo from "@/assets/company_icons/altimetrik_logo.webp";
import htcLogo from "@/assets/company_icons/htc_global_services.png";
import turoLogo from "@/assets/company_icons/turo_logo.png";
import tbdHealthLogo from "@/assets/company_icons/tbd_health_logo.svg";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const experiences = [
    {
      company: "TBD Health",
      role: "Chief Technology Officer (CTO) / Architect",
      period: "Apr 2022 - Jul 2024",
      location: "Austin, TX",
      logo: tbdHealthLogo,
      website: "https://www.tbd.health",
      description: "Led complete technology transformation of healthcare startup post-seed funding, building entire tech infrastructure from ground up.",
      technologies: ["NextJS", "ReactJS", "Saleor", "AWS ECS", "AWS RDS", "Stripe", "AWS Rekognition", "HIPAA"],
      achievements: [
        "Built Entire Tech Stack from Ground Up: Designed and implemented complete technology infrastructure including cloud architecture, development workflows, and deployment pipelines for post-seed healthcare startup",
        "Platform Migration & Architecture: Architected and executed migration from Shopify to custom HIPAA-compliant eCommerce platform using Saleor, NextJS, and AWS. Built in-house Electronic Medical Records (EMR) system with ReactJS, enabling efficient patient care management and regulatory compliance",
        "AWS Infrastructure & Compliance: Implemented comprehensive AWS cloud infrastructure (ECS, RDS, S3, CloudFront) with full HIPAA compliance, ensuring secure handling of Protected Health Information (PHI) and meeting stringent healthcare regulatory requirements",
        "Payment & Subscription Management: Integrated Stripe payment gateway with advanced subscription management, automated billing workflows, and revenue optimization features supporting multiple payment methods and billing cycles",
        "Automation & AI Innovation: Built contactless patient check-in flow, automated identity verification using AWS Rekognition with liveness detection, and intelligent prescription fulfillment system reducing manual processing time by 80%",
        "Team Building & Leadership: Hired and managed distributed engineering team, established development processes, code review standards, and DevOps practices. Implemented CI/CD pipelines reducing deployment time from hours to minutes"
      ],
    },
    {
      company: "Confidential Client (via Altimetrik)",
      role: "Consultant Architect",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      logo: altimetrikLogo,
      description: "Led platform modernization initiative for major payment gateway, focusing on architecture strategy and scalability improvements.",
      technologies: ["Java", "Spring Boot", "Microservices", "AWS", "PCI-DSS"],
      achievements: [
        "Architectural Leadership: Designed comprehensive modernization strategy for legacy payment processing systems serving millions of transactions daily, creating roadmap for cloud-native transformation",
        "Scalability & Performance Solutions: Improved platform reliability and performance for high-volume transaction processing, implementing caching strategies and database optimization reducing latency by 40%",
        "Compliance & Security Excellence: Ensured adherence to PCI-DSS compliance standards, implemented security best practices, and conducted architecture reviews for vulnerability assessment",
        "Technical Mentorship: Mentored engineering teams on modern architectural patterns, cloud-native solutions, and microservices design principles, accelerating team capability development"
      ],
    },
    {
      company: "Turo",
      role: "Staff Software Engineer",
      period: "Oct 2018 - Mar 2020",
      location: "San Francisco, CA",
      logo: turoLogo,
      description: "Architected critical security and revenue-expansion systems for peer-to-peer car sharing marketplace serving millions of users.",
      technologies: ["Java", "Spring Boot", "Apache Solr", "Easy Rules Engine", "Machine Learning", "2FA"],
      achievements: [
        "Account Takeover Prevention System: Designed and implemented comprehensive ATO prevention system with ML-based risk scoring engine, multi-factor authentication (2FA), device fingerprinting, and real-time fraud detection protecting millions of user accounts",
        "Revenue Expansion Initiative: Led cross-functional engineering initiative to expand rental eligibility to 18-20 year old drivers (Young Driver Program) through sophisticated risk-based underwriting model, unlocking $50M+ annual revenue opportunity",
        "Search Performance Optimization: Improved Apache Solr vehicle search performance by 30% through advanced query optimization, intelligent caching strategies, and index tuning, enhancing user experience for millions of daily searches",
        "Business Rules Engine Architecture: Architected and implemented Java Easy Rules-based engine for dynamic pricing logic, policy enforcement, and business rule management, enabling rapid business experimentation without code deployments",
        "Cross-Team Collaboration: Partnered with Product, Data Science, Risk, and Operations teams to deliver complex features, establishing technical standards and promoting engineering excellence across organization"
      ],
    },
    {
      company: "Netflix",
      role: "Senior Software Engineer",
      period: "Mar 2016 - May 2018",
      location: "Los Gatos, CA",
      logo: netflixLogo,
      description: "Built mission-critical payment systems processing 150M+ monthly transactions for global streaming service.",
      technologies: ["Java", "Spring Boot", "Netflix OSS", "Hystrix", "AWS", "Cassandra", "Kafka", "ETL"],
      achievements: [
        "Payment Reconciliation System: Architected and built single source of truth reconciliation platform processing 150M+ monthly subscription payment orders across multiple processors, reducing reconciliation time from days to hours and improving financial accuracy",
        "Dynamic Processor Failover & Circuit Breaker: Designed intelligent payment routing logic using Netflix OSS Hystrix for real-time processor health monitoring, automatic failover, and circuit breaker patterns, achieving 99.99% payment availability",
        "Big Data Pipeline & Analytics: Created scalable ETL workflows using AWS Glue and Apache Spark, implemented comprehensive Kibana dashboards for real-time monitoring, and built Tableau visualizations for executive payment analytics and business intelligence",
        "Global Payment Processing at Scale: Processed payments across multiple payment processors (Adyen, Worldpay, PayPal, Apple Pay, Google Pay) supporting 50+ countries, 30+ currencies, and diverse payment methods (cards, wallets, direct debit)",
        "Direct Debit Batch Processing: Enhanced SEPA/BACS Direct Debit batch processing system with automated return details integration, file sequence management, and retry logic, reducing payment failures by 25%",
        "Cross-Region Resilience: Implemented multi-region active-active payment processing architecture ensuring business continuity during AWS region failures, maintaining uninterrupted service for global subscriber base"
      ],
    },
    {
      company: "Walmart eCommerce Labs",
      role: "Lead Engineer",
      period: "Jun 2013 - Mar 2016",
      location: "San Francisco, CA",
      logo: walmartLogo,
      description: "Led development of critical eCommerce platform features serving millions of daily customers.",
      technologies: ["Java", "Spring", "Microservices", "MongoDB", "ElasticSearch", "Kafka"],
      achievements: [
        "eCommerce Platform Development: Led team of 5 engineers developing core eCommerce features including product catalog management, advanced search capabilities, shopping cart, and multi-step checkout flows serving millions of daily active users",
        "Scalable Fulfillment System: Architected distributed fulfillment orchestration system integrating with supply chain, inventory management, warehouse management systems (WMS), and last-mile delivery partners, processing 100K+ daily orders",
        "Performance Optimization & Reliability: Optimized product catalog and search functionality for high-traffic Black Friday/Cyber Monday scenarios, implementing caching layers, database indexing, and query optimization reducing page load time by 50%",
        "Technical Leadership & Mentorship: Mentored 3 junior engineers on software craftsmanship, established team coding standards, conducted architecture reviews, and promoted engineering best practices across platform teams",
        "Microservices Migration: Led migration from monolithic architecture to microservices, improving system modularity, team autonomy, and deployment velocity"
      ],
    },
    {
      company: "PayPal",
      role: "Software Engineer",
      period: "Aug 2006 - Nov 2011",
      location: "San Jose, CA",
      logo: paypalLogo,
      description: "Established deep expertise in payments architecture and fintech during formative years at leading digital payments company.",
      technologies: ["Java", "J2EE", "Spring", "Oracle", "SOAP", "REST APIs", "PCI Compliance"],
      achievements: [
        "Foundation in Payments & Fintech: Built comprehensive understanding of payment processing, transaction lifecycle, merchant onboarding, fraud detection, chargeback management, and financial settlement systems at world's leading digital payments platform",
        "Payment Service API Development: Developed and maintained critical payment processing APIs serving millions of merchants globally, implementing robust error handling, retry logic, and idempotency patterns for reliable transaction processing",
        "Test Automation Framework: Designed comprehensive test automation framework for payment service APIs ensuring reliability, regulatory compliance (PCI-DSS), and preventing regressions. Achieved 80% test coverage reducing production incidents by 60%",
        "Core Payments Platform Modernization: Contributed to multi-year payments platform refactoring initiative, migrating legacy systems to service-oriented architecture (SOA), improving system scalability and maintainability",
        "Subject Matter Expert Development: Became recognized SME in payment processing, transaction lifecycle, payment instrument tokenization, and PCI compliance standards. Provided technical consultation for critical payment initiatives and regulatory audits",
        "Cross-Functional Collaboration: Partnered with Risk, Compliance, Product, and Operations teams to deliver secure payment solutions, participating in incident response, root cause analysis, and continuous improvement initiatives"
      ],
    },
    {
      company: "Early Career (HCL Technologies, HTC Global Services, Standard Chartered Bank)",
      role: "Software Engineer",
      period: "2003 - 2006",
      location: "India & Singapore",
      logo: htcLogo,
      description: "Started professional journey building foundational skills in enterprise software development.",
      technologies: ["Java", "J2EE", "JSP", "Servlets", "Oracle", "SQL"],
      achievements: [
        "Foundation Building: Developed strong foundation in Java, J2EE, web technologies (JSP, Servlets), and enterprise application development patterns during formative years of professional career",
        "Enterprise Applications for Fortune 500: Worked on large-scale banking and financial services applications for Standard Chartered Bank Singapore, contributing to core banking systems and customer-facing portals",
        "Rapid Technical Growth: Progressed quickly through technical roles from Associate to Senior Software Engineer, mastering full software development lifecycle including requirements analysis, design, development, testing, and production support",
        "Client Engagement: Gained international experience working onsite in Singapore, collaborating with global teams and understanding diverse business requirements across multiple time zones"
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="container mx-auto px-6 py-16 bg-secondary/30">
      <h2 className={`text-3xl font-bold mb-3 text-center text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Professional Experience
      </h2>
      <p className={`text-center text-muted-foreground mb-12 text-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        19+ years of progressive experience across leading tech companies
      </p>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Rail */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`relative pl-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2 z-10"></div>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Badge variant="secondary" className="mb-3">
                    {exp.period}
                  </Badge>
                  
                  <div className="flex items-start gap-4 mb-4">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="h-16 w-16 object-contain mt-1 flex-shrink-0" />
                    ) : (
                      <Building2 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    )}
                    <div>
                      {exp.website ? (
                        <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      )}
                      <p className="text-primary font-semibold">{exp.role}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="text-sm flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="text-foreground/90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
