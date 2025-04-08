
import { 
  MapPin, Building, Car, SquareStack, Check, 
  Dumbbell, Waves, Monitor, Umbrella, Utensils,
  Bed, Bath, Home, Coffee, PenSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DevelopmentView = () => {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-0 shadow-md rounded-xl">
        <div className="bg-gradient-to-r from-inverater-primary to-inverater-primary/90 text-white p-5">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Building className="h-5 w-5" />
            Torre Alejandría
          </h2>
          <p className="text-white/80 text-sm mt-1">Desarrollo residencial premium</p>
        </div>
        
        <CardContent className="p-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="general" className="text-sm">Información General</TabsTrigger>
              <TabsTrigger value="features" className="text-sm">Características</TabsTrigger>
              <TabsTrigger value="related" className="text-sm">Relacionados</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="mt-0 space-y-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-inverater-dark mb-4 pb-2 border-b">
                  Ubicación y Descripción
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-inverater-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Dirección</p>
                      <p className="font-medium">64700, Alejandría 111, Roma, Monterrey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-inverater-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Desarrollador</p>
                      <p className="font-medium">Grupo Inmobiliario ABC</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <SquareStack className="h-5 w-5 text-inverater-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Superficie Predio</p>
                      <p className="font-medium">1905.93 m²</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-inverater-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Construcción</p>
                      <p className="font-medium">39789.73 m²</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-5 border-t">
                  <h4 className="font-medium text-inverater-dark mb-3">Descripción</h4>
                  <p className="text-gray-700">
                    Torre Alejandría Residencias es un desarrollo inmobiliario de alta calidad ubicado en una 
                    zona premium de la ciudad. Este proyecto ofrece apartamentos de lujo con acabados de primera 
                    y amenidades exclusivas para sus residentes.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 p-4">
                    <h3 className="text-lg font-semibold text-inverater-dark mb-3">Detalles del Desarrollo</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Viviendas</span>
                        </div>
                        <span className="font-semibold">397</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Niveles Estacionamiento</span>
                        </div>
                        <span className="font-semibold">9</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Cajones Estacionamiento</span>
                        </div>
                        <span className="font-semibold">470</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SquareStack className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Superficie departamentos</span>
                        </div>
                        <span className="font-semibold">41 m² - 82 m²</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Elevadores</span>
                        </div>
                        <span className="font-semibold">4</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-0 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 p-4">
                    <h3 className="text-lg font-semibold text-inverater-dark mb-3">Amenidades</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Waves className="h-4 w-4 text-inverater-secondary" />
                        <span className="text-gray-700">Alberca</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Dumbbell className="h-4 w-4 text-inverater-secondary" />
                        <span className="text-gray-700">Gimnasio</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Monitor className="h-4 w-4 text-inverater-secondary" />
                        <span className="text-gray-700">Co-working</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Coffee className="h-4 w-4 text-inverater-secondary" />
                        <span className="text-gray-700">Salón de eventos</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Umbrella className="h-4 w-4 text-inverater-secondary" />
                        <span className="text-gray-700">Asoleadero</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Utensils className="h-4 w-4 text-inverater-secondary" />
                        <span className="text-gray-700">Área de asadores</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-0 space-y-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="bg-inverater-secondary text-white px-4 py-2 rounded-lg font-medium inline-flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Departamento Estudiantil</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-inverater-dark mb-4 pb-2 border-b">
                      Detalles de Unidad
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SquareStack className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Distribución</span>
                        </div>
                        <span className="font-semibold">82 m²</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bed className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Recámaras</span>
                        </div>
                        <span className="font-semibold">2</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bath className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Baños</span>
                        </div>
                        <span className="font-semibold">2</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <PenSquare className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Sala / Comedor</span>
                        </div>
                        <span className="font-semibold">42 m²</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Lavandería</span>
                        </div>
                        <span className="font-semibold">Sí</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Balcón</span>
                        </div>
                        <span className="font-semibold">5 m²</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-inverater-dark mb-4 pb-2 border-b">
                      Inmuebles Vinculados
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex justify-between">
                          <div className="font-medium text-inverater-dark">DEPTO. 1811</div>
                          <div className="text-sm text-inverater-secondary">Ver detalles</div>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">60m² • Piso 18 • Una recámara</div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex justify-between">
                          <div className="font-medium text-inverater-dark">DEPTO. 1809</div>
                          <div className="text-sm text-inverater-secondary">Ver detalles</div>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">82m² • Piso 18 • Dos recámaras</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="related" className="mt-0">
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-inverater-dark mb-4">
                  Campañas Relacionadas
                </h3>
                
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                        <div className="relative">
                          <img 
                            src="/lovable-uploads/28374962-2d40-4867-aec4-b4838b715662.png" 
                            alt="Alejandria Residencias" 
                            className="w-full h-56 object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-inverater-primary text-white px-3 py-1 rounded-lg text-sm">
                            CETE Inmobiliario: Preventa
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-bold mb-3">Alejandria Residencias Fase 3</h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Rendimiento estimado:</span>
                              <span className="text-inverater-primary font-semibold">14% - 30%</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Periodo de inversión:</span>
                              <span className="font-medium">18/06/2026</span>
                            </div>
                            
                            <div className="bg-gray-200 rounded-full h-2 mt-2 mb-1">
                              <div className="bg-inverater-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm font-medium">Avance: 25%</div>
                              <div className="text-inverater-primary font-bold">1760 $</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                        <div className="relative">
                          <img 
                            src="/lovable-uploads/28374962-2d40-4867-aec4-b4838b715662.png" 
                            alt="Alejandria Residencias" 
                            className="w-full h-56 object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-inverater-primary text-white px-3 py-1 rounded-lg text-sm">
                            CETE Inmobiliario: En Desarrollo
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-bold mb-3">Alejandria Residencias Fase 2</h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Rendimiento estimado:</span>
                              <span className="text-inverater-primary font-semibold">16% - 32%</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Periodo de inversión:</span>
                              <span className="font-medium">10/04/2025</span>
                            </div>
                            
                            <div className="bg-gray-200 rounded-full h-2 mt-2 mb-1">
                              <div className="bg-inverater-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm font-medium">Avance: 65%</div>
                              <div className="text-inverater-primary font-bold">1850 $</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative inset-0 translate-y-0 left-0 mr-2" />
                    <CarouselNext className="relative inset-0 translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DevelopmentView;
