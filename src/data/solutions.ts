import type { LucideIcon } from "lucide-react";
import { PawPrint, Sprout, HeartPulse, BrainCircuit, PlaneTakeoff, LucidePlaneTakeoff, PlaneIcon, PlaneLandingIcon } from "lucide-react";

export type Solution = {
  number: string;
  icon: LucideIcon;
  title: string;
  tag:string,
  description: string;
  points:string[];
};

export const SOLUTIONS: Solution[] = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Healthcare",
    tag: "Clinical intelligence",
    description:
      "Decision-support and predictive models that help clinical and operational teams triage, screen, and plan care pathways with confidence.",
    points: [
      "Diagnostic-image screening",
      "Patient risk stratification",
      "Clinical resource & capacity planning",
    ],

  },
  {
    number: "02",
    icon: PawPrint,
    title: "Animal Science",
    tag: "Livestock & Herd intelligence",
    description:
      "Continuous herd and flock monitoring that turns physiological, sound, and movement telemetry into early health and yield alerts.",
    points: [
      "Health & mortality early warning",
      "Growth, feed & yield optimization",
      "Environmental & welfare automation",
    ],
  },
  {
    number: "03",
    icon: Sprout,
    title: "Smart Agriculture",
    tag: "Field & Crop intelligence",
    description:
      "Crop-health and soil models built from satellite, drone, and sensor data so growers act before problems spread.",
    points: [
      "Yield & crop stress prediction",
      "Soil-nutrient mapping",
      "Smart irrigation scheduling",
    ],
  },
  {
    number: "04",
    icon: PlaneTakeoff,
    title: "AI & Drone",
    tag:"AI Data Intelligence & Drone Services",
    description:
      "Turning complex scientific data into intelligent insights and actionable decisions.",
    points:[
      "AI model development",
      "Data Engineering & Pipeline Development",
      "Machine Learning Solutions",
      "Drone & Satellite Imaging Analysis",
    ]
  },
];
