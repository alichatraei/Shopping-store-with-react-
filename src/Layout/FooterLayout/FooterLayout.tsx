import React from "react";
import {
  FooterFeaturesContainer, FooterContactUs
  , FooterEnamadLogo, FooterOwnerInformation

} from "../../Components";
import footerLayoutStyles from './footerLayoutStyles.module.css'
const FooterLayout = () => {
  return <footer className={footerLayoutStyles.footer}>
    <FooterFeaturesContainer />
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md my-5 d-flex flex-column
        justify-content-center align-items-center">
          <FooterContactUs />
        </div>
        <div className="col-12 col-sm-6 col-md my-5">
          <FooterEnamadLogo />
        </div>
      </div>
      <hr className={footerLayoutStyles.hrDivider} />
      <FooterOwnerInformation />
    </div>
  </footer>;
};

export default FooterLayout;
