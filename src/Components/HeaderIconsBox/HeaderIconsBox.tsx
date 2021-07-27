import React from "react";
import heart from "../../Assets/Icons/heart.svg";
import shoppingCart from "../../Assets/Icons/shopping-cart.svg";
import userProfile from "../../Assets/Icons/user.svg";
import HeaderIconsBoxStyles from "./HeaderIconsBox.module.css";
const HeaderIconsBox = () => {
  return (
    <div
      className="headerIconsBoxContainer d-flex justify-content-between
       align-items-center w-100 h-100"
    >
      <div className={HeaderIconsBoxStyles.userProfile}>
        <img src={userProfile} alt="userProfile" />
      </div>
      <div className={HeaderIconsBoxStyles.heartIcon}>
        <img src={heart} alt="heart" />
      </div >
      <div className={HeaderIconsBoxStyles.shoppingCart}>
        <img src={shoppingCart} alt="shoppingCart" />
      </div>
    </div >
  );
};

export default HeaderIconsBox;
