
import { PlusIcon, MinusIcon, ArrowUpRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const PropertyDetails = () => {
  return (
    <Card className="border-0 shadow-md rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-inverater-secondary to-inverater-secondary/80 text-white p-4">
        <h2 className="text-lg font-bold">Inversión</h2>
      </div>
      <CardContent className="p-5">
        <div className="space-y-5">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Rendimiento estimado:</span>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <p className="text-sm">
                      Rendimiento anual estimado basado en proyecciones de plusvalía y renta.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <span className="font-bold text-inverater-primary text-lg">21% - 50.17%</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">CETEs inmobiliarios comprados</span>
              <span className="font-medium text-inverater-secondary">24%</span>
            </div>
            <div className="relative h-2">
              <Progress value={24} className="h-2 bg-gray-200" indicatorClassName="bg-inverater-secondary" />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">1000 $</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="text-gray-600">Comisión:</span>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <p className="text-sm">
                      Comisión de administración por la gestión de tu inversión inmobiliaria.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <span className="font-medium text-gray-800">+ 10 $</span>
            </div>
            
            <Separator className="my-2" />
            
            <div className="flex justify-between items-center">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-lg">1010 $</span>
            </div>
            
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-600">Rendimiento estimado:</span>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="h-4 w-4 text-inverater-accent" />
                <span className="font-bold text-inverater-accent">1376 $</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-2 text-gray-700">Cantidad de CETEs:</div>
            <div className="flex items-center bg-gray-50 rounded-lg p-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MinusIcon className="h-4 w-4" />
              </Button>
              <div className="flex-1">
                <input
                  type="text"
                  value="1"
                  className="w-full text-center border-none bg-transparent h-8 focus:outline-none font-medium"
                  readOnly
                />
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-3 pt-2">
            <Button variant="outline" className="w-full border-inverater-primary text-inverater-primary hover:bg-inverater-primary/10 font-medium">
              Agregar al carrito
            </Button>
            
            <Button className="w-full bg-inverater-primary hover:bg-orange-600 text-white font-medium">
              Comprar ahora
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyDetails;
