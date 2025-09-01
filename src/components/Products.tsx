import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      price: '$89',
      originalPrice: '$120',
      rating: 4.9,
      reviews: 342,
      badge: 'Best Seller',
      description: 'Transform your skin with our signature vitamin C serum, formulated with organic botanicals.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80',
    },
    {
      id: 2,
      name: 'Gentle Cleansing Balm',
      price: '$65',
      rating: 4.8,
      reviews: 189,
      badge: 'New',
      description: 'Melt away impurities with our nourishing cleansing balm enriched with natural oils.',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80',
    },
    {
      id: 3,
      name: 'Hydrating Night Cream',
      price: '$78',
      rating: 4.9,
      reviews: 267,
      description: 'Restore and replenish your skin overnight with our intensive moisture complex.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80',
    },
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16" data-scroll>
          <h2 className="heading-lg text-foreground mb-6">Our Premium Collection</h2>
          <p className="body-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our carefully curated selection of skincare essentials, each formulated 
            to deliver visible results and lasting beauty.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-scroll
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge className={`${product.badge === 'Best Seller' ? 'bg-primary' : 'bg-accent'} text-white font-medium`}>
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-foreground hover:bg-accent transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-foreground ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-foreground/60">({product.reviews} reviews)</span>
                </div>

                {/* Product Name */}
                <h3 className="heading-sm text-foreground mb-2">{product.name}</h3>
                
                {/* Description */}
                <p className="text-foreground/70 mb-4 leading-relaxed">{product.description}</p>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="heading-sm text-primary font-semibold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-foreground/50 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-scroll>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;