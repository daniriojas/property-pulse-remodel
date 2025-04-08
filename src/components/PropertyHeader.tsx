
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PropertyHeaderProps {
  title: string;
}

const PropertyHeader = ({ title }: PropertyHeaderProps) => {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <span className="text-gray-500">Dashboard</span>
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
            <span className="text-gray-500">Campañas</span>
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
            <span className="font-medium">{title}</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-inverater-dark sm:text-3xl">{title}</h1>
        
        <Tabs defaultValue="analysis" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="analysis" className="data-[state=active]:bg-inverater-secondary data-[state=active]:text-white">
              Análisis
            </TabsTrigger>
            <TabsTrigger value="updates" className="data-[state=active]:bg-inverater-secondary data-[state=active]:text-white">
              Actualizaciones
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-inverater-secondary data-[state=active]:text-white">
              Respaldo
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-inverater-secondary data-[state=active]:text-white">
              Torre Alejandría
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertyHeader;
