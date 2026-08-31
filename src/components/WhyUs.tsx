import { differentiators } from '../data/businessData';
import { Sparkles, CheckCircle2, ShieldCheck, Heart, Truck, Utensils, Award } from 'lucide-react';

export default function WhyUs() {
  const icons = [Award, Utensils, Truck, ShieldCheck, Sparkles, Heart];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Why Arifwala Chooses Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            The <span className="text-amber-800">Imam-ud-Din Difference</span> You Can Taste
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every product on our shelves reflects decades of culinary dedication, authentic ingredients, and genuine care for our community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((diff, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={diff.id}
                className="bg-white p-7 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center border border-amber-200 group-hover:bg-amber-800 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-amber-800 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Customer Quality</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
