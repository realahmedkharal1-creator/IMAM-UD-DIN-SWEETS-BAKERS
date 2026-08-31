import { useState } from 'react';
import { menuItems, businessInfo } from '../data/businessData';
import { MenuItem } from '../types';
import { MessageCircle, Sparkles, Check, Search, Tag, Filter } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem?: (item: MenuItem) => void;
}

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Specialties', icon: Sparkles },
    { id: 'mithai', label: 'Desi Ghee Mithai', urdu: 'مٹھائی' },
    { id: 'cakes', label: 'Custom Cakes', urdu: 'کیکس' },
    { id: 'bakery', label: 'Fresh Bakery & Biscuits', urdu: 'بیکری' },
    { id: 'fastfood', label: 'Fast Food & Pizza', urdu: 'فاسٹ فوڈ' },
    { id: 'wedding', label: 'Wedding & Gift Trays', urdu: 'شادی پیکجز' },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.urduName && item.urduName.includes(searchQuery)) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const generateWhatsAppItemUrl = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Assalam o Alaikum Imam-ud-Din Sweets & Bakers! I would like to order / inquire about: *${item.name}* (${item.price}). Please share delivery availability in Arifwala.`
    );
    return `https://wa.me/${businessInfo.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Our Fresh Daily Menu & Specialties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            Handcrafted with <span className="text-amber-800">Pure Desi Ghee</span> & Finest Ingredients
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From simmering copper pots of desi ghee Gulab Jamun to bespoke multi-tiered celebration cakes and oven-fresh bakery biscuits.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-800 text-amber-50 shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-amber-50 hover:text-amber-900 border border-stone-200'
                }`}
              >
                <span>{cat.label}</span>
                {cat.urdu && <span className="opacity-75 text-[11px]">({cat.urdu})</span>}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sweets, cakes, biscuits..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700 shadow-2xs placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={`${item.name} at Imam-Ud-Din Sweets & Bakers`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="800"
                  height="500"
                />
                
                {/* Badge Tag */}
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-800 text-amber-100 shadow-xs">
                    {item.badge}
                  </span>
                )}

                {/* Price Pill Tag */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-stone-950/85 backdrop-blur-xs text-amber-300 text-xs font-bold tracking-wide shadow-xs">
                  {item.price}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  {item.urduName && (
                    <p className="text-xs font-medium text-amber-800/90 font-['Cinzel',serif]">
                      {item.urduName}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Weight / Pack Options if present */}
                {item.weightOptions && item.weightOptions.length > 0 && (
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-semibold text-stone-500 block mb-1.5">
                      Available Options / Packing:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.weightOptions.map((opt, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px] font-medium border border-stone-200/60"
                        >
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Row */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-stone-500">
                    <span className="text-emerald-700 font-semibold">Free Delivery</span> in Arifwala
                  </div>

                  <a
                    href={generateWhatsAppItemUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-2xs hover:shadow transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State if search yields no result */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8 my-6">
            <p className="text-stone-600 font-medium">No items found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-800 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick Bottom Order Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-200">
              Need a Custom Sweet Box or Special Event Catering?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80">
              Call our master halwai directly at <span className="font-bold text-white">{businessInfo.phonePrimary}</span> or <span className="font-bold text-white">{businessInfo.phoneSecondary}</span> for customized wedding quotes.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={businessInfo.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Catering Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
