import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, Globe, RefreshCw, TrendingUp, Lock } from "lucide-react";

const PaymentExpertise = () => {
  const expertise = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments & Billing",
      description: "End-to-end payment processing systems with high throughput and reliability",
      color: "text-blue-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "PCI-DSS Compliance & Security",
      description: "Secure payment handling meeting PCI-DSS and industry security standards",
      color: "text-red-500"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Multi-Gateway Integration",
      description: "Seamless integration with multiple payment processors and gateways",
      color: "text-green-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Subscription & Recurring Billing",
      description: "Complex subscription models and automated recurring payment systems",
      color: "text-purple-500"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Fraud Detection & Risk Management",
      description: "Advanced fraud prevention and account takeover protection systems",
      color: "text-orange-500"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Payment Processing",
      description: "Multi-currency, multi-region payment processing at scale",
      color: "text-cyan-500"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Settlement & Reconciliation",
      description: "Automated payment reconciliation and settlement systems",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="expertise" className="container mx-auto px-6 py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <CreditCard className="h-8 w-8 text-primary" />
        Payments & Financial Systems Expertise
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {expertise.map((item, idx) => (
          <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 glass-card">
            <div className={`flex items-center gap-3 mb-3 ${item.color}`}>
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </Card>
        ))}
      </div>
      
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 glow">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-sm">Payment Gateway Modernization</Badge>
          <Badge variant="secondary" className="text-sm">High-Volume Transaction Processing</Badge>
          <Badge variant="secondary" className="text-sm">Payment Routing Optimization</Badge>
          <Badge variant="secondary" className="text-sm">Financial Compliance</Badge>
          <Badge variant="secondary" className="text-sm">Cross-Border Payments</Badge>
        </div>
      </Card>
    </section>
  );
};

export default PaymentExpertise;
