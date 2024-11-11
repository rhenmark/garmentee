import ContactForm from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroOverlay from "@/components/HeroOverlay";
import LocateUs from "@/components/LocateUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Slider from "@/components/Slider";

export default function Home() {

  return (
    <div className="min-h-dvh h-dvh z-10 relative pt-4">
      <Header />
      <HeroOverlay />
      <main>
        <Hero />
        <Slider />
        <Services />
        <Products />
        <LocateUs />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
