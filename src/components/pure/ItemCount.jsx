import { Plus, Dash } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

const ItemCount = ({cantItems, setCantItems, stockItem}) => { 

  const decrementarItems = () => {
    if (cantItems <= 1) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Cantidad minima 1 unidad',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setCantItems(cantItems - 1);
  };
  const IncrementarItems = () => {
    if (cantItems === stockItem) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Supera el stock disponible',
        showConfirmButton: false,
        timer: 1500
      })
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
