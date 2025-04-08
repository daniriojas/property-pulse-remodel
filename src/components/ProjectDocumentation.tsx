
import { FileText, Download, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectDocumentation = () => {
  return (
    <Card className="mt-6 rounded-xl shadow-sm border-0 overflow-hidden">
      <div className="bg-white p-4 border-b">
        <h2 className="text-lg font-bold text-gray-800 flex items-center">
          <FileText className="mr-2 h-5 w-5 text-inverater-secondary" />
          Documentación del proyecto
        </h2>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="bg-inverater-secondary/10 p-2 rounded-lg mr-3">
                <FileText className="w-5 h-5 text-inverater-secondary" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Brochure Comercial</div>
                <div className="text-xs text-gray-500">PDF • 4.2MB</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-500 gap-1">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Exclusivo</span>
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="bg-inverater-secondary/10 p-2 rounded-lg mr-3">
                <FileText className="w-5 h-5 text-inverater-secondary" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Charter de Proyecto</div>
                <div className="text-xs text-gray-500">PDF • 2.8MB</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-500 gap-1">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Exclusivo</span>
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="bg-inverater-secondary/10 p-2 rounded-lg mr-3">
                <FileText className="w-5 h-5 text-inverater-secondary" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Dictamen Legal</div>
                <div className="text-xs text-gray-500">PDF • 1.5MB</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-500 gap-1">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Exclusivo</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDocumentation;
