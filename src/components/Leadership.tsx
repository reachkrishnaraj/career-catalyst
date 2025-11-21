import { Card } from "@/components/ui/card";
import { Users, Target, Rocket, Brain } from "lucide-react";

const Leadership = () => {
  const leadership = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Building & Management",
      description: "Built and led diverse engineering teams from entry-level to senior engineers. Established hiring processes, mentorship programs, and career development frameworks."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Planning",
      description: "Drove product development roadmaps, scaling strategies, and operational decisions aligned with business objectives. Managed cross-functional partnerships with product, design, and business teams."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Technical Leadership",
      description: "Led architectural decisions, code reviews, and technical strategy across multiple projects. Championed engineering excellence, best practices, and continuous improvement."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Innovation & Problem Solving",
      description: "Developed patent-worthy solutions and innovative approaches to complex technical challenges. Led evaluation and adoption of new technologies and methodologies."
    }
  ];

  const achievements = [
    "Led vendor selection and contract negotiations for major platform initiatives",
    "Managed engineering budgets and resource allocation for optimal ROI",
    "Established engineering standards and development practices adopted company-wide",
    "Mentored 20+ engineers throughout career, many advancing to senior positions",
    "Led incident response and post-mortem processes ensuring continuous learning",
    "Championed agile methodologies and DevOps culture transformation"
  ];

  return (
    <section id="leadership" className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Users className="h-8 w-8 text-primary" />
        <span className="text-foreground">Leadership & Impact</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {leadership.map((item, idx) => (
          <Card key={idx} className="p-6 border-l-4 border-l-foreground">
            <div className="flex items-center gap-3 mb-3 text-primary">
              {item.icon}
              <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
            </div>
            <p className="text-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
      
      <Card className="p-8 bg-primary/5 border-primary/20">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Key Leadership Achievements</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg mt-0.5">★</span>
              <span className="font-medium">{achievement}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Leadership;
