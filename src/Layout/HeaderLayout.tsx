import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
const HeaderLayout = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <img src="" alt="" />
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
