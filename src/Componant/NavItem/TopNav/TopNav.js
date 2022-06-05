import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import lc from "../../../Image/lc logo.png";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="lg"
        id="mainNav"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={lc} alt="" width={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>              
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav id="manus">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/article">Article</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/videos">Videos</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/leaderBoard">Leader Board</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
