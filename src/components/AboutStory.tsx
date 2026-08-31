import { businessInfo } from '../data/businessData';
import { Sparkles, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function AboutStory() {
  const stats = [
    { label: 'Halwai & Bakery Legacy', value: 'Since 1998', sub: 'Over 25+ Years of Trust' },
    { label: 'Customer Reviews & Rating', value: '4.6 ★', sub: '350+ Verified Reviews' },
    { label: 'Desi Ghee Purity Guarantee', value: '100%', sub: 'Pure Milk Butter Ghee' },
    { label: 'Celebration Cakes Baked', value: '10,000+', sub: 'Birthdays & Weddings' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                  alt="Imam-Ud-Din Sweets & Bakers Shop and Sweets Showcase at Jinnah Chowk Arifwala"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="1000"
                  height="1250"
                />
              </div>

              {/* Floating Overlaid Accent Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-amber-900 text-white p-5 rounded-2xl shadow-xl max-w-[240px] border border-amber-800 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Heritage Recipe</span>
                </div>
                <p className="text-xs text-amber-100 font-medium leading-snug">
                  Traditional slow-fire copper kadai mithai made with pure desi ghee and farm-fresh khoya.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Our Heritage & Promise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
                A Sweet Tradition of <span className="text-amber-800">Purity & Craft</span> in Arifwala
              </h2>
              <p className="text-sm font-semibold text-amber-900/80 font-['Cinzel',serif]">
                {businessInfo.urduName} — جناح چوک، عارفوالہ
              </p>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Located at the heart of Arifwala at <strong>Jinnah Chowk</strong>, <strong>IMAM-UD-DIN SWEETS & BAKERS</strong> was established with a single unwavering principle: to deliver the purest, most flavorful traditional sweets and freshest bakery delicacies without compromise.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Unlike industrial sweets made with synthetic shortening or chemical essences, our master halwais prepare our sweets every morning using <strong>100% pure desi ghee</strong>, rich fresh khoya, hand-ground cardamom, and premium California almonds and Iranian pistachios.
            </p>

            {/* Ethos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900">100% Desi Ghee Purity</h3>
                  <p className="text-xs text-stone-500">Pure farm milk butter ghee in every mithai batch.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <HeartHandshake className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900">Custom Celebration Cakes</h3>
                  <p className="text-xs text-stone-500">Butterscotch, Fudge & Theme Fondant baked to order.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900">Daily Morning Baking</h3>
                  <p className="text-xs text-stone-500">Crispy Badam & Zeera biscuits ready at 7:00 AM.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900">Free City Home Delivery</h3>
                  <p className="text-xs text-stone-500">Direct phone and WhatsApp ordering in Arifwala.</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {stats.map((st, i) => (
                <div key={i} className="p-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-amber-800 font-serif block">
                    {st.value}
                  </span>
                  <span className="text-xs font-bold text-stone-800 block mt-0.5">{st.label}</span>
                  <span className="text-[10px] text-stone-500 block">{st.sub}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
