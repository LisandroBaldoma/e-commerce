import { Cart } from "react-bootstrap-icons";

import Badge from "react-bootstrap/Badge";


function CardWidget() {
  return (
   
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Cart color="black" size={30} />
            <Badge bg="primary" pill>
              14
            </Badge>
          </div>
        </div>
      
  );
}

export default CardWidget;
