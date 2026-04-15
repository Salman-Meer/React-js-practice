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

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  // open menu
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Typography sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          {/* 🔹 Desktop Menu (md and above) */}
          <div className="desktop-menu">
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </div>

          {/* 🔹 Mobile Hamburger */}
          <IconButton
            color="inherit"
            onClick={handleOpen}
            className="mobile-menu"
          >
            <MenuIcon /> <MenuIcon /> <MenuIcon /> <MenuIcon />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Services</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;