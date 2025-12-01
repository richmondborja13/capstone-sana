import Header from '@/components/layout/Header';
import Hero from '@/components/body/Hero';
import MostPicked from '@/components/body/MostPicked';
import Services from '@/components/body/Services';
import Testimonials from '@/components/body/Testimonials';
import ContactSection from '@/components/body/ContactSection';
import Subscribe from '@/components/body/Subscribe';
import Footer from '@/components/layout/Footer';

export default function LandingPageRoute() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <MostPicked />
      <Services />
      <Testimonials />
      <ContactSection />
      <Subscribe />
      <Footer />
    </div>
  );
}
