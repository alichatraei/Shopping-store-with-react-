import React from "react";
import heart from "../../Assets/Icons/heart.svg";
import shoppingCart from "../../Assets/Icons/shopping-cart.svg";
import userProfile from "../../Assets/Icons/user.svg";
import HeaderIconsBoxStyles from "./HeaderIconsBox.module.css";
const HeaderIconsBox = ({ mobileSize }: { mobileSize?: boolean }) => {
  return (
    <div
      className="headerIconsBoxContainer d-flex justify-content-between
       align-items-center w-100 h-100"
    >
      <div className={HeaderIconsBoxStyles.userProfile}>
        <img src={userProfile} alt="userProfile" className="h-100" />
      </div>
      <div className={HeaderIconsBoxStyles.heartIcon}>
        <img src={heart} alt="heart" className="h-100" />
      </div >
      <div className={HeaderIconsBoxStyles.shoppingCart}>
        <img src={shoppingCart} alt="shoppingCart" className="h-100" />
      </div>
    </div >
  );
};

export default HeaderIconsBox;
