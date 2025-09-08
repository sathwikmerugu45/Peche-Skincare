import { Leaf, Heart, Award, Shield, Sparkles } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-peach-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-pink-200/40 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">Our Philosophy</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Why I Created 
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> This</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I used to feel ashamed of my bare skin — hiding behind filters and whitening creams that only made things worse.
              Skincare advice never spoke to us. So I made the thing I wish I had.
            </p>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100/50 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔥</span>
                Why This Guide Works
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Built for melanin-rich skin — not a copy-paste routine</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Glow naturally by healing your skin barrier</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>No more expensive trial & error</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Based on real results, not marketing hype</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Download instantly — from anywhere in the world</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-orange-100">
                <p className="text-gray-600 italic">
                  From India to Africa to Southeast Asia — we deserve to glow, naturally.
                  A real, melanin-safe guide rooted in healing, not shame.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50">
                <img 
                  src="https://thumbs.dreamstime.com/b/woman-face-beauty-skin-care-beautiful-girl-healthy-make-up-touching-makeup-hands-natural-skincare-treatment-woman-face-168156522.jpg" 
                  alt="Natural skincare for melanin-rich skin"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-pink-500/10"></div>
              </div>
              
              {/* Eco-Friendly Badge */}
              <div className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-green-200/50 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-orange-500 group-hover:text-pink-500 transition-colors duration-300" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h4>
              
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Philosophy;