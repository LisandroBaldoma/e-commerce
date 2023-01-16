import React from "react";
import Items from "../pure/Items";

export default function ItemsList({ products }) {
  return (
    <div className="container-fluid d-flex align-content-around flex-wrap gap-3 justify-content-center">    
      {products.map((product) => (
        <Items key={product.id} product={product} />
      ))}
    </div>
  );
}
