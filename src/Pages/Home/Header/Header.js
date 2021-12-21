import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <h3>
            <span className="text-danger">Book</span>
            <span className="text-dark fst-italic">Case</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div>
              <span className="fs-2 me-2">🛒</span>
              Signed in as: <a href="#login">Mark Otto</a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
