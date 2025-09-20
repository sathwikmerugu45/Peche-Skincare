import { Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  const footerLinks = {
    Company: ['About Us', 'Our Story'],
    Products: ['Our Skincare Guide', 'Shop All Products'],
    Support: ['Contact Us', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: '#', label: 'Email' },
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
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })
        );
      } else {
        // Fallback to current date if API fails or rate limited
        const currentDate = new Date();
        setLastUpdated(
          currentDate.toLocaleString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
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
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    });
}, []);


  // const Footer = () => {
  return (
   <footer className="bg-secondary text-secondary-foreground relative border-t border-border shadow-[0_-6px_16px_rgba(255,115,92,0.15)] bottom-0 left-0 w-full overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Peche Skincare
            </h3>
            <p className="text-sm sm:text-base text-secondary-foreground/80 max-w-sm mx-auto sm:mx-0">
              Discover the power of nature with our premium skincare
              collection. Crafted with love for your skin&apos;s unique
              journey.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Careers
                </a>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Press
                </a> */}
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Cleansers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Moisturizers
                </a>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Serums
                </a> */}
              </li>
              <li>
                {/* <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Treatments
                </a> */}
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  FAQs
                </a>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 hover-lift inline-block"
                >
                  Shipping & Returns
                </a> */}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-secondary-foreground/70 mb-4">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 hover-lift"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-secondary-foreground/60">
          <p>
            © 2025 Peche Skincare. All rights reserved.
            <span> • Last updated: {lastUpdated || 'September 20, 2025 at 08:58:47 PM'} • </span>
            Made with ❤️ for radiant skin
          </p>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};
export default Footer;