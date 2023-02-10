import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../img/logo.png";
import CardWidget from "./CardWidget";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo Veterinaria"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navCuston" id="responsive-navbar-nav">
          <Nav className="link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/fisioterapia">Fisioterapia</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/turnos">Turnos</NavLink>
            <NavLink to="/contactos">Contactos</NavLink>
            <NavLink to="/cart">
              <CardWidget className="widget" />
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
