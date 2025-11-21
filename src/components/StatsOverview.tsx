import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Globe } from "lucide-react";

const StatsOverview = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, value: 19, suffix: "+", label: "Years Experience" },
    { icon: <Briefcase className="h-8 w-8" />, value: 6, suffix: "", label: "Major Companies" },
    { icon: <Globe className="h-8 w-8" />, value: 3, suffix: "", label: "Countries (India, Singapore, USA)" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = end;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-overview");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated]);

  return (
    <section id="stats-overview" className="container mx-auto px-6 py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background border-primary/20">
            <div className="flex justify-center mb-4 text-primary">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold mb-2 text-primary">
              {counts[idx]}{stat.suffix}
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsOverview;
