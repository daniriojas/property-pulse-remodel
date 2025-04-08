
import { ArrowUp, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip,
  Area,
  AreaChart
} from "recharts";

const UpdatesView = () => {
  // Example data for the historical performance chart
  const historyData = [
    { date: "20/mar/25", value: 1000 },
    { date: "20/abr/25", value: 1015 },
    { date: "20/may/25", value: 1035 },
    { date: "20/jun/25", value: 1050 },
    { date: "20/jul/25", value: 1065 },
    { date: "20/ago/25", value: 1085 },
    { date: "20/sep/25", value: 1100 },
    { date: "20/oct/25", value: 1120 },
    { date: "20/nov/25", value: 1135 },
    { date: "20/dic/25", value: 1150 },
    { date: "20/ene/26", value: 1175 },
    { date: "20/feb/26", value: 1200 },
    { date: "20/mar/26", value: 1225 },
    { date: "20/abr/26", value: 1240 },
    { date: "20/may/26", value: 1255 },
    { date: "20/jun/26", value: 1275 },
    { date: "20/jul/26", value: 1290 },
    { date: "20/ago/26", value: 1310 },
    { date: "20/sep/26", value: 1330 },
    { date: "20/oct/26", value: 1350 },
    { date: "20/nov/26", value: 1370 },
    { date: "20/dic/26", value: 1390 },
    { date: "20/ene/27", value: 1410 },
    { date: "20/feb/27", value: 1430 },
    { date: "20/mar/27", value: 1450 },
  ];

  // Example data for the appreciation chart
  const appreciationData = [
    { date: "20/mar/25", value: 0 },
    { date: "20/abr/25", value: 0.2 },
    { date: "20/may/25", value: 0.4 },
    { date: "20/jun/25", value: 0.6 },
    { date: "20/jul/25", value: 0.8 },
    { date: "20/ago/25", value: 1.0 },
    { date: "20/sep/25", value: 1.2 },
    { date: "20/oct/25", value: 1.4 },
    { date: "20/nov/25", value: 1.6 },
    { date: "20/dic/25", value: 1.8 },
    { date: "20/ene/26", value: 2.0 },
  ];

  return (
    <div className="space-y-6">
      <Card className="rounded-xl shadow-sm border-0 overflow-hidden">
        <CardHeader className="p-0">
          <div className="bg-gradient-to-r from-inverater-secondary to-inverater-primary/90 text-white p-4">
            <h2 className="text-xl font-semibold">Última actualización</h2>
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-inverater-dark">10.200.000 $</div>
              <Badge className="bg-inverater-primary text-white flex items-center gap-1 font-normal">
                <ArrowUp className="h-3 w-3" />
                <span>2%</span>
              </Badge>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>20/03/2025</span>
            </div>
            
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl shadow-sm border-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Actualizaciones anteriores</h2>
          <Button variant="ghost" className="text-inverater-secondary font-medium flex items-center">
            Ver todas
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <CardContent className="p-0">
          <div className="divide-y">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-gray-200 text-gray-800 font-normal text-xs">
                        Diciembre 2024
                      </Badge>
                      <Badge className="bg-inverater-primary text-white flex items-center gap-1 font-normal text-xs">
                        <ArrowUp className="h-3 w-3" />
                        <span>1.8%</span>
                      </Badge>
                    </div>
                    <h3 className="font-medium mt-2">Actualización de valor</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      Aumento del valor de la propiedad debido a mejoras en la zona y alta demanda de alquiler.
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-inverater-secondary font-medium">
                    Leer más
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl shadow-sm border-0 overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Histórico de Rendimiento</h2>
        </div>
        <CardContent className="p-4">
          <Tabs defaultValue="total">
            <TabsList className="bg-gray-100 p-1 rounded-lg mb-4">
              <TabsTrigger value="total" className="data-[state=active]:bg-white data-[state=active]:text-inverater-primary data-[state=active]:shadow rounded-md">
                Total
              </TabsTrigger>
              <TabsTrigger value="year" className="data-[state=active]:bg-white data-[state=active]:text-inverater-primary data-[state=active]:shadow rounded-md">
                Año
              </TabsTrigger>
              <TabsTrigger value="month" className="data-[state=active]:bg-white data-[state=active]:text-inverater-primary data-[state=active]:shadow rounded-md">
                Mes
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="total" className="mt-0">
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={historyData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4D1AAF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4D1AAF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={{ stroke: '#E5E7EB' }}
                      tickMargin={10}
                    />
                    <YAxis 
                      domain={['dataMin - 100', 'dataMax + 100']} 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      formatter={(value: any) => [`$${value}`, 'Valor']}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#4D1AAF"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-end mt-2 gap-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-inverater-secondary mr-2"></div>
                  <span className="text-sm text-gray-600">Histórico real</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-inverater-secondary/30 mr-2"></div>
                  <span className="text-sm text-gray-600">Proyección</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="year" className="mt-0">
              <div className="h-[300px] bg-gray-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Datos anuales</span>
              </div>
            </TabsContent>
            
            <TabsContent value="month" className="mt-0">
              <div className="h-[300px] bg-gray-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Datos mensuales</span>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="rounded-xl shadow-sm border-0 overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Plusvalizaciones</h2>
        </div>
        <CardContent className="p-4">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={appreciationData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAppreciation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0091FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0091FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickMargin={10}
                />
                <YAxis 
                  domain={[0, 2.5]} 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  formatter={(value: any) => [`${value}%`, 'Apreciación']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0091FF"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorAppreciation)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between items-center mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">Apreciación acumulada</div>
            <div className="text-lg font-bold text-inverater-secondary">2.0%</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdatesView;
