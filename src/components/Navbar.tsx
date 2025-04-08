
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src="/lovable-uploads/d4e7d537-309c-4f94-a2f9-cd5075a1ef1d.png" alt="Inverater Logo" className="h-8 w-auto" />
            <span className="ml-2 text-2xl font-bold text-black">Inverater</span>
          </div>
          <div className="hidden md:ml-10 md:flex md:space-x-8">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-inverater-primary">
              Nosotros
            </Link>
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-inverater-primary">
              Campañas
            </Link>
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-inverater-primary">
              FAQs
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-inverater-primary">
            Inicia sesión
          </Button>
          <Button className="bg-inverater-primary text-white hover:bg-orange-600">
            Abre tu cuenta
          </Button>
        </div>
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
