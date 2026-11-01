import { useState } from 'react';
import {
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import {
  EnquiryFormData,
  ValidationErrors,
  validateEnquiryForm,
  formatEnquiryMessage,
  createWhatsAppUrl,
} from '../utils/whatsapp';

export function ContactForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectType: 'Full Home Interiors',
    location: 'Dindigul',
    budget: '₹5–10 Lakhs',
    requirements: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [copied, setCopied] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on change
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const formattedMessage = formatEnquiryMessage(formData);
    const waUrl = createWhatsAppUrl(formattedMessage);

    setPreparedMessage(formattedMessage);
    setPreparedUrl(waUrl);

    // Open WhatsApp in new window/tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const msg = preparedMessage || formatEnquiryMessage(formData);
    navigator.clipboard.writeText(msg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E9E0D4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context, Location & Direct WhatsApp Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
                <span>Start Your Project</span>
                <span aria-hidden="true">·</span>
                <span>Enquiries</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight mb-4 text-balance">
                Let's Create Your Dream Space.
              </h2>

              {/* Supporting Text */}
              <p className="text-base text-[#242321]/75 font-light leading-relaxed mb-8">
                Have a space in mind? Tell us about your project and let's start planning something beautiful.
              </p>

              {/* Business Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-[#F8F5F0] border border-[#E9E0D4] rounded-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#FFFFFF] border border-[#B69A70]/30 flex items-center justify-center text-[#B69A70] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                      Studio Location
                    </h3>
                    <p className="text-sm text-[#242321]/80 mt-0.5 font-light">
                      AURA INTERIOR
                    </p>
                    <p className="text-xs text-[#242321]/60">
                      Dindigul, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F5F0] border border-[#E9E0D4] rounded-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#FFFFFF] border border-[#B69A70]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                      WhatsApp Direct
                    </h3>
                    <p className="text-sm font-mono text-[#242321] mt-0.5 font-medium">
                      +91 {SITE_CONFIG.whatsappNumber}
                    </p>
                    <p className="text-xs text-[#242321]/60">
                      Quick responses for project queries & floor plans
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F5F0] border border-[#E9E0D4] rounded-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#FFFFFF] border border-[#B69A70]/30 flex items-center justify-center text-[#B69A70] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#242321]">
                      Consultation Hours
                    </h3>
                    <p className="text-xs text-[#242321]/80 mt-0.5 font-light">
                      Monday to Saturday · Available for scheduled site visits in Dindigul & surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Direct Note */}
            <div className="p-4 border border-[#B69A70]/30 bg-[#F8F5F0] rounded-xs text-xs text-[#242321]/70 leading-relaxed">
              <span className="font-semibold text-[#242321]">How it works:</span> Submitting this form prepares your detailed project brief and opens WhatsApp with your pre-filled inquiry. You simply press <strong className="text-[#242321]">Send</strong> inside WhatsApp to start chatting directly with our lead designer.
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F5F0] border border-[#E9E0D4] p-7 sm:p-10 rounded-xs shadow-[0_8px_30px_rgba(36,35,33,0.03)]">
            <h3 className="font-serif text-2xl text-[#242321] font-normal mb-2">
              Project Consultation Form
            </h3>
            <p className="text-xs text-[#242321]/60 mb-6">
              Fill in your details below. Required fields are marked with an asterisk (*).
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                    Full Name <span className="text-[#B69A70]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Arun Kumar"
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#242321] placeholder-[#242321]/40 rounded-xs focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E9E0D4] focus:border-[#B69A70]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                    Phone Number <span className="text-[#B69A70]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 9176180348"
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#242321] placeholder-[#242321]/40 rounded-xs focus:outline-none transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E9E0D4] focus:border-[#B69A70]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Email (Optional) & Location (Required) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                    Email Address <span className="text-xs font-normal text-[#242321]/50 lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@example.com"
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#242321] placeholder-[#242321]/40 rounded-xs focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E9E0D4] focus:border-[#B69A70]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                    Project Location <span className="text-[#B69A70]">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Palani Road, Dindigul"
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#242321] placeholder-[#242321]/40 rounded-xs focus:outline-none transition-colors ${
                      errors.location
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E9E0D4] focus:border-[#B69A70]'
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                    Project Type <span className="text-[#B69A70]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E9E0D4] text-sm text-[#242321] rounded-xs focus:outline-none focus:border-[#B69A70] transition-colors"
                  >
                    {SITE_CONFIG.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                    Budget Range <span className="text-xs font-normal text-[#242321]/50 lowercase">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E9E0D4] text-sm text-[#242321] rounded-xs focus:outline-none focus:border-[#B69A70] transition-colors"
                  >
                    {SITE_CONFIG.budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Requirements */}
              <div>
                <label htmlFor="requirements" className="block text-xs uppercase tracking-wider font-semibold text-[#242321] mb-1.5">
                  Project Requirements <span className="text-[#B69A70]">*</span>
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your space (e.g. 3BHK villa in Dindigul, looking for modular kitchen and master bedroom interior woodwork)..."
                  className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#242321] placeholder-[#242321]/40 rounded-xs focus:outline-none transition-colors ${
                    errors.requirements
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#E9E0D4] focus:border-[#B69A70]'
                  }`}
                />
                {errors.requirements && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.requirements}
                  </p>
                )}
              </div>

              {/* Submission Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-[#B69A70] hover:bg-[#A0855B] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="px-5 py-4 bg-[#FFFFFF] hover:bg-[#E9E0D4]/40 border border-[#E9E0D4] text-[#242321] text-xs font-medium tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  title="Copy formatted message to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Message'}</span>
                </button>
              </div>

              {/* Clear instruction per prompt: Explain that user must press Send inside WhatsApp */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xs text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#B69A70] shrink-0 mt-0.5" />
                <div>
                  <strong>Next Step:</strong> When WhatsApp opens, please tap or click the <strong>Send button inside WhatsApp</strong> to deliver your formatted brief directly to Aura Interior.
                </div>
              </div>

              {/* If already submitted, offer a direct re-open link in case popups were blocked */}
              {preparedUrl && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xs text-xs text-emerald-800 flex items-center justify-between">
                  <span>Enquiry formatted! If WhatsApp did not open automatically:</span>
                  <a
                    href={preparedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold ml-2 inline-flex items-center gap-1 hover:text-emerald-900"
                  >
                    <span>Click Here</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
