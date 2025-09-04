import { Leaf, Heart, Award, Shield, Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Philosophy = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Melanin-Safe Ingredients',
      description: 'Carefully selected ingredients that work specifically for melanin-rich skin types.',
    },
    {
      icon: Heart,
      title: 'Inside-Out Healing',
      description: 'Heal your skin barrier naturally by understanding your unique triggers and patterns.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Trusted by 10,000+ women worldwide. Winner of The Rising SME — Beauty & Wellness Products, 2020.',
    },
    {
      icon: Shield,
      title: 'Risk-Free Guarantee',
      description: 'If it doesn\'t help, just message me. I want you to feel confident, not confused.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl float-gentle"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl float-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div data-scroll className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h2 className="heading-lg text-foreground mb-6 text-gradient"> Why I Created This</h2>
            <p className="body-lg text-foreground/80 mb-6">
              I used to feel ashamed of my bare skin — hiding behind filters and whitening creams that only made things worse.
              Skincare advice never spoke to us. So I made the thing I wish I had.
            </p>
            
            <div className="space-y-4">
              <h3 className="heading-sm text-foreground">🔥 Why This Guide Works</h3>
              <p className="body-base text-foreground/70 leading-relaxed">
                ✔️ Built for melanin-rich skin — not a copy-paste routine<br/>
                ✔️ Glow naturally by healing your skin barrier<br/>
                ✔️ No more expensive trial & error<br/>
                ✔️ Based on real results, not marketing hype<br/>
                ✔️ Download instantly — from anywhere in the world
              </p>
              <p className="body-base text-foreground/70 leading-relaxed">
                From India to Africa to Southeast Asia — we deserve to glow, naturally.
                A real, melanin-safe guide rooted in healing, not shame.
              </p>
            </div>
          </div>

          <div data-scroll className="relative perspective-2000 order-1 lg:order-2">
            <div 
              className="rounded-3xl overflow-hidden shadow-float  transition-all duration-700"
              // style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="https://thumbs.dreamstime.com/b/woman-face-beauty-skin-care-beautiful-girl-healthy-make-up-touching-makeup-hands-natural-skincare-treatment-woman-face-168156522.jpg" 
                alt="Natural skincare ingredients"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-110 shimmer"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-glow float-3d hover-lift magnetic">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              data-scroll
              className="text-center group perspective-1000 glass-card p-4 sm:p-6 rounded-3xl hover-lift"
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