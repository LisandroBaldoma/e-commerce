import "../../scss/ItemsListContainer.scss";
import { useState, useEffect } from "react";
import ItemDetails from "../pure/ItemDetails";
import { useParams } from "react-router-dom"; //HOOKS QUE SE IMPORTA DESDE REACT ROUTERDOM

function ItemsDetailConteiner() {
  const [singleProduct, setSingleProduct] = useState([]);

  const { id } = useParams();

  const getSingleProduct = fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
  });

  useEffect(() => {
    getSingleProduct
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setSingleProduct(json);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-2">
      <h2 className="text-center">Detalle de productos</h2>
      {<ItemDetails singleProduct={singleProduct}></ItemDetails>}
    </div>
  );
}

export default ItemsDetailConteiner;
