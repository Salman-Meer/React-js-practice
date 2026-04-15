import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

function First_menu() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          <Button color="inherit" onClick={handleClick}>
            Services
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Web Development</MenuItem>
            <MenuItem onClick={handleClose}>App Development</MenuItem>
            <MenuItem onClick={handleClose}>SEO</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default First_menu;