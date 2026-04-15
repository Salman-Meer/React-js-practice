import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" style={{ background: "green" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

          {/* 🔹 LEFT: Logo */}
          <img
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/669e2e7897a240b236b5e75e/0x0.png"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />

          {/* 🔹 CENTER: Phone (fixed size) */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <PhoneIcon />
            <Typography style={{ fontSize: "16px" }}>
              +92 300 1234567
            </Typography>
          </div>

          {/* 🔹 RIGHT: Desktop Menu */}
          <div className="desktop-menu">
            <Button style={{ color: "white" }}>Home</Button>
            <Button style={{ color: "white" }}>About</Button>
            <Button style={{ color: "white" }}>Services</Button>
            <Button style={{ color: "white" }}>Contact</Button>
          </div>

          {/* 🔹 Mobile Hamburger */}
          <IconButton
            onClick={openMenu}
            className="mobile-menu"
            style={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Dropdown */}
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
    </>
  );
}

export default App;