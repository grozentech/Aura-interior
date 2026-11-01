import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackTitle = 'Aura Interior Space',
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#E9E0D4] to-[#F8F5F0] border border-[#B69A70]/20 flex flex-col items-center justify-center p-6 text-center select-none ${containerClassName} ${className}`}
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full border border-[#B69A70]/40 flex items-center justify-center mb-3 bg-white/60">
          <svg
            className="w-6 h-6 text-[#B69A70]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p className="font-serif text-sm font-medium tracking-wide text-[#242321]">
          {fallbackTitle}
        </p>
        <span className="text-[11px] uppercase tracking-widest text-[#B69A70] mt-1">
          AURA INTERIOR
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E9E0D4]/30 ${containerClassName}`}>
      {/* Subtle skeleton shimmer before load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E9E0D4]/20 via-[#F8F5F0]/40 to-[#E9E0D4]/20 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
}
