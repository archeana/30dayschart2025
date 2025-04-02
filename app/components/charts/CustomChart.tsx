"use client";

import Typography from "@mui/material/Typography";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

type ChartProps = {
  chartData: { name: string; value: number }[]; 
  type: string; 
  colors?: string[]; 
};

const CustomChart = ({ chartData, type, colors }: ChartProps) => {
  switch (type) {
    case "bar":
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={colors ? colors[0] : "#8884d8"} />
          </BarChart>
        </ResponsiveContainer>
      );
      
    case "line":
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={colors ? colors[0] : "#8884d8"} />
          </LineChart>
        </ResponsiveContainer>
      );
    
    case "pie":
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} paddingAngle={5}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={colors ? colors[index % colors.length] : "#8884d8"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );

    default:
      return <Typography variant="h6">Unsupported chart type: {type}</Typography>;
  }
};

export default CustomChart;
