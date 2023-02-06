import { useContext } from "react";
import { cartContext } from "../../context/cartContext";


const CartTable = ({ product }) => {
    const { removeItem } = useContext(cartContext);
  console.log(product);
  return (
    <tr>
      <td>
        {" "}
        <img src={`../img/products/${product.img}`} alt={product.id} style={{width:"50px", height:"50px"}}/>
      </td>
      <td>{product.name}</td>
      <td>{product.cantItems}</td>
      <td>{product.price}</td>
      <td>{product.cantItems * product.price }</td>
      <td>
        <button onClick={()=>removeItem(product.id)}>eliminar</button>
        <button>Editar</button>
      </td>
    </tr>
  );
};

export default CartTable;
