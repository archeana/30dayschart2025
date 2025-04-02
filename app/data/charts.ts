type chartData = {
  id: number;
  title: string;
  prompt: string;
  image?: string;
  tags?: string[];
  type?: string; 
  chartData?: { name: string; value: number }[]; 
  colors?: string[];  
};


export const chartData = [
  {
    id: 1,
    title: "Day 1",
    prompt: "Comparisons",
    image: "/charts/Day01.png", 
    tags: ["Flourish", "Fractions", "Waffle"],
    type: "pie",    
  },
  {
    id: 2,
    title: "Day 2",
    prompt: "Comparisons",
    image: "/charts/Day02.png", 
    tags: ["slope"],

  },
  // {
  //   id: 2,
  //   title: "Day 2",
  //   prompt: "Comparisons",
  //   image: "/charts/day1.png", 
  //   tags: ["slope"],
  //   type: "bar",
  //   chartData: [
  //     { name: "Part A", value: 40 }, 
  //     { name: "Part B", value: 30 },
  //     { name: "Part C", value: 20 },
  //     { name: "Part D", value: 10 },
  //   ],
  //   colors: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"], 
  //   description: "", 
  // },
 
];

    // Comparisons
// 1. fractions
// 2. slope
// 3. circular
// 4. big or small
// 5. ranking
// 6. theme day: florence nightingale
// Distributions
// 7. outliers
// 8. histogram
// 9. diverging
// 10. multi-modal
// 11. stripes
// 12. data day: data.gov
// Relationships
// 13. clusters
// 14. kinship
// 15. complicated
// 16. negative
// 17. birds
// 18. theme day: El País
// Timeseries
// 19. smooth
// 20. urbanization
// 21. fossils
// 22. stars
// 23. log scale
// 24. data day: WHO
// Uncertainties
// 25. risk
// 26. monochrome
// 27. noise
// 28. inclusion
// 29. extraterrestrial
// 30. theme day: national geographic
  