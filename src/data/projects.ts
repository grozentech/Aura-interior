export type ProjectCategory =
  | "All"
  | "Residential"
  | "Living Room"
  | "Modular Kitchen"
  | "Bedroom"
  | "Commercial";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Living Room" | "Modular Kitchen" | "Bedroom" | "Commercial";
  conceptType: string;
  description: string;
  image: string;
  alt: string;
  scope: string[];
  keyElements: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "serene-residence",
    title: "The Warm Contemporary Residence",
    category: "Residential",
    conceptType: "3BHK Villa Concept Sample",
    description: "An illustrative residential concept embracing understated luxury, natural teak textures, and open-plan spatial harmony.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm contemporary villa living area with high ceilings, teak trims, and expansive glass panels",
    scope: ["Foyer", "Double-Height Living", "Formal Dining", "Master Suite"],
    keyElements: "Fluted travertine accents, cove lighting, custom modular cabinetry"
  },
  {
    id: "minimalist-kitchen",
    title: "Ivory & Champagne Modular Kitchen",
    category: "Modular Kitchen",
    conceptType: "Parallel Kitchen Concept Sample",
    description: "Functional parallel kitchen layout designed with anti-scratch acrylic shutters, quartz counters, and smart pantry pull-outs.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    alt: "Ivory modular kitchen with sleek gold profile handles, built-in oven, and concealed lighting",
    scope: ["Modular Cabinetry", "Pantry Unit", "Breakfast Ledge", "Under-Cabinet Lighting"],
    keyElements: "Soft-close tandem drawers, fluted frosted glass, quartz backsplashes"
  },
  {
    id: "monochrome-living",
    title: "Earthy Charcoal & Brass Living Lounge",
    category: "Living Room",
    conceptType: "Living Room Design Concept",
    description: "A refined conversational living room design blending muted gold accents with deep charcoal wall panelling and plush bouclé seating.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Charcoal and brass accented luxury living room with architectural lighting and low-slung seating",
    scope: ["Custom Media Console", "Acoustic Wall Panelling", "Concealed Illumination"],
    keyElements: "Bookmatched veneer, brass border inlays, recessed spotlights"
  },
  {
    id: "tranquil-bedroom",
    title: "Sanctuary Master Bedroom Suite",
    category: "Bedroom",
    conceptType: "Master Bedroom Concept Sample",
    description: "A peaceful sanctuary featuring an upholstered full-height headboard, layered warm ambient lighting, and integrated study console.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Tranquil master bedroom with full-height soft upholstered headboard and warm ambient perimeter glow",
    scope: ["Bed Back Panelling", "Wardrobe Consolidation", "Vanity Station"],
    keyElements: "Linen fabric wall panels, warm 2700K lighting, floating bedside tables"
  },
  {
    id: "glass-wardrobe-suite",
    title: "Smoked Glass Walk-in Wardrobe",
    category: "Bedroom",
    conceptType: "Dressing Suite Concept",
    description: "Floor-to-ceiling wardrobe system with anodized aluminum frames, tinted reflective glass, and automatic sensor illumination.",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    alt: "Smoked glass luxury wardrobe with organized internal shelving and built-in vertical LED profiles",
    scope: ["Walk-in Organization", "Jewellery Organizers", "Integrated Dressing Mirror"],
    keyElements: "Dark champagne profiles, tinted bronze glass, magnetic sensor strips"
  },
  {
    id: "executive-studio",
    title: "Modern Executive Studio & Lounge",
    category: "Commercial",
    conceptType: "Boutique Office Design Concept",
    description: "Sophisticated commercial interior tailored for high-trust executive meetings, featuring acoustic timber slat dividers and ergonomic furnishings.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Upscale executive studio office with natural wood slat partitions and minimalist consultation seating",
    scope: ["Consultation Lounge", "Executive Desk", "Acoustic Partitions"],
    keyElements: "Solid oak vertical louvers, micro-cement finishes, glare-free architectural luminaires"
  }
];
