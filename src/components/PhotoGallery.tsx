import { useState, useEffect, useCallback } from 'react';
import { galleryItems } from '../data/businessData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Mithai', 'Cakes', 'Bakery', 'Fast Food', 'Savories'];

  const filteredGallery = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const activeItem = activeItemIndex !== null ? filteredGallery[activeItemIndex] : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredGallery.length);
    }
  }, [activeItemIndex, filteredGallery.length]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  }, [activeItemIndex, filteredGallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Showcase & Creations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-['Playfair_Display',serif]">
            A Feast for the Eyes at <span className="text-amber-800">Imam-ud-Din</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Click any photo to view in high definition. Explore our royal mithai platters, bespoke celebration cakes, and freshly baked specialties.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-100 aspect-[4/3] sm:aspect-square shadow-2xs hover:shadow-md transition-all duration-300 border border-stone-200"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="800"
                height="800"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="self-end p-2 rounded-lg bg-black/40 backdrop-blur-xs text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-amber-100 mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base leading-snug">{item.title}</h3>
                  <p className="text-[11px] text-stone-300 line-clamp-2 mt-0.5">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItemIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-stone-800/80 text-white hover:bg-amber-700 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-stone-800/80 text-white hover:bg-amber-700 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image Content */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full p-5 bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-stone-400">
                    {activeItemIndex! + 1} of {filteredGallery.length}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-white">{activeItem.title}</h3>
                <p className="text-xs text-stone-300 mt-0.5">{activeItem.description}</p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <span className="text-xs text-stone-400">Use ← → arrow keys to navigate</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
