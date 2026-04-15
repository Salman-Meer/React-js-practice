import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Third_menu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          {/* Title */}
          <Typography sx={{ flexGrow: 1 }}>
            My Store
          </Typography>

          {/* Normal menus */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>

          {/* Dropdown button with arrow */}
          <Button color="inherit" onClick={openMenu}>
            Products
            <ArrowDropDownIcon />
          </Button>

          {/* Dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu}>Shoes</MenuItem>
            <MenuItem onClick={closeMenu}>Clothes</MenuItem>
            <MenuItem onClick={closeMenu}>Electronics</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Third_menu;