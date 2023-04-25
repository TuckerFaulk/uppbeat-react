import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/uppbeat_logo.jpg";
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Btn.module.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className={styles.navbar} expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-center">
              <Nav.Link className={btnStyles.btn}>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link className={btnStyles.btn}>
                <i className="fas fa-sign-in-alt"></i> Sign Up
              </Nav.Link>
              <Nav.Link className={btnStyles.btn}>
                <i className="fas fa-user-plus"></i> Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
