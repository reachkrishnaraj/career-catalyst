import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Code2, Database, Cloud, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import spaceBanner from "@/assets/space-banner.jpg";

const Summary = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Strategic Engineering Leader with 19+ years building and scaling high-performing teams that deliver exceptional products. Expert in driving technical vision, mentoring engineers, and executing end-to-end solutions across Payments, Marketplace, Healthcare, and eCommerce domains. Proven track record of transforming complex challenges into scalable architectures while fostering engineering excellence.";
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
      className="relative overflow-hidden py-12"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${spaceBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className={`p-8 border-l-4 border-l-primary shadow-lg backdrop-blur-sm bg-background/95 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Professional Summary
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-6 min-h-[6rem]">
            {typedText}
            <span className="inline-block w-0.5 h-6 bg-primary animate-pulse ml-1"></span>
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg hover:scale-105 transition-all duration-300 card-elevated">
              <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Engineering Leadership</h3>
                <p className="text-sm text-muted-foreground">Team Building & Mentorship, Technical Strategy, Product Execution</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg hover:scale-105 transition-all duration-300 card-elevated">
              <Code2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Full Stack Expert</h3>
                <p className="text-sm text-muted-foreground">Java, JavaScript, Python, React, NextJS, Spring Boot</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg hover:scale-105 transition-all duration-300 card-elevated">
              <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Data Architecture</h3>
                <p className="text-sm text-muted-foreground">MySQL, DynamoDB, Cassandra, Big Data, Analytics</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg hover:scale-105 transition-all duration-300 card-elevated">
              <Cloud className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Cloud Native</h3>
                <p className="text-sm text-muted-foreground">AWS, Kubernetes, Docker, Microservices, Serverless</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Summary;
