
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center overflow-visible`}>
      <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
        <defs>
          {/* Blue Band Gradients */}
          <linearGradient id="blueTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#022cfa" />
            <stop offset="100%" stopColor="#0121bd" />
          </linearGradient>
          <linearGradient id="blueTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0121bd" />
            <stop offset="100%" stopColor="#001680" />
          </linearGradient>
          <linearGradient id="blueSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#001680" />
            <stop offset="100%" stopColor="#000b40" />
          </linearGradient>

          {/* Green Band Gradients */}
          <linearGradient id="greenTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#44fa02" />
            <stop offset="100%" stopColor="#31b501" />
          </linearGradient>
          <linearGradient id="greenTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#31b501" />
            <stop offset="100%" stopColor="#217a01" />
          </linearGradient>
          <linearGradient id="greenSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#217a01" />
            <stop offset="100%" stopColor="#124300" />
          </linearGradient>

          {/* Star Facets */}
          <linearGradient id="starFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a2ff7d" />
            <stop offset="100%" stopColor="#44fa02" />
          </linearGradient>
          <linearGradient id="starFacet2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#44fa02" />
            <stop offset="100%" stopColor="#2eab01" />
          </linearGradient>
        </defs>

        {/* 3D Star at Apex */}
        <g transform="translate(0, 0)">
          <path d="M50 2L58 17H42L50 2Z" fill="url(#starFacet1)" />
          <path d="M50 17L58 17L75 17L62 27L68 42L50 32V17Z" fill="url(#starFacet2)" />
          <path d="M50 17L42 17L25 17L38 27L32 42L50 32V17Z" fill="url(#starFacet1)" />
        </g>

        {/* The Upward Arrow Chevron Assembly */}
        <g transform="translate(0, 2)">
          {/* BLUE BAND (Top Section) - Sharp Upward Arrow */}
          {/* Left Wing */}
          <path d="M50 32L10 52V67L50 47V32Z" fill="url(#blueTopLeft)" />
          {/* Right Wing */}
          <path d="M50 32L90 52V67L50 47V32Z" fill="url(#blueTopRight)" />
          {/* Depth/Thickness */}
          <path d="M10 67L50 47L90 67V72L50 52L10 72V67Z" fill="url(#blueSide)" />

          {/* GREEN BAND (Bottom Section) - Sharp Upward Arrow */}
          {/* Left Wing */}
          <path d="M10 72L50 52V67L10 87V72Z" fill="url(#greenTopLeft)" />
          {/* Right Wing */}
          <path d="M90 72L50 52V67L90 87V72Z" fill="url(#greenTopRight)" />
          {/* Depth/Thickness */}
          <path d="M10 87L50 67L90 87V92L50 72L10 92V87Z" fill="url(#greenSide)" />

          {/* SILHOUETTE FIGURE (White Athlete) */}
          <circle cx="50" cy="45" r="4.5" fill="white" />
          <path 
            d="M50 52C50 52 44 54 35 44C38 52 45 65 47 80L50 95L53 80C55 65 62 52 65 44C56 54 50 52 50 52Z" 
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;