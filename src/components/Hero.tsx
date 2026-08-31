import { useState, useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { MessageCircle, MapPin, Star, Phone, CheckCircle2, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal?: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    try {
      const now = new Date();
      const pkTimeStr = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour12: false });
      const [hours, minutes] = pkTimeStr.split(':').map(Number);
      const currentMins = hours * 60 + minutes;
      setIsOpenNow(currentMins >= 420 && currentMins <= 1410);
    } catch (e) {
      setIsOpenNow(true);
    }
  }, []);

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F7F2EB] to-[#FAF8F5]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill & Location Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex items-center gap-1 text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>100% Pure Desi Ghee</span>
              </span>
              <span className="text-amber-400">•</span>
              <span className="text-amber-800">Jinnah Chowk, Arifwala</span>
              <span className="text-amber-400">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-800 font-bold">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                {isOpenNow ? 'Open Now' : 'Opens 7 AM'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="font-['Cinzel',serif] tracking-wider text-xs sm:text-sm uppercase text-amber-800 font-bold block">
                {businessInfo.name}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-stone-900 leading-[1.18] tracking-tight">
                Pure <span className="text-gold-gradient font-serif">Desi Ghee Mithai</span> & Handcrafted Celebration Cakes
              </h1>
              <p className="text-sm font-semibold text-amber-900/90 font-['Cinzel',serif] tracking-wide pt-1">
                {businessInfo.urduName} — عارفوالہ کا سب سے معتبر نام
              </p>
            </div>

            {/* Subheadline & Value Proposition */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
              Experience the rich, time-honored taste of traditional Pakistani sweets prepared exclusively in 
              <strong className="text-stone-900 font-semibold"> pure desi ghee</strong>, signature <strong className="text-stone-900 font-semibold">customized birthday & wedding cakes</strong>, fresh morning biscuits, and hot bakery savory snacks.
            </p>

            {/* Key Assurance Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-stone-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Free Home Delivery Across Arifwala</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Custom Cakes (Flavor, Theme, Inscription)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Bulk Wedding & Event Gift Box Packing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Daily Fresh Baked Biscuits & Savories</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={businessInfo.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] text-center"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200 shrink-0" />
                <span>Order on WhatsApp (0312-6942500)</span>
              </a>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-cta-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-xs hover:shadow transition-all text-center"
              >
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Get Directions (Maps)</span>
              </a>
            </div>

            {/* Trust Bar with Verified Rating */}
            <div className="pt-4 border-t border-stone-300/60 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-stone-900">{businessInfo.rating} ★</span>
                <span className="text-stone-500 text-xs">({businessInfo.reviewCount}+ Google & FB Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-stone-600">
                <Award className="w-4 h-4 text-amber-700" />
                <span>Trusted Halwai & Bakers Since {businessInfo.establishedYear}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80"
                    alt="Authentic Pakistani Desi Ghee Traditional Sweets and Mithai Platter at Imam-Ud-Din Sweets & Bakers"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    width="1200"
                    height="825"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                  
                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-amber-600/90 backdrop-blur-xs text-[11px] font-bold tracking-wider uppercase mb-1">
                      Fresh Daily Preparation
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold leading-snug text-white">
                      Desi Ghee Gulab Jamun, Barfi & Custom Cakes
                    </h2>
                    <p className="text-xs text-amber-200">
                      Crafted with pure farm khoya, cardamom, and premium nuts
                    </p>
                  </div>
                </div>

                {/* Card Bottom Quick Features */}
                <div className="p-4 bg-stone-900 text-stone-200 grid grid-cols-3 divide-x divide-stone-800 text-center text-xs">
                  <div className="px-2">
                    <span className="block font-bold text-amber-400 text-sm">100%</span>
                    <span className="text-stone-400 text-[11px]">Pure Desi Ghee</span>
                  </div>
                  <div className="px-2">
                    <span className="block font-bold text-amber-400 text-sm">Free</span>
                    <span className="text-stone-400 text-[11px]">Home Delivery</span>
                  </div>
                  <div className="px-2">
                    <span className="block font-bold text-amber-400 text-sm">7 AM - 11:30 PM</span>
                    <span className="text-stone-400 text-[11px]">Open Daily</span>
                  </div>
                </div>
              </div>

              {/* Floating Floating Accent Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-lg border border-amber-200 hidden sm:flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Celebration Cake Specialist</p>
                  <p className="text-[11px] text-stone-500">Butterscotch • Fudge • Strawberry</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
