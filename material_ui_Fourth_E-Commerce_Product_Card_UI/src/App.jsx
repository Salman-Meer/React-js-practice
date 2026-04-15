import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      
      <Typography variant="h4" textAlign="center" gutterBottom>
        My Products
      </Typography>

      <Grid container spacing={3}>

        {/* Card 1 */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image="https://images.pexels.com/photos/11943314/pexels-photo-11943314.jpeg?cs=srgb&dl=pexels-carlosdetrip-11943314.jpg&fm=jpg"
            />

            <CardContent>
              <Typography variant="h6">Shoes</Typography>
              <Typography>Best running shoes</Typography>
              <Button variant="contained" style={{ marginTop: "10px" }}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image="https://i.pinimg.com/474x/8b/4a/24/8b4a245cbb299e7ee28e1717387bb5d0.jpg"
            />

            <CardContent>
              <Typography variant="h6">Watch</Typography>
              <Typography>Smart digital watch</Typography>
              <Button variant="contained" style={{ marginTop: "10px" }}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image="https://i.pinimg.com/736x/40/a4/92/40a492b0a148eeafeded44e958edc958.jpg"
            />

            <CardContent>
              <Typography variant="h6">Mobile</Typography>
              <Typography>Latest smartphone</Typography>
              <Button variant="contained" style={{ marginTop: "10px" }}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;