import { useState, useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Scroll back to top"
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 p-3 rounded-full bg-amber-800 hover:bg-amber-900 text-white shadow-xl border border-amber-600/40 transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Mobile Bottom Bar (Visible on Mobile Only) */}
      <div
        id="mobile-sticky-action-bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-stone-200 p-2.5 sm:hidden shadow-2xl flex items-center gap-2"
      >
        <a
          href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
          id="mobile-bottom-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 text-white font-bold text-xs active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Store</span>
        </a>

        <a
          href={businessInfo.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm active:scale-98 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </a>
      </div>
    </>
  );
}
