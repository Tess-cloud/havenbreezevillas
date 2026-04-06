import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-safari-brown text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl mb-4">Haven Breeze Villas</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Your peaceful stopover near Lake Nakuru, along the route to Maasai Mara.
            Short & long term stay. Catered & self-catering.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/accommodations" className="hover:text-primary-foreground transition-colors">The Camp</Link>
            <Link to="/activities" className="hover:text-primary-foreground transition-colors">Activities</Link>
            <Link to="/restaurant" className="hover:text-primary-foreground transition-colors">Restaurant</Link>
            <Link to="/gallery" className="hover:text-primary-foreground transition-colors">Gallery</Link>
            <Link to="/weekend-getaway" className="hover:text-primary-foreground transition-colors">Weekend Getaway</Link>
            <Link to="/bush-wedding" className="hover:text-primary-foreground transition-colors">Bush Wedding</Link>
            <Link to="/booking" className="hover:text-primary-foreground transition-colors">Book Now</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={14} /> +254 700 000 000
            </a>
            <a href="mailto:info@havenbreezevillas.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={14} /> info@havenbreezevillas.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" /> Nakuru, Kenya
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-primary-foreground transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
          </div>
          <div className="mt-6">
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-safari-olive px-5 py-2.5 rounded text-sm font-medium hover:bg-safari-olive-light transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Haven Breeze Villas. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
