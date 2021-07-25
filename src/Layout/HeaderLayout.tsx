import React from "react";
import Logo from "../Assets/Images/Logo.svg";
import { AppBar, Toolbar, Button, CardMedia } from "@material-ui/core";
import useStyles from "./Styles/Styles";
const HeaderLayout = () => {
  const classes: any = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <CardMedia image={Logo} src={Logo} />
        <Button color="inherit">ورود</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
