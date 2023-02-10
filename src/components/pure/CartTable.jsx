import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ModificarCantidad from "./ModificarCantidad";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";

const CartTable = ({ product }) => {
  const { removeItem } = useContext(cartContext);

  return (
    <tr>
      <td className="align-middle">
        <img
          src={`../img/products/${product.img}`}
          alt={product.id}
          style={{ width: "50px", height: "50px" }}
        />
      </td>
      <td className="align-middle">{product.name}</td>
      <td className="align-middle">{product.cantItems}</td>
      <td className="align-middle">$ {product.price}</td>
      <td className="align-middle">$ {product.cantItems * product.price}</td>
      <td className=" d-flex justify-content-center p-4 gap-2">
        <Button
          type="submit"
          variant="primary"
          onClick={() => removeItem(product.id)}
          size="sm"
        >
          <Trash title="Eliminar" size={20}></Trash>
        </Button>
        <ModificarCantidad
          product={product.id}
          stock={product.stock}
        ></ModificarCantidad>
      </td>
    </tr>
  );
};

export default CartTable;
