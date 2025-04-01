"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

type CustomPieChartProps = {
    chartData: { name: string; value: number }[];
    colors: string[];
};

const CustomPieChart = ({ chartData, colors }: CustomPieChartProps) => {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
            >
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default CustomPieChart;
