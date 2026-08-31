import { useState, useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { MapPin, Clock, Navigation, Phone, ExternalLink, ShieldCheck, Car, Bike } from 'lucide-react';

export default function LocationHours() {
  const [currentDayName, setCurrentDayName] = useState<string>('Monday');
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    try {
      const now = new Date();
      // Get Day name in English for Asia/Karachi
      const dayName = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Karachi' });
      setCurrentDayName(dayName);

      // Get time in hours & minutes
      const pkTimeStr = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour12: false });
      const [hours, minutes] = pkTimeStr.split(':').map(Number);
      const currentMins = hours * 60 + minutes;
      
      // 07:00 AM (420 mins) to 11:30 PM (1410 mins)
      setIsOpenNow(currentMins >= 420 && currentMins <= 1410);
    } catch (e) {
      setIsOpenNow(true);
    }
  }, []);

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Location & Opening Times</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            Visit Us at <span className="text-amber-800">Jinnah Chowk, Arifwala</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently located at the primary junction of Arifwala. Enjoy easy front parking, fresh bakery aroma, and friendly customer service.
          </p>
        </div>

        {/* 2-Column Grid: Left Map, Right Hours & Contact Info */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Embed (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-3 sm:p-4 rounded-3xl border border-stone-200 shadow-sm space-y-3">
            <div className="aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden relative shadow-inner bg-stone-200">
              <iframe
                title="IMAM-UD-DIN SWEETS & BAKERS Location at Jinnah Chowk Arifwala"
                src={`https://maps.google.com/maps?q=${businessInfo.latitude},${businessInfo.longitude}&hl=en&z=16&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Map Action Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-white rounded-2xl border border-stone-200">
              <div className="flex items-center gap-2.5 text-xs text-stone-700">
                <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
                <span className="font-semibold">{businessInfo.address}</span>
              </div>
              
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-directions-link"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 shadow-xs transition-colors shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Opening Hours & Contact Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            
            {/* Live Status Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                  Operating Hours
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900">Weekly Schedule</h3>
              </div>

              <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                isOpenNow ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                <span>{isOpenNow ? 'Open Right Now' : 'Currently Closed'}</span>
              </div>
            </div>

            {/* Hours Table */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              {businessInfo.hours.map((h) => {
                const isToday = h.day.toLowerCase() === currentDayName.toLowerCase();
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                      isToday
                        ? 'bg-amber-100/90 text-amber-950 font-bold border border-amber-300'
                        : 'text-stone-700 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{h.day}</span>
                      {isToday && (
                        <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.2 rounded bg-amber-800 text-white">
                          Today
                        </span>
                      )}
                    </div>
                    <span className="tabular-nums font-medium">{h.open} – {h.close}</span>
                  </div>
                );
              })}
            </div>

            {/* Parking & Accessibility Notes */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <Car className="w-4 h-4 text-amber-700" />
                <span>Parking & Store Access</span>
              </div>
              <p>
                Spacious roadside parking available directly at Jinnah Chowk. Easy access for motorcycles, family cars, and rapid delivery riders.
              </p>
            </div>

            {/* Direct Dial Links */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${businessInfo.phonePrimary.replace(/[^0-9]/g, '')}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessInfo.phonePrimary}</span>
              </a>
              <a
                href={`tel:${businessInfo.phoneSecondary.replace(/[^0-9]/g, '')}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white text-stone-900 border border-stone-300 hover:bg-stone-100 text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>{businessInfo.phoneSecondary}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
