import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
            <span>Client Perspectives</span>
            <span aria-hidden="true">·</span>
            <span>Aura Interior</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight text-balance">
            What Clients Say.
          </h2>
          <p className="text-sm text-[#242321]/70 font-light mt-3">
            Real feedback slots for our completed interior assignments.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-[#FFFFFF] border border-[#E9E0D4] p-8 sm:p-12 lg:p-16 rounded-xs shadow-[0_12px_40px_rgba(36,35,33,0.04)]">
          <Quote className="w-10 h-10 text-[#B69A70]/40 mb-6" />

          {/* Quote Body */}
          <blockquote className="font-serif text-xl sm:text-2xl text-[#242321] font-light leading-relaxed mb-8 italic">
            "{current.quote}"
          </blockquote>

          {/* Client Meta Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E9E0D4]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E9E0D4] text-[#242321] font-serif font-medium flex items-center justify-center text-sm border border-[#B69A70]/30">
                {current.clientInitials}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#242321]">
                  Client Review Template ({current.location})
                </p>
                <p className="text-xs text-[#242321]/60 font-light mt-0.5">
                  {current.projectContext}
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-xs border border-[#E9E0D4] hover:border-[#B69A70] text-[#242321] hover:bg-[#F8F5F0] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#242321]/60 px-2 tabular-nums">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-xs border border-[#E9E0D4] hover:border-[#B69A70] text-[#242321] hover:bg-[#F8F5F0] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Transparent notice for studio admin */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#242321]/60">
          <Info className="w-3.5 h-3.5 text-[#B69A70]" />
          <span>
            Studio notice: Testimonial cards are configured as editable templates ready for verified client reviews.
          </span>
        </div>
      </div>
    </section>
  );
}
