import Loader from "@/components/Loader";
import LogoWatermark from "@/components/LogoWatermark";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import IntroSection from "@/components/IntroSection";
import Solutions from "@/components/Solutions";
import Ecosystem from "@/components/Ecosystem";
import AnimalScience from "@/components/AnimalScience";
import Agriculture from "@/components/Agriculture";
import AIDroneSection from "@/components/AIDroneSection";
import Healthcare from "@/components/Healthcare";
import AISection from "@/components/AISection";
import Impact from "@/components/Impact";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Loader />
      <LogoWatermark />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <MarqueeBanner />
        <IntroSection />
        <Solutions />
        <Ecosystem />
        <Healthcare />
        <AnimalScience />
        <Agriculture />
        <AIDroneSection />
        <AISection />
        <Impact />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
