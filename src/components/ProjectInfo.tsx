
import { Calendar, DollarSign, AlertTriangle, Medal, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-inverater-dark border-b pb-2 mb-6">
          Información general de la campaña
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-6 text-gray-400 mr-2">▲</div>
                <span className="text-gray-700">Plusvalía mínima</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">Anual: 9%</span>
                <span className="font-bold">Total: 21%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-6 text-gray-400 mr-2">▲</div>
                <span className="text-gray-700">Plusvalía estimada</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">Anual: 21.5%</span>
                <span className="font-bold">Total: 50.17%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Fecha de reparto</span>
              </div>
              <span className="font-medium">05/01/2027</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Precio del CETE Inmobiliario</span>
              </div>
              <span className="font-medium">1000 $</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Permanencia mínima</span>
              </div>
              <span className="font-medium">05/09/2026</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Valor total de la campaña</span>
              </div>
              <span className="font-medium">3.751.067 $</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Penalización de venta anticipada</span>
              </div>
              <span className="font-medium">20%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Medal className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Comisión de fide-éxito</span>
              </div>
              <span className="font-medium">20%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Comisión de administración</span>
              </div>
              <span className="font-medium">1%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">Garantía</span>
              </div>
              <span className="font-medium">Fiduciaria</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
