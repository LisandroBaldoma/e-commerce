import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { CartPlus } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import { cartContext } from "../../context/cartContext";


export default function ItemDetails({ singleProduct }) {
  const [cantItems, setCantItems] = useState(0);  
  const { addItem } = useContext(cartContext)
  console.log(singleProduct)
  

  return (    
    <Card key={singleProduct.id} className="d-flex flex-row p-4">
      <Card.Img
        variant="top"
        src={`/img/products/${singleProduct.img}`}
        style={{ width: "15rem", height: "15rem" }}
      />
      <Card.Body>
        <Card.Title>{singleProduct.nombre}</Card.Title>
        <Card.Text>{singleProduct.descripcion}</Card.Text>
        <Card.Text>Stock Disponible: {singleProduct.stock}</Card.Text>
        <Card.Text>Price: ${singleProduct.precio}</Card.Text>
        <ItemCount
          cantItems={cantItems}
          setCantItems={setCantItems}
          stockItem={singleProduct.stock}
        ></ItemCount>
        <Button onClick={()=> addItem(singleProduct, cantItems)} className="col-4 d-flex justify-content-evenly align-items-center" >
        <CartPlus></CartPlus>Agregar al carrito
      </Button>
      </Card.Body>
    </Card>
  );
}
