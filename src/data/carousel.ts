export type CarouselSlide = {
  image: string;
  label: string;
};

/**
 * These five stills are cropped directly from the generated AI hero video
 * (the "connecting science" network animation) — one clean frame per domain
 * moment in the clip, turned into carousel slides instead of a single
 * looping video.
 */
export const HERO_CAROUSEL_SLIDES: CarouselSlide[] = [
  { image: "/images/carousel/animal-science.png", label: "Animal Science" },
  { image: "/images/carousel/agriculture.png", label: "Smart Agriculture" },
  { image: "/images/carousel/human-health.png", label: "Healthcare" },
  { image: "/images/carousel/ai-core.png", label: "AI & Data" },
  { image: "/images/carousel/genetics.png", label: "Genetic Intelligence" },
];
