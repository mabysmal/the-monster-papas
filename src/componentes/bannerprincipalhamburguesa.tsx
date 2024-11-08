'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ResponsiveImage = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      const width = window.innerWidth;
      // For mobile (under md breakpoint)
      if (width < 768) {
        setDimensions({
          width: Math.floor(width * 0.6),
          height: Math.floor(width * 0.6)
        });
      } 
      // For medium screens and above
      else {
        setDimensions({
          width: Math.floor(width * 0.5),
          height: Math.floor(width * 0.5)
        });
      }
    };

    // Initial calculation
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="relative">
      <Image
        src="/hamburguesamitadbannerbgless.png"
        width={dimensions.width}
        height={dimensions.height}
        alt="Mitad de Hamburguesa Clasica"
        className="h-full object-cover opacity-80 md:ml-10"
      />
    </div>
  );
};

export default ResponsiveImage;