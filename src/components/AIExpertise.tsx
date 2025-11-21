import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Workflow, Bot, Sparkles } from "lucide-react";

const AIExpertise = () => {
  const aiSkills = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Solutions",
      description: "Building intelligent systems leveraging LLMs and machine learning",
      highlights: ["GPT-4/5 Integration", "Claude API", "Gemini"]
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "MCP Servers & Clients",
      description: "Model Context Protocol implementations for AI agent ecosystems",
      highlights: ["Custom MCP Servers", "Tool Integration", "Context Management"]
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Agentic Pipelines",
      description: "Autonomous AI agents and multi-step reasoning workflows",
      highlights: ["Agent Orchestration", "Tool Calling", "RAG Systems"]
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Application Development",
      description: "Full-stack AI applications from prototype to production",
      highlights: ["Vector Databases", "Embedding Models", "Prompt Engineering"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-foreground">Artificial Intelligence & ML Expertise</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Building next-generation AI solutions with cutting-edge technologies
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {aiSkills.map((skill, idx) => (
            <Card key={idx} className="p-6 glass-card hover:glow transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3 text-gradient">
                {skill.icon}
                <h3 className="font-bold text-lg">{skill.title}</h3>
              </div>
              <p className="text-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.highlights.map((highlight, hIdx) => (
                  <Badge key={hIdx} variant="outline" className="text-xs border-primary/50 bg-primary/5">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border-purple-500/30 glow">
          <h3 className="text-xl font-bold mb-3 text-gradient">Featured AI Implementations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <Sparkles className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Intelligent Document Processing</p>
                <p className="text-sm text-muted-foreground">AI-powered data extraction and analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="h-5 w-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Conversational AI Agents</p>
                <p className="text-sm text-muted-foreground">Multi-turn dialogues with context retention</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Automated Code Generation</p>
                <p className="text-sm text-muted-foreground">AI-assisted development workflows</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIExpertise;
