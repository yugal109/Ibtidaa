import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebContent from "@/components/shared/portfolio/WebContent";
import AppContent from "@/components/shared/portfolio/AppContent";
import DigitalContent from "@/components/shared/portfolio/DigitalContent";

const page = () => {
  return (
    <div className=" max-w-7xl m-auto pt-20 min-h-screen">
      <h1 className="text-4xl text-center py-10">Our Projects</h1>
      <Tabs
        defaultValue="web"
        className=" flex flex-col items-center max-w-7xl m-auto"
      >
        <TabsList>
          <TabsTrigger value="web">Website</TabsTrigger>
          <TabsTrigger value="app">Mobile App</TabsTrigger>
          <TabsTrigger value="digital">Digital Marketing</TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <WebContent />
        </TabsContent>
        <TabsContent value="app">
          <AppContent />
        </TabsContent>
        <TabsContent value="digital">
          <DigitalContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
