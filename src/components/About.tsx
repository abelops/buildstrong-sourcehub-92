import { Card } from "@/components/ui/card";
import aboutImage1 from "@/assets/7E819412-7EFE-4908-95D1-379764A6DD4C.png";
import aboutImage2 from "@/assets/A6B488B1-5C0C-4D88-8D9C-156E76C9F5D4.png";

export const About = () => {
  return (
    <section id="about" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-5">
        <h2 className="font-heading text-3xl sm:text-4xl mb-4">About Us</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
          SEBCON Trading One Member PLC, operating as <strong>BuildStrong Supplies</strong>, is a trusted Ethiopian supplier of sanitary, electrical, and building materials. For over two decades, we've served developers, contractors, and homeowners with reliable products and responsive service.
        </p>
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="space-y-6">
            <Card className="p-0 shadow-elegant overflow-hidden">
              <img 
                src={aboutImage1} 
                alt="SEBCON Trading - Professional construction materials supplier" 
                className="w-full h-48 object-cover"
              />
            </Card>
            
            <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              To simplify material procurement by offering quality-assured products, transparent pricing, and dependable delivery.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                Ethical sourcing from reputable manufacturers
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                Technical guidance for product selection
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                On-time fulfillment for projects of all sizes
              </li>
            </ul>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-0 shadow-elegant overflow-hidden">
              <img 
                src={aboutImage2} 
                alt="Quality construction materials and professional service" 
                className="w-full h-48 object-cover"
              />
            </Card>
            
            <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-4">At a Glance</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                Registered in Ethiopia — <strong>TIN: 0098659325</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                Sector coverage: Sanitary, Electrical, Building
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                Clients: Contractors, builders, property managers, homeowners
              </li>
            </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};