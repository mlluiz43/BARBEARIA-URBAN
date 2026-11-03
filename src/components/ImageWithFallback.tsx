import React, { useState } from 'react';
import { Scissors } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = "Barbearia Urban",
  fallbackTitle = "Barbearia Urban",
  fallbackSubtitle = "Ambiente & Cortes",
  className = "",
  containerClassName = "",
  ...rest
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#1C1C1C] ${containerClassName}`}>
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#1C1C1C] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border border-[#292929] border-t-[#D97736] animate-spin" />
        </div>
      )}

      {error ? (
        /* Styled Fallback Container (Zero-Broken-Image Policy) */
        <div className="w-full h-full min-h-[180px] bg-gradient-to-br from-[#1C1C1C] to-[#111111] border border-[#292929] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 bg-[#242424] border border-[#383838] flex items-center justify-center mb-3 text-[#D97736]">
            <Scissors className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-sm tracking-wider uppercase text-[#E5E2E1]">
            {fallbackTitle}
          </span>
          <span className="text-xs text-[#A3A3A3] mt-1">
            {fallbackSubtitle}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};
