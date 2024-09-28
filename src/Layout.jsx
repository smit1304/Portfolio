import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Layout() {
  return (
    <>
      {/* <h1>
            Smit Patel 
        </h1> */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">Smit Patel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/"> Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about"> About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/services"> Services</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/experience"> Experience</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link to="/education"> Education</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link to="/projects"> Projects</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link to="/contact"> Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
