import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<number>(0);

  useEffect(() => {
    // Simulating GitHub contributions data
    // In production, you'd fetch from GitHub API
    setContributions(1247);
  }, []);

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-secondary/20 border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <Github className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-bold">Open Source Contributions</h3>
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl font-bold text-primary">{contributions.toLocaleString()}</span>
        <span className="text-muted-foreground">contributions this year</span>
      </div>
      
      {/* Contribution graph placeholder */}
      <div className="grid grid-cols-12 gap-1">
        {Array.from({ length: 52 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-3 rounded-sm ${
              idx % 4 === 0 ? "bg-primary/80" : idx % 3 === 0 ? "bg-primary/60" : idx % 2 === 0 ? "bg-primary/40" : "bg-primary/20"
            }`}
          />
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground mt-4">
        Active contributor to open-source projects and technical communities
      </p>
    </Card>
  );
};

export default GitHubContributions;
