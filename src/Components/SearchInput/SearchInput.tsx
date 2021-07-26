import React from "react";
import SearchInputStyles from "./SearchInputStyles.module.css";
const SearchInput = () => {
  return (
    <>
      <input
        type="text"
        placeholder="دنبال چی میگردی..."
        className={`h-100 bg-transparent border-none mx-3 ${SearchInputStyles.searchInput}`}
      />
    </>
  );
};

export default SearchInput;
