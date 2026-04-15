import Button from '@mui/material/Button';
      import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Button variant="contained" style={{  width:"100px" }}>
        Click Me
      </Button><Button variant="contained" style={{  width:"100px", backgroundColor:"white", color:"black" }}>
        Click Me
      </Button>
      





    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>




    </>
  );
}

export default App;