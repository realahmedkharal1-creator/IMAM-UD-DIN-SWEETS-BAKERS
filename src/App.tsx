import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import MenuSection from './components/MenuSection';
import CakeCustomizer from './components/CakeCustomizer';
import AboutStory from './components/AboutStory';
import WhyUs from './components/WhyUs';
import PhotoGallery from './components/PhotoGallery';
import ReviewsSection from './components/ReviewsSection';
import ProcessSection from './components/ProcessSection';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import FAQSection from './components/FAQSection';
import LocationHours from './components/LocationHours';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col selection:bg-amber-800 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <MenuSection />
        <CakeCustomizer />
        <AboutStory />
        <WhyUs />
        <PhotoGallery />
        <ReviewsSection />
        <ProcessSection />
        <SpecialOfferBanner />
        <FAQSection />
        <LocationHours />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar & Scroll-To-Top */}
      <FloatingActions />
    </div>
  );
}
