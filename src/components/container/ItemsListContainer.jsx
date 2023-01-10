import "../../scss/ItemsListContainer.scss";
import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import ItemDetails from "../pure/ItemDetails";

function ItemsListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const productId = 5;

  const getProducts = fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
      "content-type": "json",
    },
  });

  const getSingleProduct = fetch(
    `https://fakestoreapi.com/products/${productId}`,
    {
      method: "GET",
    }
  );

  useEffect(() => {
    getProducts
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getSingleProduct
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setSingleProduct(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card d-flex">
      <h1 className="ItemsListCustom">{greeting}</h1>

      <ItemsList products={products}></ItemsList>
      {/*<ItemDetails singleProduct={singleProduct}></ItemDetails>*/}
    </div>
  );
}

export default ItemsListContainer;
