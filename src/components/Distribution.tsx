
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'DEPTO. 2710', value: 3751067 }
];

const COLORS = ['#100A2E', '#4D1AAF', '#FF6B00'];

const Distribution = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-inverater-dark border-b pb-2 mb-6">
        Distribución
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-64">
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
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <span className="font-medium text-lg">Torre Alejandría Residencias</span>
          </div>
          <div className="border-b pb-2">
            <span className="font-medium">Una Recamara</span>
          </div>
          <div className="flex items-center space-x-3 border-b pb-3">
            <div className="w-4 h-4 bg-inverater-dark rounded-sm"></div>
            <span className="font-medium">DEPTO. 2710</span>
            <span className="ml-auto font-bold">3.751.067 $ (100%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
