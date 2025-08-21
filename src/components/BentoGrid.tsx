import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";
import { type Product } from "@/context/CartContext";
import freshProduce from "@/assets/fresh-produce.jpg";
import smartGadgets from "@/assets/smart-gadgets.jpg";
import herbsCollection from "@/assets/herbs-collection.jpg";

const products: Product[] = [
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
    id: '6',
    name: 'Fresh Basil',
    price: 4.99,
    image: herbsCollection,
    category: 'fresh',
    rating: 4.8,
    inStock: true,
    description: 'Fragrant fresh basil leaves, perfect for pasta, pizza, and Mediterranean dishes.'
  }
];

const ProductCatalog = () => {
  const featuredProducts = products.slice(0, 3);
  const allProducts = products.slice(3);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-tech-green/10 text-tech-green border-tech-green/20">
            🛍️ Product Catalog
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fresh Produce & Smart Farm Equipment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Shop our premium selection of organic produce and cutting-edge farming technology. 
            Quality guaranteed with fast delivery.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <span className="mr-3">⭐</span>
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <span className="mr-3">🛒</span>
            All Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-card p-8 rounded-xl shadow-card text-center">
            <h4 className="text-2xl font-bold text-foreground mb-4">🥬 Fresh Produce</h4>
            <p className="text-muted-foreground mb-6">
              Organic vegetables and herbs, harvested daily from our smart farms
            </p>
            <div className="text-3xl font-bold text-tech-green mb-2">15+ varieties</div>
            <p className="text-sm text-muted-foreground">Starting from $4.99</p>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-xl shadow-card text-center">
            <h4 className="text-2xl font-bold text-foreground mb-4">🤖 Smart Equipment</h4>
            <p className="text-muted-foreground mb-6">
              IoT sensors, climate monitors, and automation tools for modern farming
            </p>
            <div className="text-3xl font-bold text-tech-green mb-2">25+ devices</div>
            <p className="text-sm text-muted-foreground">Starting from $49.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;