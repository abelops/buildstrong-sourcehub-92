import { Card } from "@/components/ui/card";
import { Trophy, Shield, DollarSign, Headphones } from "lucide-react";
import whyChooseUsImage from "@/assets/C6C4679A-6804-4D3E-8C07-1983480B46BF.png";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Two decades of consistent supply to projects across Ethiopia."
    },
    {
      icon: Shield,
      title: "Quality & Compliance",
      description: "Products vetted for standards and durability."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent quotations with competitive rates and options."
    },
    {
      icon: Headphones,
      title: "Responsive Support",
      description: "We answer quickly and resolve procurement challenges."
    }
  ];

  return (
    <section id="why" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose SEBCON</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
          We combine selection, expertise, and service to keep your project on schedule.
        </p>

        <div className="mb-8">
          <Card className="p-0 shadow-elegant overflow-hidden max-w-2xl mx-auto">
            <img 
              src={whyChooseUsImage} 
              alt="SEBCON Trading - Trusted construction materials partner" 
              className="w-full h-64 object-cover"
            />
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 shadow-elegant transition-smooth hover:shadow-glow">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};