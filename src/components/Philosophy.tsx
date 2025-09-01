import { Leaf, Heart, Award, Shield } from 'lucide-react';

const Philosophy = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Sourced from organic farms worldwide, our ingredients are pure and sustainable.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every product is crafted with care and attention to detail in small batches.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by beauty experts and loved by customers around the globe.',
    },
    {
      icon: Shield,
      title: 'Dermatologist Tested',
      description: 'All products are clinically tested and approved by certified dermatologists.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div data-scroll>
            <h2 className="heading-lg text-foreground mb-6">Our Philosophy</h2>
            <p className="body-lg text-foreground/80 mb-6">
              At Luxe Skincare, we believe that true beauty comes from within and radiates outward. 
              Our mission is to enhance your natural glow with products that nourish, protect, and celebrate your unique skin.
            </p>
            
            <div className="space-y-4">
              <h3 className="heading-sm text-foreground">Crafted for Your Skin's Journey</h3>
              <p className="body-base text-foreground/70 leading-relaxed">
                We understand that every skin is unique, with its own story and needs. That's why we've 
                dedicated ourselves to creating products that work in harmony with your skin's natural processes, 
                not against them.
              </p>
              <p className="body-base text-foreground/70 leading-relaxed">
                From our sustainable sourcing practices to our innovative formulations, every step of our 
                process is guided by our commitment to quality, efficacy, and environmental responsibility.
              </p>
            </div>
          </div>

          <div data-scroll className="relative perspective-1000">
            <div className="rounded-3xl overflow-hidden shadow-float hover-tilt depth-card">
              <img 
                src="https://images.unsplash.com/photo-1570554886111-e80fcfa6a029?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Natural skincare ingredients"
                className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110 shimmer"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              data-scroll
              className="text-center group perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-500 hover-tilt">
                <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="heading-sm text-foreground mb-2 transition-all duration-300 group-hover:text-primary">{feature.title}</h4>
              <p className="body-base text-foreground/70 leading-relaxed transition-opacity duration-300 group-hover:text-foreground/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;