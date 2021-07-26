import React from "react";
import SearchMenuBoxStyles from "./SearchMenuBox.module.css";
import { DropDownMenu, SearchInput } from "..";
import { FiSearch } from "react-icons/fi";
const SearchMenuBox = (): JSX.Element => {
  return (
    <div className={SearchMenuBoxStyles.searchMenuContainer}>
      <DropDownMenu />
      <SearchInput />
      <FiSearch className="h-100" color="#818181" />
    </div>
  );
};

export default SearchMenuBox;
