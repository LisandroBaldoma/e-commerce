import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function items({ product }) {
  return (
    
      <Card key={product.id} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100%", height: "13rem"}}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
  );
}
