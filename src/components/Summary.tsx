import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Code2, Database, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Summary = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Impact-driven, passionate, and seasoned hands-on Full Stack Engineering Leader with expertise in Payments & Billing, Marketplace, eCommerce, Healthcare, and Retail domains with diverse and progressive industry experience spanning 19+ years.";
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [isVisible]);

  return (
    <section 
      id="summary" 
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-6">
        <Card className={`p-10 md:p-12 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-foreground stroke-[1.5]" />
            Professional Summary
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 min-h-[6rem] font-normal">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-primary animate-pulse ml-1"></span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start gap-4 p-6 border rounded hover:shadow-sm transition-all duration-300">
              <Code2 className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-semibold text-base mb-2">Full Stack Expert</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Java, JavaScript, Python, React, NextJS, Spring Boot</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 border rounded hover:shadow-sm transition-all duration-300">
              <Database className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-semibold text-base mb-2">Data Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">MySQL, DynamoDB, Cassandra, Big Data, Analytics</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 border rounded hover:shadow-sm transition-all duration-300">
              <Cloud className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-semibold text-base mb-2">Cloud Native</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">AWS, Kubernetes, Docker, Microservices, Serverless</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Summary;
