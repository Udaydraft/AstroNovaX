import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.astranovax.com"),
  title: {
    default: "AstraNovaX | AI & ML for Agriculture, Fishery, Healthcare & Poultry",
    template: "%s | AstraNovaX",
  },
  description:
    "AstraNovaX builds applied AI and machine-learning systems for agriculture, fishery, healthcare, and poultry — turning field, water, ward, and flock data into decisions. Innovating beyond limits.",
  keywords: [
    "AstraNovaX",
    "AI for agriculture",
    "AI for fishery",
    "aquaculture AI",
    "AI in healthcare",
    "poultry AI",
    "machine learning company",
    "agri-tech AI",
    "precision farming AI",
    "smart poultry monitoring",
  ],
  authors: [{ name: "AstraNovaX" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.astranovax.com/",
    siteName: "AstraNovaX",
    title: "AstraNovaX | AI & ML for Agriculture, Fishery, Healthcare & Poultry",
    description:
      "Applied AI and machine-learning systems for agriculture, fishery, healthcare, and poultry. Innovating beyond limits.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraNovaX | AI & ML for Agriculture, Fishery, Healthcare & Poultry",
    description:
      "Applied AI and machine-learning systems for agriculture, fishery, healthcare, and poultry. Innovating beyond limits.",
  },
};

// Runs before paint (inline, blocking) so the correct theme applies with no flash.
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('anx-theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AstraNovaX",
  url: "https://www.astranovax.com/",
  slogan: "Innovating Beyond Limits",
  description:
    "AstraNovaX designs applied AI and machine-learning systems for agriculture, fishery, healthcare, and poultry.",
  email: "mailto:hello@astranovax.com",
  areaServed: "Global",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Precision Agriculture",
    "Aquaculture Technology",
    "Healthcare AI",
    "Poultry Farm Automation",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does AstraNovaX do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstraNovaX builds applied artificial intelligence and machine-learning systems that turn sensor, imagery, and operational data into decisions for agriculture, fishery, healthcare, and poultry businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries does AstraNovaX serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstraNovaX focuses on four domains: agriculture (crop and soil intelligence), fishery and aquaculture (water and stock monitoring), healthcare (diagnostic and operational support), and poultry (flock health and yield forecasting).",
      },
    },
    {
      "@type": "Question",
      name: "Does AstraNovaX build custom AI models or off-the-shelf software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstraNovaX designs models around each client's own data and constraints rather than shipping a single generic product, then packages them into tools the client's team can operate directly.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact AstraNovaX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach AstraNovaX by email at hello@astranovax.com or by sending a WhatsApp message directly from the contact section of the website.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </head>
      <body className="font-body" style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
