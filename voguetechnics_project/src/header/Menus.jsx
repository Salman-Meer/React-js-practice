
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
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
import "../App.css";



function Menus() {
      const [anchorEl, setAnchorEl] = useState(null);
      const [isMobile, setIsMobile] = useState(false);
    
    
      const [anchorElDropDown, setAnchorElDropDown] = useState(null);
    const openDropDown = (event) => {
        setAnchorElDropDown(event.currentTarget);
      };
    
        const closeDropDownMenu = () => {
        setAnchorElDropDown(null);
      };
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 1199);
        };
    
    
    
    
        handleResize(); // run first time
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const closeMenu = () => {
        setAnchorEl(null);
      };
  return (
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                   {/* 🔥 DESKTOP MENU */}
              {!isMobile && (
                <Box style={{ display: "flex", gap: "10px" }}>
                  <Button style={{ color: "#118C4F",fontSize: "16px", fontWeight:600, fontFamily: "arial" }} onClick={openDropDown}>Engines
                  <ArrowDropDownIcon />
                  </Button>
                            <Menu
                  anchorEl={anchorElDropDown}
                  open={Boolean(anchorElDropDown)}
                  onClose={closeDropDownMenu}
                >
                  <MenuItem onClick={closeDropDownMenu}>RangeRoverEngins</MenuItem>
                  <MenuItem onClick={closeDropDownMenu}>Audi Engins</MenuItem>
                  <MenuItem onClick={closeDropDownMenu}>BMW Engins</MenuItem>
                  <MenuItem onClick={closeDropDownMenu}>Jaguar Engins</MenuItem>
                </Menu>
      
                  <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Ancillaries</Button>
                  <NavLink to="/">
                  <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Home</Button>
                  
                  </NavLink>
                  <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>About</Button>
                  <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Gallery</Button>
                   <NavLink to="/blog">
                    <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Blog</Button>
                  </NavLink>
                
                </Box>
              )}
      
              {/* 🔥 MOBILE HAMBURGER */}
              {isMobile && (
                <IconButton onClick={openMenu} style={{ color: "#118C4F" }}>
                  <MenuIcon />
                </IconButton>
              )}
      
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
              >
                <MenuItem onClick={closeMenu}>
                 <Button style={{ color: "#118C4F",fontSize: "16px", fontWeight:600, fontFamily: "arial" }} onClick={openDropDown}>Engines
                  <ArrowDropDownIcon />
                  </Button>
                            <Menu
                  anchorEl={anchorElDropDown}
                  open={Boolean(anchorElDropDown)}
                  onClose={closeDropDownMenu}
                >
                  <MenuItem onClick={closeDropDownMenu}>RangeRoverEngins\</MenuItem>
                  <MenuItem onClick={closeDropDownMenu}>Audi Engins</MenuItem>
                  <MenuItem onClick={closeDropDownMenu}>BMW Engins</MenuItem>
                  <MenuItem onClick={closeDropDownMenu}>Jaguar Engins</MenuItem>
                </Menu>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                <NavLink to="/">
                     <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Home</Button>
                     </NavLink>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                    <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Ancillaries</Button>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                     <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>About</Button>
                </MenuItem>
      
                <MenuItem onClick={closeMenu}>
                     <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Gallery</Button>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                <NavLink to="/blog">
                     <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Blog</Button>
                     </NavLink>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                     <Button style={{ color: "#7a817e",fontSize: "16px", fontWeight:600, fontFamily: "arial" }}>Contact</Button>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                     <Button style={{ width: "100%", color: "#000000", backgroundColor:"white" , fontSize: "16px", fontWeight:600, fontFamily: "arial",  borderRadius:"10px",boxShadow: "0 14px 18px rgba(0,0,0,0.1)"     }}>01375531355</Button>
                </MenuItem>
                
              </Menu>
    </Grid>
    </Grid>
  );
}

export default Menus;