import { Popover, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";

const SearchBox = () => {
  const [anchorE1, setAnchorE1] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorE1(e.currentTarget);
  };
  const handlePopoverClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorE1(null);
  };
  const open = Boolean(anchorE1);
  return (
    <div className="searchBox" style={{ height: "10rem" }}>
      <Typography
        style={{ height: "10rem" }}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
      >
        روی این متن هاور کن
      </Typography>
      <Popover
        style={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorE1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onMouseLeave={handlePopoverClose}
      >
        این منو است
      </Popover>
    </div>
  );
};

export default SearchBox;
