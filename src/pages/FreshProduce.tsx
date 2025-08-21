import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { CartProvider, type Product } from "@/context/CartContext";
import freshProduce from "@/assets/fresh-produce.jpg";
import herbsCollection from "@/assets/herbs-collection.jpg";

const freshProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: 12.99,
    image: freshProduce,
    category: 'fresh',
    rating: 4.8,
    inStock: true,
    description: 'Fresh organic tomatoes, grown with precision agriculture and harvested at peak ripeness.'
  },
  {
    id: '3',
    name: 'Premium Herb Mix',
    price: 8.99,
    image: herbsCollection,
    category: 'fresh',
    rating: 4.9,
    inStock: true,
    description: 'A carefully curated selection of aromatic herbs, perfect for culinary use.'
  },
  {
    id: '4',
    name: 'Organic Carrots',
    price: 6.99,
    image: freshProduce,
    category: 'fresh',
    rating: 4.7,
    inStock: true,
    description: 'Sweet, crunchy organic carrots grown using sustainable farming practices.'
  },
  {
    id: '6',
    name: 'Fresh Basil',
    price: 4.99,
    image: herbsCollection,
    category: 'fresh',
    rating: 4.8,
    inStock: true,
    description: 'Fragrant fresh basil leaves, perfect for pasta, pizza, and Mediterranean dishes.'
  },
  {
    id: '8',
    name: 'Organic Lettuce',
    price: 5.99,
    image: freshProduce,
    category: 'fresh',
    rating: 4.6,
    inStock: true,
    description: 'Crisp, fresh lettuce perfect for salads and sandwiches.'
  },
  {
    id: '9',
    name: 'Fresh Spinach',
    price: 7.99,
    image: freshProduce,
    category: 'fresh',
    rating: 4.7,
    inStock: true,
    description: 'Nutrient-rich spinach leaves, perfect for smoothies and cooking.'
  }
];

const FreshProduce = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-tech-green/10 text-tech-green border-tech-green/20">
                🥬 Fresh Produce
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Farm-Fresh Organic Produce
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hand-picked organic vegetables and herbs, grown with precision agriculture and delivered fresh to your door.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-foreground mb-2">100% Organic</h3>
                <p className="text-muted-foreground">No pesticides, herbicides, or synthetic fertilizers used.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Same Day Delivery</h3>
                <p className="text-muted-foreground">Fresh from farm to your table within 24 hours.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sustainable Farming</h3>
                <p className="text-muted-foreground">Grown using eco-friendly smart farming techniques.</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freshProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default FreshProduce;