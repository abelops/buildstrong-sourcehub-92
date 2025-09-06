import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Zap, Building } from "lucide-react";

export const Products = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-5">
        <h2 className="font-heading text-3xl sm:text-4xl mb-4">Products & Services</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
          Browse our core categories. Need a specific brand or spec sheet?{" "}
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-smooth"
          >
            Request a quote
          </button>.
        </p>

        {/* Main Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-elegant">
              <Badge className="brand-pill mb-4">
                <Droplets className="w-4 h-4" />
                Sanitary Materials
              </Badge>
              <h3 className="text-xl font-bold mb-3">Sanitary</h3>
            <p className="text-muted-foreground mb-4">
              Pipes, fittings, fixtures, and water systems.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                Taps, mixers, showers, valves
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                uPVC/HDPE/PEX pipes & fittings
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                Water tanks, heaters, accessories
              </li>
            </ul>
          </Card>

          <Card className="p-6 shadow-elegant">
              <Badge className="accent-pill mb-4">
                <Zap className="w-4 h-4" />
                Electrical Materials
              </Badge>
              <h3 className="text-xl font-bold mb-3">Electrical</h3>
            <p className="text-muted-foreground mb-4">
              Certified electrical supplies for safe installations.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                Cables & conductors, trunking
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                Switches, sockets, DBs, breakers
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                Lighting (LED panels, floodlights)
              </li>
            </ul>
          </Card>

          <Card className="p-6 shadow-elegant">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
                <Building className="w-4 h-4" />
                Building Materials
              </Badge>
              <h3 className="text-xl font-bold mb-3">Building</h3>
            <p className="text-muted-foreground mb-4">
              Construction materials for structure and finishes.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                Cement, rebar (steel bars), aggregates
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                Tiles, gypsum boards, adhesives
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                Paints, <strong>Wall Putty</strong>, <strong>Prime Coat</strong>
              </li>
            </ul>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-3">Procurement & Sourcing</h3>
            <p className="text-muted-foreground">
              We source per your BOQ/specs and provide quotations with delivery timelines.
            </p>
          </Card>
          
          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-3">Technical Support</h3>
            <p className="text-muted-foreground">
              Get guidance on product selection, compatibility, and maintenance.
            </p>
          </Card>
          
          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-3">Logistics</h3>
            <p className="text-muted-foreground">
              Coordinated delivery options to your site or warehouse.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};