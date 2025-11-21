import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, TrendingUp, Maximize2, ExternalLink } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import Autoplay from "embla-carousel-autoplay";
import netflixLogo from "@/assets/logos/netflix.png";
import turoLogo from "@/assets/logos/turo.png";
import turoAtoProject from "@/assets/work_artifact/turo/turo_ato_project.png";
import turoRuleEngine from "@/assets/work_artifact/turo/turo_rule_engine_project.png";
import turoSearchImprovement from "@/assets/work_artifact/turo/turo_search_improvement_project.png";
import turoYoungDriver from "@/assets/work_artifact/turo/turo_young_driver_project.png";

// Netflix project images
import paymentLifecycleFlow from "@/assets/work_artifact/netflix_semantic_images/payment_lifecycle_status_flow.png";
import paymentOrderProcessing from "@/assets/work_artifact/netflix_semantic_images/payment_order_processing_flow.png";
import reconciliationSystemOverview from "@/assets/work_artifact/netflix_semantic_images/reconciliation_system_overview.png";
import reconciliationEventEquation from "@/assets/work_artifact/netflix_semantic_images/reconciliation_event_equation.png";
import settlementBatchPipeline from "@/assets/work_artifact/netflix_semantic_images/settlement_batch_pipeline.png";
import autoResetSequenceFlow from "@/assets/work_artifact/netflix_semantic_images/auto_reset_sequence_flow.png";
import ddReturnDetailsFlow from "@/assets/work_artifact/netflix_semantic_images/dd_return_details_flow.png";
import asyncRefundNotificationFlow from "@/assets/work_artifact/netflix_semantic_images/async_refund_notification_flow.png";
import paymentsPlatformPhases from "@/assets/work_artifact/netflix_semantic_images/payments_platform_phases.png";
import failoverRoutingOverview from "@/assets/work_artifact/netflix_semantic_images/failover_routing_overview.png";
import circuitBreakerOpenState from "@/assets/work_artifact/netflix_semantic_images/circuit_breaker_open_state_graph.png";
import processorFailoverDistribution from "@/assets/work_artifact/netflix_semantic_images/processor_failover_distribution_chart.png";

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string[];
  technologies: string[];
  architectureImage?: string;
  architectureImages?: { src: string; alt: string }[];
  mediumLink?: string;
  companyLogo?: string;
  featured?: boolean;
}

const ProjectCarousel = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState<string>("All");

  const openLightbox = (images: { src: string; alt: string }[], index: number = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const projects: Project[] = [
    {
      title: "HIPAA-Compliant Healthcare Platform",
      company: "TBD Health",
      description: "Built complete healthcare technology stack from ground up including eCommerce, EMR system, patient portal, and automated workflows.",
      impact: [
        "Served thousands of patients with 99.9% uptime",
        "Achieved full HIPAA compliance within 6 months",
        "Reduced operational costs by 40% through automation",
        "Improved booking conversion by 35%"
      ],
      technologies: ["ReactJS", "NextJS", "AWS", "Saleor", "DynamoDB", "Spring Boot"],
      architectureImage: "/placeholder-architecture.jpg",
      companyLogo: undefined
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
      technologies: ["Java", "Cassandra", "Spring Boot", "Netflix OSS", "AWS"],
      architectureImage: "/placeholder-architecture.jpg",
      companyLogo: netflixLogo,
      featured: true
    },
    {
      title: "Account Takeover Prevention System",
      company: "Turo",
      description: "Architected and led development of a comprehensive ATO prevention platform using advanced ML models and real-time risk scoring to protect user accounts and platform integrity across millions of transactions.",
      impact: [
        "Reduced fraudulent account takeovers by 60% in first 6 months",
        "Protected millions in potential financial losses",
        "Achieved 99.5% detection accuracy with ML-based risk scoring",
        "Improved user trust metrics by 45% through enhanced security"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Machine Learning", "Redis", "Datadog"],
      architectureImage: turoAtoProject,
      featured: true,
      companyLogo: turoLogo
    },
    {
      title: "Young Driver Risk Assessment Platform",
      company: "Turo",
      description: "Designed and implemented ML-powered risk assessment system for young drivers, enabling data-driven decisions on driver eligibility and insurance pricing while maintaining platform safety.",
      impact: [
        "Enabled safe onboarding of 18-21 age segment worth $50M+ annually",
        "Reduced young driver incident rate by 35% through intelligent screening",
        "Improved risk prediction accuracy to 92% using ensemble ML models",
        "Increased platform revenue by 12% through new market segment access"
      ],
      technologies: ["Java", "Spring Boot", "Python", "Scikit-learn", "AWS SageMaker", "PostgreSQL"],
      architectureImage: turoYoungDriver,
      companyLogo: turoLogo
    },
    {
      title: "Search Ranking Optimization Engine",
      company: "Turo",
      description: "Revolutionized search experience by implementing ML-based ranking system that optimizes for both user preferences and business metrics, significantly improving booking conversion rates.",
      impact: [
        "Increased search-to-booking conversion rate by 28%",
        "Improved user engagement time by 40% through personalized results",
        "Enhanced revenue per search by 22% via optimized ranking signals",
        "Reduced search abandonment rate from 45% to 18%"
      ],
      technologies: ["Java", "Apache Solr", "Elasticsearch", "Python", "TensorFlow", "A/B Testing"],
      architectureImage: turoSearchImprovement,
      companyLogo: turoLogo
    },
    {
      title: "Payment Gateway Modernization",
      company: "Confidential Payment Gateway",
      description: "Architected modernization strategy for legacy payment platform serving Canadian market.",
      impact: [
        "Improved system scalability by 3x",
        "Reduced payment processing latency by 40%",
        "Enhanced compliance and security posture",
        "Enabled support for modern payment methods"
      ],
      technologies: ["Architecture", "Cloud Migration", "Microservices", "API Design"],
      architectureImage: "/placeholder-architecture.jpg",
      companyLogo: undefined
    },
    {
      title: "Dynamic Pricing & Fee Engine",
      company: "Turo",
      description: "Architected and built a sophisticated business rules engine enabling real-time dynamic pricing computation across multiple markets. System supports complex fee structures, location-based pricing, and A/B testing for optimization strategies.",
      impact: [
        "Enabled real-time A/B testing of pricing strategies across 50+ markets",
        "Improved pricing accuracy and revenue optimization by 18%",
        "Reduced pricing calculation errors from 2.3% to near-zero (0.02%)",
        "Supported 200+ configurable fee types across different geographic markets"
      ],
      technologies: ["Java", "Spring Boot", "Apache Solr", "MySQL", "Redis", "AWS"],
      architectureImage: turoRuleEngine,
      companyLogo: turoLogo
    },
    {
      title: "Payment Reconciliation System",
      company: "Netflix",
      description: "Built a large-scale reconciliation system ensuring end-to-end accuracy of all subscription payments across Billing, Payments Platform, and Settlement files. Designed batch ingestion pipelines, emitted enriched settlement events, and enabled finance and analytics teams to reconcile millions of payment transactions reliably.",
      impact: [
        "Ensured full lifecycle matching of millions of subscription transactions",
        "Improved month-end and quarter-end financial close accuracy",
        "Delivered Kibana dashboards sourced from Elasticsearch for analytics",
        "Built scalable Spring Batch + SQS distributed processing",
        "Reduced manual reconciliation and anomaly investigation"
      ],
      technologies: ["Java", "Spring Batch", "AWS SQS", "Elasticsearch", "Kibana", "Keystone Data Pipeline", "Tableau"],
      architectureImage: reconciliationSystemOverview,
      architectureImages: [
        { src: reconciliationSystemOverview, alt: "Reconciliation System Overview" },
        { src: paymentLifecycleFlow, alt: "Payment Lifecycle Status Flow" },
        { src: paymentOrderProcessing, alt: "Payment Order Processing Flow" },
        { src: reconciliationEventEquation, alt: "Reconciliation Event Equation" },
        { src: settlementBatchPipeline, alt: "Settlement Batch Pipeline" }
      ],
      mediumLink: "https://medium.com/@reach.krishnaraj/payment-reconciliation-system-5e850665a12d",
      companyLogo: netflixLogo
    },
    {
      title: "Auto-Reset File Sequence Number",
      company: "Netflix",
      description: "Resolved recurring failures in batch payment request submissions caused by incorrect file sequence numbers during SFTP uploads. Enhanced the sequencing logic to increment sequence numbers only after a successful file upload, preventing downstream rejections and manual interventions.",
      impact: [
        "Eliminated file-rejection incidents from misaligned sequence numbers",
        "Removed manual sequence reset operations",
        "Improved reliability of payment batch workflows"
      ],
      technologies: ["Java", "Spring Batch", "SFTP"],
      architectureImage: autoResetSequenceFlow,
      mediumLink: "https://medium.com/@reach.krishnaraj/enhancement-auto-reset-request-file-sequence-number-cf3140b3671f",
      companyLogo: netflixLogo
    },
    {
      title: "Direct Debit Return Details Integration",
      company: "Netflix",
      description: "Enhanced the Direct Debit batch processing system to ingest crucial return metadata (fee, return reason, returning bank) from processor response files and publish enriched events to downstream systems.",
      impact: [
        "Enabled accurate DD return metrics across multiple countries",
        "Restored visibility for analytics and finance teams",
        "Standardized return-event publishing into the existing pipeline"
      ],
      technologies: ["Java", "Spring Batch", "Data Pipeline"],
      architectureImage: ddReturnDetailsFlow,
      mediumLink: "https://medium.com/@reach.krishnaraj/enhancement-consume-dd-return-details-6c520af406c1",
      companyLogo: netflixLogo
    },
    {
      title: "Optimized Business-Critical Batch Job Processing",
      company: "Netflix",
      description: "Improved throughput and parallelism of file-processing batch jobs by limiting how many files each scheduled run downloads and processes. Introduced a configurable max-file limit per schedule so concurrent runs can share workload efficiently.",
      impact: [
        "Increased batch parallelism and reduced processing latency",
        "Prevented jobs from stalling with unprocessed files left in folders",
        "Reduced manual cleanup when jobs halted or failed"
      ],
      technologies: ["Java", "Spring Batch", "Cron Scheduling"],
      mediumLink: "https://medium.com/@reach.krishnaraj/optimize-business-critical-file-processing-batch-jobs-1e34e89c595a",
      companyLogo: netflixLogo
    },
    {
      title: "Async Refund Notification Processing",
      company: "Netflix",
      description: "Added support for asynchronous refund notifications from a payment processor, ensuring final refund outcomes (status, reason codes, decline messages) were written to the Payments datastore and pushed to upstream systems.",
      impact: [
        "Ensured true final refund status in customer-service tools",
        "Reduced refund-related investigation effort",
        "Improved refund data freshness and accuracy across systems"
      ],
      technologies: ["Java", "Notification Consumer Service", "AWS SQS", "Event-Driven Pipeline"],
      architectureImage: asyncRefundNotificationFlow,
      mediumLink: "https://medium.com/@reach.krishnaraj/enhancement-consume-async-notification-transaction-details-refund-1693fbb67545",
      companyLogo: netflixLogo
    },
    {
      title: "Payment Processor Dynamic Failover Routing",
      company: "Netflix",
      description: "Designed and implemented a dynamic, health-aware routing layer across multiple payment processors using Netflix OSS Hystrix. Increased resiliency of sign-up and subscription renewal payments during processor outages and intermittent instability.",
      impact: [
        "Reduced payment failures during processor incidents",
        "Protected sign-ups and renewals from third-party instability",
        "Introduced standardized circuit-breaker-based resiliency pattern",
        "Enabled monitoring of failure types and routing decisions"
      ],
      technologies: ["Java", "Netflix OSS Hystrix", "Spectator", "Microservices"],
      architectureImage: failoverRoutingOverview,
      architectureImages: [
        { src: failoverRoutingOverview, alt: "Failover Routing Overview" },
        { src: paymentsPlatformPhases, alt: "Payments Platform Phases" },
        { src: circuitBreakerOpenState, alt: "Circuit Breaker Open State Graph" },
        { src: processorFailoverDistribution, alt: "Processor Failover Distribution" }
      ],
      mediumLink: "https://medium.com/@reach.krishnaraj/payment-processor-dynamic-failover-routing-8228cd94fb9d",
      companyLogo: netflixLogo
    }
  ];

  const companies = ["All", "Netflix", "Turo", "TBD Health", "Confidential Payment Gateway"];
  const filteredProjects = selectedCompany === "All" 
    ? projects 
    : projects.filter(p => p.company === selectedCompany);

  return (
    <section id="projects" className="container mx-auto px-6 py-12 bg-secondary/30">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Award className="h-8 w-8 text-primary" />
        Featured Projects & Architecture
      </h2>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {companies.map((company) => (
          <Button
            key={company}
            variant={selectedCompany === company ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCompany(company)}
            className="transition-all animate-fade-in"
          >
            {company}
          </Button>
        ))}
      </div>
      
      <Carousel 
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="animate-fade-in">
          {filteredProjects.map((project, idx) => (
            <CarouselItem key={idx}>
              <Card className="p-8 glass-card hover:glow transition-all animate-scale-in">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none">
                            ⭐ Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-primary font-semibold mb-3">{project.company}</p>
                    </div>
                  </div>
                  {project.companyLogo && (
                    <img 
                      src={project.companyLogo} 
                      alt={`${project.company} logo`}
                      className="h-8 w-auto object-contain"
                    />
                  )}
                </div>
                
                <p className="text-foreground mb-4 text-lg">{project.description}</p>
                
                {/* Architecture/Project Image */}
                {project.architectureImage && (
                  <div className="mb-6">
                    <div className="relative rounded-lg overflow-hidden border border-border/50 group">
                      <img 
                        src={project.architectureImage} 
                        alt={`${project.title} architecture`}
                        className="w-full h-auto object-contain cursor-pointer"
                        onClick={() => project.architectureImages && project.architectureImages.length > 1 
                          ? openLightbox(project.architectureImages, 0)
                          : null
                        }
                      />
                      {project.architectureImages && project.architectureImages.length > 1 && (
                        <button
                          onClick={() => openLightbox(project.architectureImages!, 0)}
                          className="absolute top-2 right-2 bg-background/90 hover:bg-background p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="View all diagrams"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    {/* Thumbnail Previews */}
                    {project.architectureImages && project.architectureImages.length > 1 && (
                      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                        {project.architectureImages.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={() => openLightbox(project.architectureImages!, imgIdx)}
                            className="flex-shrink-0 w-20 h-20 rounded border-2 border-border hover:border-primary transition-all overflow-hidden"
                          >
                            <img 
                              src={img.src} 
                              alt={img.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-success" />
                    Impact & Results
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.impact.map((item, impactIdx) => (
                      <li key={impactIdx} className="flex items-start gap-2">
                        <span className="text-success font-bold mt-0.5">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Medium Article Link */}
                {project.mediumLink && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="w-full"
                  >
                    <a 
                      href={project.mediumLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read Full Article on Medium
                    </a>
                  </Button>
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-12 w-12 -left-6" />
        <CarouselNext className="h-12 w-12 -right-6" />
      </Carousel>
      
      <p className="text-center text-muted-foreground mt-6 text-sm">
        💡 Tip: Use arrow keys or navigation buttons to explore different projects
      </p>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default ProjectCarousel;
