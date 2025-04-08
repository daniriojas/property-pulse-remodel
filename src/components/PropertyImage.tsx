
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/lovable-uploads/2aeffb1e-8721-4068-9761-25f2572de5dc.png",
    "/lovable-uploads/55aca35e-0da2-4a5e-bd14-af0beec71dac.png",
  ];
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md mb-8">
      <div className="aspect-video bg-gray-100 relative">
        <img
          src={images[currentImage]}
          alt="Torre Alejandría"
          className="w-full h-full object-cover"
        />
        
        {images.length > 1 && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full hover:bg-black/50"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full hover:bg-black/50"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyImage;
