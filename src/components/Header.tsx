import { useState, useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenOrderModal?: () => void;
}

export default function Header({ onOpenOrderModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute live open status for Pakistan Time (UTC+5)
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const pkTimeStr = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour12: false });
        const [hours, minutes] = pkTimeStr.split(':').map(Number);
        const currentMins = hours * 60 + minutes;
        // 07:00 AM (420 mins) to 11:30 PM (1410 mins)
        const isOpen = currentMins >= 420 && currentMins <= 1410;
        setIsOpenNow(isOpen);
      } catch (e) {
        setIsOpenNow(true);
      }
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu & Sweets', href: '#menu' },
    { name: 'Custom Cake Builder', href: '#custom-cake' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div id="top-announcement-bar" className="bg-amber-900 text-amber-100 text-xs sm:text-sm py-2 px-4 border-b border-amber-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-800 text-amber-200">
              <Sparkles className="w-3 h-3 mr-1 text-amber-300" />
              100% Pure Desi Ghee
            </span>
            <span className="hidden sm:inline text-amber-200/90">
              Free Home Delivery in Arifwala • Jinnah Chowk
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
              <span>{isOpenNow ? 'Open Now (Till 11:30 PM)' : 'Opens at 07:00 AM'}</span>
            </div>
            <a
              href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
              id="top-bar-phone-link"
              className="flex items-center gap-1 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{businessInfo.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80'
            : 'bg-[#FAF8F5] py-4 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#hero" id="brand-logo-link" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-sm border border-amber-600/30 group-hover:scale-105 transition-transform">
              <span className="font-['Cinzel',serif] text-xl font-bold text-amber-200">ID</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Cinzel',serif] font-bold text-base sm:text-lg tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                  IMAM-UD-DIN
                </span>
                <span className="hidden md:inline-block text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300/60">
                  SWEETS & BAKERS
                </span>
              </div>
              <p className="text-[11px] text-amber-900/80 font-medium tracking-wide">
                {businessInfo.urduName} • Jinnah Chowk, Arifwala
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-stone-700 hover:text-amber-800 hover:bg-amber-100/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
              id="header-call-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call Us</span>
            </a>

            <a
              href={businessInfo.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-order-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all hover:shadow hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={businessInfo.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="p-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/70 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-amber-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-800 flex items-center justify-center text-white font-bold font-['Cinzel',serif]">
                    ID
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">IMAM-UD-DIN</span>
                    <span className="text-[10px] text-amber-800 font-medium">Sweets & Bakers Arifwala</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  id="mobile-menu-close-btn"
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 hover:bg-amber-100 hover:text-amber-900 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="text-xs text-stone-600 space-y-1">
                <p className="flex items-center gap-1.5 font-medium text-stone-800">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  Jinnah Chowk, Arifwala
                </p>
                <p className="flex items-center gap-1.5 text-stone-600">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  Open daily: 07:00 AM – 11:30 PM
                </p>
              </div>

              <a
                href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
                id="mobile-drawer-call-btn"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {businessInfo.phonePrimary}</span>
              </a>

              <a
                href={businessInfo.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order / Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
