import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Support from "@/components/Support";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidde bg-white font-sans text-gray-900">
      {/* Background Gradient for Hero */}
      <div className="bg-gradient-to-l from-white to-[#54BD95]/5">
        <Navbar />
        <Hero />
      </div>

      <Support />
      <Features />
      <Benefits />
      <Pricing />
      <FooterSection />
    </main>
  );
}