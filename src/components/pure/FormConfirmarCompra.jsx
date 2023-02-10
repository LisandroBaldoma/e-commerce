import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { CreditCard, CheckCircle, XCircle } from "react-bootstrap-icons";

const FormConfirmarCompra = ({ createOrder }) => {
  const [validated, setValidated] = useState(false);
  const [formData, setformData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      createOrder(formData);
      handleClose();
    }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handledInput = (event) => {
    event.preventDefault();    
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Terminar Compra <CreditCard size={20}></CreditCard>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handledInput}
                />
                <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Debe competar el campo nombre
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  name="apellido"
                  type="text"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handledInput}
                />
                <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Debe competar el campo Apellido
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="xxxxxxx@xxxx.xxx"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={formData.email}
                    onChange={handledInput}
                  />
                  <Form.Control.Feedback type="invalid">
                    Formato incorrecto el mail debe se xxx@xxx.xxx
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  name="telefono"
                  type="phone"
                  placeholder="Telefono"
                  required
                  value={formData.telefono}
                  onChange={handledInput}
                />
                <Form.Control.Feedback type="invalid">
                  Debe competar el campo Telefono
                </Form.Control.Feedback>
                <Form.Control.Feedback>Correcto</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar <XCircle size={30} />
              </Button>
              <Button type="submit">
                Comprar <CheckCircle size={30} />
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormConfirmarCompra;
