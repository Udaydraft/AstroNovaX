export function IconAgri(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M24 44V22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 30C24 30 12 28 12 15C12 15 26 14 24 30Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24 24C24 24 36 21 36 8C36 8 22 8 24 24Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFishery(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M6 24C6 24 14 15 24 15C34 15 42 24 42 24C42 24 34 33 24 33C14 33 6 24 6 24Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="30" cy="21" r="1.6" fill="currentColor" />
      <path d="M6 24C6 24 3 20 2 17M6 24C6 24 3 28 2 31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 40C10 36 16 40 22 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function IconHealth(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M5 26H15L19 14L27 36L31 24H43" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPoultry(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M18 40C12 40 8 34 8 27C8 18 15 11 24 11C31 11 36 15 36 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M36 15C36 15 42 13 44 8C44 8 42 18 34 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27" cy="17" r="1.6" fill="currentColor" />
      <path d="M18 40H30C30 40 32 34 28 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconAnimal(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M14 20C14 16 18 12 24 12C30 12 34 16 34 20C34 26 28 32 24 38C20 32 14 26 14 20Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="16" cy="12" r="3" fill="currentColor" />
      <circle cx="32" cy="12" r="3" fill="currentColor" />
      <circle cx="24" cy="20" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function IconVision(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M4 24C4 24 12 12 24 12C36 12 44 24 44 24C44 24 36 36 24 36C12 36 4 24 4 24Z" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

export function IconPredict(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M6 36L16 24L24 30L42 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 10H42V20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEdge(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="14" y="14" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 4V10M24 38V44M4 24H10M38 24H44M9 9L13 13M39 9L35 13M9 39L13 35M39 39L35 35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconInsight(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M24 4C15 4 8 11 8 20C8 26 11 30 15 33V38H33V33C37 30 40 26 40 20C40 11 33 4 24 4Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 44H30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export const ICON_MAP = {
  agri: IconAgri,
  fishery: IconFishery,
  health: IconHealth,
  poultry: IconPoultry,
  animal: IconAnimal,
  vision: IconVision,
  predict: IconPredict,
  edge: IconEdge,
  insight: IconInsight,
};
