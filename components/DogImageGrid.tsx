// src/components/DogImageGrid.tsx
import React from 'react';

interface DogImageGridProps {
  images: string[];
  handleImageClick: (image: string) => void;
}

const DogImageGrid: React.FC<DogImageGridProps> = ({ images, handleImageClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div key={index} className="w-full aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt={`Dog Image ${index}`}
            className="object-cover object-center w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default DogImageGrid;
