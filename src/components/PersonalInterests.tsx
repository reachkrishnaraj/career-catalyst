import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import shuttleIcon from "@/assets/icons/shuttle.png";
import racingCarIcon from "@/assets/icons/racing-car.png";
import planetOrbitsIcon from "@/assets/icons/planet-orbits.png";
import homeSweetHomeIcon from "@/assets/icons/home-sweet-home.png";

const PersonalInterests = () => {
  const interests = [
    {
      icon: <img src={shuttleIcon} alt="Badminton" className="h-8 w-8 object-contain" />,
      title: "Badminton Enthusiast",
      description: "Passionate about badminton, playing regularly to stay active and competitive."
    },
    {
      icon: <img src={racingCarIcon} alt="Formula 1" className="h-8 w-8 object-contain" />,
      title: "Formula 1 Fan",
      description: "Avid follower of F1 racing, appreciating the engineering excellence and competitive strategy."
    },
    {
      icon: <img src={planetOrbitsIcon} alt="Science & Space" className="h-8 w-8 object-contain" />,
      title: "Science & Space",
      description: "Fascinated by cosmic and evolutionary sciences, exploring through documentaries and scientific literature."
    },
    {
      icon: <img src={homeSweetHomeIcon} alt="Family" className="h-8 w-8 object-contain" />,
      title: "Family Time",
      description: "Lives in Austin, Texas with wife and 4-year-old son. Values work-life balance and family activities."
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12 bg-secondary/30">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-primary" />
        Beyond Work
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, idx) => (
          <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3 text-primary">
              {interest.icon}
            </div>
            <h3 className="font-bold mb-2">{interest.title}</h3>
            <p className="text-sm text-muted-foreground">{interest.description}</p>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8 p-6 bg-primary/5 border-primary/20 text-center">
        <p className="text-foreground">
          <span className="font-bold">Location:</span> Austin, Texas | 
          <span className="font-bold"> Work Status:</span> US Citizen, India OCI | 
          <span className="font-bold"> Availability:</span> Open to new opportunities
        </p>
      </Card>
    </section>
  );
};

export default PersonalInterests;
