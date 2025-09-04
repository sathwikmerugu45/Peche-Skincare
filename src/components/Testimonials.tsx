import { Star, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya",
      location: "🇮🇳 Mumbai",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "This guide taught me my skin didn't need more — it needed healing.",
      transformation: "After healing naturally — no more filters needed"
    },
    {
      id: 2,
      name: "Adaora", 
      location: "🇳🇬 Lagos",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "I thought hyperpigmentation was normal. This changed everything.",
      transformation: "From irritated skin to calm, clear confidence"
    },
    {
      id: 3,
      name: "Thando",
      location: "🇿🇦 Cape Town", 
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "It's not just skincare — it's soul work. Every melanin queen needs this.",
      transformation: "Glow results in 3 weeks — without harsh actives"
    }
  ];

  return (
<section className="py-6 md:py-8 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl float-3d"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/30 rounded-full blur-3xl float-3d" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl float-3d" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12" data-scroll>
          <div className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real Transformations</span>
          </div>
          <h2 className="heading-lg text-gradient mb-6"> What Melanin Queens Are Saying</h2>
          <p className="body-lg text-foreground/80 max-w-2xl mx-auto">
            Real transformations from women who've healed their melanin-rich skin naturally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              data-scroll
              className="group glass-card rounded-3xl p-6 sm:p-8 shadow-float hover:shadow-glow transition-all duration-700 hover-lift depth-card perspective-1000"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Quote className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="h-5 w-5 text-primary fill-current transition-all duration-300 hover:scale-125 hover:rotate-12" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center mb-8">
                <p className="body-base text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.text}"
                </p>
              </blockquote>

              {/* Transformation Badge */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full shadow-glow">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {testimonial.transformation}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center" data-scroll>
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 glass-card px-4 sm:px-8 py-4 rounded-full text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Trusted by 10,000+ Women</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-primary fill-current" />
              <span className="text-sm font-medium text-foreground">4.9/5 Average Rating</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Worldwide Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;