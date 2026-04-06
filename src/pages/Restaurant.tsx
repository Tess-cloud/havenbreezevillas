import { Link } from "react-router-dom";
import { Utensils, Coffee, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import restaurantImg from "@/assets/restaurant-outdoor.jpg";
import diningArea from "@/assets/dining-area.jpg";

const highlights = [
  { icon: Utensils, title: "Catered Meals", desc: "Full breakfast, lunch, and dinner available on request with local and international cuisine." },
  { icon: Coffee, title: "Self-Catering", desc: "Fully equipped kitchen in every villa for guests who prefer to cook their own meals." },
  { icon: Leaf, title: "Fresh & Local", desc: "We source fresh ingredients from local farms and markets around Nakuru." },
  { icon: Clock, title: "Flexible Dining", desc: "Early breakfast for safari guests, packed lunches, and late dinners — all on your schedule." },
];

const Restaurant = () => (
  <Layout>
    <section className="relative h-[50vh] flex items-center justify-center">
      <img src={restaurantImg} alt="Haven Breeze dining" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-safari-brown/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Restaurant & Dining</h1>
        <p className="text-primary-foreground/80 mt-4">Catered & self-catering options for every guest</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">A Taste of Kenya</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Haven Breeze Villas, dining is an experience. Whether you prefer freshly prepared meals by our cook or the freedom of your own fully equipped kitchen, we cater to your needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Enjoy breakfast on the veranda as the sun rises, pack a lunch for your safari adventure, or unwind with a home-cooked dinner under the stars. We can arrange special dining for groups and celebrations.
            </p>
            <Link to="/booking">
              <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">Book With Catering</Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={diningArea} alt="Dining area" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl text-center text-foreground mb-12">Dining Options</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card p-8 rounded-lg shadow-md text-center">
              <h.icon size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-24">
      <img src={restaurantImg} alt="Dining" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-safari-brown/60" />
      <div className="relative z-10 text-center px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground text-shadow-hero mb-4">
          Ready to Dine With Us?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Let us know your dietary preferences and meal plan when booking.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-safari-olive-light text-primary-foreground px-8">Contact Us</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Restaurant;
