import { LOGO_WATERMARK_SRC, SITE_NAME } from "@/data/site";

/**
 * A very faint, fixed copy of the full logo lockup sitting behind all page
 * content. It shows through on plain/light sections and is subtle enough
 * not to fight with text or cards on tinted/gradient sections.
 */
export default function LogoWatermark() {
  return (
    <img
      src={LOGO_WATERMARK_SRC}
      alt=""
      aria-hidden="true"
      role="presentation"
      title={SITE_NAME}
      className="pointer-events-none fixed left-1/2 top-1/2 -z-10 w-[140vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen sm:w-[70vw]"
    />
  );
}
