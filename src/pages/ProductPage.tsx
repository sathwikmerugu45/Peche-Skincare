import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Check, 
  Gift, 
  Globe, 
  Shield,
  Download,
  Users,
  Award,
  Sparkles,
  Quote,
  ArrowRight,
  Timer,
  BookOpen,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProductPage = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleBuyNow = () => {
    window.open('https://payhip.com/b/1F28Z', '_blank');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Product Images */}
            <div className="order-2 lg:order-1">
              <div className="relative group mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500&q=80"
                  alt="Skincare transformation results"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white font-semibold">
                    <Award className="h-3 w-3 mr-1" />
                    Award Winner 2020
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Transformation before"
                  className="w-full h-20 md:h-28 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Transformation during"
                  className="w-full h-20 md:h-28 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1594824609615-2d8b2de1f4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Transformation after"
                  className="w-full h-20 md:h-28 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2 space-y-4">
              <Badge className="bg-accent/20 text-accent-foreground">
                <Timer className="h-3 w-3 mr-1" />
                Limited Time: 76% OFF
              </Badge>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                34-Page Melanin-Rich Skin Glow Guide
                <span className="text-primary block mt-2">(+ 5 Free Bonuses)</span>
              </h1>
              
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                You've tried expensive skincare, but your glow still isn't glowing? This digital guide shows what actually works from the inside out — specifically for melanin-rich skin.
              </p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                  <span className="text-sm font-medium text-foreground ml-2">4.9</span>
                </div>
                <div className="flex items-center text-sm text-foreground/60">
                  <Users className="h-4 w-4 mr-1" />
                  10,000+ Women Worldwide
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-foreground/50 line-through">$37</span>
                    <Badge className="bg-red-500 text-white font-bold">76% OFF</Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">$9</div>
                    <div className="text-sm text-foreground/60">Today Only</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    onClick={handleBuyNow}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Get Instant Access - $9
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <Shield className="h-5 w-5 text-primary mx-auto" />
                      <div className="text-xs text-foreground/70">Money Back</div>
                    </div>
                    <div className="space-y-1">
                      <Download className="h-5 w-5 text-primary mx-auto" />
                      <div className="text-xs text-foreground/70">Instant Access</div>
                    </div>
                    <div className="space-y-1">
                      <Globe className="h-5 w-5 text-primary mx-auto" />
                      <div className="text-xs text-foreground/70">Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What Makes This Different?</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              This isn't a list of products. It's a blueprint to heal your skin from the inside out — by understanding your triggers, patterns, and emotions that affect your glow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Melanin-Rich Focus",
                description: "Built specifically for melanin-rich, sensitive, or acne-prone skin"
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Natural Healing",
                description: "Glow naturally by healing your skin barrier — no filters or whitening"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Proven Results",
                description: "Based on real results, not marketing hype — used by 10,000+ women"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card text-center p-6">
                <CardContent className="p-0">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Results */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary font-semibold mb-4">
              <Award className="h-4 w-4 mr-2" />
              Real Transformations
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              See The Glow Transformation
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              These women followed the guide and achieved the natural glow they always wanted. 
              No filters, no editing — just real results from healing their skin naturally.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Transformation 1 */}
            <Card className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1594824609615-2d8b2de1f4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Before transformation"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500/80 text-white text-xs">Before</Badge>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80"
                      alt="After transformation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500/80 text-white text-xs">After</Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Priya"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Priya S.</h4>
                    <p className="text-sm text-foreground/60">Mumbai, India</p>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-primary mb-3" />
                <blockquote className="text-foreground/90 italic mb-4 leading-relaxed">
                  "I used to hide behind makeup every single day. This guide taught me that my skin didn't need more products — it needed healing. Now I wake up confident in my bare skin. The hyperpigmentation that bothered me for years has faded naturally."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">3 weeks later</span>
                </div>
              </CardContent>
            </Card>

            {/* Transformation 2 */}
            <Card className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1601999454167-715ea4ff7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Before transformation"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500/80 text-white text-xs">Before</Badge>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80"
                      alt="After transformation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500/80 text-white text-xs">After</Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Adaora"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Adaora O.</h4>
                    <p className="text-sm text-foreground/60">Lagos, Nigeria</p>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-primary mb-3" />
                <blockquote className="text-foreground/90 italic mb-4 leading-relaxed">
                  "I thought my dark spots and uneven skin tone were just something I had to live with. This guide completely changed my perspective. The emotional healing part was just as important as the skincare routine. I finally love what I see in the mirror."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">6 weeks later</span>
                </div>
              </CardContent>
            </Card>

            {/* Transformation 3 */}
            <Card className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Before transformation"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500/80 text-white text-xs">Before</Badge>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80"
                      alt="After transformation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500/80 text-white text-xs">After</Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Thando"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Thando W.</h4>
                    <p className="text-sm text-foreground/60">Cape Town, South Africa</p>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-primary mb-3" />
                <blockquote className="text-foreground/90 italic mb-4 leading-relaxed">
                  "This isn't just about skincare — it's soul work. The guide helped me understand that my acne was connected to stress and gut health. Once I addressed the root causes, my skin transformed. Every melanin queen needs this guide."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">4 weeks later</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-foreground/70">Women Transformed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-foreground/70">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3-6</div>
              <div className="text-sm text-foreground/70">Weeks to See Results</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">97%</div>
              <div className="text-sm text-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Content */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What's Inside — Complete System</h2>
            <p className="text-lg text-foreground/80">5 comprehensive modules + bonus materials worth $264</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                module: "Module 1",
                title: "The Truth About Melanin-Rich Skin",
                price: "$49",
                features: [
                  "Why most routines don't work for us",
                  "Ingredients that harm melanin",
                  "Decode skincare labels professionally"
                ],
                icon: "🖤"
              },
              {
                module: "Module 2",
                title: "Hormonal Balance & Skin Health",
                price: "$55",
                features: [
                  "Gut-skin connection mastery",
                  "Stress & sleep optimization",
                  "Internal reset rituals"
                ],
                icon: "🧬"
              },
              {
                module: "Module 3",
                title: "Emotional Healing for Confidence",
                price: "$47",
                features: [
                  "Release skin shame & trauma",
                  "Confidence-building exercises",
                  "Inner healing prompts"
                ],
                icon: "💗"
              },
              {
                module: "Module 4",
                title: "Minimal Skincare That Works",
                price: "$44",
                features: [
                  "Melanin-safe ingredient layering",
                  "3-step routine system",
                  "No more product chaos"
                ],
                icon: "✨"
              },
              {
                module: "Module 5",
                title: "Confident Bare-Faced Living",
                price: "$50",
                features: [
                  "Show up confidently without makeup",
                  "Daily glow affirmations",
                  "Boss-level confidence building"
                ],
                icon: "💼"
              }
            ].map((module, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-2xl mb-2 block">{module.icon}</span>
                      <Badge className="bg-primary text-white text-xs">{module.price}</Badge>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs text-primary font-semibold">{module.module}</span>
                    <h3 className="text-base font-bold text-foreground leading-tight">{module.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground/80">
                        <Check className="h-3 w-3 text-primary mr-2 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="glass-card border-accent/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">5 Free Bonus Gifts</h3>
                <p className="text-foreground/70">Exclusive extras to accelerate your results</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    "🧾 Printable Glow Tracker",
                    "🎥 Product Usage Mini-Course",
                    "🛒 Curated Melanin-Safe Product List"
                  ].map((bonus, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{bonus}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">🍽 Acne-Safe Meal Guide</h4>
                    <p className="text-sm text-foreground/80">Go-to meals that won't trigger breakouts</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">🧠 Gut Health Checklist</h4>
                    <p className="text-sm text-foreground/80">Identify habits damaging your gut-skin connection</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Real Results from Melanin Queens</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "This guide taught me my skin didn't need more — it needed healing.",
                author: "Priya, Mumbai",
                image: "https://images.unsplash.com/photo-1594824609615-2d8b2de1f4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
              },
              {
                quote: "I thought hyperpigmentation was normal. This changed everything.",
                author: "Adaora, Lagos", 
                image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
              },
              {
                quote: "It's not just skincare — it's soul work. Every melanin queen needs this.",
                author: "Thando, Cape Town",
                image: "https://images.unsplash.com/photo-1601999454167-715ea4ff7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6 text-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <Quote className="h-6 w-6 text-primary mx-auto mb-3" />
                  <blockquote className="text-foreground/80 italic mb-3">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-primary">— {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Payment */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Save 12% with Bank Transfer</h3>
                <p className="text-foreground/80">Alternative payment option via Wise for international customers</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">How It Works:</h4>
                  <div className="space-y-4">
                    {[
                      "Transfer $7.92 USD via Wise",
                      "Send receipt + email to us",
                      "Get instant access to guide"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <p className="text-sm text-foreground/80">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Bank Details:</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Bank:</span> CIMB</p>
                    <p><span className="font-medium">Account:</span> 7636550670</p>
                    <p><span className="font-medium">Name:</span> Farah Syafiqa Binti Mohamad Fakhri</p>
                    <p><span className="font-medium">Amount:</span> $7.92 USD</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Will this work for my skin type?",
                a: "Yes — especially if your skin is melanin-rich, sensitive, or acne-prone."
              },
              {
                q: "What makes this different?",
                a: "This guide doesn't push products — it teaches you how to understand and heal your skin."
              },
              {
                q: "Can I buy it from anywhere in the world?",
                a: "Yes! This is 100% digital — available worldwide instantly."
              },
              {
                q: "What if it doesn't help me?",
                a: "Just message us. We stand behind this guide fully with our money-back guarantee."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">"{faq.q}"</h4>
                  <p className="text-foreground/80 text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              You Deserve This Kind of Glow
            </h2>
            <p className="text-lg text-foreground/80">
              Stop guessing. Start healing. Start glowing.
            </p>
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-3xl font-bold text-primary mb-2">$9 Today Only</div>
              <p className="text-sm text-foreground/60 mb-4">Returns to $37 soon</p>
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Start Your Glow Journey Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;