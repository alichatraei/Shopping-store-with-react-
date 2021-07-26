import React from "react";
import SearchMenuBoxStyles from "./SearchMenuBox.module.css";
import { DropDownMenu } from "..";
const SearchMenuBox = (): JSX.Element => {
  return (
    <div className={SearchMenuBoxStyles.searchMenuContainer}>
      <DropDownMenu />
    </div>
  );
};

export default SearchMenuBox;
