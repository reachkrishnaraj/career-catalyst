import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import archDiagram from "@/assets/trade_app_arch.png";

const HobbyProjects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Hobby Projects</h2>
          <p className="text-muted-foreground text-lg">Exploring AI & Automation in Personal Time</p>
        </div>

        <Card className="glass-card glow hover:scale-[1.02] transition-transform duration-300">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <CardTitle className="text-3xl mb-3 flex items-center gap-3">
                  <Brain className="h-8 w-8 text-primary" />
                  AI-Powered Trading Signal Automation
                </CardTitle>
                <CardDescription className="text-base">
                  An intelligent system that transforms trading signals into actionable insights using GPT and agentic AI workflows
                </CardDescription>
              </div>
              <Link to="/trading-project">
                <Button variant="default" className="gap-2">
                  View Details <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Intelligent Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time trading signals from TradingView processed through GPT-4 for contextual enrichment and pattern recognition
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Agentic Workflows</h4>
                    <p className="text-sm text-muted-foreground">
                      MCP-based architecture with autonomous agents for legend transformation, evaluation, and multi-channel notifications
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-border/50">
                <img 
                  src={archDiagram} 
                  alt="AI Trading System Architecture" 
                  className="w-full h-full object-contain bg-background/50"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              <Badge variant="secondary">Spring Boot</Badge>
              <Badge variant="secondary">GPT-4 / ChatGPT</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">TradingView Webhooks</Badge>
              <Badge variant="secondary">MCP Server/Client</Badge>
              <Badge variant="secondary">Agentic AI</Badge>
              <Badge variant="secondary">IFTTT Integration</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HobbyProjects;
