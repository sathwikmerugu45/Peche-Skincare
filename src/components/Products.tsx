import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Heart, Eye, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

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
      features: ['Vitamin C', 'Anti-aging', 'Brightening'],
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
      features: ['Natural oils', 'Deep cleanse', 'Moisturizing'],
    },
    {
      id: 3,
      name: 'Hydrating Night Cream',
      price: '$78',
      rating: 4.9,
      reviews: 267,
      description: 'Restore and replenish your skin overnight with our intensive moisture complex.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80',
      features: ['Night repair', 'Hydrating', 'Anti-aging'],
    },
  ];

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl float-3d"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl float-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl float-gentle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16" data-scroll>
          <div className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-medium text-primary">Premium Collection</span>
          </div>
          <h2 className="heading-lg text-gradient mb-6">Our Premium Collection</h2>
          <p className="body-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our carefully curated selection of skincare essentials, each formulated 
            to deliver visible results and lasting beauty.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-scroll
              className="group glass-card rounded-3xl overflow-hidden shadow-float hover:shadow-xl transition-all duration-700 hover-lift depth-card perspective-1000 magnetic"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Enhanced Product Image Container */}
              <div className="relative overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000 shimmer"
                  />
                  
                  {/* Animated overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating particles on hover */}
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 particles opacity-30"></div>
                  )}
                </div>
                
                {/* Enhanced Badge with glow */}
                {product.badge && (
                  <div className="absolute top-4 left-4 animate-pulse">
                    <Badge className={`${
                      product.badge === 'Best Seller' 
                        ? 'bg-primary shadow-glow glow-pulse' 
                        : 'bg-accent shadow-glow glow-pulse'
                    } text-white font-medium backdrop-blur-md border-0`}>
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Enhanced Action Buttons Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-3">
                    <Button 
                      size="sm"
                      className="glass-card text-foreground hover:bg-primary hover:text-primary-foreground transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-glow hover-tilt btn-3d"
                      style={{ transitionDelay: '0.1s' }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm"
                      className="glass-card text-foreground hover:bg-primary hover:text-primary-foreground transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-glow hover-tilt btn-3d"
                      style={{ transitionDelay: '0.2s' }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary-dark transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-glow hover-lift btn-3d"
                      style={{ transitionDelay: '0.3s' }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Product Info */}
              <div className="p-6 relative">
                {/* Animated rating with individual star animations */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className="h-4 w-4 text-primary fill-current transition-all duration-300 hover:scale-125 hover:rotate-12" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                    <span className="text-sm font-medium text-foreground ml-2">{product.rating}</span>
                  </div>
                  <span className="text-sm text-foreground/60">({product.reviews} reviews)</span>
                </div>

                {/* Enhanced Product Name with gradient */}
                <h3 className="heading-sm text-foreground mb-2 group-hover:text-gradient transition-all duration-300">{product.name}</h3>
                
                {/* Enhanced Description */}
                <p className="text-foreground/70 mb-4 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{product.description}</p>

                {/* Product Features Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, i) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground transform hover:scale-105"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Enhanced Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="heading-sm text-primary font-semibold group-hover:text-gradient transition-all duration-300">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-foreground/50 line-through relative">
                        {product.originalPrice}
                        {/* Animated strike-through */}
                        <div className="absolute inset-0 bg-red-500/20 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground btn-3d hover-lift magnetic shadow-glow"
                  >
                    Add to Cart
                  </Button>
                </div>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16" data-scroll>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-3d hover-lift magnetic shadow-glow group relative overflow-hidden"
          >
            <span className="relative z-10">View All Products</span>
            <Sparkles className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
            
            {/* Animated background fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;