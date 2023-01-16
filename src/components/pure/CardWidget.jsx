import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";

function CardWidget() {
  return (
    <div className="fw-bold">
      <Cart color="black" size={30} />
      <Badge bg="primary" pill>
        14
      </Badge>
    </div>
  );
}

export default CardWidget;
