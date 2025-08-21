import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Zap } from "lucide-react";
import heroImage from "@/assets/hero-smart-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary to-nature-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-data opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-tech-green font-medium">
                <Leaf className="h-5 w-5" />
                <span>Smart Agriculture Revolution</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Future of
                <span className="block text-tech-green">Farming</span>
                is Here
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover premium fresh produce grown with cutting-edge smart farming technology. 
                Sustainable, efficient, and delicious.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Shop Fresh Produce
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                <Zap className="mr-2 h-5 w-5" />
                Explore Technology
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-tech-green">90%</div>
                <div className="text-sm text-muted-foreground">Water Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tech-green">365</div>
                <div className="text-sm text-muted-foreground">Days Growing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tech-green">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 scale-105" />
            <img
              src={heroImage}
              alt="Smart farming technology with vertical hydroponic towers"
              className="relative rounded-3xl shadow-card w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;