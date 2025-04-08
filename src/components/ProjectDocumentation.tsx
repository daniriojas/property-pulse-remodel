
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectDocumentation = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-inverater-dark border-b pb-2 mb-6">
        Documentación del proyecto
      </h2>
      
      <div className="grid gap-4">
        <Card className="hover:bg-gray-50 transition">
          <CardContent className="p-4 flex justify-between">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-inverater-secondary mr-2" />
              <span className="font-medium">Brochure Comercial</span>
            </div>
            <span className="text-sm text-gray-500">Documento exclusivo para usuarios con participaciones</span>
          </CardContent>
        </Card>
        
        <Card className="hover:bg-gray-50 transition">
          <CardContent className="p-4 flex justify-between">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-inverater-secondary mr-2" />
              <span className="font-medium">Charter de Proyecto</span>
            </div>
            <span className="text-sm text-gray-500">Documento exclusivo para usuarios con participaciones</span>
          </CardContent>
        </Card>
        
        <Card className="hover:bg-gray-50 transition">
          <CardContent className="p-4 flex justify-between">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-inverater-secondary mr-2" />
              <span className="font-medium">Dictamen Legal</span>
            </div>
            <span className="text-sm text-gray-500">Documento exclusivo para usuarios con participaciones</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDocumentation;
