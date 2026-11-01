export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const DESIGN_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Understand the client's requirements, preferences and budget.",
    details: [
      "Discovery conversation on WhatsApp or in person",
      "Lifestyle & functional requirements mapping",
      "Budget alignment & timeline discussion"
    ]
  },
  {
    step: "02",
    title: "Space Planning",
    description: "Plan functional layouts and optimize available space.",
    details: [
      "On-site dimensional assessment",
      "Ergonomic furniture arrangement drafts",
      "Traffic circulation & ventilation planning"
    ]
  },
  {
    step: "03",
    title: "Design Concept & 3D Visualization",
    description: "Develop design concepts and visual presentations.",
    details: [
      "Mood boards & color schemes",
      "Detailed 3D views of kitchens, living & bedrooms",
      "Lighting placement & false ceiling designs"
    ]
  },
  {
    step: "04",
    title: "Material Selection",
    description: "Select suitable materials, colors, textures and finishes.",
    details: [
      "Laminates, acrylics, veneers & quartz swatches",
      "Hardware & soft-close mechanism verification",
      "Fabric, curtain & accent texture curation"
    ]
  },
  {
    step: "05",
    title: "Execution & Final Handover",
    description: "Coordinate the implementation and final finishing process.",
    details: [
      "Supervised installation & modular assembly",
      "Quality assurance checks at every milestone",
      "Clean finishing & delightful handover"
    ]
  }
];
