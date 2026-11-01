import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { createDefaultWhatsAppUrl } from '../utils/whatsapp';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const waUrl = createDefaultWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Subtle dismissible greeting tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF] text-[#242321] text-xs py-2 px-3.5 rounded-sm shadow-lg border border-[#E9E0D4] max-w-xs animate-fadeIn">
          <div>
            <p className="font-semibold text-[#242321]">Have a design query?</p>
            <p className="text-[11px] text-[#242321]/70">Chat directly with our designer</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-[#242321]/50 hover:text-[#242321] rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Aura Interior"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none group-hover:hidden" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
