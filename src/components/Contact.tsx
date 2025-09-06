import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = "New inquiry from SEBCON website";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    const mailtoLink = `mailto:info@sebcon.example?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Email client opened",
      description: "If your email app didn't open, please contact us at info@sebcon.example"
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
          Tell us what you need and we'll get back with a quote.
        </p>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Contact Form */}
          <Card className="p-6 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-input border-white/12"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-input border-white/12"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+251 ..."
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-input border-white/12"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="List items, quantities, or attach BOQ (paste link)"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="bg-input border-white/12 min-h-[120px] resize-y"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" variant="brand">
                  Send Inquiry
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => window.location.href = "mailto:info@sebcon.example?subject=Inquiry%20from%20Website"}
                >
                  Email Directly
                </Button>
              </div>
            </form>
          </Card>

          {/* Company Details */}
          <Card className="p-6 shadow-elegant">
            <h3 className="text-xl font-bold mb-4">Company Details</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <strong>SEBCON Trading One Member PLC</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                Operating name: <strong>BuildStrong Supplies</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <strong>TIN:</strong> 0098659325
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <strong>Location:</strong> Ethiopia
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <strong>Email:</strong> info@sebcon.example
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <strong>Phone:</strong> +251-930-616-050 / +251-305-834-40
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
              Replace placeholder contact details with your actual information before publishing.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};