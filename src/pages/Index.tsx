
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyImage from "@/components/PropertyImage";
import PropertyDetails from "@/components/PropertyDetails";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectDocumentation from "@/components/ProjectDocumentation";
import LinkedProperties from "@/components/LinkedProperties";
import Distribution from "@/components/Distribution";
import UpdatesView from "@/components/UpdatesView";
import SupportView from "@/components/SupportView";
import DevelopmentView from "@/components/DevelopmentView";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("analysis");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pb-16">
        <PropertyHeader 
          title="Torre Alejandría Residencias - Campaña 1" 
          defaultTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        <div className="max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} className="w-full">
            <TabsContent value="analysis" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <PropertyImage />
                  <ProjectInfo />
                  <ProjectDocumentation />
                  <LinkedProperties />
                  <Distribution />
                </div>
                
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <PropertyDetails />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <UpdatesView />
                </div>
                
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <PropertyDetails />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <SupportView />
                </div>
                
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <PropertyDetails />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <DevelopmentView />
                </div>
                
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <PropertyDetails />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
