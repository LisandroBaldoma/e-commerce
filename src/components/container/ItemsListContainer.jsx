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
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const queryBase = collection(db, "products");
    console.log(categoria)

    const querySnapshot = categoria === "Alimento"
      ? query(queryBase, where("categoria", "==", categoria)) 
      : categoria === "Otros" ? query(queryBase, where("categoria", "==", categoria)) 
      : categoria ? query(queryBase, where("mascota", "==", categoria))
      : queryBase;
    

    getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(data);
        setLoading(false);        
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);

  return <div>{loading ? <Spiner /> : <ItemsList products={products} />}</div>;
}

export default ItemsListContainer;
