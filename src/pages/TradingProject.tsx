import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, GitBranch, Workflow, Sparkles, Database, Cloud, Bell, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import archDiagram from "@/assets/trade_app_arch.png";
import flowDiagram from "@/assets/trade_app_flow_diagram.png";

const TradingProject = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Personal AI Project</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              AI-Powered Trading Signal Automation System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An intelligent end-to-end system that transforms trading signals into actionable insights using GPT-4, agentic workflows, and multi-channel notifications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="secondary" className="px-4 py-2">Spring Boot</Badge>
            <Badge variant="secondary" className="px-4 py-2">GPT-4 / ChatGPT</Badge>
            <Badge variant="secondary" className="px-4 py-2">MongoDB</Badge>
            <Badge variant="secondary" className="px-4 py-2">TradingView</Badge>
            <Badge variant="secondary" className="px-4 py-2">MCP Protocol</Badge>
            <Badge variant="secondary" className="px-4 py-2">Agentic AI</Badge>
            <Badge variant="secondary" className="px-4 py-2">IFTTT</Badge>
            <Badge variant="secondary" className="px-4 py-2">Webhooks</Badge>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                This hobby project demonstrates advanced AI integration patterns by building an autonomous trading signal processing system. 
                The system receives real-time trading indicators from TradingView, enriches them using GPT-4's contextual understanding, 
                and orchestrates intelligent agent workflows for evaluation and notification.
              </p>
              <p className="text-lg leading-relaxed">
                Built with a focus on <strong className="text-foreground">MCP (Model Context Protocol)</strong> architecture, 
                the system showcases agentic AI patterns where autonomous agents handle legend transformation, trade evaluation, 
                and multi-channel notification dispatch—all with minimal human intervention.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features & Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-primary" />
                  AI-Powered Legend Transformation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Uses ChatGPT to intelligently transform raw indicator data into enriched legends with:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Pattern recognition and contextual enhancement</li>
                  <li>Historical indicator analysis</li>
                  <li>Dynamic prompt engineering for optimal responses</li>
                  <li>Cached legend management for efficiency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Workflow className="h-6 w-6 text-primary" />
                  Agentic Workflow Pipeline
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Implements autonomous agent patterns with:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>MCP server/client architecture for agent communication</li>
                  <li>GPT-4 based evaluation agents for trade analysis</li>
                  <li>Scheduled periodic evaluations with state management</li>
                  <li>Event-driven architecture using async workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  Robust Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">MongoDB-based persistence layer featuring:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Async storage of transformed legends and events</li>
                  <li>Historical data lookup for trend analysis</li>
                  <li>Efficient caching strategies</li>
                  <li>Event sourcing patterns for auditability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-primary" />
                  Multi-Channel Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Intelligent notification dispatcher with:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>IFTTT integration for phone calls and WhatsApp</li>
                  <li>Priority-based notification routing</li>
                  <li>High-probability trade alerts in real-time</li>
                  <li>Configurable notification thresholds</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
          
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-primary" />
                  High-Level Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border-2 border-border bg-white p-4">
                  <img 
                    src={archDiagram} 
                    alt="System Architecture Diagram" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Architecture Overview:</strong> Event-driven system with TradingView webhooks triggering Spring Boot backend, 
                    which orchestrates AI services (GPT for evaluation, ChatGPT for transformation), persistent storage in MongoDB, 
                    and multi-channel notification dispatch via IFTTT.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GitBranch className="h-6 w-6 text-primary" />
                  Detailed Data Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border-2 border-border bg-white p-4">
                  <img 
                    src={flowDiagram} 
                    alt="Data Flow Diagram" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Data Flow:</strong> Trading events flow through legend lookup (with ChatGPT fallback for transformation), 
                    followed by scheduled periodic evaluation where GPT-4 analyzes each transformed event. High-probability trades trigger 
                    the notification dispatcher for multi-channel alerts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Event Source</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">TradingView:</strong> Real-time webhook integration</li>
                  <li><strong className="text-foreground">JSON Events:</strong> Structured indicator data</li>
                  <li><strong className="text-foreground">Async Processing:</strong> Non-blocking ingestion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Backend Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Spring Boot:</strong> RESTful API & scheduler</li>
                  <li><strong className="text-foreground">MCP Protocol:</strong> Agent communication</li>
                  <li><strong className="text-foreground">MongoDB:</strong> NoSQL persistence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">GPT-4:</strong> Trade evaluation agent</li>
                  <li><strong className="text-foreground">ChatGPT:</strong> Legend transformation</li>
                  <li><strong className="text-foreground">MCP Agents:</strong> Autonomous workflows</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                Key Learnings & Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Agentic AI Architecture</h4>
                  <p className="text-sm">
                    Implementing MCP-based autonomous agents demonstrated the power of decoupled AI workflows where 
                    agents can independently process, evaluate, and act on information with minimal orchestration overhead.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Context Management</h4>
                  <p className="text-sm">
                    Effective prompt engineering and caching strategies are crucial for GPT-4 performance. Legend transformation 
                    benefits significantly from historical context and well-structured prompts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Event-Driven Patterns</h4>
                  <p className="text-sm">
                    Async event processing with Spring Boot schedulers enables reliable real-time processing while maintaining 
                    system resilience and scalability for high-frequency trading signals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Multi-Channel Integration</h4>
                  <p className="text-sm">
                    IFTTT integration showcases how modern AI systems can seamlessly bridge digital intelligence with 
                    real-world communication channels for maximum accessibility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-gradient-to-t from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in the Technical Details?</h2>
          <p className="text-muted-foreground mb-6">
            This project demonstrates hands-on experience with modern AI architectures, agentic workflows, and production-grade system design.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TradingProject;
