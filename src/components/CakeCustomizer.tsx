import { useState } from 'react';
import { businessInfo } from '../data/businessData';
import { Sparkles, MessageCircle, Check, Heart, HelpCircle, Gift } from 'lucide-react';

export default function CakeCustomizer() {
  const [occasion, setOccasion] = useState('Birthday');
  const [flavor, setFlavor] = useState('Butterscotch & Strawberry Choco-Chip (House Special)');
  const [weight, setWeight] = useState(2); // in lbs
  const [tiers, setTiers] = useState(1);
  const [customText, setCustomText] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('Today (Within 3-4 Hours)');
  const [addons, setAddons] = useState<string[]>([]);

  const occasions = ['Birthday', 'Wedding / Nikah', 'Anniversary', 'Bridal Shower', 'Baby Shower', 'Celebration'];
  
  const flavors = [
    { name: 'Butterscotch & Strawberry Choco-Chip (House Special)', basePerLb: 700, desc: 'Layered butterscotch cream, strawberry compote & chocolate chips' },
    { name: 'Rich Belgian Chocolate Fudge Ganache', basePerLb: 750, desc: 'Decadent moist chocolate sponge with thick chocolate ganache' },
    { name: 'Classic Red Velvet & Cream Cheese', basePerLb: 800, desc: 'Silky red velvet sponge with smooth cream cheese frosting' },
    { name: 'Fresh Pineapple & Mango Cream', basePerLb: 650, desc: 'Light sponge loaded with fresh tropical fruit cocktail' },
    { name: 'Theme Fondant 3D Sculpted Cake', basePerLb: 900, desc: 'Full custom fondant design (Cartoon, Floral, Monogram)' },
  ];

  const weightOptions = [
    { lbs: 2, label: '2 lbs (Serves 6–8)' },
    { lbs: 3, label: '3 lbs (Serves 10–14)' },
    { lbs: 4, label: '4 lbs (Serves 16–20)' },
    { lbs: 5, label: '5 lbs 2-Tier (Serves 22–28)' },
    { lbs: 8, label: '8 lbs 3-Tier Grand (Serves 40+)' }
  ];

  const availableAddons = [
    { id: 'sparkler', name: 'Magic Sparkler Candle & Knife', price: 150 },
    { id: 'topper', name: 'Golden Acrylic Cake Topper', price: 250 },
    { id: 'poppers', name: 'Party Confetti Poppers & Caps (Set of 6)', price: 350 },
    { id: 'mithai_box', name: 'Add 1kg Desi Ghee Gulab Jamun Gift Box', price: 950 }
  ];

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  // Price Calculation
  const selectedFlavorObj = flavors.find(f => f.name === flavor) || flavors[0];
  const cakeCost = weight * selectedFlavorObj.basePerLb + (weight >= 5 ? 500 : 0);
  const addonsCost = addons.reduce((sum, id) => {
    const addon = availableAddons.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const estimatedTotal = cakeCost + addonsCost;

  const handleWhatsAppOrder = () => {
    const addonNames = addons.map(id => availableAddons.find(a => a.id === id)?.name).filter(Boolean).join(', ');
    const msg = 
`*CUSTOM CAKE ORDER — IMAM-UD-DIN SWEETS & BAKERS*
---------------------------------------
• *Occasion:* ${occasion}
• *Selected Flavor:* ${flavor}
• *Weight / Size:* ${weight} lbs (${weight >= 5 ? 'Multi-Tier' : 'Single Tier'})
• *Custom Text on Cake:* "${customText || 'Happy Celebration'}"
• *Preferred Timing:* ${deliveryDate}
• *Add-ons:* ${addonNames || 'None'}
• *Estimated Total:* Rs. ${estimatedTotal.toLocaleString()}
• *Delivery City:* Arifwala (Free Delivery)
---------------------------------------
Please confirm my custom cake order and let me know if you need any design reference photos!`;

    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="custom-cake" className="py-16 sm:py-24 bg-gradient-to-b from-[#F7F2EB] to-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-200/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Interactive Cake & Sweet Box Builder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            Customize Your Dream <span className="text-amber-800">Celebration Cake</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Choose your occasion, favorite artisan flavor, custom message, and accessories. We bake fresh and deliver across Arifwala in pristine temperature-safe boxes.
          </p>
        </div>

        {/* Builder Container */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Settings Panel (8 Cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-8">
            
            {/* Step 1: Occasion */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                1. Select Occasion / Event
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between cursor-pointer ${
                      occasion === occ
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>{occ}</span>
                    {occasion === occ && <Check className="w-4 h-4 text-amber-200" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Flavor Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                2. Choose Signature Flavor & Filling
              </label>
              <div className="space-y-2.5">
                {flavors.map((flv) => (
                  <div
                    key={flv.name}
                    onClick={() => setFlavor(flv.name)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      flavor === flv.name
                        ? 'border-amber-700 bg-amber-50/70 ring-1 ring-amber-700'
                        : 'border-stone-200 hover:border-amber-300 bg-stone-50/50'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-900 text-xs sm:text-sm">{flv.name}</span>
                        {flv.name.includes('House Special') && (
                          <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 text-[10px] font-bold">
                            Most Loved
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500">{flv.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-amber-800">Rs. {flv.basePerLb}/lb</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Size & Weight */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                3. Select Weight & Serving Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {weightOptions.map((opt) => (
                  <button
                    key={opt.lbs}
                    type="button"
                    onClick={() => {
                      setWeight(opt.lbs);
                      setTiers(opt.lbs >= 5 ? 2 : 1);
                    }}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between cursor-pointer ${
                      weight === opt.lbs
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <div>
                      <span className="block font-bold">{opt.lbs} Pounds</span>
                      <span className={`text-[11px] ${weight === opt.lbs ? 'text-amber-200' : 'text-stone-500'}`}>
                        {opt.label.split('(')[1].replace(')', '')}
                      </span>
                    </div>
                    {weight === opt.lbs && <Check className="w-4 h-4 text-amber-200" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Custom Message & Inscription */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                4. Custom Message / Name Written on Cake
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="e.g. Happy 5th Birthday Ayesha! / Nikah Mubarak"
                className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700"
              />
              <p className="text-[11px] text-stone-500 mt-1">
                Hand-piped with edible chocolate or royal icing in English or Urdu calligraphy.
              </p>
            </div>

            {/* Step 5: Party Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                5. Celebration Add-ons & Gift Accessories
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableAddons.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'border-amber-700 bg-amber-50/60 ring-1 ring-amber-700'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-amber-800 border-amber-800 text-white' : 'border-stone-300 bg-white'}`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium text-stone-800">{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-900">+Rs. {addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Summary & WhatsApp Instant Submission Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-stone-900 text-stone-100 p-6 sm:p-7 rounded-3xl shadow-xl border border-amber-900/40 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <span className="text-amber-400 text-xs font-bold tracking-wider uppercase block">
                    Instant Order Quote
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">Your Custom Cake</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-900/80 flex items-center justify-center text-amber-300">
                  <Gift className="w-5 h-5" />
                </div>
              </div>

              {/* Specification Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Occasion:</span>
                  <span className="font-semibold text-white">{occasion}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Flavor:</span>
                  <span className="font-semibold text-amber-200 text-right max-w-[180px] truncate">{flavor.split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Size & Weight:</span>
                  <span className="font-semibold text-white">{weight} lbs ({weight >= 5 ? '2-Tier' : '1-Tier'})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Custom Text:</span>
                  <span className="font-semibold text-white italic truncate max-w-[170px]">
                    {customText ? `"${customText}"` : 'None specified'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Home Delivery:</span>
                  <span className="font-semibold text-emerald-400">FREE in Arifwala</span>
                </div>
              </div>

              {/* Total Estimated Price */}
              <div className="p-4 rounded-2xl bg-stone-800/90 border border-stone-700 text-center space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                  Estimated Total
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">
                  Rs. {estimatedTotal.toLocaleString()}
                </div>
                <p className="text-[10px] text-stone-400">
                  Exact price confirmed instantly on WhatsApp
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                id="custom-cake-whatsapp-submit-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Send Custom Cake on WhatsApp</span>
              </button>

              <div className="text-center">
                <p className="text-[11px] text-stone-400">
                  Or call directly: <a href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`} className="text-amber-400 hover:underline font-semibold">{businessInfo.phonePrimary}</a>
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
