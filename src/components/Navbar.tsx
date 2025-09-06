import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-navbar">
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between py-3.5">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 font-bold tracking-wide transition-smooth hover:opacity-80"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
              <Building2 className="w-5 h-5 text-white drop-shadow-md" />
            </div>
            <span className="text-foreground">SEBCON Trading One Member PLC</span>
          </button>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="px-3.5 py-2.5 rounded-xl transition-smooth hover:bg-white/5 text-foreground"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="px-3.5 py-2.5 rounded-xl transition-smooth hover:bg-white/5 text-foreground"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('why')}
              className="px-3.5 py-2.5 rounded-xl transition-smooth hover:bg-white/5 text-foreground"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-3.5 py-2.5 rounded-xl transition-smooth hover:bg-white/5 text-foreground"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('products')}
              className="hidden sm:flex"
            >
              View Products
            </Button>
            <Button 
              variant="brand"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};