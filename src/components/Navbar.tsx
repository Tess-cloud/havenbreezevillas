import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "The Camp", path: "/accommodations" },
  { label: "Activities", path: "/activities" },
  { label: "Restaurant", path: "/restaurant" },
  { label: "Gallery", path: "/gallery" },
  { label: "Weekend Getaway", path: "/weekend-getaway" },
  { label: "Bush Wedding", path: "/bush-wedding" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="font-heading text-xl md:text-2xl tracking-wide text-primary-foreground">
          Haven Breeze Villas
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-wider transition-colors ${
                location.pathname === link.path
                  ? "text-safari-gold font-medium"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/booking">
            <Button size="sm" className="bg-safari-gold hover:bg-safari-warm text-primary-foreground text-xs uppercase tracking-wider">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="xl:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-primary border-t border-primary-foreground/10 pb-6">
          <div className="container mx-auto px-4 flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm py-2 ${
                  location.pathname === link.path
                    ? "text-safari-gold font-medium"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)}>
              <Button className="w-full bg-safari-gold hover:bg-safari-warm text-primary-foreground mt-2">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
