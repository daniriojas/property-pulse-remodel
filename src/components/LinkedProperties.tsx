
import { Building, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LinkedProperties = () => {
  return (
    <Card className="mt-6 rounded-xl shadow-sm border-0 overflow-hidden">
      <div className="bg-white p-4 border-b">
        <h2 className="text-lg font-bold text-gray-800 flex items-center">
          <Building className="mr-2 h-5 w-5 text-inverater-secondary" />
          Inmuebles vinculados
        </h2>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="bg-inverater-secondary text-white p-2 px-3">
              <span className="font-medium">Una Recamara</span>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-medium text-inverater-dark">DEPTO. 2710</span>
                <span className="text-sm text-gray-500">60m² • Piso 27</span>
              </div>
              <Button variant="ghost" size="sm" className="text-inverater-secondary">
                <ExternalLink className="h-4 w-4 mr-1" />
                Ver detalles
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedProperties;
