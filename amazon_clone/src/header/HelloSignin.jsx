
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


function HelloSignin(){
    return (        
            <Grid container style={{marginTop:"10px"}}>
              <Grid item size={{xs: 12, sm: 12 , md: 12 , lg: 12 }} style={{margin:"0", padding:"0"}} className="HelloSigin_outer">
                <p className="HellowSignin" style={{margin:"0", padding:"0"}}>Hello, sign in</p>
                <p className="AccountList" style={{margin:"0", padding:"0"}}>
                    Account & Lists
                    <ArrowDropDownIcon style={{margin:"0", padding:"0", fontSize:"2vw"}} className="dropdownSignin" />
                </p>
                
              </Grid>
              </Grid>
        
    )
    
}

export default HelloSignin