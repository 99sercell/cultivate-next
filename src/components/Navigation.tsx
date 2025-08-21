import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-earth-green">
              SmartFarm
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-tech-green transition-colors">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-tech-green transition-colors">
              Technology
            </a>
            <a href="#" className="text-foreground hover:text-tech-green transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-tech-green transition-colors">
              Contact
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;