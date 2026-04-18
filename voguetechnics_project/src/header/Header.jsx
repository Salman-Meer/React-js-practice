
import {

  Button,
  IconButton,
  Menu,
  MenuItem,
  
  
} from "@mui/material";
import Menus from "./Menus";


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../App.css";

function Header() {



  return (

      <Grid container>
       <Grid item size={{xs: 0, sm: 0, md: 1, lg: 1 }}>
        </Grid>
        <Grid item size={{xs: 2, sm: 2, md: 2, lg: 2 }}>       
   <img className="logo_img"
          src="https://www.voguetechnics.co.uk/assets/images/logo.webp"
          alt="logo"
         
        />

         
        </Grid>
        <Grid item size={{xs: 1, sm: 1, md: 2, lg: 0 }} ></Grid>
        <Grid item size={{xs: 8, sm: 7, md: 6, lg: 3 }} style={{ textAlign: "center" }} >
           <PhoneIcon style={{position:"relative", top:"5px", fontWeight:"bold"}} />
          
        <p style={{color:"#118C4F",display:"inline",fontSize:"24px", fontFamily:"Consolas", fontWeight:"bold"}}>
          01375531355</p>
        
        </Grid>
        <Grid item size={{xs: 0, sm: 1, md: 0, lg: 0 }} ></Grid>
         <Grid size={{xs: 1, sm: 1, md: 1, lg: 6 }} style={{ textAlign: "right" }} >
         
     
       <Menus />
        </Grid>
      </Grid>





  );
}

export default Header;








































