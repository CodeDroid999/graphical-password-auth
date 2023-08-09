// src/components/CarImageGrid.tsx
import React from 'react';

interface CarImageGridProps {
  images: string[];
}

const CarImageGrid: React.FC<CarImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div key={index} className="w-full aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt={`Car Image ${index}`}
            className="object-cover object-center w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default CarImageGrid;
