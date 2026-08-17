/**
 * Single source of truth for site-wide constants.
 */
export const SITE_NAME = "AstraNovaX";
export const SITE_TAGLINE = "Innovating Beyond Limits";

/**
 * The real 3D "carousel" clip (a rotating plant / chick+fish / anatomical
 * figure, all rendered in the brand's purple-to-orange palette) — used as
 * the hero's full-bleed background video.
 */
export const HERO_CAROUSEL_VIDEO_SRC = "/videos/hero-carousel.mp4";
export const HERO_VIDEO_SRC = HERO_CAROUSEL_VIDEO_SRC;

/**
 * Domain-section videos — now used as full-bleed section backgrounds (see
 * BgVideo.tsx). Each only starts playing once its section actually scrolls
 * into view, and pauses again once it scrolls out, so having several full-
 * bleed videos doesn't cost the performance that multiple simultaneous
 * always-on hero-style videos would.
 */
export const ANIMAL_SCIENCE_VIDEO_SRC = "/videos/animal-science.mp4";
export const AGRICULTURE_VIDEO_SRC = "/videos/agriculture.mp4";
export const HEALTHCARE_VIDEO_SRC = "/videos/healthcare.mp4";
export const AI_DRONE_VIDEO_SRC = "/videos/ai-and-drone.mp4";

/** Full logo lockup, used as a faint full-site watermark. */
export const LOGO_WATERMARK_SRC = "/images/astranovax-logo.png";

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
