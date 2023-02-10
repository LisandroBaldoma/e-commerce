import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function items({ product }) {
  
  return (
    <Card key={product.id} style={{ width: "18rem" }} className="container shadow p-3 mb-5 bg-body rounded">
      <Card.Img
      className="shadow p-3 mb-5 bg-body rounded"
        variant="top"
        src={`/img/products/${product.img}`}
        style={{ width: "100%", height: "15rem", padding: "10px" }}
      />
      <Card.Body
        className="d-flex flex-column justify-content-evenly align-items-center"
        style={{ height: "200px" }}
      >
        <Card.Title>{product.nombre}</Card.Title>        
        <Card.Text>${product.precio}</Card.Text>
        <Link key={product.id} to={`/producto/${product.id}`}>
          <Button variant="primary">Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
