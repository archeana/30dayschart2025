"use client";

import { Container, Typography } from "@mui/material";
import ChartCard from "./components/ChartCard";
import { chartData } from "./data/charts";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Chart Gallery
        </Typography>
        <Grid container spacing={3}>
          {chartData.map((chart) => (
            <Grid key={chart.id}>
              {/* Wrap the chart card with a Link to the chart detail page */}
              <Link href={`/charts/${chart.id}`} passHref>
                <ChartCard
                 id={chart.id}
                 title={chart.title}
                 image={chart.image}
                 description={chart.prompt} 
                 tags={chart.tags || []}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
