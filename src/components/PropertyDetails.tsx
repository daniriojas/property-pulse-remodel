
import { PlusIcon, MinusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PropertyDetails = () => {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Detalles</h2>
        
        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">Rendimiento estimado:</span>
              <span className="font-bold text-inverater-primary">21% - 50.17%</span>
            </div>
          </div>
          
          <div>
            <div className="mb-1">
              <span className="font-medium text-gray-700">CETEs inmobiliarios comprados</span>
            </div>
            <div className="relative">
              <Progress value={24} className="h-2.5 bg-gray-200" />
              <span className="absolute text-xs text-white font-medium px-1.5 py-0.5 rounded-sm bg-inverater-primary top-1/2 left-[12%] transform -translate-y-1/2">
                24%
              </span>
            </div>
          </div>
          
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">1000 $</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Comisión de administración:</span>
              <span className="font-medium">+ 10 $</span>
            </div>
            <div className="flex justify-between mb-2 border-t border-b py-2 border-gray-200">
              <span className="font-medium">Total:</span>
              <span className="font-bold">1010 $</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">Rendimiento estimado</span>
              <span className="font-bold text-inverater-accent">1376 $</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-4">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MinusIcon className="h-4 w-4" />
            </Button>
            <input
              type="text"
              value="1"
              className="mx-2 w-16 text-center border rounded-md h-8"
              readOnly
            />
            <Button variant="outline" size="icon" className="h-8 w-8">
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          
          <Button variant="outline" className="w-full border-inverater-primary text-inverater-primary hover:bg-inverater-primary/10">
            Agregar al carrito
          </Button>
          
          <Button className="w-full bg-inverater-primary hover:bg-orange-600 text-white">
            Comprar ahora
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyDetails;
