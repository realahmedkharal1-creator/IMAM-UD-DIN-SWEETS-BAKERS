import { Sparkles, Truck, Clock, ShieldCheck, HeartHandshake, Utensils } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: Sparkles,
      title: '100% Pure Desi Ghee',
      desc: 'Cooked with pure butter ghee'
    },
    {
      icon: Truck,
      title: 'Free Home Delivery',
      desc: 'Prompt delivery in Arifwala'
    },
    {
      icon: Clock,
      title: 'Open 7 Days a Week',
      desc: '07:00 AM – 11:30 PM Daily'
    },
    {
      icon: Utensils,
      title: 'Custom Cake Bakery',
      desc: 'Any flavor, design & size'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Standards',
      desc: 'Sanitized kitchen facilities'
    },
    {
      icon: HeartHandshake,
      title: 'Bulk Event Catering',
      desc: 'Weddings & Nikah packages'
    }
  ];

  return (
    <section id="trust-bar" className="bg-white border-y border-stone-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-2 rounded-xl transition-all hover:bg-amber-50/50">
                <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center mb-2.5 shadow-2xs border border-amber-200/60">
                  <Icon className="w-5 h-5 text-amber-700" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">{item.title}</h2>
                <p className="text-[11px] text-stone-500 mt-0.5">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
