import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { toast } from "sonner";

import lakeNakuru from "@/assets/lake-nakuru.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <Layout>
      <section className="relative h-[40vh] flex items-center justify-center">
        <img src={lakeNakuru} alt="Lake Nakuru" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-safari-brown/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our villas or need help planning your safari? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <a href="tel:+254700000000" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"><Phone size={20} className="text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">+254 700 000 000</p></div>
                </a>
                <a href="mailto:info@havenbreezevillas.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"><Mail size={20} className="text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">info@havenbreezevillas.com</p></div>
                </a>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"><MapPin size={20} className="text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Location</p><p className="font-medium">Nakuru, Kenya</p></div>
                </div>
              </div>
              <div className="mt-8">
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground gap-2">
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg space-y-6">
              <h3 className="font-heading text-xl text-foreground">Send a Message</h3>
              <div>
                <Label className="text-foreground">Name</Label>
                <Input className="mt-2" placeholder="Your name" required />
              </div>
              <div>
                <Label className="text-foreground">Email</Label>
                <Input className="mt-2" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label className="text-foreground">Message</Label>
                <Textarea className="mt-2" rows={5} placeholder="How can we help?" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-safari-olive-light text-primary-foreground">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
