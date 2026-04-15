import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";

function Second_menu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // open
  };

  const handleClose = () => {
    setAnchorEl(null); // close
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          {/* Logo / Title */}
          <Typography sx={{ flexGrow: 1 }}>
            Salman Store
          </Typography>

          {/* Normal Menus */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>

          {/* Dropdown Button */}
          <Button color="inherit" onClick={handleClick}>
            Products
          </Button>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Shoes</MenuItem>
            <MenuItem onClick={handleClose}>Clothes</MenuItem>
            <MenuItem onClick={handleClose}>Electronics</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Second_menu;