
import { useState} from "react";

import {

  Button,
  IconButton,
  Menu,
  MenuItem,
  
  
} from "@mui/material";



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Search()
{
    
      const [anchorElDropDown, setAnchorElDropDown] = useState(null);
    const openDropDown = (event) => {
        setAnchorElDropDown(event.currentTarget);
      };
    
        const closeDropDownMenu = () => {
        setAnchorElDropDown(null);
      };
    

  
    return(
        <Box sx={{ display: "flex", alignItems: "center" }}>
         <Button style={{margin:"10px 0 0 0", backgroundColor:"#c8cccc", color:"#616666", fontSize:"10px", height:"30px", borderRadius:"10px 0 0 10px"}}  onClick={openDropDown}>ALL
            <ArrowDropDownIcon />
            </Button>
                      <Menu
            anchorEl={anchorElDropDown}
            open={Boolean(anchorElDropDown)}
            onClose={closeDropDownMenu}
          >
            <MenuItem onClick={closeDropDownMenu}>T Shirt Male</MenuItem>
            <MenuItem onClick={closeDropDownMenu}>Button Shirt Male</MenuItem>
            <MenuItem onClick={closeDropDownMenu}>jinns shirt male</MenuItem>
            <MenuItem onClick={closeDropDownMenu}>T shirt femail</MenuItem>
            <MenuItem onClick={closeDropDownMenu}>Button Shirt female</MenuItem>
            <MenuItem onClick={closeDropDownMenu}>jinns shirt female</MenuItem>
            <MenuItem onClick={closeDropDownMenu}>sweater shirt femail</MenuItem>
          </Menu>
          <input type="search" name="" id="" style={{margin:"10px 0 0 0", border:"none" , display:"inline", width:"75%",  height:"30px"}} placeholder="Search Amazon" />
          <button style={{margin:"10px 0 0 0", backgroundColor:"#d7a122", border:"none", color:"#2a2d2d", height:"30px", borderRadius:"0 10px 10px 0"}}>🔍︎</button>
          </Box>
    )
}

export default Search