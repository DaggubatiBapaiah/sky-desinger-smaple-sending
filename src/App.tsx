import PromoBar from '@/components/PromoBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import CategoryGrid from '@/components/CategoryGrid';
import PopularProducts from '@/components/PopularProducts';
import CustomerSegments from '@/components/CustomerSegments';
import FeaturedProducts from '@/components/FeaturedProducts';
import BusinessSolutions from '@/components/BusinessSolutions';
import ProcessSteps from '@/components/ProcessSteps';
import DesignSupport from '@/components/DesignSupport';
import PortfolioGrid from '@/components/PortfolioGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocalBusinessSection from '@/components/LocalBusinessSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CategoryGrid />
        <PopularProducts />
        <CustomerSegments />
        <FeaturedProducts />
        <BusinessSolutions />
        <ProcessSteps />
        <DesignSupport />
        <PortfolioGrid />
        <WhyChooseUs />
        <LocalBusinessSection />
        <Testimonials />
        <FAQ />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
