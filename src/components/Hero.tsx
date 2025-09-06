import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/09DDA5BF-BF19-4625-B5E4-B39DA2A68D14.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="container mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          {/* Left Content */}
          <div>
            <Badge className="accent-pill mb-4 uppercase tracking-widest text-xs font-bold">
              BuildStrong Supplies
            </Badge>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Over <span className="text-gradient">20 Years</span> of Excellence in Construction Materials Supply
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Trusted supplier of <strong className="text-primary">Sanitary (S)</strong>, <strong className="text-primary">Electrical (E)</strong>, and <strong className="text-primary">Building (B)</strong> materials for contractors, builders, and homeowners across Ethiopia.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Button 
                variant="brand" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
            
            <Badge className="brand-pill">
              TIN: 0098659325
            </Badge>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <Card className="bg-gradient-surface border-white/8 p-0 shadow-elegant overflow-hidden">
              <img 
                src={heroImage} 
                alt="SEBCON Trading BuildStrong Supplies - Quality construction materials" 
                className="w-full h-48 object-cover"
              />
            </Card>
            
            <Card className="bg-gradient-surface border-white/8 p-6 shadow-elegant">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <h4 className="text-xl font-bold mb-1">20+ yrs</h4>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <h4 className="text-xl font-bold mb-1">3+ Sectors</h4>
                <div className="text-xs text-muted-foreground">Sanitary • Electrical • Building</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <h4 className="text-xl font-bold mb-1">1000s</h4>
                <div className="text-sm text-muted-foreground">of trusted products</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card className="p-4 bg-white/5 border-white/10">
                <Badge className="mb-3 bg-accent/20 text-accent-foreground border-accent/30">
                  Quality Assured
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Reliable brands, verified specs, and consistent supply.
                </p>
              </Card>
              
              <Card className="p-4 bg-white/5 border-white/10">
                <Badge className="mb-3 bg-secondary/20 text-secondary-foreground border-secondary/30">
                  Competitive Pricing
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Bulk options and fair quotes that respect your budget.
                </p>
              </Card>
            </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};