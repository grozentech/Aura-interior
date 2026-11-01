export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Compass" | "LayoutGrid" | "ShieldCheck" | "Eye" | "Sparkles" | "MessageSquare";
}

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: "personalized-solutions",
    title: "Personalized Design Solutions",
    description: "Every layout, texture, and finish is tailored specifically to your family's daily habits, preferences, and aesthetic vision.",
    iconName: "Compass"
  },
  {
    id: "functional-space-planning",
    title: "Functional Space Planning",
    description: "We optimize every square foot for practical ease of movement, natural light circulation, and clutter-free living.",
    iconName: "LayoutGrid"
  },
  {
    id: "quality-materials",
    title: "Quality-Focused Material Selection",
    description: "We help you select reliable laminates, acrylics, hardware, and finishes engineered for durability and enduring beauty.",
    iconName: "ShieldCheck"
  },
  {
    id: "attention-to-detail",
    title: "Attention to Detail",
    description: "From precision edge banding and seamless joints to subtle cove lighting reveals, every finish is closely monitored.",
    iconName: "Eye"
  },
  {
    id: "modern-approach",
    title: "Modern Design Approach",
    description: "Clean lines, contemporary Indian living aesthetics, and timeless palettes that remain fresh year after year.",
    iconName: "Sparkles"
  },
  {
    id: "client-communication",
    title: "Client-Focused Communication",
    description: "Transparent discussions, active listening, and responsive WhatsApp communication throughout your design journey.",
    iconName: "MessageSquare"
  }
];
