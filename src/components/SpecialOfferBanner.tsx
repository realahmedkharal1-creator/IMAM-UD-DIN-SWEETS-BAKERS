import { businessInfo } from '../data/businessData';
import { MessageCircle, Phone, Sparkles, Gift, HeartHandshake } from 'lucide-react';

export default function SpecialOfferBanner() {
  return (
    <section id="event-catering-banner" className="py-12 bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-800/80 border border-amber-600 text-amber-200 text-xs font-semibold">
              <Gift className="w-3.5 h-3.5 text-amber-300" />
              <span>Wedding & Event Special Booking</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Playfair_Display',serif] text-white">
              Planning a Wedding, Nikah, or Birthday Celebration?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Order customized luxury gold-embossed mithai boxes and grand multi-tier cakes. Pre-book your event date to ensure dedicated halwai preparation and on-time venue delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs sm:text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call {businessInfo.phonePrimary}</span>
            </a>

            <a
              href={businessInfo.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Event Inquiry</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
