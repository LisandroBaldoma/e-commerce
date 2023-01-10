import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

export default function ItemDetails({ singleProduct }) {
  return (
    <Card key={singleProduct.id} style={{ width: "40rem" }}>
      <Card.Img
        variant="top"
        src={singleProduct.image}
        style={{ width: "100%", height: "13rem" }}
      />
      <Card.Body>
        <Card.Title>{singleProduct.title}</Card.Title>
        <Card.Text>{singleProduct.description}</Card.Text>
        <Card.Text>${singleProduct.price}</Card.Text>
        <ItemCount></ItemCount>
      </Card.Body>
    </Card>
  );
}
