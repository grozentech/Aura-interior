import { useState } from 'react';
import { Maximize2, X, MessageCircle } from 'lucide-react';
import { INSPIRATION_ITEMS, InspirationItem } from '../data/inspiration';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function InspirationGallery() {
  const [selectedItem, setSelectedItem] = useState<InspirationItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E9E0D4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
              <span>Visual Inspiration</span>
              <span aria-hidden="true">·</span>
              <span>Design Concepts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight text-balance">
              Interior Inspiration Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#242321]/70 font-light mt-3 leading-relaxed">
              Explore curated snapshots of material finishes, illumination layers, and modern architectural balances.
            </p>
          </div>
          <p className="text-xs text-[#242321]/60 tracking-wider uppercase border-l-2 border-[#B69A70] pl-3 py-1">
            Tap any space to enlarge & view details
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSPIRATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-[#E9E0D4] rounded-xs border border-[#E9E0D4] aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <SafeImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fallbackTitle={item.title}
              />

              {/* Bottom Scrim with Title & Category */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#242321]/90 via-[#242321]/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] tracking-widest uppercase text-[#B69A70] font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-white font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F8F5F0]/80 font-light mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#E9E0D4] tracking-wider uppercase font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0" onClick={() => setSelectedItem(null)} />
          <div className="relative max-w-3xl w-full bg-[#F8F5F0] border border-[#E9E0D4] rounded-xs overflow-hidden z-10 shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-[#FFFFFF] border-b border-[#E9E0D4]">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#B69A70] font-semibold">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-lg text-[#242321]">{selectedItem.title}</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-full hover:bg-[#E9E0D4] text-[#242321]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-[#E9E0D4] overflow-hidden">
              <SafeImage
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="w-full h-full object-cover"
                fallbackTitle={selectedItem.title}
              />
            </div>

            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#242321]/80 font-light max-w-lg">
                {selectedItem.description}
              </p>
              <a
                href={createWhatsAppUrl(
                  `Hello Aura Interior! I am inspired by the "${selectedItem.title}" (${selectedItem.category}) concept on your website. Would love to discuss a similar plan for my home.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#B69A70] hover:bg-[#A0855B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
