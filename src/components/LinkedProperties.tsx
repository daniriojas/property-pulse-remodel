
import { Building } from "lucide-react";

const LinkedProperties = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-inverater-dark border-b pb-2 mb-6">
        Inmuebles vinculados
      </h2>
      
      <div className="flex flex-col space-y-4">
        <div>
          <div className="bg-inverater-secondary text-white px-4 py-2 rounded-t-md inline-block">
            <span className="font-medium">Una Recamara</span>
          </div>
          <div className="bg-inverater-primary/20 px-3 py-1 inline-block">
            <span className="text-sm font-medium text-inverater-primary">DEPTO. 2710</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedProperties;
