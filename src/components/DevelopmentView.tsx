
import { MapPin, Building, Car, SquareStack, Check, Dumbbell, Waves, Monitor, Umbrella, Utensils } from "lucide-react";

const DevelopmentView = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Detalles del desarrollo
        </h2>
        
        <h3 className="text-xl font-medium text-inverater-dark mb-4">Características comerciales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Ubicación</span>
            </div>
            <span className="font-medium">64700, Alejandría 111, Roma, Monterrey</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SquareStack className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Predio</span>
            </div>
            <span className="font-medium">1905.93 m²</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Viviendas</span>
            </div>
            <span className="font-medium">397</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Construcción</span>
            </div>
            <span className="font-medium">39789.73 m²</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Estacionamiento - Niveles</span>
            </div>
            <span className="font-medium">9</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Estacionamiento - Cajones</span>
            </div>
            <span className="font-medium">470</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SquareStack className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Superficie departamentos</span>
            </div>
            <span className="font-medium">41 m² - 82 m²</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Elevadores</span>
            </div>
            <span className="font-medium">4</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-inverater-dark mb-4">Amenidades</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <Waves className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Alberca</span>
          </div>
          
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <Dumbbell className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Gimnasio</span>
          </div>
          
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <Monitor className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Área de co-working</span>
          </div>
          
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <Building className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Salón de eventos</span>
          </div>
          
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <Umbrella className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Asoleadero</span>
          </div>
          
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <Utensils className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Área de asadores</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Tipologías del desarrollo
        </h2>
        
        <div className="mb-6">
          <button className="bg-inverater-secondary text-white px-6 py-3 rounded-md font-medium">
            Departamento Estudiantil
          </button>
        </div>
        
        <h3 className="text-xl font-medium text-inverater-dark border-b pb-3 mb-6">Tipología</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SquareStack className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Distribución</span>
            </div>
            <span className="font-medium">82 m²</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Lavandería</span>
            </div>
            <span className="font-medium">Sí</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Recamaras</span>
            </div>
            <span className="font-medium">2</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Balcón</span>
            </div>
            <span className="font-medium">5 m²</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Baños</span>
            </div>
            <span className="font-medium">2</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Sala / Comedor</span>
            </div>
            <span className="font-medium">42 m²</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-inverater-dark border-b pb-3 mb-6">Inmuebles vinculados</h3>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="#" className="text-inverater-primary hover:underline">Depto 1811</a>
          <a href="#" className="text-inverater-primary hover:underline">Depto 1809</a>
        </div>
        
        <h3 className="text-xl font-medium text-inverater-dark border-b pb-3 mb-6">Campañas relacionadas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img 
                src="/lovable-uploads/28374962-2d40-4867-aec4-b4838b715662.png" 
                alt="Alejandria Residencias" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 right-4 bg-inverater-primary text-white px-3 py-1 rounded">
                CETE Inmobiliario: Preventa
              </div>
              <div className="absolute bottom-4 right-4 bg-inverater-primary text-white font-bold px-3 py-1 rounded">
                1760 $
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold mb-3">Alejandria Residencias Fase 3</h4>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Rendimiento estimado:</span>
                <span className="text-inverater-primary font-medium">14% - 30%</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Periodo de inversión:</span>
                <span className="font-medium">18/06/2026</span>
              </div>
              
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-inverater-primary h-2 rounded-full" style={{ width: "25%" }}></div>
              </div>
              <div className="text-center text-sm font-medium">25%</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img 
                src="/lovable-uploads/28374962-2d40-4867-aec4-b4838b715662.png" 
                alt="Alejandria Residencias" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 right-4 bg-inverater-primary text-white px-3 py-1 rounded">
                CETE Inmobiliario: Preventa
              </div>
              <div className="absolute bottom-4 right-4 bg-inverater-primary text-white font-bold px-3 py-1 rounded">
                1760 $
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold mb-3">Alejandria Residencias Fase 3</h4>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Rendimiento estimado:</span>
                <span className="text-inverater-primary font-medium">14% - 30%</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Periodo de inversión:</span>
                <span className="font-medium">18/06/2026</span>
              </div>
              
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-inverater-primary h-2 rounded-full" style={{ width: "25%" }}></div>
              </div>
              <div className="text-center text-sm font-medium">25%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentView;
