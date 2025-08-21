import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Zap, Shield, Truck, BarChart3, Droplets } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable Growing",
      description: "90% less water usage with hydroponic systems and renewable energy sources.",
      badge: "Eco-Friendly"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "AI-powered systems monitor and optimize growing conditions 24/7.",
      badge: "AI-Powered"
    },
    {
      icon: Shield,
      title: "Pesticide-Free",
      description: "Controlled environment eliminates the need for harmful chemicals.",
      badge: "100% Organic"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Harvested and delivered within 24 hours to ensure maximum freshness.",
      badge: "Same Day"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Real-time monitoring of plant health, growth rates, and yield optimization.",
      badge: "IoT Enabled"
    },
    {
      icon: Droplets,
      title: "Precision Nutrition",
      description: "Customized nutrient delivery for each plant variety and growth stage.",
      badge: "Optimized"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose Smart Farming
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Future of Agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our smart farming technology combines sustainability, efficiency, and quality 
            to deliver the freshest produce while protecting our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-tech-green/10 rounded-lg flex items-center justify-center group-hover:bg-tech-green/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-tech-green" />
                    </div>
                    <Badge variant="outline" className="border-tech-green text-tech-green text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-tech-green transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;