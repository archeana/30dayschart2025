"use client"; 

import { useRouter, useParams } from "next/navigation";
import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image"; 
import { chartData as charts } from "../../data/charts";  
import CustomChart from "@/app/components/charts/CustomChart";

interface ChartData {
  id: number;
  title: string;
  prompt: string;
  image?: string;
  tags?: string[];
  type?: string;
  chartData?: { name: string; value: number }[];  
  colors?: string[];  
}

const ChartDetailPage = () => {
    const router = useRouter();
    const { id } = useParams(); 

    //  the id is available
    if (!id) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    const chart = charts.find((chart) => chart.id === parseInt(id as string)) as ChartData;

    // If chart is not found, display an error
    if (!chart) {
        return <Typography variant="h6">Chart not found</Typography>;
    }

    return (
        <Container sx={{ py: 4 }}>
            <Button
                variant="contained"
                color="primary"
                sx={{ margin: 2 }}
                onClick={() => router.push("/")} 
            >
                Back to Home
            </Button>
            
            <Typography variant="h4" gutterBottom>
                {chart.title}
            </Typography>

            {/* Check if chartData exists before rendering the chart */}
            {chart.chartData ? (
                // Render the CustomChart with chartData
                <CustomChart chartData={chart.chartData} colors={chart.colors} type={""} />
            ) : (
                // If no chart data, render the image instead
                <Box>
                    <Image src={chart.image || "/default-image.png"} alt={chart.title} layout="responsive" width={500} height={300} />
                </Box>
            )}
        </Container>
    );
}

export default ChartDetailPage;
