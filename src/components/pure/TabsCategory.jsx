import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function TabsCategory() {
  return (
    <Nav variant="tabs" className="container justify-content-around mb-3 mt-3">
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/productos">
          Todos
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/categoria/Perro">
          Perros
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink
          className="nav-link"
          to="/categoria/Gato"
        >
          Gatos
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/categoria/Alimento">
          Alimentos
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/categoria/Otros">
          Otros
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default TabsCategory;
