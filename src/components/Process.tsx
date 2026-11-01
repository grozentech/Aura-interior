import { Check, ArrowRight } from 'lucide-react';
import { DESIGN_PROCESS, ProcessStep } from '../data/process';

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
            <span>Our Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Step by Step</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight mb-4 text-balance">
            From Vision to Reality.
          </h2>
          <p className="text-base text-[#242321]/75 font-light leading-relaxed">
            A clear, collaborative 5-step workflow designed to make your interior transformation smooth, transparent, and enjoyable.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="relative">
          {/* Subtle connecting vertical/horizontal line on desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[1px] bg-[#E9E0D4] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {DESIGN_PROCESS.map((step: ProcessStep) => (
              <div
                key={step.step}
                className="bg-[#FFFFFF] border border-[#E9E0D4] p-6 rounded-xs flex flex-col justify-between hover:border-[#B69A70] hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#F8F5F0] border border-[#B69A70]/50 group-hover:bg-[#242321] group-hover:text-white transition-colors flex items-center justify-center font-serif text-base text-[#242321] font-medium mb-6">
                    {step.step}
                  </div>

                  <h3 className="font-serif text-lg font-normal text-[#242321] mb-2 group-hover:text-[#B69A70] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#242321]/70 font-light leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-[#E9E0D4]">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-[11px] text-[#242321]/75 flex items-start gap-1.5 leading-tight">
                        <Check className="w-3 h-3 text-[#B69A70] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 text-[10px] tracking-widest uppercase text-[#B69A70] font-medium flex items-center gap-1">
                  <span>Phase {step.step}</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
