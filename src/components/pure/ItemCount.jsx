import React, { useState } from "react";
import { Plus, Dash, CartPlus } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";

const ItemCount = () => {
  const [cantItems, setCantItems] = useState(0);
  const [stockItem, setStockItem] = useState(5);

  const decrementarItems = () => {
    if (cantItems === 0) {
      alert("Debe seleccionar al menos 1 unidad");
      return;
    }
    setCantItems(cantItems - 1);
  };
  const IncrementarItems = () => {
    if (cantItems === stockItem) {
      alert("La cantidad supera el stock disponible");
      return;
    } else {
      setCantItems(cantItems + 1);
    }
  };

  return (
    <div className="border border-primary d-flex flex-column align-items-center">
      <h2>Control de Stock</h2>
      <div className="d-flex m-3 gap-3">
        <Button onClick={decrementarItems}>
          <Dash></Dash>
        </Button>
        <span>{cantItems}</span>
        <Button onClick={IncrementarItems}>
          <Plus></Plus>
        </Button>
      </div>
      <Button className="col-4 m-3 d-flex justify-content-evenly align-items-center ">
        <CartPlus></CartPlus>Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
