import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <Grid container style={{ backgroundColor:"red" }} spacing={0}>

      <Grid item size={{xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "lightblue" }} >
        1
      </Grid>

      <Grid item size={{xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "lightgreen" }}>
        <Box>2</Box>
      </Grid>

      <Grid item size={{xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "lightyellow" }}>
        <Box>3</Box>
      </Grid>

      <Grid item size={{xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "lightcoral" }}>
        <Box>4</Box>
      </Grid>

    </Grid>
  );
}