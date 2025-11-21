import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Workflow, Bot, Sparkles } from "lucide-react";

const AIExpertise = () => {
  const aiSkills = [
    {
      icon: <Brain className="h-5 w-5 stroke-[1.5]" />,
      title: "AI-Powered Solutions",
      description: "Building intelligent systems leveraging LLMs and machine learning",
      highlights: ["GPT-4/5 Integration", "Claude API", "Gemini"]
    },
    {
      icon: <Workflow className="h-5 w-5 stroke-[1.5]" />,
      title: "MCP Servers & Clients",
      description: "Model Context Protocol implementations for AI agent ecosystems",
      highlights: ["Custom MCP Servers", "Tool Integration", "Context Management"]
    },
    {
      icon: <Bot className="h-5 w-5 stroke-[1.5]" />,
      title: "Agentic Pipelines",
      description: "Autonomous AI agents and multi-step reasoning workflows",
      highlights: ["Agent Orchestration", "Tool Calling", "RAG Systems"]
    },
    {
      icon: <Sparkles className="h-5 w-5 stroke-[1.5]" />,
      title: "AI Application Development",
      description: "Full-stack AI applications from prototype to production",
      highlights: ["Vector Databases", "Embedding Models", "Prompt Engineering"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
        <Brain className="h-6 w-6 text-foreground stroke-[1.5]" />
        Artificial Intelligence & ML Expertise
      </h2>
      <p className="text-muted-foreground mb-12 text-base">
        Building next-generation AI solutions with cutting-edge technologies
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {aiSkills.map((skill, idx) => (
          <Card key={idx} className="p-8 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 text-foreground/60">
              {skill.icon}
              <h3 className="font-semibold text-base">{skill.title}</h3>
            </div>
            <p className="text-foreground/80 mb-6 text-sm leading-relaxed">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.highlights.map((highlight, hIdx) => (
                <Badge key={hIdx} variant="outline">
                  {highlight}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8 p-8 border">
        <h3 className="text-lg font-semibold mb-6">Featured AI Implementations</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <p className="font-semibold text-sm mb-1">Intelligent Document Processing</p>
              <p className="text-sm text-muted-foreground">AI-powered data extraction and analysis</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <p className="font-semibold text-sm mb-1">Conversational AI Agents</p>
              <p className="text-sm text-muted-foreground">Multi-turn dialogues with context retention</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-foreground/60 flex-shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <p className="font-semibold text-sm mb-1">Automated Code Generation</p>
              <p className="text-sm text-muted-foreground">AI-assisted development workflows</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AIExpertise;
