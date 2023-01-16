import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function TabsCategory() {
  return (
    <Nav variant="tabs" className="justify-content-around mb-3 mt-3">
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/productos">
          Todos
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/productos/categoria/men's clothing">
          Hombre
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink
          className="nav-link"
          to="/productos/categoria/women's clothing"
        >
          Mujer
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/productos/categoria/jewelery">
          Joyeria
        </NavLink>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavLink className="nav-link" to="/productos/categoria/electronics">
          Electronica
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default TabsCategory;
