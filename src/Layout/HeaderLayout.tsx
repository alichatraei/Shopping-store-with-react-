import React from "react";
import Logo from "../Assets/Images/Logo.svg";
import { SearchBox } from "../Components";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import useStyles from "./Styles/Styles";
const HeaderLayout = () => {
  const classes: any = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoDiv}>
          <img src={Logo} alt={Logo} className={classes.logoImage} />
        </div>
        <div className={classes.searchBox}>
          <SearchBox />
        </div>
        <Button color="inherit" className={classes.Button}>
          ورود
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
