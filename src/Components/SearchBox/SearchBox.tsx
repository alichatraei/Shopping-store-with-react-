import { InputBase } from "@material-ui/core";
import React from "react";
import SearchBoxStyles from "./SearchBox.Styles";
const SearchBox = (): JSX.Element => {
  const classes: any = SearchBoxStyles();
  return (
    <div className={classes.searchBox}>
      <InputBase
        placeholder="دنبال چی میگردی"
        className={classes.inputBase}
        autoFocus
      />
    </div>
  );
};

export default SearchBox;
