import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // 🔥 detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
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
    <AppBar position="static" style={{ background: "green" }}>
      <Toolbar>
       
        <img
          src="https://s3-eu-west-1.amazonaws.com/tpd/logos/669e2e7897a240b236b5e75e/0x0.png"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />

        {/* 🔹 Phone */}
         <Typography sx={{ flexGrow: 1 }}>

        <Box>
          <PhoneIcon />
          
        
            +92 300 1234567
         
        </Box>
        </Typography>

        {/* 🔥 DESKTOP MENU */}
        {!isMobile && (
          <Box style={{ display: "flex", gap: "10px" }}>
            <Button style={{ color: "white" }}>Home</Button>
            <Button style={{ color: "white" }}>About</Button>
            <Button style={{ color: "white" }}>Services</Button>
            <Button style={{ color: "white" }}>Contact</Button>
          </Box>
        )}

        {/* 🔥 MOBILE HAMBURGER */}
        {isMobile && (
          <IconButton onClick={openMenu} style={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* DROPDOWN */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={closeMenu}>Home</MenuItem>
          <MenuItem onClick={closeMenu}>About</MenuItem>
          <MenuItem onClick={closeMenu}>Services</MenuItem>
          <MenuItem onClick={closeMenu}>Contact</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}

export default App;