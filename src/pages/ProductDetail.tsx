import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  Award, 
  Shield, 
  Truck, 
  RefreshCw,
  Sparkles, 
  Users,
  Globe,
  Download,
  Play,
  FileText,
  Gift,
  Minus,
  Plus,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Product data - in real app this would come from API/state management
  const product = {
    id: 1,
    name: "The Complete Melanin-Rich Skin Healing Guide",
    subtitle: "34-Page Digital Guide • Instant Download • Worldwide Access",
    price: 9,
    originalPrice: 264,
    currency: "$",
    rating: 4.9,
    reviews: 10000,
    badge: "🔥 Limited Time - 97% Off",
    inStock: true,
    sku: "SKIN-GUIDE-001",
    category: "Digital Guides",
    description: "Transform your skincare journey with our comprehensive guide designed specifically for melanin-rich skin. This isn't just another product list—it's a complete system for understanding, healing, and maintaining healthy, glowing skin from the inside out.",
    
    keyFeatures: [
      "34-page comprehensive digital guide",
      "5 detailed modules covering everything from skin science to emotional healing", 
      "Instant PDF download - no waiting",
      "Lifetime access - download anytime",
      "Mobile-friendly format",
      "Bonus materials worth $19 included free"
    ],

    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80"
    ],

    perfectFor: [
      "Women with melanin-rich, sensitive, or acne-prone skin",
      "Anyone tired of wasting money on routines that weren't made for our skin", 
      "Those ready to heal naturally — no filters, no whitening, no overwhelm",
      "Anyone looking to understand their skin better and build confidence"
    ],

    modules: [
      {
        number: 1,
        title: "The Truth About Melanin-Rich Skin",
        value: 49,
        pages: 8,
        description: "Understand why conventional skincare fails melanin-rich skin",
        features: [
          "Science behind melanin and skin structure",
          "Harmful ingredients to avoid at all costs", 
          "How to decode skincare labels like a pro",
          "Common myths that damage our skin"
        ]
      },
      {
        number: 2,
        title: "Hormonal Balance & Skin Health", 
        value: 55,
        pages: 7,
        description: "The connection between internal health and external glow",
        features: [
          "Gut-skin axis and digestive health",
          "Stress management for clearer skin",
          "Sleep optimization for skin repair",
          "Hormonal triggers and solutions"
        ]
      },
      {
        number: 3,
        title: "Emotional Healing for Skin Confidence",
        value: 47,
        pages: 6,
        description: "Heal the emotional wounds that affect your skin",
        features: [
          "Release skin shame and mirror trauma",
          "Inner child healing prompts",
          "Confidence-building exercises",
          "Journaling templates for self-discovery"
        ]
      },
      {
        number: 4,
        title: "Minimal Skincare Routine That Works",
        value: 44,
        pages: 8,
        description: "Build a simple, effective routine for your skin type",
        features: [
          "3-step routine that actually works",
          "Melanin-safe active ingredient layering",
          "Product recommendations by budget",
          "Troubleshooting common issues"
        ]
      },
      {
        number: 5,
        title: "From Bare Skin to Boss Moves",
        value: 50,
        pages: 5,
        description: "Build unshakeable confidence in your natural skin",
        features: [
          "Showing up bare-faced with confidence",
          "Daily affirmations for self-love",
          "Building a positive self-image",
          "Embracing your natural beauty"
        ]
      }
    ],

    bonuses: [
      {
        title: "Printable Glow Tracker",
        description: "Track your skin's progress with our beautiful, printable tracker",
        value: 7
      },
      {
        title: "Video: How to Use Products Effectively", 
        description: "Short video guide on proper application techniques",
        value: 12
      },
      {
        title: "Melanin-Safe Product Database",
        description: "Curated list from drugstore to luxury options",
        value: 15
      },
      {
        title: "Acne-Safe Meal Guide",
        description: "Foods that heal vs. foods that harm your skin",
        value: 10
      },
      {
        title: "Gut Health Checklist",
        description: "Identify habits secretly damaging your gut and skin",
        value: 8
      }
    ],

    testimonials: [
      {
        name: "Priya S.",
        location: "Mumbai, India",
        rating: 5,
        text: "This guide taught me my skin didn't need more products—it needed healing. My hyperpigmentation has faded so much in just 3 weeks!",
        verified: true,
        helpful: 127,
        date: "2 weeks ago"
      },
      {
        name: "Adaora O.",
        location: "Lagos, Nigeria", 
        rating: 5,
        text: "I thought my dark spots were permanent. This guide changed everything. Finally, advice made for US, not against us.",
        verified: true,
        helpful: 89,
        date: "1 month ago"
      },
      {
        name: "Thando W.",
        location: "Cape Town, South Africa",
        rating: 5, 
        text: "It's not just skincare—it's soul work. Every melanin queen needs this. My confidence has completely transformed.",
        verified: true,
        helpful: 156,
        date: "3 weeks ago"
      }
    ],

    faqs: [
      {
        question: "Will this work for my skin type?",
        answer: "Yes! This guide is specifically designed for melanin-rich skin of all types - whether you're dealing with acne, sensitivity, hyperpigmentation, or just want to maintain healthy skin."
      },
      {
        question: "What makes this different from other skincare advice?",
        answer: "Unlike generic skincare guides, this was created specifically for melanin-rich skin. It addresses the unique challenges we face and provides solutions that actually work for our skin structure."
      },
      {
        question: "Is this available worldwide?",
        answer: "Yes! This is a digital download, so you can access it immediately from anywhere in the world. No shipping required."
      },
      {
        question: "What if it doesn't help me?",
        answer: "We're so confident in this guide that if you don't see value, just message us and we'll make it right. Your success is our priority."
      }
    ]
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} (${quantity}x) added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "Item removed from your wishlist" : "Item saved to your wishlist",
    });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-border bg-secondary/30">
          <div className="container-wide">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
                <span>/</span>
                <button onClick={() => navigate('/#products')} className="hover:text-primary">Products</button>
                <span>/</span>
                <span className="text-foreground">{product.category}</span>
              </div>
              
              <Button variant="ghost" onClick={() => navigate(-1)} className="hover:bg-secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Product Images */}
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative group">
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary shadow-float">
                    <img 
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Image Navigation */}
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    
                    {/* Zoom Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-medium animate-pulse">
                        {product.badge}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Image Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          selectedImage === index ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-primary shadow-glow' 
                          : 'border-transparent hover:border-primary/30'
                      }`}
                    >
                      <img 
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                
                {/* Product Title & Rating */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-primary border-primary">
                      Digital Guide
                    </Badge>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={handleWishlist}
                        className={`p-2 rounded-full transition-colors ${
                          isWishlisted ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <h1 className="heading-lg text-foreground mb-3">{product.name}</h1>
                  <p className="text-lg text-muted-foreground mb-4">{product.subtitle}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
                    <Badge className="bg-accent text-accent-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      Winner 2020
                    </Badge>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-bold text-primary">
                      {product.currency}{product.price}
                    </span>
                    <span className="text-2xl text-muted-foreground line-through">
                      {product.currency}{product.originalPrice}
                    </span>
                    <Badge className="bg-destructive text-destructive-foreground text-lg px-3 py-1">
                      Save 97%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    That's less than the cost of one wrong product you might regret buying.
                  </p>
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">In Stock - Digital Download</span>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">What you'll get:</h3>
                  <div className="grid gap-2">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add to Cart */}
                <Card className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button 
                    onClick={handleAddToCart}
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-glow group"
                  >
                    <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Get Instant Access - {product.currency}{product.price * quantity}
                  </Button>

                  <div className="grid grid-cols-3 gap-4 text-xs text-center text-muted-foreground">
                    <div className="flex flex-col items-center space-y-1">
                      <Shield className="h-4 w-4" />
                      <span>Risk-Free</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <Download className="h-4 w-4" />
                      <span>Instant Download</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <Globe className="h-4 w-4" />
                      <span>Worldwide</span>
                    </div>
                  </div>
                </Card>

                {/* Trust Signals */}
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                    <span>Instant delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="h-4 w-4 text-muted-foreground" />
                    <span>Money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>10,000+ customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container-wide">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="heading-md mb-6">About This Guide</h3>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Created by skincare experts who understand the unique needs of melanin-rich skin, 
                      this guide cuts through the noise and gives you exactly what you need to achieve 
                      healthy, glowing skin naturally.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-md mb-6">Perfect For</h3>
                    <div className="space-y-4">
                      {product.perfectFor.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="modules" className="space-y-8">
                <div>
                  <h3 className="heading-md text-center mb-8">What's Inside - 5 Comprehensive Modules</h3>
                  <div className="grid gap-6">
                    {product.modules.map((module) => (
                      <Card key={module.number} className="p-8 hover:shadow-glow transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="font-bold text-primary">{module.number}</span>
                            </div>
                            <div>
                              <h4 className="heading-sm">{module.title}</h4>
                              <p className="text-sm text-muted-foreground">{module.pages} pages • Value: ${module.value}</p>
                            </div>
                          </div>
                          <Badge variant="outline">${module.value}</Badge>
                        </div>
                        
                        <p className="text-foreground/80 mb-4">{module.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-2">
                          {module.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground/90">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-8">
                <div>
                  <div className="text-center mb-12">
                    <h3 className="heading-md mb-4">Customer Reviews</h3>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-primary fill-current" />
                        ))}
                      </div>
                      <span className="text-2xl font-bold">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {product.testimonials.map((testimonial, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold flex items-center space-x-2">
                                <span>{testimonial.name}</span>
                                {testimonial.verified && (
                                  <Badge variant="outline" className="text-xs">
                                    <Check className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-primary fill-current" />
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                          </div>
                        </div>
                        
                        <p className="text-foreground/90 leading-relaxed mb-4">"{testimonial.text}"</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Helpful ({testimonial.helpful})</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-8">
                <div>
                  <h3 className="heading-md text-center mb-8">Frequently Asked Questions</h3>
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {product.faqs.map((faq, index) => (
                      <Card key={index} className="p-6">
                        <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                        <p className="text-foreground/90 leading-relaxed">{faq.answer}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-warm">
          <div className="container-narrow text-center">
            <h2 className="heading-lg text-gradient mb-6">Ready to Transform Your Skin?</h2>
            <p className="body-lg text-foreground/90 mb-8">
              Join 10,000+ women who've already started their glow journey. 
              Get instant access for just ${product.price} (normally ${product.originalPrice}).
            </p>
            
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-glow group mb-6"
            >
              <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Get Instant Access - ${product.price}
            </Button>
            
            <p className="text-sm text-foreground/70">
              💸 Limited time offer • 🔒 Risk-free guarantee • 📱 Instant download
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;