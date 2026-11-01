export interface InspirationItem {
  id: string;
  category:
    | "Modern Living Rooms"
    | "Luxury Bedrooms"
    | "Modular Kitchens"
    | "Contemporary Wardrobes"
    | "Elegant Dining Areas"
    | "Commercial Spaces";
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const INSPIRATION_ITEMS: InspirationItem[] = [
  {
    id: "insp-living",
    category: "Modern Living Rooms",
    title: "Minimalist Lounge with Travertine Table",
    description: "Sunlit open living area with organic wool rug, linen sofa, and natural fluted wood wall accents.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    alt: "Warm minimalist living room with curved cream sofa and fluted timber wall"
  },
  {
    id: "insp-kitchen",
    category: "Modular Kitchens",
    title: "Champagne Acrylic Modular Island",
    description: "Clean kitchen island with waterfall marble edge, brass designer pendant, and concealed cutlery organizers.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern modular kitchen island with brass pendant light and light wood floors"
  },
  {
    id: "insp-bedroom",
    category: "Luxury Bedrooms",
    title: "Warm Cove Master Retreat",
    description: "Soft beige textural wall with hidden 3000K warm LED glow, tailored nightstands, and serene ambiance.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    alt: "Luxury master bedroom suite with warm headboard cove lighting and cozy bedding"
  },
  {
    id: "insp-dining",
    category: "Elegant Dining Areas",
    title: "Teak Dining with Sculptural Chandelier",
    description: "Architectural dining area connecting kitchen and living lounge, framed by sheer drapery and natural light.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
    alt: "Contemporary dining area with natural wood dining table and elegant chandelier"
  },
  {
    id: "insp-wardrobe",
    category: "Contemporary Wardrobes",
    title: "Smoked Glass Sliding Wardrobe",
    description: "Modern modular wardrobe with custom compartment sizing for ethnic wear, formal attire, and watches.",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern built-in wardrobe with glass doors and internal lighting"
  },
  {
    id: "insp-commercial",
    category: "Commercial Spaces",
    title: "Executive Consultation Lounge",
    description: "Warm wood-wrapped consultation office designed for discreet client discussions and focused productivity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    alt: "Upscale modern commercial office interior with comfortable client consultation seating"
  }
];
