import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function items({ product }) {
  //(product.category)
  return (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`/img/products/${product.img}`}
        style={{ width: "100%", height: "15rem", padding: "10px" }}
      />
      <Card.Body
        className="d-flex flex-column justify-content-evenly align-items-center"
        style={{ height: "200px" }}
      >
        <Card.Title>{product.nombre}</Card.Title>
        {/*<Card.Text>{product.description}</Card.Text>*/}
        <Card.Text>${product.precio}</Card.Text>
        <Link key={product.id} to={`/producto/${product.id}`}>
          <Button variant="primary">Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
