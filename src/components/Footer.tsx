// components/Footer.jsx - Updated without the back to top button (now global)
import { Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Careers', href: '#' }
    ],
    Products: [
      { name: 'Skincare Guide', href: '#' },
      { name: 'Cleansers', href: '#' },
      { name: 'Moisturizers', href: '#' },
      { name: 'Treatments', href: '#' }
    ],
    Support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Size Guide', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-green-500' },
  ];

  useEffect(() => {
    fetch('https://api.github.com/repos/sathwikmerugu45/glow-scroll-style/commits')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0 && !data.message) {
          const lastCommitDate = new Date(data[0].commit.author.date);
          setLastUpdated(
            lastCommitDate.toLocaleString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          );
        } else {
          // Fallback to current date if API fails or rate limited
          const currentDate = new Date();
          setLastUpdated(
            currentDate.toLocaleString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          );
        }
      })
      .catch(error => {
        console.error('Error fetching last update:', error);
        // Fallback to current date on error
        const currentDate = new Date();
        setLastUpdated(
          currentDate.toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        );
      });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground relative border-t border-border/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 lg:py-16">
          {/* Top Section: Brand + Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-2">
                    Pêche Skincare
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60 font-medium tracking-wide uppercase">
                    Premium Natural Beauty
                  </p>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-2xl leading-relaxed">
                Discover the power of nature with our premium skincare collection. 
                Crafted with love and science for your skin's unique journey to radiant beauty.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm font-medium text-secondary-foreground/80">Follow us:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-2 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full transition-all duration-300 hover:scale-110 ${social.color} group`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 sm:p-6 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-secondary-foreground text-lg">Stay Glowing</h4>
              </div>
              <p className="text-sm text-secondary-foreground/70 mb-4 leading-relaxed">
                Get exclusive skincare tips, early access to new products, and special offers delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-secondary-foreground/50"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-secondary-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  {category}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-secondary-foreground/60">
              <p>© 2025 Pêche Skincare. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-secondary-foreground/30 rounded-full"></div>
              <p>Made with ❤️ for radiant skin</p>
            </div>
            
            {lastUpdated && (
              <div className="text-xs text-secondary-foreground/50">
                <span className="hidden sm:inline">Last updated: </span>
                <span className="sm:hidden">Updated: </span>
                {lastUpdated}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;