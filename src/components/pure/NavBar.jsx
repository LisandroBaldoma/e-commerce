import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardWidget from "./CardWidget";
import logo from "../../img/logo.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo Veterinaria"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Tecnicas" id="collasible-nav-dropdown">
              <NavDropdown
                title="Terapias Pasivas"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action2">
                  Criotermoterapia
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Electroestimulación
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Ultrasonidos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Láser</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Fototerapia</NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Magnetoterapia
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">Masajes</NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Cinesiterapia pasiva
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Terapias Activas"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action10">
                  Cinesiterapia activa
                </NavDropdown.Item>
                <NavDropdown.Item href="#action11">
                  Hidroterapia
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown
                title="Indumentaria y Accesorios"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action10">
                  Cinesiterapia activa
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Camas y Cuchas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action10">
                  Cinesiterapia activa
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Alimentos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action10">
                  Cinesiterapia activa
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Juguetes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action10">
                  Cinesiterapia activa
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Viajes y Paseos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action10">
                  Bolso De Transporte Para Mascotas
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Estetica e Higiene"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action10">
                  Limpia Pata Para Mascotas
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#action15">Turnos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <CardWidget />
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

export default NavBar;
