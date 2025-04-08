
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const data = [
  { name: 'DEPTO. 2710', value: 3751067 }
];

const COLORS = ['#4D1AAF'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-md border">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-inverater-secondary font-bold">
          {new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

const Distribution = () => {
  return (
    <Card className="mt-6 rounded-xl shadow-sm border-0 overflow-hidden">
      <div className="bg-white p-4 border-b">
        <h2 className="text-lg font-bold text-gray-800">Distribución</h2>
      </div>
      
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold text-inverater-dark">100%</div>
              <div className="text-sm text-gray-500">Participación</div>
            </div>
          </div>
          
          <div className="space-y-4 flex flex-col justify-center">
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Desarrollo</div>
              <div className="font-medium text-lg">Torre Alejandría Residencias</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Tipo de unidad</div>
              <div className="font-medium">
                <Badge className="bg-inverater-secondary text-white font-normal">Una Recamara</Badge>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg mt-2">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-inverater-secondary rounded-sm"></div>
                <div className="flex-1">
                  <div className="font-medium">DEPTO. 2710</div>
                  <div className="text-sm text-gray-500">Nivel 27</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-inverater-dark">3.751.067 $</div>
                  <div className="text-sm text-gray-500">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Distribution;
