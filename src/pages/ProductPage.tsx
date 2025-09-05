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
  Clock,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  Quote
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Skincare transformation results"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white font-medium">
                    <Award className="h-3 w-3 mr-1" />
                    Award Winner 2020
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Before and after transformation"
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Melanin-rich skin glow"
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-accent/20 text-accent-foreground mb-4">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Limited Time Offer
                </Badge>
                <h1 className="heading-xl text-foreground mb-4">
                  Finally — a 34-page glow guide made for melanin-rich, sensitive, acne-prone skin 
                  <span className="text-primary"> (with 5 free bonuses!)</span>
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                    <span className="text-sm font-medium text-foreground ml-2">4.9</span>
                  </div>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Users className="h-4 w-4 mr-1" />
                    Trusted by 10,000+ Women
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-foreground line-through opacity-60">$37.00</span>
                    <Badge className="ml-2 bg-red-500 text-white">76% OFF</Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">$9.00</div>
                    <div className="text-sm text-foreground/60">Today Only</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    onClick={handleBuyNow}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now - Start Your Glow Journey
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleWishlist}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                    {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                  </Button>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-foreground/70">Risk-Free</div>
                </div>
                <div className="text-center">
                  <Download className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-foreground/70">Instant Download</div>
                </div>
                <div className="text-center">
                  <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-foreground/70">Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <h2 className="heading-lg text-center text-gradient mb-8">Perfect for:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground/80">Women with melanin-rich, sensitive, or acne-prone skin</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground/80">Anyone tired of wasting money on routines that weren't made for our skin</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground/80">Those ready to heal naturally — no filters, no whitening, no overwhelm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gradient mb-6">This Is My Real Skin Transformation</h2>
            <p className="body-lg text-foreground/80 max-w-3xl mx-auto">
              I used to think glowing meant whitening — until I healed my melanin-rich skin barrier the right way.
              You'll get the exact method I used, step-by-step, in this 34-page guide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card group">
              <CardContent className="p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1594824609615-2d8b2de1f4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Before transformation"
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <blockquote className="text-foreground/80 italic">
                  "After healing my barrier naturally — no more filters needed."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="glass-card group">
              <CardContent className="p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="During transformation"
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <blockquote className="text-foreground/80 italic">
                  "From irritated skin to calm, clear confidence."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="glass-card group">
              <CardContent className="p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1601999454167-715ea4ff7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="After transformation"
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <blockquote className="text-foreground/80 italic">
                  "Glow results in 3 weeks — without harsh actives."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gradient mb-6">What's Inside — Total Value: $264</h2>
            <p className="body-lg text-foreground/80">
              Get everything for just $9 (instead of $264) — before the price goes up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Module 1: The Truth About Melanin-Rich Skin",
                price: "$49",
                features: [
                  "Why most skincare routines don't work for us",
                  "Ingredients that secretly harm melanin", 
                  "Decode skincare labels like a pro"
                ],
                icon: "🖤"
              },
              {
                title: "Module 2: Hormonal Balance & Skin Health", 
                price: "$55",
                features: [
                  "Gut-skin connection, stress, sleep",
                  "Rituals that reset you from within"
                ],
                icon: "🧬"
              },
              {
                title: "Module 3: Emotional Healing for Skin Confidence",
                price: "$47", 
                features: [
                  "Release skin shame & mirror trauma",
                  "Journal + inner child prompts"
                ],
                icon: "💗"
              },
              {
                title: "Module 4: Minimal Skincare Routine That Works",
                price: "$44",
                features: [
                  "Melanin-safe active layering",
                  "No more 10-step chaos"
                ],
                icon: "✨"
              },
              {
                title: "Module 5: From Bare Skin to Boss Moves",
                price: "$50",
                features: [
                  "How to show up confidently — bare-faced",
                  "Daily glow affirmations"
                ],
                icon: "💼"
              }
            ].map((module, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl">{module.icon}</span>
                    <Badge className="bg-primary text-white">{module.price}</Badge>
                  </div>
                  <h3 className="heading-sm text-foreground mb-4">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bonuses */}
          <Card className="glass-card border-accent/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="heading-lg text-gradient">Bonus Gifts — Included Free</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">🧾 Printable Glow Tracker</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">🎥 Mini-Course: How to Use Your Product Effectively</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">🛒 Curated Melanin-Safe Product List</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">🍽 Bonus #1: Acne-Safe Meal & Snack Guide</h4>
                    <p className="text-sm text-foreground/80">Personal go-to meals that won't trigger acne</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">🧠 Bonus #2: "Are You Hurting Your Gut?" Checklist</h4>
                    <p className="text-sm text-foreground/80">Reveals habits that damage your gut</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Payment Method */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-wide">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="heading-lg text-gradient mb-4">Save 12% by Paying via Wise (Bank Transfer)</h3>
                <p className="text-foreground/80">Special offer for customers who can't use Stripe or PayPal</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">How It Works:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <p className="text-sm text-foreground/80">Check out and view details on this page</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <p className="text-sm text-foreground/80">Transfer $7.92 USD (discounted) via Wise</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <p className="text-sm text-foreground/80">DM receipt + your email address</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <p className="text-sm text-foreground/80">Receive your ebook via email</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Bank Transfer Details:</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Bank Name:</strong> CIMB</div>
                    <div><strong>Account No:</strong> 7636550670</div>
                    <div><strong>Account Name:</strong> Farah Syafiqa Binti Mohamad Fakhri</div>
                    <div><strong>Amount:</strong> $7.92 USD (12% discount applied)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gradient mb-6">What Melanin Queens Are Saying</h2>
            <p className="body-lg text-foreground/80">Real transformations from women worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya",
                location: "Mumbai, India",
                quote: "This guide taught me my skin didn't need more — it needed healing.",
                flag: "🇮🇳"
              },
              {
                name: "Adaora", 
                location: "Lagos, Nigeria",
                quote: "I thought hyperpigmentation was normal. This changed everything.",
                flag: "🇳🇬"
              },
              {
                name: "Thando",
                location: "Cape Town, South Africa", 
                quote: "It's not just skincare — it's soul work. Every melanin queen needs this.",
                flag: "🇿🇦"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-foreground/80 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{testimonial.flag}</span>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Guide Works */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gradient mb-6">Why This Guide Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Built for melanin-rich skin",
                description: "Not a copy-paste routine"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Glow naturally",
                description: "By healing your skin barrier"
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "No more expensive trial & error", 
                description: "Save time and money"
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Based on real results",
                description: "Not marketing hype"
              },
              {
                icon: <Download className="h-6 w-6" />,
                title: "Download instantly",
                description: "From anywhere in the world"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Trusted by 10,000+",
                description: "Women worldwide"
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-card text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gradient mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Will this work for my skin type?",
                answer: "Yes — especially if your skin is melanin-rich, sensitive, or acne-prone."
              },
              {
                question: "What makes this different?",
                answer: "This guide doesn't push products — it teaches you how to understand and heal your skin."
              },
              {
                question: "I'm not in Malaysia. Can I still buy it?",
                answer: "Yes! This is 100% digital — available worldwide 🌍"
              },
              {
                question: "What if it doesn't help me?",
                answer: "Just DM me. I stand behind this guide fully."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">"{faq.question}"</h3>
                  <p className="text-foreground/80 flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
              alt="You deserve this glow"
              className="w-full h-64 object-cover rounded-2xl mx-auto shadow-2xl"
            />
            
            <div className="space-y-6">
              <h2 className="heading-xl text-gradient">You deserve this kind of glow.</h2>
              <p className="body-lg text-foreground/80">
                Get it today for only $9 — price returns to $37 soon.
              </p>
              <p className="heading-sm text-foreground">
                Stop guessing. Start healing. Start glowing.
              </p>
              
              <Button 
                onClick={handleBuyNow}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <ShoppingCart className="h-6 w-6 mr-3" />
                BUY NOW & Begin Your Glow Journey
                <ChevronRight className="h-6 w-6 ml-3" />
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