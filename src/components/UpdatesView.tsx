
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";

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
    { date: "20/mar/25", value: 2.0 },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Última actualización
        </h2>
        <div className="space-y-4">
          <div className="text-3xl font-bold">10.200.000 $</div>
          <div className="flex items-center gap-3">
            <div className="text-lg">20/03/2025</div>
            <div className="bg-inverater-primary text-white px-3 py-1 rounded-md flex items-center gap-1.5">
              <ArrowUp className="w-4 h-4" />
              <span className="font-medium">2%</span>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between border-b pb-3 mb-6">
          <h2 className="text-2xl font-semibold text-inverater-dark">
            Actualizaciones anteriores
          </h2>
          <Button variant="link" className="flex items-center gap-2">
            Ver todas
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Histórico de Rendimiento
        </h2>
        <div className="flex space-x-2 mb-4">
          <Button variant="secondary" className="bg-inverater-primary text-white hover:bg-inverater-primary/90">Total</Button>
          <Button variant="outline" className="border-inverater-primary text-inverater-primary">Año</Button>
          <Button variant="outline" className="border-inverater-primary text-inverater-primary">Mes</Button>
        </div>
        <div className="h-[400px] mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={historyData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4D1AAF"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-end mt-2 gap-4">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm text-gray-600">Histórico real</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-inverater-secondary mr-2"></div>
            <span className="text-sm text-gray-600">Proyección</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-inverater-dark border-b pb-3 mb-6">
          Plusvalizaciones
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={appreciationData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 2.5]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0091FF"
                strokeWidth={0}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UpdatesView;
