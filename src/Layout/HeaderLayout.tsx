import React from "react";
import Logo from "../Assets/Images/Logo.svg";
import { AppBar, Toolbar, Button } from "@material-ui/core";
const HeaderLayout = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
