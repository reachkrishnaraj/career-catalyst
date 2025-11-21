import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import netflixLogo from "@/assets/company_icons/Netflix_Logo_PMS.png";
import paypalLogo from "@/assets/company_icons/PayPal-Logo-Black-RGB.png";
import walmartLogo from "@/assets/company_icons/walmart_labs.svg";
import altimetrikLogo from "@/assets/company_icons/altimetrik_logo.webp";
import htcLogo from "@/assets/company_icons/htc_global_services.png";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const experiences = [
    {
      company: "TBD Health",
      role: "Chief Technology Officer (CTO) / Architect",
      period: "Apr 2022 - Jul 2024",
      location: "Austin, TX",
      logo: null,
      description: "Led complete technology transformation of healthcare startup post-seed funding, building entire tech infrastructure from ground up.",
      achievements: [
        "Built Entire Tech Stack from Ground Up: Designed and implemented complete technology infrastructure including cloud architecture, development workflows, and deployment pipelines",
        "Platform Migration: Architected and executed migration from Shopify to custom HIPAA-compliant eCommerce platform using Saleor, NextJS, and AWS",
        "EMR System: Developed in-house Electronic Medical Records system with ReactJS, enabling efficient patient care management",
        "AWS Infrastructure: Implemented comprehensive AWS cloud infrastructure (ECS, RDS, S3, CloudFront) with full HIPAA compliance",
        "Payment Integration: Integrated Stripe payment gateway with subscription management and automated billing workflows",
        "Automation & AI: Built contactless check-in flow, automated identity verification using AWS Rekognition, and prescription fulfillment system"
      ],
    },
    {
      company: "Paysafe (via Altimetrik)",
      role: "Consultant Architect",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      logo: altimetrikLogo,
      description: "Led platform modernization initiative for major Canadian payment gateway, focusing on architecture strategy and scalability improvements.",
      achievements: [
        "Architectural Leadership: Designed comprehensive modernization strategy for legacy payment processing systems serving millions of transactions",
        "Scalability Solutions: Improved platform reliability and performance for high-volume transaction processing",
        "Compliance & Security: Ensured adherence to PCI-DSS compliance standards and implemented security best practices",
        "Technical Guidance: Mentored engineering teams on modern architectural patterns and cloud-native solutions"
      ],
    },
    {
      company: "Turo",
      role: "Staff Software Engineer",
      period: "Oct 2018 - Mar 2020",
      location: "San Francisco, CA",
      logo: null,
      description: "Architected critical security and revenue-expansion systems for peer-to-peer car sharing marketplace serving millions of users.",
      achievements: [
        "Account Takeover Prevention: Designed comprehensive ATO prevention system with ML-based risk scoring, 2FA implementation, and real-time fraud detection",
        "Revenue Expansion: Led engineering initiative to expand rental eligibility to 18-20 year old drivers through risk-based underwriting model",
        "Search Performance: Improved Apache Solr vehicle search performance by 30% through query optimization and caching strategies",
        "Business Rules Engine: Architected Java Easy Rules-based engine for dynamic pricing logic and policy enforcement"
      ],
    },
    {
      company: "Netflix",
      role: "Senior Software Engineer",
      period: "Mar 2016 - May 2018",
      location: "Los Gatos, CA",
      logo: netflixLogo,
      description: "Built mission-critical payment systems processing 150M+ monthly transactions for global streaming service.",
      achievements: [
        "Payment Reconciliation System: Built single source of truth for payment reconciliation across 150M+ monthly subscription orders",
        "Dynamic Processor Failover: Architected intelligent routing logic with Netflix OSS Hystrix for processor health monitoring and automatic failover",
        "Big Data Pipeline: Created ETL workflows using AWS Glue, implemented Kibana dashboards, and built Tableau visualizations for payment analytics",
        "Global Scale: Processed payments across multiple payment processors (Adyen, Worldpay, PayPal) and 50+ countries",
        "Batch Processing: Enhanced Direct Debit batch processing with return details integration and automated file sequence management"
      ],
    },
    {
      company: "Walmart eCommerce Labs",
      role: "Lead Engineer",
      period: "Jun 2013 - Mar 2016",
      location: "San Francisco, CA",
      logo: walmartLogo,
      description: "Led development of critical eCommerce platform features serving millions of daily customers.",
      achievements: [
        "Platform Development: Led team developing core eCommerce features including product catalog, search, and checkout flows",
        "Fulfillment System: Architected scalable fulfillment system integrating with supply chain and warehouse management",
        "Performance Optimization: Optimized catalog management and search functionality for high-traffic scenarios",
        "Technical Leadership: Mentored junior engineers and established coding standards and best practices"
      ],
    },
    {
      company: "PayPal",
      role: "Software Engineer",
      period: "Aug 2006 - Nov 2011",
      location: "San Jose, CA",
      logo: paypalLogo,
      description: "Established deep expertise in payments architecture and fintech during formative years at leading digital payments company.",
      achievements: [
        "Foundation in Payments & Fintech: Built comprehensive understanding of payment processing, transaction lifecycle, and financial systems",
        "Service API Automation: Developed robust test automation frameworks for payment APIs ensuring reliability and compliance",
        "Core Payments: Contributed to critical payments platform refactoring and migration initiatives",
        "SME Development: Became Subject Matter Expert (SME) in payments processing, transaction lifecycle, and PCI compliance standards"
      ],
    },
    {
      company: "Early Career (HCL Technologies, HTC Global Services, Standard Chartered Bank)",
      role: "Software Engineer",
      period: "2003 - 2006",
      location: "India & Singapore",
      logo: htcLogo,
      description: "Started professional journey building foundational skills in enterprise software development.",
      achievements: [
        "Foundation Building: Developed strong foundation in Java, J2EE, and web technologies",
        "Enterprise Applications: Worked on large-scale enterprise applications for Fortune 500 clients including Standard Chartered Bank Singapore",
        "Technical Growth: Rapidly progressed through technical roles, mastering software development lifecycle"
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
      
      <div className="relative">
        {/* Timeline Rail */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2 hidden md:block z-10"></div>
              
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Badge variant="secondary" className="mb-3">
                    {exp.period}
                  </Badge>
                  
                  <div className="flex items-start gap-3 mb-3">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-12 object-contain mt-1 flex-shrink-0" />
                    ) : (
                      <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
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
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="text-sm flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
