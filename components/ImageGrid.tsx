// src/components/ImageGrid.tsx
import React from 'react';

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="w-full object-cover h-full" />
      ))}
    </div>
  );
};

export default ImageGrid;
