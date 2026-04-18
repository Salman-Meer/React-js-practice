import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
function Cart_icon(){

    return(    
            <Grid container style={{marginTop:"10px"}}>
              <Grid item size={{xs: 12, sm: 12 , md: 12 , lg: 12 }} style={{margin:"0", padding:"0", textAlign:"center"}} className="HelloSigin_outer ">
                <ShoppingCartIcon style={{color:"white", fontSize:"3vw"}}/>
                
              </Grid>
              </Grid>
        
        

    )

}
export default Cart_icon
