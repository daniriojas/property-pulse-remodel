
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const PropertyImage = () => {
  const [favorite, setFavorite] = useState(false);
  
  const images = [
    "/lovable-uploads/2aeffb1e-8721-4068-9761-25f2572de5dc.png",
    "/lovable-uploads/55aca35e-0da2-4a5e-bd14-af0beec71dac.png",
    "/lovable-uploads/28374962-2d40-4867-aec4-b4838b715662.png",
  ];
  
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  
  return (
    <div className="relative overflow-hidden rounded-xl shadow-sm mb-6 bg-gray-100">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[16/9]">
                <img
                  src={image}
                  alt={`Torre Alejandría ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <span className="bg-inverater-secondary px-2 py-1 rounded-md text-sm font-medium">CAMPAÑA ACTIVA</span>
                    <span className="bg-inverater-primary px-2 py-1 rounded-md text-sm font-medium">21% - 50.17%</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 rounded-full"
                    onClick={() => {}}
                  >
                    <Info className="h-5 w-5 text-white" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 rounded-full"
                    onClick={() => {}}
                  >
                    <Share className="h-5 w-5 text-white" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className={`backdrop-blur-sm border-white/30 hover:bg-white/30 rounded-full ${favorite ? 'bg-inverater-primary border-inverater-primary' : 'bg-white/20'}`}
                    onClick={toggleFavorite}
                  >
                    <Heart className={`h-5 w-5 ${favorite ? 'text-white fill-current' : 'text-white'}`} />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <CarouselPrevious className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 -left-4 h-8 w-8 rounded-full" />
          <CarouselNext className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 -right-4 h-8 w-8 rounded-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default PropertyImage;
