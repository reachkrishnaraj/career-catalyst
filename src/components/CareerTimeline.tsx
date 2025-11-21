import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const CareerTimeline = () => {
  const timeline = [
    {
      company: "TBD Health",
      role: "Chief Technology Officer (CTO) / Architect",
      period: "Apr 2022 - Jul 2024",
      location: "Austin, TX",
      highlights: ["Built Tech Stack from Ground Up", "HIPAA-compliant eCommerce Platform", "EMR System Development"],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Paysafe (via Altimetrik)",
      role: "Consultant Architect",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      highlights: ["Platform Modernization", "Payment Gateway Architecture", "PCI-DSS Compliance"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Turo",
      role: "Staff Software Engineer",
      period: "Oct 2018 - Mar 2020",
      location: "San Francisco, CA",
      highlights: ["ATO Prevention System", "Revenue Expansion (18-20 year olds)", "Search Performance +30%"],
      color: "from-green-500 to-emerald-500",
    },
    {
      company: "Netflix",
      role: "Senior Software Engineer",
      period: "Mar 2016 - May 2018",
      location: "Los Gatos, CA",
      highlights: ["150M+ Monthly Transactions", "Payment Reconciliation System", "Dynamic Processor Failover"],
      color: "from-red-500 to-orange-500",
    },
    {
      company: "Walmart eCommerce Labs",
      role: "Lead Engineer",
      period: "Jun 2013 - Mar 2016",
      location: "San Francisco, CA",
      highlights: ["eCommerce Platform Features", "Fulfillment System", "Catalog Management"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      company: "PayPal",
      role: "Software Engineer",
      period: "Aug 2006 - Nov 2011",
      location: "San Jose, CA",
      highlights: ["Payments Architecture", "API Automation", "PCI Compliance SME"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="timeline" className="container mx-auto px-6 py-16 bg-secondary/30">
      <h2 className="text-3xl font-bold mb-12 text-center">Career Journey</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
        
        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className={`relative grid md:grid-cols-2 gap-8 ${idx % 2 === 0 ? "" : "md:grid-flow-col-dense"}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
              
              {/* Content */}
              <Card className={`p-6 hover:shadow-xl transition-all duration-300 ${idx % 2 === 0 ? "md:mr-8" : "md:ml-8 md:col-start-2"} animate-fade-in`}>
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold mb-3`}>
                  {item.period}
                </div>
                
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{item.company}</h3>
                    <p className="text-muted-foreground">{item.role}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      {item.location}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <Badge key={hIdx} variant="secondary" className="mr-2 mb-2">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
