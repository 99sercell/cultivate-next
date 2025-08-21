import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { CartProvider, type Product } from "@/context/CartContext";
import smartGadgets from "@/assets/smart-gadgets.jpg";

const equipmentProducts: Product[] = [
  {
    id: '2',
    name: 'Smart Soil Sensor',
    price: 89.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.6,
    inStock: true,
    description: 'Monitor soil moisture, temperature, and nutrients with this IoT-enabled sensor.'
  },
  {
    id: '5',
    name: 'Climate Monitor',
    price: 149.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.5,
    inStock: false,
    description: 'Advanced weather station for greenhouse climate monitoring and control.'
  },
  {
    id: '7',
    name: 'Smart Irrigation System',
    price: 299.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.7,
    inStock: true,
    description: 'Automated watering system with smartphone control and weather integration.'
  },
  {
    id: '10',
    name: 'LED Grow Lights',
    price: 199.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.8,
    inStock: true,
    description: 'Full-spectrum LED lights optimized for plant growth with smart scheduling.'
  },
  {
    id: '11',
    name: 'Automated Fertilizer System',
    price: 459.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.6,
    inStock: true,
    description: 'Precision nutrient delivery system with automated scheduling and monitoring.'
  },
  {
    id: '12',
    name: 'Drone Crop Monitor',
    price: 899.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.9,
    inStock: true,
    description: 'AI-powered drone for crop health monitoring and precision agriculture mapping.'
  }
];

const Equipment = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-tech-green/10 text-tech-green border-tech-green/20">
                🤖 Smart Equipment
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Smart Farming Technology
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional-grade IoT sensors, automation systems, and monitoring tools for modern precision agriculture.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Smart Control</h3>
                <p className="text-muted-foreground">Monitor and control all equipment from your smartphone.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Data Analytics</h3>
                <p className="text-muted-foreground">Advanced analytics for optimizing crop yields and resource usage.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Energy Efficient</h3>
                <p className="text-muted-foreground">Low-power devices with solar charging options available.</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipmentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Tech Specs */}
            <div className="mt-16 bg-gradient-card p-8 rounded-xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Choose Our Smart Equipment?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Excellence</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IoT connectivity with 99.9% uptime</li>
                    <li>• Weather-resistant IP65+ rating</li>
                    <li>• Long-range wireless communication</li>
                    <li>• AI-powered data analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Support & Warranty</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 2-year comprehensive warranty</li>
                    <li>• 24/7 technical support</li>
                    <li>• Free software updates</li>
                    <li>• Professional installation available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Equipment;