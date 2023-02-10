import { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { CartPlus } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import { cartContext } from "../../context/cartContext";

export default function ItemDetails({ singleProduct }) {
  const [cantItems, setCantItems] = useState(1);
  const { addItem } = useContext(cartContext);
  
  return (
    <Card key={singleProduct.id} className="container d-flex flex-row p-4 shadow p-3 mb-5 bg-body rounded">
      <Card.Img
      className="shadow p-3 mb-5 bg-body rounded"        
        variant="top"
        src={`/img/products/${singleProduct.img}`}
        style={{ width: "15rem", height: "15rem" }}
      />
      <Card.Body>
        <Card.Title>{singleProduct.nombre}</Card.Title>
        <Card.Text>{singleProduct.descripcion}</Card.Text>
        <Card.Text>Stock Disponible: {singleProduct.stock}</Card.Text>
        <Card.Text>Price: ${singleProduct.precio}</Card.Text>
        <div className="d-flex flex-column align-items-center">
          <ItemCount
            cantItems={cantItems}
            setCantItems={setCantItems}
            stockItem={singleProduct.stock}
          ></ItemCount>
          <Button
            onClick={() => addItem(singleProduct, cantItems)}
            className="col-4 d-flex justify-content-evenly align-items-center"
          >
            <CartPlus></CartPlus>Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
