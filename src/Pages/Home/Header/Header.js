import React from "react";
import "./Header.css";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="header-bg">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home">
          <div className="d-flex justify-content-center">
            <h3>
              <span className="text-danger">Book</span>
              <span className="text-light fst-italic">Case</span>
            </h3>
            <InputGroup className="ms-3">
              <FormControl
                placeholder=" Search Books"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div>
              <span className="fs-2 me-2">🛒</span>
              Signed in as:{" "}
              <a href="#login" className="text-light">
                Mark Otto
              </a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
