import { SITE_NAME } from "@/data/site";

type Props = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
};

export default function Logo({
  className = "",
  iconClassName = "h-8 w-8",
  textClassName = "text-xl sm:text-2xl font-bold tracking-tight",
  showText = true,
}: Props) {
  return (
    <div className={`flex items-center gap-2.5 font-display ${className}`}>
      <img
        src="/images/astranovax-logo.png"
        alt={SITE_NAME}
        className={`${iconClassName} object-contain transition-transform duration-300 hover:scale-105`}
      />
      {showText && (
        <span
          className={`bg-gradient-to-r from-[#7C00FF] via-[#E6007A] to-[#FF9900] bg-clip-text text-transparent select-none ${textClassName}`}
        >
          {SITE_NAME}
        </span>
      )}
    </div>
  );
}
