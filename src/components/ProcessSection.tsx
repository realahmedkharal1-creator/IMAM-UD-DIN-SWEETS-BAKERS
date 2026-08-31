import { ShoppingBag, MessageSquareText, Sparkles, Truck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose Sweets & Custom Cake',
      desc: 'Browse our menu, select your preferred desi ghee mithai, or configure your custom cake flavor, weight, and inscription.',
      icon: ShoppingBag
    },
    {
      number: '02',
      title: 'Quick WhatsApp / Call Confirmation',
      desc: 'Send your selection directly to 0312-6942500. Our team immediately confirms price, fresh preparation time, and delivery address.',
      icon: MessageSquareText
    },
    {
      number: '03',
      title: 'Free Home Delivery or Store Pickup',
      desc: 'Receive your order fresh, hot, and securely packaged at your doorstep in Arifwala, or pick it up directly from Jinnah Chowk.',
      icon: Truck
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>How to Order</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            Simple 3-Step <span className="text-amber-800">Fresh Ordering</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Getting pure desi ghee sweets and celebratory cakes delivered in Arifwala is effortless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200 relative flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-amber-900/30 font-serif">{st.number}</span>
                  <div className="w-11 h-11 rounded-xl bg-amber-800 text-white flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{st.desc}</p>
                </div>

                <div className="pt-2 text-[11px] font-bold text-amber-800">
                  Step {i + 1} of 3
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
