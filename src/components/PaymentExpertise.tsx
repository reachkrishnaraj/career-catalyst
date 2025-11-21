import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, Globe, RefreshCw, TrendingUp, Lock } from "lucide-react";

const PaymentExpertise = () => {
  const expertise = [
    {
      icon: <CreditCard className="h-5 w-5 stroke-[1.5]" />,
      title: "Payments & Billing",
      description: "End-to-end payment processing systems with high throughput and reliability"
    },
    {
      icon: <Shield className="h-5 w-5 stroke-[1.5]" />,
      title: "PCI-DSS Compliance & Security",
      description: "Secure payment handling meeting PCI-DSS and industry security standards"
    },
    {
      icon: <RefreshCw className="h-5 w-5 stroke-[1.5]" />,
      title: "Multi-Gateway Integration",
      description: "Seamless integration with multiple payment processors and gateways"
    },
    {
      icon: <TrendingUp className="h-5 w-5 stroke-[1.5]" />,
      title: "Subscription & Recurring Billing",
      description: "Complex subscription models and automated recurring payment systems"
    },
    {
      icon: <Lock className="h-5 w-5 stroke-[1.5]" />,
      title: "Fraud Detection & Risk Management",
      description: "Advanced fraud prevention and account takeover protection systems"
    },
    {
      icon: <Globe className="h-5 w-5 stroke-[1.5]" />,
      title: "Global Payment Processing",
      description: "Multi-currency, multi-region payment processing at scale"
    },
    {
      icon: <RefreshCw className="h-5 w-5 stroke-[1.5]" />,
      title: "Settlement & Reconciliation",
      description: "Automated payment reconciliation and settlement systems"
    }
  ];

  return (
    <section id="expertise" className="container mx-auto px-6 py-20 md:py-32">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 flex items-center gap-3">
        <CreditCard className="h-6 w-6 text-foreground stroke-[1.5]" />
        Payments & Financial Systems Expertise
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {expertise.map((item, idx) => (
          <Card key={idx} className="p-8 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 text-foreground/60">
              {item.icon}
              <h3 className="font-semibold text-base">{item.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
      
      <Card className="p-8 border">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Payment Gateway Modernization</Badge>
          <Badge variant="outline">High-Volume Transaction Processing</Badge>
          <Badge variant="outline">Payment Routing Optimization</Badge>
          <Badge variant="outline">Financial Compliance</Badge>
          <Badge variant="outline">Cross-Border Payments</Badge>
        </div>
      </Card>
    </section>
  );
};

export default PaymentExpertise;
