import ResumenCompraItems from "./ResuenCompraItems";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const ResumenCompra = ({ compra }) => {
  
  return (
    <div className="container mt-3">
      <Card className="text-center">
        <Card.Header>Remito</Card.Header>
        <Card.Body>
          <Card.Title>Datos Facturacion</Card.Title>
          <Row>
            <Col>
              <Card.Text>
                Nombre:
                <p className="fs-6 text fst-italic align-middle fw-bold">
                  {compra.buyer.nombre}
                </p>
              </Card.Text>
            </Col>
            <Col>
              <Card.Text>
                Apellido:
                <p className="fs-6 text fst-italic align-middle fw-bold">
                  {compra.buyer.apellido}
                </p>
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                Email:
                <p className="fs-6 text fst-italic align-middle fw-bold">
                  {compra.buyer.email}
                </p>{" "}
              </Card.Text>
            </Col>
            <Col>
              <Card.Text>
                {" "}
                Telefono:
                <p className="fs-6 text fst-italic align-middle fw-bold">
                  {compra.buyer.telefono}
                </p>
              </Card.Text>
            </Col>
          </Row>
          <Card.Text>
            {compra.products.map((product) => (
              <ResumenCompraItems
                key={product.id}
                product={product}
              ></ResumenCompraItems>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Total: $ {compra.total}
        </Card.Footer>
      </Card>
      <div className="d-flex justify-content-center mt-3">
        <NavLink to="/">
          <Button variant="primary">Home</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ResumenCompra;
