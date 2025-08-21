import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CartProvider, type Product } from "@/context/CartContext";
import { Clock, Percent } from "lucide-react";
import freshProduce from "@/assets/fresh-produce.jpg";
import smartGadgets from "@/assets/smart-gadgets.jpg";
import herbsCollection from "@/assets/herbs-collection.jpg";

const dealProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: 9.99, // Discounted from 12.99
    image: freshProduce,
    category: 'fresh',
    rating: 4.8,
    inStock: true,
    description: 'Fresh organic tomatoes, grown with precision agriculture and harvested at peak ripeness.'
  },
  {
    id: '2',
    name: 'Smart Soil Sensor',
    price: 69.99, // Discounted from 89.99
    image: smartGadgets,
    category: 'technology',
    rating: 4.6,
    inStock: true,
    description: 'Monitor soil moisture, temperature, and nutrients with this IoT-enabled sensor.'
  },
  {
    id: '3',
    name: 'Premium Herb Mix',
    price: 6.99, // Discounted from 8.99
    image: herbsCollection,
    category: 'fresh',
    rating: 4.9,
    inStock: true,
    description: 'A carefully curated selection of aromatic herbs, perfect for culinary use.'
  },
  {
    id: '7',
    name: 'Smart Irrigation System',
    price: 199.99, // Discounted from 299.99
    image: smartGadgets,
    category: 'technology',
    rating: 4.7,
    inStock: true,
    description: 'Automated watering system with smartphone control and weather integration.'
  }
];

const Deals = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                🔥 Special Deals
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Limited Time Offers
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't miss out on these amazing deals! Save up to 40% on selected products.
              </p>
            </div>

            {/* Deal Alert */}
            <div className="bg-gradient-to-r from-destructive/10 to-tech-green/10 p-6 rounded-xl border border-destructive/20 mb-12">
              <div className="flex items-center justify-center space-x-4 text-center">
                <Clock className="h-6 w-6 text-destructive" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Flash Sale Ends Soon!</h3>
                  <p className="text-muted-foreground">Hurry up! These deals won't last long.</p>
                </div>
                <Percent className="h-6 w-6 text-tech-green" />
              </div>
            </div>

            {/* Deal Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-card p-8 rounded-xl shadow-card text-center">
                <div className="text-4xl mb-4">🥬</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Fresh Produce Sale</h3>
                <p className="text-muted-foreground mb-6">
                  Up to 25% off on all organic vegetables and herbs
                </p>
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  Save 25%
                </Badge>
              </div>
              
              <div className="bg-gradient-card p-8 rounded-xl shadow-card text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Tech Equipment Sale</h3>
                <p className="text-muted-foreground mb-6">
                  Up to 40% off on smart farming equipment
                </p>
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  Save 40%
                </Badge>
              </div>
            </div>

            {/* Deal Products */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🔥 Featured Deals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dealProducts.map((product) => (
                  <div key={product.id} className="relative">
                    <Badge className="absolute -top-2 -right-2 z-10 bg-destructive text-white">
                      SALE
                    </Badge>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-card text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Don't Miss Future Deals!</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <Button variant="tech">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Deals;