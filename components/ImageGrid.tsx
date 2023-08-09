// src/components/ImageGrid.tsx
// ...
interface ImageGridProps {
    images: string[];
    handleImageClick: (image: string) => void;
  }
  

const ImageGrid: React.FC<ImageGridProps> = ({ images, handleImageClick }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-full h-auto cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    );
  };
  
  // ...
  
  export default ImageGrid;
  