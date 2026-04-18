
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Header from './header/Header';
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import Banner from './Banner/Banner'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";


import "./App.css"
function App() {
  return(
  <>
    <Grid container>
      <Grid item size={{xs: 12 }}  sm={12} md={12} lg={12}>
        <Header />

      </Grid>
      <Grid item size={{xs: 12 }}  sm={12} md={12} lg={12}>
        <Banner  />

      </Grid>
    </Grid>
  </>
  )
  
}

export default App
