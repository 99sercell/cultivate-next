import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useCart, type Product } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <Card className={`group cursor-pointer bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {product.category === 'fresh' && (
          <Badge className="absolute top-2 left-2 bg-tech-green text-white">
            Fresh
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-tech-green transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-tech-green fill-tech-green'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-tech-green">
              ${product.price.toFixed(2)}
            </span>
            {product.category === 'fresh' && (
              <span className="text-sm text-muted-foreground">/kg</span>
            )}
          </div>
          
          <Button
            variant="tech"
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;