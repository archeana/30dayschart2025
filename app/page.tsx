
import { Container, Typography } from "@mui/material";
import ChartCard from "./components/ChartCard";
import { chartData } from "./data/charts";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          30 days Chart Challenge
        </Typography>
        <Grid container spacing={3}>
          {chartData.map((chart) => (
            <Grid key={chart.id}>
              <ChartCard
                {...chart}
                description={chart.description || "Default description"}
                chartImage={chart.image || "default-image-url"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
