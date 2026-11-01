export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "full-home",
    number: "01",
    title: "Full Home Interior Design",
    description: "Complete interior solutions designed around your lifestyle and preferences.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    alt: "Full luxury home interior design showcase with cohesive architectural layout",
    features: [
      "End-to-end space planning",
      "Living, dining & bedroom harmony",
      "Bespoke joinery & lighting layouts"
    ]
  },
  {
    id: "modular-kitchen",
    number: "02",
    title: "Modular Kitchen Design",
    description: "Functional and elegant kitchen spaces with thoughtful storage solutions.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    alt: "Luxury contemporary modular kitchen with seamless quartz countertops and fluted glass cabinetry",
    features: [
      "Ergonomic workflow planning",
      "Premium soft-close hardware",
      "Moisture-resistant cabinetry finishes"
    ]
  },
  {
    id: "living-room",
    number: "03",
    title: "Living Room Interiors",
    description: "Stylish and comfortable living spaces designed for everyday experiences.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    alt: "Warm contemporary living room interior with custom TV unit, ambient cove lighting and plush seating",
    features: [
      "Statement accent wall & TV units",
      "Curated false ceiling lighting",
      "Comfort-centered spatial flow"
    ]
  },
  {
    id: "bedroom-interiors",
    number: "04",
    title: "Bedroom Interior Design",
    description: "Relaxing and personalized bedroom interiors.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    alt: "Serene master bedroom interior with upholstered headboard and warm ambient illumination",
    features: [
      "Calming acoustic & lighting design",
      "Integrated bedside consoles",
      "Custom dressing & vanity corners"
    ]
  },
  {
    id: "wardrobe-storage",
    number: "05",
    title: "Wardrobe & Storage Solutions",
    description: "Smart storage solutions with elegant finishes.",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
    alt: "Floor-to-ceiling modern wardrobe with tinted glass doors and concealed LED strip illumination",
    features: [
      "Walk-in & sliding wardrobe systems",
      "Thoughtful partition accessories",
      "Sleek profile handles & mirrors"
    ]
  },
  {
    id: "commercial-interiors",
    number: "06",
    title: "Commercial Interior Design",
    description: "Professional and functional interiors for business spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    alt: "Upscale corporate consultation lounge and executive office space with fluted wood panelling",
    features: [
      "Executive suites & reception zones",
      "Brand-aligned professional aesthetics",
      "Productivity-driven lighting & acoustics"
    ]
  }
];
