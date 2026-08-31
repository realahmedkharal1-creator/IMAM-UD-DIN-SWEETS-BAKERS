import { businessInfo } from '../data/businessData';
import { Phone, MessageCircle, MapPin, Clock, Facebook, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand Col (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white border border-amber-600/40">
                <span className="font-['Cinzel',serif] text-xl font-bold text-amber-200">ID</span>
              </div>
              <div>
                <span className="font-['Cinzel',serif] font-bold text-lg text-white block">
                  IMAM-UD-DIN
                </span>
                <span className="text-xs text-amber-400 font-medium">SWEETS & BAKERS</span>
              </div>
            </div>

            <p className="text-xs text-amber-300 font-['Cinzel',serif]">
              {businessInfo.urduName} — جناح چوک، عارفوالہ
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Arifwala’s leading sweet shop and bakery specializing in 100% pure desi ghee traditional mithai, custom celebration cakes, fresh morning biscuits, and hot fast food savories.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Imam-Ud-Din Sweets on Facebook"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-amber-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Google Maps"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-amber-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-emerald-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="text-stone-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-stone-400 hover:text-white transition-colors">Desi Ghee Mithai</a></li>
              <li><a href="#custom-cake" className="text-stone-400 hover:text-white transition-colors">Custom Cake Builder</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-white transition-colors">About Our Story</a></li>
              <li><a href="#gallery" className="text-stone-400 hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="text-stone-400 hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#faq" className="text-stone-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Specialties (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">Our Specialties</h3>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Pure Desi Ghee Gulab Jamun</li>
              <li>• Saffron Pista & Badam Barfi</li>
              <li>• Butterscotch & Strawberry Cakes</li>
              <li>• Multi-Tier Grand Wedding Cakes</li>
              <li>• Artisanal Zeera & Almond Biscuits</li>
              <li>• Behari Roll Slice (Pizza Dough Edition)</li>
              <li>• Nikah & Wedding Mithai Gift Boxes</li>
            </ul>
          </div>

          {/* Contact Block (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">Store Contact</h3>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-start gap-2 text-stone-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{businessInfo.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open Daily: 07:00 AM – 11:30 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`} className="hover:text-amber-400 font-semibold text-white">
                  {businessInfo.phonePrimary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${businessInfo.phoneSecondary.replace(/[^0-9]/g, '')}`} className="hover:text-amber-400">
                  {businessInfo.phoneSecondary}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer & Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center sm:text-left">
          <p>
            &copy; {currentYear} <strong>IMAM-UD-DIN SWEETS & BAKERS</strong>. All rights reserved. Jinnah Chowk, Arifwala.
          </p>

          {/* Agency Attribution Line (Customizable in README) */}
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Website designed & presented by</span>
            <span className="font-bold text-amber-400">[YOUR AGENCY NAME]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
