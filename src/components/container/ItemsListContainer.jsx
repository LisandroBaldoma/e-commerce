import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import { useParams } from "react-router-dom";
import Spiner from "../pure/Spiner";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemsListContainer() {
  const [products, setProducts] = useState([]);
  //const [ProductsCategory, setProductsCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  console.log(categoria)

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products");

    if (categoria) {
      const newConfiguration = query(
        querySnapshot,
        where("mascota", "==", categoria)
      );
      getDocs(newConfiguration)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);  

  
  return (
    <div>
      {loading ? <Spiner /> : <ItemsList products={products} />}
    </div>
  );
}

export default ItemsListContainer;
