/**
 * Testimonial structure - configured with clearly labeled editable placeholder slots.
 * Per project instructions: We do not invent fake client names, ratings or feedback.
 * Aura Interior can easily paste actual client reviews into this file.
 */

export interface TestimonialItem {
  id: string;
  clientInitials: string;
  projectContext: string;
  location: string;
  quote: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "slot-1",
    clientInitials: "R.S.",
    projectContext: "Residential Living & Modular Kitchen",
    location: "Dindigul",
    quote: "Sample review template: 'The team worked closely with our family to understand our daily needs, delivering a balanced living room and modular kitchen with great attention to clean finishes.'",
    isPlaceholder: true
  },
  {
    id: "slot-2",
    clientInitials: "M.K.",
    projectContext: "Full Home Interior Planning",
    location: "Dindigul",
    quote: "Sample review template: 'From the initial space planning discussion to final execution, the process was transparent and the 3D visualization made it very easy to finalize materials with confidence.'",
    isPlaceholder: true
  },
  {
    id: "slot-3",
    clientInitials: "S.V.",
    projectContext: "Master Bedroom & Storage Suite",
    location: "Dindigul",
    quote: "Sample review template: 'Smart wardrobe planning and ambient lighting setup turned our bedroom into a quiet retreat. Highly recommend their personalized consultation approach.'",
    isPlaceholder: true
  }
];
