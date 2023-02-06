import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Table from "react-bootstrap/Table";
import CartTable from "./CartTable";
import { NavLink } from "react-router-dom";

const CartView = () => {
  const { cart, clearCart } = useContext(cartContext);

  if(cart.length === 0){
    return( <div> No hay productos en el carrito</div> )
  }
  //console.log(cart);
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Imagen</th>                     
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <CartTable key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
      <NavLink to='/productos'>
      <button>Seguir Comprando</button>
      </NavLink>      
      <button>Confirmar Compra</button>
      <button onClick={ clearCart }>Vaciar Carrito</button>
    </div>
  );
};

export default CartView;
