import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Thermometer, Droplets, Lightbulb } from "lucide-react";
import freshProduce from "@/assets/fresh-produce.jpg";
import smartGadgets from "@/assets/smart-gadgets.jpg";
import herbsCollection from "@/assets/herbs-collection.jpg";

const BentoGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Smart Solutions
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for Modern Agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From premium fresh produce to cutting-edge smart farming technology, 
            discover our complete ecosystem for sustainable agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[800px]">
          {/* Fresh Produce - Large Card */}
          <Card className="lg:col-span-2 lg:row-span-2 p-6 bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="border-tech-green text-tech-green">
                  Fresh Produce
                </Badge>
                <TrendingUp className="h-5 w-5 text-tech-green" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Premium Fresh Vegetables
              </h3>
              <p className="text-muted-foreground mb-6">
                Grown with precision agriculture, our vegetables are harvested at peak freshness 
                and delivered directly from our smart farms.
              </p>
              <div className="flex-1 mb-6">
                <img
                  src={freshProduce}
                  alt="Fresh organic vegetables and produce"
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Button variant="tech" className="w-full">
                Shop Fresh Produce
              </Button>
            </div>
          </Card>

          {/* Smart Technology */}
          <Card className="lg:col-span-2 p-6 bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="border-tech-green text-tech-green">
                  Technology
                </Badge>
                <Lightbulb className="h-5 w-5 text-tech-green" />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Smart Sensors & IoT
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Monitor your crops with precision sensors for optimal growth conditions.
                  </p>
                </div>
                <div>
                  <img
                    src={smartGadgets}
                    alt="Smart farming sensors and IoT devices"
                    className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <Button variant="earth" className="w-full mt-4">
                Explore Technology
              </Button>
            </div>
          </Card>

          {/* Plant Health Widget */}
          <Card className="p-6 bg-gradient-data shadow-card">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Live Data</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">Plant Health</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-4 w-4 text-tech-green" />
                  <span className="text-sm text-foreground">Temperature</span>
                </div>
                <span className="font-bold text-tech-green">22°C</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-tech-green h-2 rounded-full w-3/4" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-4 w-4 text-tech-green" />
                  <span className="text-sm text-foreground">Humidity</span>
                </div>
                <span className="font-bold text-tech-green">65%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-tech-green h-2 rounded-full w-2/3" />
              </div>
            </div>
          </Card>

          {/* Herbs Collection */}
          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="h-full flex flex-col">
              <Badge variant="secondary" className="self-start mb-4">
                Premium Herbs
              </Badge>
              <div className="flex-1 mb-4">
                <img
                  src={herbsCollection}
                  alt="Premium organic herbs collection"
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-foreground mb-2">Fresh Herbs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Aromatic herbs grown with precision for maximum flavor.
              </p>
              <Button variant="outline" size="sm" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                Shop Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;