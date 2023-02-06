import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";


function CardWidget() {

const { cart } = useContext(cartContext)
  return (
    <div className="fw-bold">
      <Cart color="black" size={30} />
      <Badge bg="primary" pill>
        {cart.length}
      </Badge>
    </div>
  );
}

export default CardWidget;


//TODO CREAR FUNCION PARA ACTUALIZAR LA CANTIDAD DE ITMES QUE APARECEN EN EL CARRITO DEL NAVBAR Y NO SOLO MUESTRE LA CANTIDAD DE ELEMENTOS DEL ARRAY CART