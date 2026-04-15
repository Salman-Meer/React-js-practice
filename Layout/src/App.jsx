import './App.css'
import Name from './header/Name';
import Menus from './header/Menus'; 
import Left from './body/Left';
import Right from './body/Right';
import Footer from './body/footer/Footer';
  import Box from '@mui/material/Box';
   import Grid from '@mui/material/Grid';
function App() {
  return (
   <>

      
        <Grid container>
        <Grid size={12} >
        <Name />
        </Grid>
        </Grid>
     
        <Grid container>
        <Grid size={12}  >
     <Menus />
     </Grid>
     </Grid>
     
        <Grid container>
        <Grid size={8} >
      <Left />  
      </Grid>
      
        <Grid size={4}  style={{ backgroundColor: "lightblue" }}>
      <Right />
      </Grid>
      
      </Grid>
       <Grid container spaced={1}>
        <Grid size={12}  >
      <Footer />
     </Grid>
     </Grid>

   </>
  )
}

export default App;