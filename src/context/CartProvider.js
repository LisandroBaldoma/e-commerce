import { cartContext } from "./cartContext";
import { useState } from "react";
//import Productos from "../pages/Productos";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantItems) => {
    let newCart;
    let product = cart.find((prod) => prod.id === item.id);
    if (product) {
      product.cantItems += cantItems;
      // TODO MEJORAR EL CONTROL DE STOCK SI BIEN NO TE DEJA COMPRAR MAS DEL STOCK, SI TE LO ESTA SUMANDO Y SE MUESTRA EN EL CARTTABLE
      if(product.cantItems > product.stock){
        alert("Supera el stock disponible solo puede comprar")
        return
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
        stock: item.stock
      };
      newCart = [...cart, newProduct];
      //console.log(cart);
    }
    setCart(newCart);
  };

  const removeItem = (productId) => {
    console.log(productId);
    setCart(cart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addItem, clearCart, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

// TODO addItems

// TODO removedItems
// filtrar por id parar eliminar del array cart

// TODO clearAll

// TODO isInCart
