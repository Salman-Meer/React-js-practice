import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

function App() {
  return (
    <>
      {/* 🔹 Navbar */}
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            My Shop
          </Typography>

          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* 🔹 Hero Section */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to My Store</h1>
        <p>Best products at best prices</p>
      </div>

      {/* 🔹 Products Section */}
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Products
        </Typography>

        <Grid container spacing={3}>

          {/* Card 1 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://via.placeholder.com/300"
              />
              <CardContent>
                <Typography variant="h6">Shoes</Typography>
                <Typography>Best running shoes</Typography>
                <Button variant="contained">Buy</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://via.placeholder.com/300"
              />
              <CardContent>
                <Typography variant="h6">Watch</Typography>
                <Typography>Smart watch</Typography>
                <Button variant="contained">Buy</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://via.placeholder.com/300"
              />
              <CardContent>
                <Typography variant="h6">Phone</Typography>
                <Typography>Latest mobile</Typography>
                <Button variant="contained">Buy</Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </div>

      {/* 🔹 Footer */}
      <div style={{ background: "#1976d2", color: "white", textAlign: "center", padding: "15px", marginTop: "30px" }}>
        © 2026 My Shop
      </div>
    </>
  );
}

export default App;