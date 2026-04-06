import { Link } from "react-router-dom";
import { Star, Sunrise, Mountain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import weekendImg from "@/assets/weekend-getaway.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";

const packages = [
  {
    title: "Romantic Escape",
    icon: Heart,
    features: ["2 nights in Master Suite", "Breakfast & dinner included", "Sunset garden setup", "Late checkout"],
    price: "KES 35,000",
  },
  {
    title: "Family Fun Weekend",
    icon: Star,
    features: ["2 nights in Family Villa", "Full board meals", "Lake Nakuru park entry", "Kids activities"],
    price: "KES 55,000",
  },
  {
    title: "Safari & Stay",
    icon: Mountain,
    features: ["3 nights accommodation", "Full board", "Game drive to Lake Nakuru", "Bird watching tour"],
    price: "KES 65,000",
  },
];

const WeekendGetaway = () => (
  <Layout>
    <section className="relative h-[50vh] flex items-center justify-center">
      <img src={weekendImg} alt="Weekend getaway" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-safari-brown/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Weekend Getaway</h1>
        <p className="text-primary-foreground/80 mt-4">Escape the city and reconnect with nature</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={villaExterior} alt="Villa getaway" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Your Perfect Weekend Awaits</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you're looking for a quiet retreat, a romantic escape, or a fun family adventure, our weekend getaway packages offer the perfect blend of relaxation and exploration.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wake up to birdsong, explore Lake Nakuru, enjoy home-cooked meals, and unwind in the serenity of the Kenyan countryside — all just a short drive from Nairobi.
            </p>
            <Link to="/booking">
              <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">Book a Getaway</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl text-center text-foreground mb-12">Weekend Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <pkg.icon size={32} className="text-primary mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-4">{pkg.title}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Sunrise size={14} className="text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <p className="font-heading text-2xl text-foreground mb-4">{pkg.price}</p>
                <Link to="/booking">
                  <Button className="w-full bg-primary hover:bg-safari-olive-light text-primary-foreground">Book Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default WeekendGetaway;
