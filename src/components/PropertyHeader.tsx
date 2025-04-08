
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PropertyHeaderProps {
  title: string;
  defaultTab?: string;
  onTabChange?: (value: string) => void;
}

const PropertyHeader = ({ title, defaultTab = "analysis", onTabChange }: PropertyHeaderProps) => {
  return (
    <div className="pt-4 pb-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 hover:text-inverater-primary cursor-pointer">Dashboard</span>
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
            <span className="text-gray-500 hover:text-inverater-primary cursor-pointer">Campañas</span>
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
            <span className="font-medium">{title}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-inverater-dark sm:text-3xl">{title}</h1>
          
          <div className="flex space-x-3">
            <Button variant="outline" className="border-inverater-primary text-inverater-primary hover:bg-inverater-primary/10">
              Compartir
            </Button>
            <Button className="bg-inverater-primary text-white hover:bg-orange-600">
              Invertir ahora
            </Button>
          </div>
        </div>
        
        <Tabs 
          defaultValue={defaultTab} 
          className="w-full"
          onValueChange={onTabChange}
        >
          <TabsList className="bg-transparent p-0 h-auto border-b w-full justify-start gap-2">
            <TabsTrigger 
              value="analysis" 
              className="rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-inverater-primary data-[state=active]:border-b-2 data-[state=active]:border-inverater-primary data-[state=active]:shadow-none"
            >
              Análisis
            </TabsTrigger>
            <TabsTrigger 
              value="updates" 
              className="rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-inverater-primary data-[state=active]:border-b-2 data-[state=active]:border-inverater-primary data-[state=active]:shadow-none"
            >
              Actualizaciones
            </TabsTrigger>
            <TabsTrigger 
              value="support" 
              className="rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-inverater-primary data-[state=active]:border-b-2 data-[state=active]:border-inverater-primary data-[state=active]:shadow-none"
            >
              Respaldo
            </TabsTrigger>
            <TabsTrigger 
              value="details" 
              className="rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-inverater-primary data-[state=active]:border-b-2 data-[state=active]:border-inverater-primary data-[state=active]:shadow-none"
            >
              Torre Alejandría
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertyHeader;
