import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-white/8">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-muted-foreground">
            © {currentYear} SEBCON Trading One Member PLC • BuildStrong Supplies • TIN: 0098659325
          </div>
          <button 
            onClick={scrollToTop}
            className="brand-pill px-3 py-1.5 text-sm transition-smooth hover:bg-primary/20"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};