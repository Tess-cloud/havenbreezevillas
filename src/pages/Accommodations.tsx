import { Link, useParams } from "react-router-dom";
import { Check, Users, Maximize, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { rooms } from "@/lib/data";

import roomMaster from "@/assets/room-master.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";

const images: Record<string, string> = {
  "room-master": roomMaster,
  "room-twin": roomTwin,
  "villa-exterior": villaExterior,
};

const AccommodationDetail = ({ slug }: { slug: string }) => {
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return <div className="py-40 text-center">Room not found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/accommodations" className="text-primary hover:underline text-sm mb-6 inline-block">← Back to all rooms</Link>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img src={images[room.image]} alt={room.name} className="w-full h-[500px] object-cover" />
        </div>
        <div>
          <h1 className="font-heading text-4xl text-foreground mb-4">{room.name}</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">{room.longDescription}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} className="text-primary" /> {room.capacity} Guests
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BedDouble size={16} className="text-primary" /> {room.beds}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Maximize size={16} className="text-primary" /> {room.size}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-heading text-lg mb-3 text-foreground">Features</h3>
            <div className="grid grid-cols-2 gap-2">
              {room.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary" /> {f}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-2xl font-heading text-foreground">KES {room.price.toLocaleString()}<span className="text-sm text-muted-foreground font-body">/night</span></span>
            <Link to={`/booking?room=${room.id}`}>
              <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground px-8">Book This Room</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccommodationsList = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center">
      <img src={villaExterior} alt="Haven Breeze Villas" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-safari-brown/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Our Accommodations</h1>
        <p className="text-primary-foreground/80 mt-4">Safari comfort meets modern convenience</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {rooms.map((room, i) => (
          <div key={room.id} className={`flex flex-col lg:flex-row gap-10 mb-16 last:mb-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <img src={images[room.image]} alt={room.name} className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-foreground mb-4">{room.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{room.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.features.slice(0, 5).map((f) => (
                  <span key={f} className="flex items-center gap-1 text-xs bg-secondary px-3 py-1.5 rounded-full text-foreground">
                    <Check size={12} className="text-primary" /> {f}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-heading text-foreground">KES {room.price.toLocaleString()}/night</span>
                <Link to={`/accommodations/${room.slug}`}>
                  <Button variant="outline" className="border-primary text-foreground hover:bg-primary/5">View Details</Button>
                </Link>
                <Link to={`/booking?room=${room.id}`}>
                  <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

const Accommodations = () => {
  const { slug } = useParams();
  return (
    <Layout>
      {slug ? <AccommodationDetail slug={slug} /> : <AccommodationsList />}
    </Layout>
  );
};

export default Accommodations;
