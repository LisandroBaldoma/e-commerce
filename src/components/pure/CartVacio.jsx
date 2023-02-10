import { Shop } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "../../scss/ItemsListContainer.scss";

const CartVacio = () => {
  return (
    <NavLink to="/productos" className="TextDecoration">
      <div className="container d-flex flex-column align-items-center CursorPointer border p-5 mt-5">
        <h2 className="text-primary"> Carrito Vacio</h2>
        <Shop color="cornflowerblue" size={250}></Shop>
        <h4 className="text-primary p-4">
          Encontra todo lo que necesites para tus mascotas...
        </h4>
      </div>
    </NavLink>
  );
};

export default CartVacio;
