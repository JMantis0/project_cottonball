import React from "react";
import { Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Search Puget Sound Trails and Weather</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
