"use client";

import { useRouter, useParams } from "next/navigation";
import { Container, Typography, Button } from "@mui/material";
import { chartData } from "../../data/charts";
import CustomPieChart from "@/app/components/charts/PieChart";

const ChartDetailPage = () => {
    const router = useRouter();
    const { id } = useParams(); // Get the chart ID from the URL parameter

    // Ensure the ID is valid before accessing chart data
    if (!id) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    // Find the chart data by ID from the chartData array
    const chart = chartData.find((chart) => chart.id === parseInt(id as string));

    if (!chart) {
        return <Typography variant="h6">Chart not found</Typography>;
    }

    return (
        <Container sx={{ py: 4 }}>

            {/* Back to Home Button */}
            <Button
                variant="contained"
                color="primary"
                sx={{ margin: 2 }}
                onClick={() => router.push("/")} // Navigate back to the home page
            >
                Back to Home
            </Button>
            <Typography variant="h4" gutterBottom>
                {chart.title}
            </Typography>

            {/* Render the pie chart using Recharts */}
            {/* Adjusted to pass correct props */}
            <CustomPieChart chartData={chart.chartData} colors={chart.colors} />
        </Container>
    );
}

export default ChartDetailPage;
