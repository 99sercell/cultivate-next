import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Truck } from "lucide-react";
import heroImage from "@/assets/hero-smart-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-muted">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-green/5 to-earth-green/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-tech-green/10 text-tech-green border-tech-green/20">
                🛒 Premium E-Commerce Store
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Fresh Farm
                <span className="block text-tech-green">Market</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-6 leading-relaxed">
                Shop premium fresh produce and smart farming equipment. 
                Quality guaranteed, delivered fresh to your door.
              </p>
            </div>

            {/* Price Banner */}
            <div className="bg-tech-green/10 border border-tech-green/20 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-bold text-tech-green">$9.99</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Free shipping on</p>
                  <p className="font-semibold text-foreground">orders over $50</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                View Catalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-tech-green/10 rounded-lg">
                  <Star className="h-6 w-6 text-tech-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">4.8/5 Rating</h3>
                  <p className="text-sm text-muted-foreground">2,500+ reviews</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-tech-green/10 rounded-lg">
                  <Truck className="h-6 w-6 text-tech-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Same day in city</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-tech-green/10 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-tech-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">30-day policy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Fresh organic produce and farming products for sale"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
              
              {/* Sale Badge */}
              <div className="absolute top-6 right-6 bg-tech-green text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                SALE 20% OFF
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md p-6 rounded-xl shadow-card border border-border">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-green">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-green">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-green">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;