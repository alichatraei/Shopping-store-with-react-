import React from "react";
import Logo from "../../Assets/Images/Logo.svg";
import { Container, Col, Row } from "react-bootstrap";
import HeaderLayoutStyles from "./HeaderLayout.module.css";
import { SearchMenuBox } from "../../Components";
import heart from "../../Assets/Icons/heart.svg";
import shoppingCart from "../../Assets/Icons/shopping-cart.svg";
import userProfile from "../../Assets/Icons/user.svg";
const HeaderLayout = () => {
  return (
    <header className={HeaderLayoutStyles.header}>
      <Container fluid className="h-100">
        <Row className="h-100 justify-content-between">
          <Col xs={12} md={2} lg={2} className="h-100">
            <img src={Logo} alt={Logo} title={Logo} className="h-100" />
          </Col>
          <Col
            xs={12}
            sm={6}
            className="h-100 d-flex align-items-center justify-content-center"
          >
            <SearchMenuBox />
          </Col>
          <Col
            md={2}
            className="d-none d-md-flex h-100 align-items-center justify-content-between"
          >
            <img src={userProfile} alt="userProfile" className="h-50" />
            <img src={heart} alt="heart" className="h-50" />
            <img src={shoppingCart} alt="shoppingCart" className="h-50" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderLayout;
