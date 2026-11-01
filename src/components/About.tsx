import { ArrowRight, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { createDefaultWhatsAppUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function About() {
  const waUrl = createDefaultWhatsAppUrl();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Hairline Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-xs border border-[#E9E0D4] shadow-[0_12px_40px_rgba(36,35,33,0.06)]">
              <SafeImage
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Aura Interior studio design philosophy showcasing warm minimalism and fluted textures"
                className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover"
                fallbackTitle="Aura Interior Design Studio"
              />
            </div>

            {/* Subtle Editorial Accent Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#242321] text-white p-5 sm:p-6 rounded-xs max-w-xs shadow-xl border border-[#B69A70]/30 hidden sm:block">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B69A70] font-semibold block mb-1">
                Studio Philosophy
              </span>
              <p className="font-serif text-lg leading-snug italic text-[#F8F5F0]">
                "{SITE_CONFIG.tagline}"
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-[#E9E0D4]/80 flex items-center justify-between">
                <span>Dindigul, Tamil Nadu</span>
                <span className="text-[#B69A70]">Interior Studio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Chapter Indicator */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
              <span>About The Studio</span>
              <span aria-hidden="true">·</span>
              <span>Our Vision</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-[1.15] tracking-tight mb-6 text-balance">
              Creating Spaces That Feel Like Home.
            </h2>

            {/* Official Description */}
            <p className="text-base sm:text-lg text-[#242321]/85 font-light leading-relaxed mb-6">
              At Aura Interior, we believe every space should reflect the personality, lifestyle and aspirations of the people who live and work in it. Our approach combines thoughtful planning, aesthetic design and functional solutions to create beautiful and comfortable spaces.
            </p>

            {/* Design Philosophy Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 pt-6 border-t border-[#E9E0D4]">
              <div>
                <h3 className="font-serif text-lg font-medium text-[#242321] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A70]" />
                  Aesthetic Harmony
                </h3>
                <p className="text-sm text-[#242321]/70 leading-relaxed">
                  We blend warm natural textures, contemporary lines, and gentle lighting to cultivate an ambiance of peace and sophistication.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-[#242321] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A70]" />
                  Functional Excellence
                </h3>
                <p className="text-sm text-[#242321]/70 leading-relaxed">
                  Beauty must serve everyday utility. Every storage drawer, circulation corridor, and material finish is chosen for lasting comfort.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#242321] hover:text-[#B69A70] transition-colors py-2 border-b border-[#242321] hover:border-[#B69A70]"
              >
                <span>View Our Design Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E9E0D4]/70 hover:bg-[#E9E0D4] text-[#242321] text-xs font-medium tracking-wide rounded-sm transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#B69A70]" />
                <span>Discuss Your Space on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
