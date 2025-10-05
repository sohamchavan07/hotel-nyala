import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter your message",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (you can replace this with actual API call)
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="phone"
                    type="tel" 
                    placeholder="Your Phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">9970592229</p>
                    <p className="text-sm text-muted-foreground mt-1">Available 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">[Your Email]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">[Your Full Address]</p>
                    <p className="text-sm text-muted-foreground mt-1">Open Daily: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Hotel Nyala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
