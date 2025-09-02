import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  Award, 
  Shield, 
  Sparkles, 
  Users,
  Globe,
  Download,
  Play,
  FileText,
  Gift
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Product data - in real app this would come from API/state management
  const product = {
    id: 1,
    name: "The Complete Melanin-Rich Skin Healing Guide",
    subtitle: "From Bare Skin to Boss Moves - The Ultimate Digital Guide",
    price: 9,
    originalPrice: 264,
    currency: "$",
    rating: 4.9,
    reviews: 10000,
    badge: "Limited Time Offer",
    description: "This $9 digital guide shows you what actually works — from the inside out — for melanin-rich skin.",
    longDescription: "You've tried all the expensive skincare — but your glow still isn't glowing? This comprehensive 34-page guide reveals the exact method to heal your melanin-rich skin barrier the right way, without filters, whitening creams, or overwhelming routines.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80"
    ],
    perfectFor: [
      "Women with melanin-rich, sensitive, or acne-prone skin",
      "Anyone tired of wasting money on routines that weren't made for our skin",
      "Those ready to heal naturally — no filters, no whitening, no overwhelm"
    ],
    modules: [
      {
        title: "Module 1: The Truth About Melanin-Rich Skin",
        value: 49,
        features: [
          "Why most skincare routines don't work for us",
          "Ingredients that secretly harm melanin",
          "Decode skincare labels like a pro"
        ]
      },
      {
        title: "Module 2: Hormonal Balance & Skin Health", 
        value: 55,
        features: [
          "Gut-skin connection, stress, sleep",
          "Rituals that reset you from within"
        ]
      },
      {
        title: "Module 3: Emotional Healing for Skin Confidence",
        value: 47,
        features: [
          "Release skin shame & mirror trauma",
          "Journal + inner child prompts"
        ]
      },
      {
        title: "Module 4: Minimal Skincare Routine That Works",
        value: 44,
        features: [
          "Melanin-safe active layering",
          "No more 10-step chaos"
        ]
      },
      {
        title: "Module 5: From Bare Skin to Boss Moves",
        value: 50,
        features: [
          "How to show up confidently — bare-faced",
          "Daily glow affirmations"
        ]
      }
    ],
    bonuses: [
      {
        title: "Printable Glow Tracker",
        icon: FileText
      },
      {
        title: "Mini-Course: How to Use Your Product Effectively",
        icon: Play
      },
      {
        title: "Curated Melanin-Safe Product List",
        icon: Gift
      },
      {
        title: "Acne-Safe Meal & Snack Guide",
        icon: FileText
      },
      {
        title: '"Are You Hurting Your Gut?" Checklist',
        icon: Shield
      }
    ],
    highlights: [
      "34-page comprehensive digital guide",
      "5 in-depth modules + bonuses",
      "Instant digital download",
      "Worldwide access",
      "Risk-free guarantee"
    ],
    testimonials: [
      {
        name: "Priya",
        location: "Mumbai",
        text: "This guide taught me my skin didn't need more — it needed healing.",
        flag: "🇮🇳"
      },
      {
        name: "Adaora", 
        location: "Lagos",
        text: "I thought hyperpigmentation was normal. This changed everything.",
        flag: "🇳🇬"
      },
      {
        name: "Thando",
        location: "Cape Town", 
        text: "It's not just skincare — it's soul work. Every melanin queen needs this.",
        flag: "🇿🇦"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Breadcrumb & Back Button */}
        <section className="py-6 border-b border-border">
          <div className="container-wide">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => navigate(-1)}
                className="hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Collection
              </Button>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hero Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Product Images */}
              <div className="space-y-4" data-scroll>
                <div className="relative rounded-3xl overflow-hidden shadow-float depth-card hover-lift perspective-1000">
                  <img 
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Limited Time Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary shadow-glow text-primary-foreground font-medium animate-pulse">
                      {product.badge}
                    </Badge>
                  </div>
                </div>
                
                {/* Image Thumbnails */}
                <div className="flex space-x-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
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
              <div className="space-y-8" data-scroll>
                
                {/* Trust Indicators */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {product.rating} ({product.reviews.toLocaleString()}+ reviews)
                  </span>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Award className="h-3 w-3 mr-1" />
                    Winner 2020
                  </Badge>
                </div>

                {/* Product Title */}
                <div>
                  <h1 className="heading-lg text-gradient mb-2">{product.name}</h1>
                  <p className="body-lg text-foreground/80">{product.subtitle}</p>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span className="heading-lg text-primary font-bold">
                    {product.currency}{product.price}
                  </span>
                  <span className="text-2xl text-foreground/50 line-through">
                    {product.currency}{product.originalPrice}
                  </span>
                  <Badge className="bg-accent text-accent-foreground">
                    Save 97%
                  </Badge>
                </div>

                {/* Quick Description */}
                <p className="body-base text-foreground/90 leading-relaxed">
                  {product.description}
                </p>

                {/* Perfect For Section */}
                <div className="space-y-4">
                  <h3 className="heading-sm text-foreground">💛 Perfect for:</h3>
                  <ul className="space-y-2">
                    {product.perfectFor.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="body-base text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart Section */}
                <div className="space-y-4 p-6 glass-card rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Quantity:</span>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-glow hover-lift group"
                  >
                    <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Get Instant Access - ${product.price}
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-foreground/60">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>Risk-Free</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>Instant Download</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4" />
                      <span>Worldwide</span>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="glass-card p-4 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {product.testimonials.slice(0, 3).map((testimonial, index) => (
                        <div 
                          key={index}
                          className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground"
                        >
                          {testimonial.flag}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        <Users className="h-4 w-4 inline mr-1" />
                        10,000+ melanin queens worldwide
                      </p>
                      <p className="text-xs text-foreground/60">Already transforming their skin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-wide">
            <div className="text-center mb-16" data-scroll>
              <h2 className="heading-lg text-gradient mb-6">📖 What's Inside — Total Value: ${product.originalPrice}</h2>
              <p className="body-lg text-foreground/80 max-w-3xl mx-auto">
                A complete transformation system designed specifically for melanin-rich skin, 
                with step-by-step modules and bonus materials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.modules.map((module, index) => (
                <div 
                  key={index}
                  data-scroll
                  className="glass-card rounded-3xl p-8 hover:shadow-glow transition-all duration-500 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-primary text-primary-foreground">
                      Module {index + 1}
                    </Badge>
                    <span className="text-sm font-medium text-primary">${module.value}</span>
                  </div>
                  
                  <h3 className="heading-sm text-foreground mb-4">{module.title}</h3>
                  
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bonuses Section */}
            <div className="mt-16" data-scroll>
              <h3 className="heading-md text-center text-gradient mb-8">🎁 Bonus Gifts — Included Free</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {product.bonuses.map((bonus, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover-lift"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <bonus.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-foreground text-sm">{bonus.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16" data-scroll>
              <h2 className="heading-lg text-gradient mb-6">💬 What Melanin Queens Are Saying</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {product.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  data-scroll
                  className="glass-card rounded-3xl p-8 text-center hover:shadow-glow transition-all duration-500 hover-lift"
                >
                  <div className="text-2xl mb-4">{testimonial.flag}</div>
                  <blockquote className="body-base text-foreground/90 mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="font-medium text-foreground">
                    {testimonial.name}, {testimonial.location}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-warm">
          <div className="container-narrow text-center">
            <div data-scroll>
              <h2 className="heading-lg text-gradient mb-6">💛 You deserve this kind of glow.</h2>
              <p className="body-lg text-foreground/90 mb-8">
                💸 Get it today for only ${product.price} — price returns to ${product.originalPrice} soon.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-glow hover-lift group mb-6"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Click 'BUY NOW' & Begin Your Glow Journey
              </Button>
              
              <p className="text-sm text-foreground/70">
                Stop guessing. Start healing. Start glowing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;