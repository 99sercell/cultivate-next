import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/BentoGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <ProductCatalog />
          <Features />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
