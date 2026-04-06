import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

import heroSunset from "@/assets/hero-sunset.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import roomMaster from "@/assets/room-master.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import lakeNakuru from "@/assets/lake-nakuru.jpg";
import diningArea from "@/assets/dining-area.jpg";
import safariDrive from "@/assets/safari-drive.jpg";
import zebras from "@/assets/zebras.jpg";

const galleryImages = [
  { src: villaExterior, alt: "Villa exterior with thatched roof" },
  { src: roomMaster, alt: "Master suite interior" },
  { src: zebras, alt: "Zebras in the wild" },
  { src: lakeNakuru, alt: "Lake Nakuru flamingos" },
  { src: roomTwin, alt: "Twin room" },
  { src: diningArea, alt: "Outdoor dining area" },
  { src: safariDrive, alt: "Safari game drive" },
  { src: heroSunset, alt: "African sunset" },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      <section className="relative h-[40vh] flex items-center justify-center">
        <img src={zebras} alt="Zebras" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-safari-brown/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground text-shadow-hero">Gallery</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="rounded-lg overflow-hidden aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
