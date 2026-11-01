import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';
import { createServiceEnquiryUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E9E0D4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Aura Interior</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight mb-4 text-balance">
            Our Interior Design Services
          </h2>
          <p className="text-base text-[#242321]/75 font-light leading-relaxed">
            From comprehensive turnkey home planning to focused modular spaces, we bring precision, elegance, and comfort to every corner.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service: ServiceItem) => {
            const waServiceUrl = createServiceEnquiryUrl(service.title);

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-[#F8F5F0] rounded-xs border border-[#E9E0D4] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_32px_rgba(36,35,33,0.08)] hover:-translate-y-1 hover:border-[#B69A70]/60"
              >
                {/* Service Card Photography */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E0D4]">
                  <SafeImage
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    fallbackTitle={service.title}
                  />
                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#242321]/80 backdrop-blur-xs text-[#E9E0D4] text-xs font-serif px-2.5 py-1 tracking-widest border border-[#B69A70]/40">
                    {service.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#242321] group-hover:text-[#B69A70] transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#242321]/75 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature bullet list with clean typography */}
                    <ul className="space-y-2 mb-6 pt-4 border-t border-[#E9E0D4]/70">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-[#242321]/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A70]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enquiry Action Button */}
                  <div className="pt-4 border-t border-[#E9E0D4] flex items-center justify-between">
                    <a
                      href={waServiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#242321] group-hover:text-[#B69A70] transition-colors"
                      title={`Enquire on WhatsApp about ${service.title}`}
                    >
                      <MessageCircle className="w-4 h-4 text-[#B69A70]" />
                      <span>Enquire on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
