import React from "react";
import { DropDownMenu, SearchInput } from "..";
import { Container, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import SearchMenuBoxStyles from "./SearchMenuBox.module.css";
const SearchMenuBox = (): JSX.Element => {
  return (
    <div className={`${SearchMenuBoxStyles.searchMenuContainer}`}>
      <Container fluid className="h-100 w-100 p-0">
        <Row className="h-100 align-items-center w-100 m-0 justify-md-content-evenly ">
          <Col className="h-100 d-none d-md-flex align-items-center p-0 w-auto">
            <DropDownMenu />
          </Col>
          <Col className="h-100 p-0">
            <SearchInput />
          </Col>
          <Col className="h-100 d-flex p-0 justify-content-end">
            <FiSearch className="h-100" color="#818181" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchMenuBox;
