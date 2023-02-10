import ListGroup from "react-bootstrap/ListGroup";

const ResuenCompraItems = ({ product }) => {
  console.log(product);
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex flex-row justify-content-between">
        <p className="fs-6 text fst-italic align-middle">Cantidad: {product.cantItems}</p>
        <p className="fs-6 text fst-italic align-middle">Producto: {product.name}</p>
        <p className="fs-6 text fst-italic align-middle">Precio: $ {product.price}</p>        
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ResuenCompraItems;
