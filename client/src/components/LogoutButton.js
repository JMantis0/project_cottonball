import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const LogoutButton = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    isAuthenticated && (
      <div id="logout">
        <Button variant="contained" onClick={handleClick}>
          Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {" "}
          <Typography align="center">{user.nickname}</Typography>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </div>
    )
  );
};

export default LogoutButton;
