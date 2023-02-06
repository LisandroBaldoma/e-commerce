import "../../scss/ItemsListContainer.scss";
import { useState, useEffect } from "react";
import ItemDetails from "../pure/ItemDetails";
import { useParams } from "react-router-dom"; //HOOKS QUE SE IMPORTA DESDE REACT ROUTERDOM
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemsDetailConteiner() {
  const [singleProduct, setSingleProduct] = useState([]);

  const { id } = useParams();

  const getSingleProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id)

    getDoc(querySnapshot)
    .then((response) => {
      console.log(response.data())
      setSingleProduct({id: response.id, ...response.data()})
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getSingleProduct()
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="p-2">
      <h2 className="text-center">Detalle de productos</h2>
      {<ItemDetails singleProduct={singleProduct}></ItemDetails>}
    </div>
  );
}

export default ItemsDetailConteiner;
