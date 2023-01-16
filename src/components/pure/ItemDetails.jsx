import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";


export default function ItemDetails({ singleProduct }) {
  return (
    
    <Card key={singleProduct.id} className="d-flex flex-row p-4">
      <Card.Img
        variant="top"
        src={singleProduct.image}
        style={{ width:"15rem", height:"15rem" }}        
      />
      <Card.Body>
        <Card.Title>{singleProduct.title}</Card.Title>
        <Card.Text>{singleProduct.description}</Card.Text>
        <Card.Text>Price: ${singleProduct.price}</Card.Text>
        <ItemCount></ItemCount>                
      </Card.Body>      
    </Card>
    
    
  );
}
