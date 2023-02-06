
import { Plus, Dash, CartPlus } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";

const ItemCount = ({cantItems, setCantItems, stockItem}) => { 

  const decrementarItems = () => {
    if (cantItems === 0) {
      alert("Debe seleccionar al menos 1 unidad");
      return;
    }
    setCantItems(cantItems - 1);
  };
  const IncrementarItems = () => {
    if (cantItems === stockItem) {
      alert("La cantidad supera el stock disponible");
      return;
    } else {
      setCantItems(cantItems + 1);
    }
  };
  

  return (
    <div className="d-flex flex-column align-items-center">      
      <div className="d-flex m-1 gap-3">
        <Button onClick={decrementarItems}>
          <Dash></Dash>
        </Button>
        <span>{cantItems}</span>
        <Button onClick={IncrementarItems}>
          <Plus></Plus>
        </Button>
      </div>     
    </div>
  );
};

export default ItemCount;
