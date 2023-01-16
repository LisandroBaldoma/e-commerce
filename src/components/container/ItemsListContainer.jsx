import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import { useParams } from "react-router-dom";

function ItemsListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [ProductsCategory, setProductsCategory] = useState([]);

  const { categoria } = useParams();  

  const getProducts = fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
      "content-type": "json",
    },
  });

  useEffect(() => {
    getProducts
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const productSelect = products.filter(
      (product) => product.category === categoria
    );
    setProductsCategory(productSelect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);

  return (
    <div>
      {categoria === undefined ? (
        <ItemsList products={products}></ItemsList>
      ) : (
        <ItemsList products={ProductsCategory}></ItemsList>
      )}
    </div>
  );
}

export default ItemsListContainer;
