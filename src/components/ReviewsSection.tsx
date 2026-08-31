import { useState } from 'react';
import { customerReviews, businessInfo } from '../data/businessData';
import { Star, MessageCircle, ExternalLink, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            Praised Across <span className="text-amber-800">Arifwala & Punjab</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Real feedback from local families, wedding organizers, and sweet connoisseurs who trust our kitchen.
          </p>
        </div>

        {/* Rating Summary Strip */}
        <div className="mt-8 max-w-xl mx-auto p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl font-serif">
              4.6
            </div>
            <div>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">Based on 350+ public customer ratings</p>
            </div>
          </div>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-colors"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-amber-200/80 absolute top-5 right-5 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars & Source Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-600 border border-stone-200">
                    {rev.source}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Urdu Snippet if available */}
                {rev.urduSnippet && (
                  <p className="text-xs font-medium text-amber-900/90 font-['Cinzel',serif] bg-amber-50/60 p-2 rounded-lg border border-amber-200/50">
                    {rev.urduSnippet}
                  </p>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900">{rev.author}</h3>
                  <p className="text-[11px] text-stone-500">{rev.role}</p>
                </div>
                <span className="text-[10px] text-stone-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
