import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
const HeaderLayout = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="title">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
