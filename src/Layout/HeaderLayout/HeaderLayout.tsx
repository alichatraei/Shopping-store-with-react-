import React from "react";
import Logo from "../../Assets/Images/Logo.svg";
import { Container, Col, Row } from "react-bootstrap";
import HeaderLayoutStyles from "./HeaderLayout.module.css";
import { SearchMenuBox, HeaderIconsBox, OffCanvas } from "../../Components";

const HeaderLayout = () => {
  return (
    <header className={`w-100 ${HeaderLayoutStyles.header}`}>
      <Container fluid className="h-100">
        <Row className="h-100 justify-content-between align-items-center">
          <Col xs={4} md={2} lg={2} className="h-100">
            <img src={Logo} alt={Logo} title={Logo} className={HeaderLayoutStyles.logoImage} />
          </Col>
          <Col className="h-100 d-block d-md-none d-flex justify-content-end">
            <OffCanvas />
          </Col>
          <Col
            xs={8}
            sm={6}
            className="h-100 d-none d-md-flex align-items-center justify-content-center"
          >
            <SearchMenuBox />
          </Col>
          <Col
            md={2}
            className="d-none d-md-flex h-100 align-items-center justify-content-between"
          >
            <HeaderIconsBox />
          </Col>
        </Row>
        <Row className="h-100 w-100 mx-auto d-md-none d-flex pb-4">
          <Col xs={12} className=" d-flex
          justify-content-center
          h-100 align-items-center w-100 p-0">
            <SearchMenuBox />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderLayout;
