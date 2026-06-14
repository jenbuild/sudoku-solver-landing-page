import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Works />
      <Banner />
      <Footer />
    </main>
  );
}
