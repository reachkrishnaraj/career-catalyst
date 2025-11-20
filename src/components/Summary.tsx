import { Card } from "@/components/ui/card";
import { Briefcase, Code2, Database, Cloud } from "lucide-react";

const Summary = () => {
  return (
    <section id="summary" className="container mx-auto px-6 py-12">
      <Card className="p-8 border-l-4 border-l-primary shadow-lg">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          Professional Summary
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          Impact-driven, passionate, and seasoned hands-on Full Stack Engineering Leader with expertise in{" "}
          <span className="font-semibold text-primary">Payments & Billing</span>,{" "}
          <span className="font-semibold text-primary">Marketplace</span>,{" "}
          <span className="font-semibold text-primary">eCommerce</span>,{" "}
          <span className="font-semibold text-primary">Healthcare</span>, and{" "}
          <span className="font-semibold text-primary">Retail</span> domains with diverse and progressive industry experience spanning{" "}
          <span className="font-semibold text-primary">19+ years</span>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
            <Code2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Full Stack Expert</h3>
              <p className="text-sm text-muted-foreground">Java, JavaScript, Python, React, NextJS, Spring Boot</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
            <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Data Architecture</h3>
              <p className="text-sm text-muted-foreground">MySQL, DynamoDB, Cassandra, Big Data, Analytics</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
            <Cloud className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Cloud Native</h3>
              <p className="text-sm text-muted-foreground">AWS, Kubernetes, Docker, Microservices, Serverless</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Summary;
