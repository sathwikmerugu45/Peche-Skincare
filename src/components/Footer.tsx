import { Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Our Story', 'Careers', 'Press'],
    Products: ['Best Sellers', 'New Arrivals', 'Gift Sets', 'Ingredients'],
    Support: ['Contact Us', 'FAQ', 'Shipping', 'Returns'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-gentle"></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-accent/10 rounded-full blur-lg float-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="heading-sm font-medium">Luxe Skincare</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Discover the power of nature with our premium skincare collection. 
              Crafted with love for your skin's unique journey.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} data-scroll>
              <h4 className="font-semibold text-secondary-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border relative z-10">
        <div className="container-wide py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div data-scroll>
              <h4 className="font-semibold text-secondary-foreground mb-1">Stay in the glow</h4>
              <p className="text-secondary-foreground/70">Subscribe for skincare tips and exclusive offers.</p>
            </div>
            <div data-scroll className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 glass-card border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-r-lg transition-colors duration-300 hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border relative z-10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Luxe Skincare. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Made with ❤️ for radiant skin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;