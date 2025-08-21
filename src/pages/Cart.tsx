import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CartProvider, useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', productId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', productId, quantity: newQuantity });
    }
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/shop">
          <Button variant="tech" size="lg">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Shopping Cart</h2>
          <Button 
            variant="ghost" 
            onClick={clearCart}
            className="text-destructive hover:text-destructive/80"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        {state.items.map((item) => (
          <Card key={item.id} className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-24 h-24 object-cover rounded-md"
              />
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <Badge 
                      variant={item.category === 'fresh' ? 'secondary' : 'outline'}
                      className="mt-2"
                    >
                      {item.category === 'fresh' ? 'Fresh Produce' : 'Smart Equipment'}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col items-end gap-4">
                    <div className="text-xl font-bold text-tech-green">
                      ${item.price.toFixed(2)}
                      {item.category === 'fresh' && (
                        <span className="text-sm text-muted-foreground font-normal">/kg</span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-lg font-medium min-w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="p-6 sticky top-24">
          <h3 className="text-xl font-bold text-foreground mb-6">Order Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Items ({state.itemCount})</span>
              <span className="text-foreground">${state.total.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">Free</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-foreground">${(state.total * 0.1).toFixed(2)}</span>
            </div>
            
            <Separator />
            
            <div className="flex justify-between text-lg font-bold">
              <span className="text-foreground">Total</span>
              <span className="text-tech-green">${(state.total * 1.1).toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <Button variant="tech" size="lg" className="w-full">
              Proceed to Checkout
            </Button>
            
            <Link to="/shop">
              <Button variant="outline" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 p-4 bg-tech-green/10 rounded-lg">
            <p className="text-sm text-tech-green font-medium">🚚 Free Shipping</p>
            <p className="text-xs text-muted-foreground mt-1">
              On all orders above $50. Your order qualifies!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-tech-green/10 text-tech-green border-tech-green/20">
                🛒 Shopping Cart
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Your Cart
              </h1>
            </div>
            
            <CartContent />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Cart;