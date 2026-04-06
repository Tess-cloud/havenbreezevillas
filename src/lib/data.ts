export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  capacity: number;
  beds: string;
  size: string;
  image: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    id: "master-suite",
    name: "Master Suite",
    slug: "master-suite",
    description: "Spacious king-bed suite with en-suite bathroom and garden views.",
    longDescription: "Our elegant Master Suite features a king-size bed with premium linens, an en-suite bathroom with rain shower, and a private balcony overlooking the lush gardens. The warm wood-and-stone interiors create an authentic safari lodge atmosphere while providing every modern comfort.",
    price: 12000,
    capacity: 2,
    beds: "1 King Bed",
    size: "35 sqm",
    image: "room-master",
    features: ["King Bed", "En-suite Bathroom", "Garden View", "Wi-Fi", "Air Conditioning", "Mini Fridge", "Room Service"],
  },
  {
    id: "twin-room",
    name: "Twin Room",
    slug: "twin-room",
    description: "Cozy twin room perfect for friends or solo travelers.",
    longDescription: "The Twin Room offers two comfortable single beds in a warm, safari-themed setting. Ideal for friends traveling together or solo adventurers, this room features wooden décor, wildlife artwork, and a private veranda with bush views.",
    price: 8500,
    capacity: 2,
    beds: "2 Single Beds",
    size: "28 sqm",
    image: "room-twin",
    features: ["Twin Beds", "Private Bathroom", "Bush View", "Wi-Fi", "Ceiling Fan", "Writing Desk"],
  },
  {
    id: "family-villa",
    name: "Family Villa",
    slug: "family-villa",
    description: "Full 2-bedroom villa with kitchen, living area, and private parking.",
    longDescription: "Our Family Villa is a complete 2-bedroom self-contained unit featuring a master bedroom with king bed, a second bedroom with twin beds, a fully equipped kitchen, spacious living room, and a private veranda. Perfect for families or extended stays near Lake Nakuru.",
    price: 18000,
    capacity: 4,
    beds: "1 King + 2 Singles",
    size: "65 sqm",
    image: "villa-exterior",
    features: ["2 Bedrooms", "Full Kitchen", "Living Room", "Private Parking", "Wi-Fi", "Hot Water", "BBQ Area", "Garden"],
  },
];

export const activities = [
  {
    title: "Lake Nakuru National Park",
    description: "Famous for its flamingos and rhino sanctuary. Just 15 minutes from our villas.",
    image: "lake-nakuru",
  },
  {
    title: "Maasai Mara Safari",
    description: "We're perfectly positioned along the route to Kenya's most iconic game reserve.",
    image: "safari-drive",
  },
  {
    title: "Bird Watching",
    description: "Over 450 bird species in the Lake Nakuru ecosystem, right at your doorstep.",
    image: "lake-nakuru",
  },
  {
    title: "Cultural Tours",
    description: "Visit local Maasai and Kalenjin communities for an authentic cultural experience.",
    image: "safari-drive",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely stunning villas! The location is perfect for exploring Lake Nakuru. Clean rooms, friendly staff, and amazing sunset views.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "Best stopover on our way to Maasai Mara. The family villa was spacious and well-equipped. Will definitely come back!",
    rating: 5,
  },
  {
    name: "Amina W.",
    text: "A hidden gem near Nakuru. Peaceful, secure, and great value. The Wi-Fi and parking were a huge plus for us.",
    rating: 4,
  },
];
