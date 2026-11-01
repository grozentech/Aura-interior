/**
 * AURA INTERIOR - Central Site Configuration
 * Location: Dindigul, Tamil Nadu, India
 * WhatsApp: 9176180348
 * Instagram: https://www.instagram.com/hustlewitharun/
 */

export const SITE_CONFIG = {
  brandName: "AURA INTERIOR",
  tagline: "Designing Spaces. Creating Experiences.",
  location: "Dindigul, Tamil Nadu, India",
  city: "Dindigul",
  state: "Tamil Nadu",
  country: "India",
  whatsappNumber: "9176180348",
  whatsappBaseUrl: "https://wa.me/9176180348",
  instagramUrl: "https://www.instagram.com/hustlewitharun/",
  defaultWhatsAppMessage:
    "Hello Aura Interior! I visited your website and would like to know more about your interior design services in Dindigul.",
  // Project Types for dropdowns
  projectTypes: [
    "Full Home Interiors",
    "Modular Kitchen",
    "Living Room",
    "Bedroom",
    "Wardrobe",
    "Commercial Interiors",
    "Other",
  ] as const,
  // Budget options
  budgetRanges: [
    "Below ₹2 Lakhs",
    "₹2–5 Lakhs",
    "₹5–10 Lakhs",
    "₹10–20 Lakhs",
    "Above ₹20 Lakhs",
    "Not Decided",
  ] as const,
};

export type ProjectType = (typeof SITE_CONFIG.projectTypes)[number];
export type BudgetRange = (typeof SITE_CONFIG.budgetRanges)[number];
