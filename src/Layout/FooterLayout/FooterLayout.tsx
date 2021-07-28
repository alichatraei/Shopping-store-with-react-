import React from "react";
import { FooterFeaturesContainer } from "../../Components";
import footerLayoutStyles from './footerLayoutStyles.module.css'
const FooterLayout = () => {
  return <footer className={footerLayoutStyles.footer}>
    <FooterFeaturesContainer />
  </footer>;
};

export default FooterLayout;
