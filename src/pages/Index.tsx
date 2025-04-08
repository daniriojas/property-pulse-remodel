
import Navbar from "@/components/Navbar";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyImage from "@/components/PropertyImage";
import PropertyDetails from "@/components/PropertyDetails";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectDocumentation from "@/components/ProjectDocumentation";
import LinkedProperties from "@/components/LinkedProperties";
import Distribution from "@/components/Distribution";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <PropertyHeader title="Torre Alejandría Residencias - Campaña 1" />
        
        <div className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <PropertyImage />
              <ProjectInfo />
              <ProjectDocumentation />
              <LinkedProperties />
              <Distribution />
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <PropertyDetails />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
