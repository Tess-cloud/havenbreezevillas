import { Link } from "react-router-dom";
import { Heart, Camera, Music, Users, Utensils, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import weddingImg from "@/assets/bush-wedding.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";

const features = [
  { icon: MapPin, title: "Stunning Venue", desc: "Natural bush setting with views of the Rift Valley" },
  { icon: Users, title: "Intimate Gatherings", desc: "Perfect for groups of 20–80 guests" },
  { icon: Utensils, title: "Catered Reception", desc: "Full catering with local and international cuisine" },
  { icon: Camera, title: "Photo Opportunities", desc: "Endless scenic backdrops for your wedding album" },
  { icon: Music, title: "Entertainment", desc: "Space for live music, DJ, and traditional performances" },
  { icon: Heart, title: "Honeymoon Suite", desc: "Complimentary Master Suite for the newlyweds" },
];

const BushWedding = () => (
  <Layout>
    <section className="relative h-[50vh] flex items-center justify-center">
      <img src={weddingImg} alt="Bush wedding venue" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-safari-brown/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Bush Wedding</h1>
        <p className="text-primary-foreground/80 mt-4">Say "I do" in the heart of the African bush</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Your Dream Bush Wedding</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Imagine exchanging vows under towering acacia trees as the golden African sun sets behind the hills. Haven Breeze Villas offers a unique and intimate bush wedding venue near Lake Nakuru.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the ceremony to the reception, we handle every detail — décor, catering, accommodation for your guests, and coordination. Let us make your special day truly unforgettable.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">Enquire Now</Button>
              </Link>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-foreground hover:bg-primary/5">WhatsApp Us</Button>
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={villaExterior} alt="Wedding venue" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl text-center text-foreground mb-12">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-8 rounded-lg shadow-md text-center">
              <f.icon size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-24">
      <img src={weddingImg} alt="Bush wedding" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-safari-brown/60" />
      <div className="relative z-10 text-center px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground text-shadow-hero mb-4">
          Start Planning Your Bush Wedding
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Contact us to discuss your vision and get a custom quote.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-safari-olive-light text-primary-foreground px-8">Get in Touch</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default BushWedding;
