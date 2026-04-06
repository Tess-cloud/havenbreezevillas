import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { activities } from "@/lib/data";

import lakeNakuru from "@/assets/lake-nakuru.jpg";
import safariDrive from "@/assets/safari-drive.jpg";

const images: Record<string, string> = {
  "lake-nakuru": lakeNakuru,
  "safari-drive": safariDrive,
};

const Activities = () => (
  <Layout>
    <section className="relative h-[50vh] flex items-center justify-center">
      <img src={safariDrive} alt="Safari game drive" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-safari-brown/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Activities & Safari</h1>
        <p className="text-primary-foreground/80 mt-4">Explore the wonders of Kenya from our doorstep</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {activities.map((act, i) => (
            <div key={i} className="group rounded-lg overflow-hidden shadow-md bg-card">
              <div className="overflow-hidden h-64">
                <img src={images[act.image]} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2 text-foreground">{act.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{act.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="font-heading text-2xl text-foreground mb-4">Want to plan a safari?</h3>
          <p className="text-muted-foreground mb-6">Contact us to arrange game drives, cultural tours, and more.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-safari-olive-light text-primary-foreground px-8">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Activities;
