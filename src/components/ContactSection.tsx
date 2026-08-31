import { useState, FormEvent } from 'react';
import { businessInfo } from '../data/businessData';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'Custom Cake Order',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Please enter a valid phone number (e.g. 0312-XXXXXXX)';
    }
    if (!formData.message.trim()) errs.message = 'Please specify what you would like to order or ask';
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);

    // Simulate submission / route to WhatsApp prefilled message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const msg = 
`*NEW INQUIRY — IMAM-UD-DIN SWEETS WEBSITE*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Interest:* ${formData.orderType}
• *Details:* ${formData.message}
---------------------------------
Please respond with price quotation and delivery details for Arifwala.`;

      const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Get in Touch & Quick Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            Let Us Sweeten Your <span className="text-amber-800">Special Moments</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Have questions regarding wedding orders, cake custom flavors, or instant home delivery? We are just a call or WhatsApp message away.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Direct Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-emerald-800 text-white shadow-md space-y-3 border border-emerald-700">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Instant WhatsApp Hotline</h3>
                <p className="text-xs text-emerald-100 mt-0.5">Fastest response for cake designs & delivery orders</p>
              </div>
              <a
                href={businessInfo.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs shadow-xs transition-colors"
              >
                <span>Chat on WhatsApp (+92 312 6942500)</span>
              </a>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">Direct Phone Lines</h3>
                  <p className="text-xs text-stone-500">Call for instant orders & inquiries</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <a
                  href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 font-semibold border border-stone-200/80 transition-colors"
                >
                  <span>Primary Mobile (Delivery):</span>
                  <span className="text-amber-800 font-bold">{businessInfo.phonePrimary}</span>
                </a>

                <a
                  href={`tel:${businessInfo.phoneSecondary.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 font-semibold border border-stone-200/80 transition-colors"
                >
                  <span>Secondary Hotline:</span>
                  <span className="text-amber-800 font-bold">{businessInfo.phoneSecondary}</span>
                </a>

                <a
                  href={`tel:${businessInfo.landline.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 font-semibold border border-stone-200/80 transition-colors"
                >
                  <span>Arifwala Landline:</span>
                  <span className="text-amber-800 font-bold">{businessInfo.landline}</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">Store Address</h3>
                  <p className="text-xs text-stone-600">{businessInfo.fullAddress}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
            
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Thank You!</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Your inquiry has been generated and redirected to WhatsApp for instant confirmation with our manager.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', phone: '', orderType: 'Custom Cake Order', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-800 text-white text-xs font-semibold hover:bg-amber-900"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Send an Inquiry or Order Request
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fill out this form and we will connect with you right away.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Muhammad Ali"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 border ${
                      errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-200'
                    } focus:outline-none focus:border-amber-700`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0312-1234567"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 border ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-200'
                    } focus:outline-none focus:border-amber-700`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                </div>

                {/* Order Type */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    What are you interested in?
                  </label>
                  <select
                    value={formData.orderType}
                    onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700"
                  >
                    <option value="Custom Cake Order">Custom Birthday / Celebration Cake</option>
                    <option value="Wedding Mithai Boxes">Wedding & Nikah Mithai Gift Hampers</option>
                    <option value="Desi Ghee Sweets">Pure Desi Ghee Traditional Sweets</option>
                    <option value="Fresh Bakery & Biscuits">Fresh Bakery Loaves & Biscuits</option>
                    <option value="Fast Food & Pizza">Fast Food / Pizza Dough Behari Roll</option>
                    <option value="General Question">General Inquiry / Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Order Details / Required Items / Event Date *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify items, flavors, quantity in kg/pounds, preferred delivery time or event date..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 border ${
                      errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-200'
                    } focus:outline-none focus:border-amber-700`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-form-submit-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending your order...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit & Open in WhatsApp</span>
                    </>
                  )}
                </button>
                <p className="text-[10px] text-stone-400 text-center">
                  Form backend wireable to Formspree / Web3Forms endpoint: <code>YOUR_ENDPOINT_HERE</code>
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
