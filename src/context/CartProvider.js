import { cartContext } from "./cartContext";
import { useState } from "react";
import Swal from "sweetalert2";
import datos from "../datos/products.json";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantItems) => {
    console.log(item);
    let newCart;
    let product = cart.find((prod) => prod.id === item.id);

    if (product) {
      product.cantItems += cantItems;
      if (product.cantItems > product.stock) {
        alert("Se agrego el maximo de productos disponible a su carrito");
        product.cantItems = product.stock;
        return;
      }
      newCart = [...cart];
    } else {
      const newProduct = {
        id: item.id,
        name: item.nombre,
        price: item.precio,
        cantItems: cantItems,
        categoria: item.categoria,
        img: item.img,
        stock: item.stock,
      };
      newCart = [...cart, newProduct];
    }
    setCart(newCart);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      iconColor: "#ac516b",
      title: "Agregar al carrito",
      position: "center",
      showConfirmButton: false,
    });
  };

  const removeItem = (productId) => {
    Swal.fire({
      title: "Seguro que desea eliminar el producto?",
      text: "Si continua sera removido de su carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ac516b",
      cancelButtonColor: "#6c757d",
      cancelButtonText: "cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((product) => product.id !== productId));
        Swal.fire({
          titleText: "Producto Eliminado",
          icon: "success",
          iconColor: "#ac516b",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const editItemCant = (productId, cant) => {
    let newCart;
    let product = cart.find((prod) => prod.id === productId);
    product.cantItems = cant;
    newCart = [...cart];
    setCart(newCart);
    Swal.fire({
      titleText: "Cantidad Modificada",
      icon: "success",
      iconColor: "#ac516b",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const clearAllCart = () => {
    Swal.fire({
      title: "Seguro que desea eliminar todos los productos del carrito?",
      text: "Si continua seran eliminados de su carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ac516b",
      cancelButtonColor: "#6c757d",
      cancelButtonText: "cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          titleText: "Eliminando Carrito",
          icon: "success",
          iconColor: "#ac516b",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const clearCart = () => {
    setCart([]);
  };

  console.log(datos);
  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        clearAllCart,
        removeItem,
        editItemCant,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
