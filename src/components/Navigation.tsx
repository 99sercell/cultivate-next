import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, User, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navigation = () => {
  const { state } = useCart();

  return (
    <nav className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-earth-green">
              🛒 FreshMarket
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-tech-green transition-colors font-medium">
              Shop
            </a>
            <a href="#" className="text-foreground hover:text-tech-green transition-colors font-medium">
              Fresh Produce
            </a>
            <a href="#" className="text-foreground hover:text-tech-green transition-colors font-medium">
              Equipment
            </a>
            <a href="#" className="text-foreground hover:text-tech-green transition-colors font-medium">
              Deals
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-tech-green border-0"
                >
                  {state.itemCount}
                </Badge>
              )}
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