import React from "react";
import {
  FooterFeaturesContainer, FooterContactUs
  , FooterEnamadLogo
} from "../../Components";
import footerLayoutStyles from './footerLayoutStyles.module.css'
const FooterLayout = () => {
  return <footer className={footerLayoutStyles.footer}>
    <FooterFeaturesContainer />
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md my-5">
          <FooterContactUs />
        </div>
        <div className="col-12 col-sm-6 col-md my-5">
          <FooterEnamadLogo />
        </div>
      </div>
    </div>
  </footer>;
};

export default FooterLayout;
