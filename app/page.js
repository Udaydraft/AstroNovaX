import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import Approach from "@/components/Approach";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Domains />
        <Approach />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
