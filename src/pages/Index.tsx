import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <div id="products">
        <Products />
      </div>
      <Testimonials />
      <div id="philosophy">
        <Philosophy />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
