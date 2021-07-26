import React from "react";
import Logo from "../../Assets/Images/Logo.svg";
import { Container, Col, Row } from "react-bootstrap";
import HeaderLayoutStyles from "./HeaderLayout.module.css";
const HeaderLayout = () => {
  return (
    <header className={HeaderLayoutStyles.header}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="h-100">
            <img src={Logo} alt={Logo} title={Logo} className="h-100" />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderLayout;
