import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Pencil, CheckCircle, XCircle } from "react-bootstrap-icons";

const ModificarCantidad = ({ product, stock }) => {
  const { editItemCant } = useContext(cartContext);

  const [show, setShow] = useState(false);
  const [formData, setformData] = useState(1);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form)

    if (form.checkValidity()) {
      editItemCant(product, formData);
      handleClose();
      setformData(1)
    }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handledInput = (event) => {
    event.preventDefault();
    if(event.target.value < 0 || event.target.value >stock){
        alert(`La cantidad debe ser mayor a 0 y menor que ${stock}`)
        setformData(1)
    }else{
      setformData(event.target.value);      
    }    
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
        <Pencil size={20}></Pencil>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Cantidad</Modal.Title>
        </Modal.Header>
        <Form validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">            
            <InputGroup hasValidation>
              <Form.Control
                required
                name="cantidad"
                type="number"
                placeholder="Ingrese Cantidad"
                value={formData}
                onChange={handledInput}
              />
              <Form.Control.Feedback>Correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                ingrese un numero
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancelar <XCircle size={30}/>            
            </Button>
            <Button type="submit" variant="primary">
            Guardar <CheckCircle size={30}/>             
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModificarCantidad;
