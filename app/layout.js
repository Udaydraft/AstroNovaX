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
    default: "AstraNovaX | AI & ML for Healthcare, Animal Science & Agriculture",
    template: "%s | AstraNovaX",
  },
  description:
    "AstraNovaX builds applied AI and machine-learning systems for Healthcare, Animal Science, and Agriculture — turning clinical, livestock, crop, and soil data into decisions. Innovating beyond limits.",
  keywords: [
    "AstraNovaX",
    "Healthcare AI",
    "AI in Healthcare",
    "Animal Science AI",
    "Livestock AI",
    "AI for Agriculture",
    "Precision Agriculture AI",
    "Machine Learning Company",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  authors: [{ name: "AstraNovaX" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.astranovax.com/",
    siteName: "AstraNovaX",
    title: "AstraNovaX | AI & ML for Healthcare, Animal Science & Agriculture",
    description:
      "Applied AI and machine-learning systems for Healthcare, Animal Science, and Agriculture. Innovating beyond limits.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraNovaX | AI & ML for Healthcare, Animal Science & Agriculture",
    description:
      "Applied AI and machine-learning systems for Healthcare, Animal Science, and Agriculture. Innovating beyond limits.",
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
    "AstraNovaX designs applied AI and machine-learning systems for Healthcare, Animal Science, and Agriculture.",
  email: "mailto:hello@astranovax.com",
  areaServed: "Global",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Healthcare AI",
    "Animal Science AI",
    "Precision Agriculture",
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
        text: "AstraNovaX builds applied artificial intelligence and machine-learning systems that turn sensor, imagery, and operational data into decisions for Healthcare, Animal Science, and Agriculture businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries does AstraNovaX serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstraNovaX focuses on three core domains: Healthcare (diagnostic & operational support), Animal Science (herd health & yield forecasting), and Agriculture (crop & soil intelligence).",
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
