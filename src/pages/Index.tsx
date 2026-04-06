import { Link } from "react-router-dom";
import { Star, Wifi, Car, Shield, MapPin, ChevronDown, Utensils, Trees, Droplets, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { rooms, testimonials } from "@/lib/data";

import heroSunset from "@/assets/hero-sunset.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import roomMaster from "@/assets/room-master.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import lakeNakuru from "@/assets/lake-nakuru.jpg";
import diningArea from "@/assets/dining-area.jpg";
import signboard from "@/assets/signboard.png";
import safariDrive from "@/assets/safari-drive.jpg";

const roomImages: Record<string, string> = {
  "room-master": roomMaster,
  "room-twin": roomTwin,
  "villa-exterior": villaExterior,
};

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Secure Parking" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Utensils, label: "Full Kitchen" },
  { icon: Trees, label: "Garden" },
  { icon: Droplets, label: "Hot Showers" },
  { icon: Flame, label: "BBQ Area" },
  { icon: MapPin, label: "Near Lake Nakuru" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center">
      <img src={heroSunset} alt="African sunset over Lake Nakuru" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-safari-brown/40" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-shadow-hero mb-4">
          Your Peaceful Stopover in Nakuru
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 font-light">
          Cozy 2-bedroom villas with Wi-Fi, parking, and safari convenience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking">
            <Button size="lg" className="bg-safari-gold hover:bg-safari-warm text-primary-foreground px-8 text-base">
              Reserve Now
            </Button>
          </Link>
          <Link to="/accommodations">
            <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base">
              Explore The Camp
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>

    {/* About / Welcome */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Welcome to Haven Breeze Villas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Perfectly located near Lake Nakuru National Park and along the route to Maasai Mara, our cozy 2-bedroom villas offer comfort, privacy, and convenience for travelers, families, and safari guests.
            </p>
            <div className="mb-4">
              <p className="text-muted-foreground leading-relaxed mb-2">Each villa features:</p>
              <ul className="space-y-1.5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Two spacious bedrooms</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> A comfortable living area</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Fully equipped kitchen</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Hot showers and reliable water supply</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Free Wi-Fi</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Secure parking</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're exploring Lake Nakuru, heading to Maasai Mara, or simply looking for a quiet getaway, Haven Breeze Villas provides a relaxing and secure environment to unwind.
            </p>
            <div className="flex gap-4">
              <Link to="/accommodations">
                <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">Explore The Camp</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary hover:bg-primary/5 text-foreground">Contact Us</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={signboard} alt="Haven Breeze Villas signboard" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Accommodations — alternating layout */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-4">Our Accommodations</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose from our carefully designed rooms and villas, each offering a unique safari lodge experience.
        </p>
        {rooms.map((room, i) => (
          <div key={room.id} className={`flex flex-col lg:flex-row gap-10 mb-16 last:mb-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <img src={roomImages[room.image]} alt={room.name} className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="font-heading text-2xl text-foreground mb-3">{room.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{room.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.features.slice(0, 5).map((f) => (
                  <span key={f} className="flex items-center gap-1 text-xs bg-background px-3 py-1.5 rounded-full text-foreground">
                    <Star size={10} className="text-safari-gold" /> {f}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-heading text-foreground">KES {room.price.toLocaleString()}<span className="text-sm text-muted-foreground font-body">/night</span></span>
                <Link to={`/booking?room=${room.id}`}>
                  <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Amenities */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">Amenities & Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-3 p-6 bg-secondary rounded-lg hover:shadow-md transition-shadow">
              <a.icon size={28} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Activities highlight */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={safariDrive} alt="Safari game drive" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Safari & Activities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We can assist with local tours and park visits, safari game drives to Lake Nakuru and Maasai Mara, bird watching excursions, cultural community visits, and airport/town transfers.
            </p>
            <Link to="/activities">
              <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">View Activities</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">Gallery</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[villaExterior, roomMaster, lakeNakuru, diningArea, roomTwin, heroSunset].map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={img} alt={`Haven Breeze gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button variant="outline" className="border-primary text-foreground hover:bg-primary/5">View All Photos</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">Guest Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-safari-gold text-safari-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="font-medium text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24">
      <img src={lakeNakuru} alt="Lake Nakuru flamingos" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-safari-brown/60" />
      <div className="relative z-10 text-center px-4">
        <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground text-shadow-hero mb-4">
          Ready for Your Safari Adventure?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Book your stay at Haven Breeze Villas today and experience the beauty of Lake Nakuru.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking">
            <Button size="lg" className="bg-safari-gold hover:bg-safari-warm text-primary-foreground px-8">Reserve Now</Button>
          </Link>
          <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl text-center text-foreground mb-8">Find Us</h2>
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.3444!2d36.05!3d-0.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829f4a0d6e2e!2sLake+Nakuru!5e0!3m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Haven Breeze Villas Location"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
