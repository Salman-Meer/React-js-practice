
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";


function Deliver(){

    return (
     
             <Grid container>
      <Grid item size={{xs: 12, sm: 12 , md: 12 , lg: 12 }}>
               <p style={{color:"#b9b8b7",  fontSize:"1vw", margin:"10px 0 0 0",padding:"0", fontFamily:"arial"}}>Deliver To </p>   
      </Grid>
      <Grid item size={{xs: 12, sm: 12 , md: 12 , lg: 12 }}>
                  <p style={{ fontSize:"1.25vw",color:"white", margin:"0",padding:"0", fontFamily:"arial", fontWeight:"bold",}}> <LocationOnIcon style={{fontSize:"1.25vw"}}/> Pakistan   </p>
      </Grid>
    </Grid>
  
    )

}
export default Deliver