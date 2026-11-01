import { MapPin, Navigation, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { createDefaultWhatsAppUrl } from '../utils/whatsapp';

export function LocationSection() {
  const waUrl = createDefaultWhatsAppUrl();

  return (
    <section className="py-20 lg:py-24 bg-[#F8F5F0] border-t border-[#E9E0D4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Info Card */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
              <span>Studio Presence</span>
              <span aria-hidden="true">·</span>
              <span>Regional Coverage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242321] leading-tight tracking-tight mb-4">
              AURA INTERIOR
            </h2>

            <p className="font-serif text-xl text-[#B69A70] italic mb-4">
              Dindigul, Tamil Nadu, India
            </p>

            <p className="text-sm text-[#242321]/75 font-light leading-relaxed mb-6">
              Headquartered in Dindigul, we serve homeowners, villa owners, and commercial spaces throughout Dindigul district and adjoining regions in Tamil Nadu. We welcome on-site visits and initial design discussions.
            </p>

            <div className="p-4 bg-[#FFFFFF] border border-[#E9E0D4] rounded-xs mb-6">
              <div className="flex items-center gap-3 text-xs text-[#242321]">
                <Navigation className="w-4 h-4 text-[#B69A70] shrink-0" />
                <span>
                  Consultations and site evaluations are scheduled across <strong>Dindigul & surrounding areas</strong>.
                </span>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#242321] hover:bg-[#B69A70] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Connect on WhatsApp for Site Visit</span>
            </a>
          </div>

          {/* Styled Architectural Map Card */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#FFFFFF] border border-[#E9E0D4] rounded-xs overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              {/* Subtle architectural grid pattern background */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(#B69A70 0.75px, transparent 0.75px), radial-gradient(#242321 0.75px, #FFFFFF 0.75px)',
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px',
                }}
              />

              {/* Decorative Compass and Grid lines */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-[#B69A70] flex items-center justify-center bg-[#F8F5F0]">
                    <MapPin className="w-4 h-4 text-[#B69A70]" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#B69A70] font-semibold block">
                      Interior Studio
                    </span>
                    <span className="font-serif text-sm text-[#242321] font-medium">
                      AURA INTERIOR
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] tracking-widest uppercase text-[#242321]/60 block">
                    Region
                  </span>
                  <span className="text-xs font-medium text-[#242321]">
                    Dindigul · Tamil Nadu
                  </span>
                </div>
              </div>

              {/* Central Map Illustration Callout */}
              <div className="relative z-10 my-auto text-center py-6">
                <div className="inline-block p-6 bg-[#F8F5F0]/90 backdrop-blur-xs border border-[#E9E0D4] rounded-xs max-w-md mx-auto shadow-sm">
                  <h3 className="font-serif text-2xl text-[#242321] font-normal mb-1">
                    Dindigul Studio & Site Operations
                  </h3>
                  <p className="text-xs text-[#242321]/70 font-light leading-relaxed">
                    Personalized on-site consultations, space measurements, and modular project delivery across Dindigul, Tamil Nadu.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#E9E0D4] flex items-center justify-center gap-4 text-xs font-medium text-[#242321]">
                    <span>WhatsApp: +91 {SITE_CONFIG.whatsappNumber}</span>
                  </div>
                </div>
              </div>

              {/* Footer row of the location card */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-[#242321]/60 border-t border-[#E9E0D4] pt-3">
                <span>Direct Designer Consultations</span>
                <span className="text-[#B69A70] uppercase tracking-wider font-medium">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
