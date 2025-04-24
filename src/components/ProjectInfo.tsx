import { AlertTriangle, Award, Shield, DollarSign, Percent, Calendar, Building, Clock, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const ProjectInfo = () => {
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="bg-white rounded-xl overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-orange-500" />
                <h3 className="text-gray-600">Valor total de la campaña</h3>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm">
                    Valor total de la campaña de inversión para este proyecto inmobiliario.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
            <p className="text-3xl font-bold mt-2">$9,000,000</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-orange-500" />
                <h3 className="text-gray-600">Fecha de reparto</h3>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm">
                    Fecha estimada para el reparto de rendimientos del proyecto.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
            <p className="text-3xl font-bold mt-2">05/09/2027</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white rounded-xl overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="p-4 flex flex-col h-full">
              <div className="flex items-center mb-2">
                <Percent className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="font-semibold text-gray-800">TIR Estimada</h3>
              </div>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-orange-500">54.48%</div>
                <div className="text-lg text-gray-500 mt-1">18.16% anual</div>
                
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="p-4 flex flex-col h-full">
              <div className="flex items-center mb-2">
                <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold text-gray-800">Precio CETE</h3>
              </div>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-blue-500">$1,000</div>
                <div className="text-lg text-gray-500 mt-1">Inversión mínima</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white rounded-xl overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="p-4 flex flex-col h-full">
              <div className="flex items-center mb-2">
                <Building className="h-5 w-5 text-inverater-primary mr-2" />
                <h3 className="font-semibold text-gray-800">Tipo</h3>
              </div>
              <div className="mt-auto">
                <div className="text-lg font-bold mt-1">Residencial</div>
                <div className="text-sm text-gray-500 mt-1">Torre de apartamentos</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Comisiones y Garantías</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-100">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Penalización</p>
                <p className="text-lg font-semibold">20%</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Award className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Comisión éxito</p>
                <p className="text-lg font-semibold">20%</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Shield className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Garantía</p>
                <p className="text-lg font-semibold">Fiduciaria</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <DollarSign className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Admin</p>
                <p className="text-lg font-semibold">1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="rounded-xl shadow-sm border-0 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Detalles del Proyecto</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="sm" className="font-medium text-inverater-secondary">
                <Clock className="mr-1 h-4 w-4" />
                <span>20/03/2025</span>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm">
                Fecha de inicio del proyecto. El rendimiento se calcula a partir de esta fecha.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardContent className="p-4">
          <div className="prose prose-sm max-w-none">
            <p>
              Torre Alejandría Residencias es un desarrollo inmobiliario de alta calidad ubicado en una zona premium de la ciudad. Este proyecto ofrece apartamentos de lujo con acabados de primera y amenidades exclusivas para sus residentes.
            </p>
            <p>
              Con una ubicación estratégica y un diseño arquitectónico moderno, Torre Alejandría representa una excelente oportunidad de inversión con alto potencial de apreciación y rentabilidad.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-500">Ubicación</div>
              <div className="font-medium">San Pedro Garza García</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-500">Desarrollador</div>
              <div className="font-medium">Grupo Inmobiliario ABC</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-500">Superficie</div>
              <div className="font-medium">15,000 m²</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-500">Unidades</div>
              <div className="font-medium">120 departamentos</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};

export default ProjectInfo;
