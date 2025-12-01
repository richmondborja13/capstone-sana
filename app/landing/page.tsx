import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import MostPicked from '@/components/landing/MostPicked';
import Services from '@/components/landing/Services';
import Testimonials from '@/components/landing/Testimonials';
import ContactSection from '@/components/landing/ContactSection';
import Subscribe from '@/components/landing/Subscribe';
import SiteFooter from '@/components/landing/SiteFooter';

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
      <SiteFooter />
    </div>
  );
}
