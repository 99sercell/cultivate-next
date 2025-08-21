import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CartProvider, type Product } from "@/context/CartContext";
import { Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import freshProduce from "@/assets/fresh-produce.jpg";
import smartGadgets from "@/assets/smart-gadgets.jpg";
import herbsCollection from "@/assets/herbs-collection.jpg";

const allProducts: Product[] = [
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
  },
  {
    id: '7',
    name: 'Smart Irrigation System',
    price: 299.99,
    image: smartGadgets,
    category: 'technology',
    rating: 4.7,
    inStock: true,
    description: 'Automated watering system with smartphone control and weather integration.'
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
  }
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-tech-green/10 text-tech-green border-tech-green/20">
                🛍️ Shop All Products
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Fresh Produce & Smart Farm Equipment
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse our complete collection of organic produce and cutting-edge farming technology.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-80"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="fresh">Fresh Produce</SelectItem>
                    <SelectItem value="technology">Smart Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
                <Button 
                  variant="tech" 
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Shop;