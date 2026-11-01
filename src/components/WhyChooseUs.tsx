import {
  Compass,
  LayoutGrid,
  ShieldCheck,
  Eye,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { WHY_CHOOSE_US, FeatureItem } from '../data/whyChooseUs';

export function WhyChooseUs() {
  const iconMap = {
    Compass: Compass,
    LayoutGrid: LayoutGrid,
    ShieldCheck: ShieldCheck,
    Eye: Eye,
    Sparkles: Sparkles,
    MessageSquare: MessageSquare,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E9E0D4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
            <span>Our Commitments</span>
            <span aria-hidden="true">·</span>
            <span>Why Aura Interior</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight mb-4 text-balance">
            Designed Around You.
          </h2>
          <p className="text-base text-[#242321]/75 font-light leading-relaxed">
            We prioritize thoughtful human-centered design, genuine material authenticity, and effortless collaboration.
          </p>
        </div>

        {/* 6 Feature Blocks in 3-Column Grid with Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item: FeatureItem, index: number) => {
            const Icon = iconMap[item.iconName];

            return (
              <div
                key={item.id}
                className="p-8 bg-[#F8F5F0] border border-[#E9E0D4] rounded-xs hover:border-[#B69A70]/60 transition-all duration-300 hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xs bg-[#FFFFFF] border border-[#E9E0D4] flex items-center justify-center text-[#B69A70] group-hover:bg-[#B69A70] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-serif text-xs text-[#B69A70] tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#242321] mb-3 group-hover:text-[#B69A70] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#242321]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E0D4]/60 text-[11px] tracking-wider uppercase text-[#B69A70]">
                  Aura Interior Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
