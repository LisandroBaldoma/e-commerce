import React from "react";
import Items from "../pure/Items";

export default function ItemsList({products}) {
  return (
    <ul>
        {products.map((product) => (
            <Items product={product}></Items>
        ))}
    </ul>
  )
}
