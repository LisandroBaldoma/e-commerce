import { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Table from "react-bootstrap/Table";
import CartTable from "./CartTable";
import { NavLink } from "react-router-dom";
import FormConfirmarCompra from "./FormConfirmarCompra";
import Button from "react-bootstrap/Button";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { BagPlus, CartX } from "react-bootstrap-icons";
import CartVacio from "./CartVacio";
import Swal from "sweetalert2";
import ResumenCompra from "./ResumenCompra";

const CartView = () => {
  const { cart, clearCart, clearAllCart } =
    useContext(cartContext);

  const db = getFirestore();

  const [order, setOrder] = useState({});
  const [orderConfirmed, setOrderCofirmed] = useState(false);
  const [compra, setCompra] = useState({});

  useEffect(() => {
    setOrder({
      buyer: {
        email: "",
        name: "",
        phone: "",
      },
      products: cart.map((product) => {
        const { name, price, stock, id, cantItems } = product;
        return { name, price, stock, id, cantItems };
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.cantItems, 0),
    });
  }, [cart]);

  const createOrder = (formData) => {
    const newOrder = {
      ...order,
      buyer: formData,
    };
    setCompra(newOrder);

    const querySnapshot = collection(db, "orders");
    addDoc(querySnapshot, newOrder)
      .then((response) => {        
        updateStockProducts();
        setOrderCofirmed(true);
      })
      .catch((error) => console.log(error));
  };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id);

      updateDoc(querySnapshot, { stock: product.stock - product.cantItems })
        .then(() => {
          Swal.fire({
            titleText: "Actualizando Stock en BD",
            icon: "success",
            iconColor: "#ac516b",
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch((error) => console.log(error));
    });
    clearCart();
  };

  if (cart.length === 0) {
    return orderConfirmed ? (
      <ResumenCompra compra={compra}></ResumenCompra>
    ) : (
      <CartVacio></CartVacio>
    );
  }

  return (
    <div className="container">
      <h2 className="text-primary text-center fs-1 m-4">Carrito de compra</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.map((product) => (
            <CartTable key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-around">
        <NavLink to="/productos">
          <Button variant="primary">
            Seguir Comprando <BagPlus size={20}></BagPlus>
          </Button>
        </NavLink>
        <FormConfirmarCompra createOrder={createOrder}></FormConfirmarCompra>
        <Button variant="primary" onClick={clearAllCart}>
          Vaciar Carrito <CartX size={20}></CartX>
        </Button>
      </div>
    </div>
  );
};

export default CartView;
