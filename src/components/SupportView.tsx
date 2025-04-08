
import { FileText, ExternalLink } from "lucide-react";

const SupportView = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Descripción de Garantía
        </h2>
        <div className="space-y-6">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="pl-8 py-4 border-l-2 border-inverater-primary">
            <ol className="list-decimal space-y-3">
              <li className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
            </ol>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Documentos
        </h2>
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-inverater-primary hover:underline">
            <FileText className="h-5 w-5" />
            <span className="font-medium">2-Formato Requisitos proyecto productivo V3</span>
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportView;
